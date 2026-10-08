import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function DressCode() {
  const colors = [
    { name: 'Кызгылт / Soft Pink', hex: '#F48FB1' },
    { name: 'Беж / Soft Beige', hex: '#E6D2B5' },
    { name: 'Алтын каймак / Cream Ivory', hex: '#FFF8E7' },
    { name: 'Розовый золото / Rose Gold', hex: '#E8B4B8' },
    { name: 'Этно Ак / Pearl White', hex: '#FAFAFA' },
  ];

  return (
    <section className="py-16 px-4 bg-[#FFF5F7] relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">

        {/* Header with user's elegant divider ornament */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-4xl font-serif-custom text-slate-800">
            Дресс-код
          </h2>

          {/* User's authentic ornament divider */}
          <div className="w-56 sm:w-72 mt-3 pointer-events-none">
            <img
              src="/ornament-1.webp"
              alt="Кыргыз оюм"
              className="w-full h-auto object-contain drop-shadow-xs"
            />
          </div>
        </motion.div>

        {/* Main Card with Clean Elegant Ethno Styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-pink-100 relative overflow-hidden"
        >
          {/* Top ornamental header */}
          <div className="w-48 sm:w-64 mx-auto mb-4 pointer-events-none opacity-90">
            <img
              src="/ornament-5.webp"
              alt="Оюм декор"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Ethno Style Badge */}
          <div className="relative inline-flex items-center gap-3 px-8 py-2.5 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full text-base sm:text-lg font-serif-custom font-semibold tracking-widest uppercase mb-6 shadow-md border border-pink-200">
            <span>«ЭТНО стиль»</span>
          </div>

          <p className="text-slate-600 font-light leading-relaxed max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Майрамыбызга кыргыз улуттук оюм-чиймелери, заманбап этно элементтери же жумшак пастелдик түстөрдөгү кооз кийимдер менен келишиңиздерди суранабыз.
          </p>

          {/* Middle ornamental divider */}
          <div className="w-40 sm:w-56 mx-auto mb-8 pointer-events-none opacity-80">
            <img
              src="/ornament-3.webp"
              alt="Оюм"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Color Palette Swatches */}
          <div className="mb-6 relative z-10">
            <span className="text-xs uppercase tracking-widest text-slate-400 block mb-4 font-medium">
              Сунушталган түстөр палитрасы
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {colors.map((c, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md flex items-center justify-center transition-transform"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="text-[11px] text-slate-500 font-medium">
                    {c.name.split('/')[0]}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom ornament flourish */}
          <div className="w-44 sm:w-60 mx-auto my-6 pointer-events-none opacity-80">
            <img
              src="/ornament-7.webp"
              alt="Оюм"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Ethno Tip Note */}
          <div className="pt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-pink-700 bg-pink-50/60 p-3.5 rounded-2xl border border-pink-100">
            <Sparkles size={16} className="text-pink-500 shrink-0" />
            <span>Сиздердин улуттук этно образыңыздар майрамыбызга өзгөчө кыргызча көрк жана салтанат тартуулайт!</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
