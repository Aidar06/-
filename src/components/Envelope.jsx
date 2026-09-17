import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';

export default function Envelope({ isOpen, onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (!isOpening && !isOpen) {
      setIsOpening(true);

      // Trigger festive pink & gold confetti blast
      confetti({
        particleCount: 100,
        spread: 85,
        origin: { y: 0.5 },
        colors: ['#F48FB1', '#F06292', '#FFD54F', '#FFFFFF', '#E91E63']
      });

      // After slide apart (0.6s) + glow hold (0.4s) + smooth fade (0.6s), notify parent
      setTimeout(() => {
        onOpen();
      }, 1400);
    }
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden select-none cursor-pointer p-0 sm:p-4"
          onClick={handleOpen}
        >
          {/* 1. DELICATE SOFT PINK-WHITE AMBIENT GLOW OVERLAY */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={
              isOpening
                ? { opacity: [1, 1, 0] }
                : { opacity: 1 }
            }
            transition={
              isOpening
                ? {
                    duration: 1.4,
                    times: [0, 0.45, 1],
                    ease: "easeOut",
                  }
                : {}
            }
            className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, #FFFFFF 0%, #FFF0F5 50%, #FCE4EC 100%)',
            }}
          >
            {/* Soft delicate white-pink light beam */}
            <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-white/90 via-pink-100/40 to-pink-200/30 blur-2xl" />
          </motion.div>

          {/* Background subtle sparkles before tap */}
          {!isOpening && (
            <div className="fixed inset-0 z-15 pointer-events-none">
              <div className="absolute top-10 left-8 text-pink-300 animate-sparkle">
                <Sparkles size={24} />
              </div>
              <div className="absolute bottom-12 right-8 text-pink-400 animate-sparkle" style={{ animationDelay: '1s' }}>
                <Sparkles size={28} />
              </div>
              <div className="absolute top-1/3 right-6 text-rose-300 animate-float">
                <Heart size={20} fill="#F48FB1" opacity={0.4} />
              </div>
            </div>
          )}

          {/* Envelope Outer Card Container */}
          <div className="relative z-20 w-full max-w-md h-full sm:h-[92vh] aspect-[9/16] sm:rounded-3xl shadow-2xl overflow-hidden border-0 sm:border-2 border-pink-100/80">

            {/* Photo 2 (от2) - BASE BACKGROUND PHOTO (Slides DOWN by 105vh in 0.6s without fading early) */}
            <motion.div
              initial={{ y: 0 }}
              animate={isOpening ? { y: '105vh' } : { y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute inset-0 w-full h-full z-10"
            >
              <img
                src="/envelope-bg.jpg"
                alt="Envelope Base"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Photo 1 (от1) - TOP FLAP WITH SEAL PHOTO (Slides UP by 105vh in 0.6s without fading early) */}
            <motion.div
              initial={{ y: 0 }}
              animate={isOpening ? { y: '-105vh' } : { y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            >
              <img
                src="/envelope-top.png"
                alt="Envelope Top Flap"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Center Call-to-Action Button */}
            {!isOpening && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-12 left-0 right-0 z-30 flex flex-col items-center gap-2.5 px-6 text-center"
              >
                <motion.button
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-full max-w-xs py-3.5 px-6 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-pink-200 text-pink-700 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white transition-all active:scale-95"
                >
                  <Heart size={18} className="fill-pink-500 text-pink-500 animate-pulse" />
                  <span>Чакырууну ачуу үчүн басыңыз</span>
                </motion.button>
                <p className="text-[11px] text-pink-700/80 font-medium tracking-wide drop-shadow-xs">
                  Дария 1 жаш • Тушоо той
                </p>
              </motion.div>
            )}

          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
