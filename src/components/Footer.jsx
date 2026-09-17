import React from 'react';
import { Heart, ChevronUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 bg-gradient-to-b from-[#FFF5F7] to-[#FCE4EC]/50 border-t border-pink-100 text-center relative">
      <div className="max-w-xl mx-auto flex flex-col items-center">

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white shadow-md border border-pink-200 text-pink-500 flex items-center justify-center mb-6 hover:bg-pink-50 transition-all active:scale-95"
          title="Өйдөгө чыгуу"
        >
          <ChevronUp size={20} />
        </button>

        <div className="flex items-center gap-2 text-pink-600 font-serif-custom text-2xl font-bold mb-2">
          <span>Дария 1 жаш</span>
          <Sparkles size={16} className="text-pink-400" />
        </div>

        <p className="text-xs text-slate-500 font-light max-w-sm mx-auto mb-6">
          "Ак жолуң ачык болсун, Дария кызыбыз!"
        </p>

        <div className="w-16 h-px bg-pink-300 mb-6" />

        <p className="text-[11px] text-slate-400 uppercase tracking-widest flex items-center gap-1">
          <span>Урматтоо менен: Алтынбек & Джамиля</span>
          <Heart size={10} className="fill-pink-400 text-pink-400" />
        </p>

      </div>
    </footer>
  );
}
