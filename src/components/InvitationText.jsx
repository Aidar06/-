import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Quote, Sparkles } from 'lucide-react';

export default function InvitationText() {
  const [activeTab, setActiveTab] = useState(0);

  const textVariants = [
    {
      title: "Негизги чакыруу",
      greeting: "Урматтуу жана ардактуу коноктор!",
      body: "Сиздерди кызыбыз Дариянын ар бир кадамы берекелүү, жолу ачык, келечеги кең болсун деген ак тилек менен өтө турган тушоо тоюбуздун төрүнөн орун алып, баталарыңыздарды берип, кубанычыбызды тең бөлүшүп кетүүгө чакырабыз!"
    },
    {
      title: "Жүрөк сөзү",
      greeting: "Урматтуу меймандар!",
      body: "Биздин үй-бүлөбүздүн көркү, жүрөгүбүздүн сүйүнчүсү болгон кызыбыз Дариянын ак жолго кадам таштаган маанилүү күнү — Тушоо той салтанатына арналган ак дасторконубузга кут келип, катышып кетиңиздер! Ак жолун ачып, бата берип, ак тилек айтып кетиңиздер!"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* LARGE FLOATING BACKGROUND DECORATIVE ILLUSTRATION (dariya-bear.webp - 100% Transparent PNG with intact eyes) */}
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute -left-6 top-10 sm:left-4 sm:top-12 w-60 sm:w-80 h-auto pointer-events-none z-0 opacity-40 mix-blend-multiply"
      >
        <img
          src="/dariya-bear.webp"
          alt="Дария декор"
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </motion.div>

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-50 border border-pink-200 text-pink-500 mb-3 shadow-xs">
            <Quote size={20} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-custom text-slate-800">
            Чакыруу сөзү
          </h2>
          <div className="w-16 h-0.5 bg-pink-300 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8 gap-2">
          {textVariants.map((variant, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === idx
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'bg-pink-50 text-pink-700 hover:bg-pink-100 border border-pink-200/60'
              }`}
            >
              {variant.title}
            </button>
          ))}
        </div>

        {/* Card Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-b from-[#FFF5F7] to-white p-8 sm:p-12 rounded-3xl shadow-xl border border-pink-100 relative text-center"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute top-4 left-4 text-pink-200 pointer-events-none">
            <Sparkles size={20} />
          </div>
          <div className="absolute bottom-4 right-4 text-pink-200 pointer-events-none">
            <Sparkles size={20} />
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-custom text-pink-600 mb-6 font-semibold">
            {textVariants[activeTab].greeting}
          </h3>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed sm:leading-loose font-light italic max-w-xl mx-auto mb-8">
            "{textVariants[activeTab].body}"
          </p>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mb-6" />

          {/* Hosts / Parents */}
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-slate-400 mb-1">
              Сиздерди урматтоо менен
            </span>
            <div className="text-xl sm:text-2xl font-serif-custom text-slate-800 font-bold flex items-center gap-2">
              <span>Алтынбек</span>
              <Heart size={14} className="fill-pink-500 text-pink-500" />
              <span>Джамиля</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
