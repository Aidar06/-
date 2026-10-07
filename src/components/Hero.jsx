import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Crown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-12 pb-16 px-4 text-center overflow-hidden bg-gradient-to-b from-[#FFF0F5] via-[#FFF5F8] to-[#FCE4EC]/40">
      {/* Background ambient decor */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* LARGE FLOATING BACKGROUND DECORATIVE ILLUSTRATION (dariya-butterfly.webp - 100% Transparent PNG with intact eyes) */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute -right-8 bottom-10 sm:right-10 sm:bottom-12 w-64 sm:w-96 h-auto pointer-events-none z-0 opacity-45 mix-blend-multiply"
      >
        <img
          src="/dariya-butterfly.webp"
          alt="Дария декор"
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </motion.div>

      {/* Floating Sparkles */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-12 left-6 sm:left-16 text-pink-300 pointer-events-none z-10"
      >
        <Sparkles size={32} />
      </motion.div>

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Crown Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-pink-200 flex items-center justify-center text-pink-500 mb-6"
        >
          <Crown size={28} className="fill-pink-100" />
        </motion.div>

        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-pink-100/80 border border-pink-200/60 text-pink-700 text-xs sm:text-sm tracking-widest uppercase font-medium mb-4"
        >
          <Sparkles size={14} className="text-pink-400" />
          <span>ТУШОО ТОЙГО ЧАКЫРУУ</span>
          <Sparkles size={14} className="text-pink-400" />
        </motion.div>

        {/* Girl's Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-5xl sm:text-7xl font-serif-custom text-slate-800 tracking-wide font-normal mb-3"
        >
          Дария
        </motion.h1>

        {/* Age Ribbon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl font-script text-pink-600 mb-8"
        >
          1 жаш салтанаты
        </motion.div>

        {/* Restored Clean Flower Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-48 h-48 sm:w-60 sm:h-60 mb-8"
        >
          {/* Animated Glowing Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-300 via-rose-200 to-amber-200 animate-spin opacity-70 blur-xs" style={{ animationDuration: '15s' }} />

          {/* Frame Container */}
          <div className="relative w-full h-full p-2 bg-white rounded-full shadow-xl border-4 border-pink-100/80 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full rounded-full bg-gradient-to-b from-pink-100 to-rose-50 flex flex-col items-center justify-center text-pink-400 p-4 relative overflow-hidden">
              <div className="text-5xl mb-2 animate-bounce" style={{ animationDuration: '3s' }}>🌸</div>
              <span className="text-xs font-serif-custom tracking-wider text-pink-600 font-semibold uppercase">Баланын тушоосу</span>
              <span className="text-[10px] text-pink-400 mt-1">15.11.2026</span>
            </div>
          </div>

          {/* Floating Ribbon Accent */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-pink-500 to-rose-400 text-white text-xs font-medium rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
            <Heart size={12} className="fill-white" />
            <span>Ак жол, таза кадам!</span>
          </div>
        </motion.div>

        {/* Date & Location Brief */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm sm:text-base text-slate-600 font-light"
        >
          <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-pink-100 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-pink-400" />
            <span>15 Ноябрь 2026</span>
          </div>
          <div className="hidden sm:block text-pink-300">•</div>
          <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-pink-100 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-pink-400" />
            <span>Саат: 15:00</span>
          </div>
        </motion.div>
      </div>

      {/* Soft Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
