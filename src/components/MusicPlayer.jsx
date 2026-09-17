import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ isAutoPlayTriggered }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.warn('Audio play blocked:', e));
    }
  };

  useEffect(() => {
    if (isAutoPlayTriggered && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.warn('Autoplay prevented:', e));
    }
  }, [isAutoPlayTriggered]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* Hidden HTML5 Audio Element playing music.mp3 */}
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

      {/* Playing indicator pill */}
      {isPlaying && (
        <div className="hidden sm:flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-pink-200 shadow-md text-xs text-pink-600 font-medium">
          <Music size={13} className="animate-spin" style={{ animationDuration: '4s' }} />
          <span>«Дария» 🎶</span>
          <div className="flex items-end gap-0.5 h-3 ml-1">
            <span className="w-0.5 h-full bg-pink-400 animate-pulse" />
            <span className="w-0.5 h-2/3 bg-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <span className="w-0.5 h-4/5 bg-pink-300 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      )}

      {/* Floating Audio Button */}
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 active:scale-90 ${
          isPlaying
            ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white ring-4 ring-pink-200 animate-pulse'
            : 'bg-white text-slate-600 border border-pink-200 hover:bg-pink-50'
        }`}
        title={isPlaying ? 'Музыканы өчүрүү' : 'Музыканы күйгүзүү'}
      >
        {isPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
      </button>
    </div>
  );
}
