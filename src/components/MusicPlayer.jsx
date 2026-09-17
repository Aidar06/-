import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer({ isAutoPlayTriggered }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  // Soft gentle pentatonic lullaby notes using Web Audio API synthesizer
  const playSoftMelody = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const notes = [
        261.63, 293.66, 329.63, 392.00, 440.00, // C4, D4, E4, G4, A4
        523.25, 587.33, 659.25, 783.99          // C5, D5, E5, G5
      ];

      let noteIdx = 0;
      timerRef.current = setInterval(() => {
        if (!audioCtxRef.current) return;
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();

        // Random sweet note selection for infinite soft ambient waltz
        const freq = notes[Math.floor(Math.random() * notes.length)];
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);

        gain.gain.setValueAtTime(0.001, audioCtxRef.current.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, audioCtxRef.current.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 1.8);

        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);

        osc.start();
        osc.stop(audioCtxRef.current.currentTime + 1.9);
      }, 700);

      setIsPlaying(true);
    } catch (e) {
      console.warn("Audio Context init error:", e);
    }
  };

  const stopSoftMelody = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopSoftMelody();
    } else {
      playSoftMelody();
    }
  };

  useEffect(() => {
    if (isAutoPlayTriggered && !isPlaying) {
      playSoftMelody();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlayTriggered]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* Sound wave visualizer badge */}
      {isPlaying && (
        <div className="hidden sm:flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-pink-200 shadow-md text-xs text-pink-600 font-medium">
          <Music size={12} className="animate-spin" style={{ animationDuration: '4s' }} />
          <span>Музыка ойноп жатат</span>
          <div className="flex items-end gap-0.5 h-3 ml-1">
            <span className="w-0.5 h-full bg-pink-400 animate-pulse" />
            <span className="w-0.5 h-2/3 bg-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <span className="w-0.5 h-4/5 bg-pink-300 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 active:scale-90 ${
          isPlaying
            ? 'bg-pink-500 text-white ring-4 ring-pink-200 animate-pulse'
            : 'bg-white text-slate-600 border border-pink-200 hover:bg-pink-50'
        }`}
        title={isPlaying ? 'Музыканы өчүрүү' : 'Музыканы күйгүзүү'}
      >
        {isPlaying ? <Volume2 size={22} /> : <VolumeX size={22} />}
      </button>
    </div>
  );
}
