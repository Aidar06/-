import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Sparkles, Check } from 'lucide-react';

export default function DressCode() {
  const colors = [
    { name: 'Кызгылт / Soft Pink', hex: '#F48FB1' },
    { name: 'Беж / Soft Beige', hex: '#E6D2B5' },
    { name: 'Алтын каймак / Cream Ivory', hex: '#FFF8E7' },
    { name: 'Розовый золото / Rose Gold', hex: '#E8B4B8' },
    { name: 'Этно Ак / Pearl White', hex: '#FAFAFA' },
  ];

  return (
    <section className="py-16 px-4 bg-[#FFF5F7] relative">
      <div className="max-w-3xl mx-auto text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-pink-200 text-pink-500 mb-3 shadow-xs">
            <Shirt size={20} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-custom text-slate-800">
            Дресс-код
          </h2>
          <div className="w-16 h-0.5 bg-pink-300 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-pink-100 relative overflow-hidden"
        >
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-full text-base sm:text-lg font-serif-custom font-semibold tracking-wider uppercase mb-6 shadow-md">
            "ЭТНО стиль"
          </div>

          <p className="text-slate-600 font-light leading-relaxed max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Майрамыбызга кыргыз улуттук оюм-чиймелери, этно элементтери же жумшак пастелдик түстөгү кооз кийимдер менен келишиңиздерди суранабыз.
          </p>

          {/* Color Palette Swatches */}
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-slate-400 block mb-4">
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

          {/* Tip Note */}
          <div className="mt-8 pt-6 border-t border-pink-100 flex items-center justify-center gap-2 text-xs text-pink-700 bg-pink-50/60 p-3 rounded-2xl">
            <Sparkles size={14} className="text-pink-500 shrink-0" />
            <span>Сиздин катышууңуз жана кооз этно кийимиңиз тойго өзгөчө көрк берет!</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
