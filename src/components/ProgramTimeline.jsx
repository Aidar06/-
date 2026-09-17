import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Scissors, Utensils, Music } from 'lucide-react';

export default function ProgramTimeline() {
  const schedule = [
    {
      time: '15:00',
      title: 'Коноктордун жыйналуусу',
      description: 'Ардактуу меймандарды салтанаттуу тосуп алуу жана ак дасторконго чакыруу.',
      icon: Users,
    },
    {
      time: '15:30',
      title: 'Тушоо кесүү салтанаты',
      description: 'Дария кызыбыздын ак жолун ачуу: аркан кесүү жөрөлгөсү жана балдардын жарышы!',
      icon: Scissors,
      highlight: true,
    },
    {
      time: '16:00',
      title: 'Ак дасторкон & Бата тилөө',
      description: 'Майрамдык дасторкон, улуулардын баталары жана ак тилектер.',
      icon: Utensils,
    },
    {
      time: '18:00',
      title: 'Шоу программа & Оюндар',
      description: 'Шайыр оюндар, бий, эстелик сүрөттөр жана майрамдык таттуу кубаныч!',
      icon: Music,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-white relative overflow-hidden">
      {/* LARGE FLOATING BACKGROUND DECORATIVE ILLUSTRATION (dariya-running-trans.png - 100% Transparent) */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute -right-6 top-24 sm:right-6 sm:top-20 w-64 sm:w-80 h-auto pointer-events-none z-0 opacity-35 mix-blend-multiply"
      >
        <img
          src="/dariya-running-trans.png"
          alt="Дария биринчи кадамы декор"
          className="w-full h-auto object-contain drop-shadow-md"
        />
      </motion.div>

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-50 border border-pink-200 text-pink-500 mb-3 shadow-xs">
            <Sparkles size={20} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-custom text-slate-800">
            Той программасы
          </h2>
          <div className="w-16 h-0.5 bg-pink-300 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative pl-10 sm:pl-32">
          {/* Vertical Line */}
          <div className="absolute top-2 bottom-2 left-4 sm:left-[8rem] w-0.5 bg-gradient-to-b from-pink-200 via-pink-400 to-pink-200 -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-10">
            {schedule.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 group"
                >
                  {/* Time Badge (Desktop Left Column) */}
                  <div className="hidden sm:flex w-24 text-right justify-end pt-1">
                    <span className="font-serif-custom font-bold text-xl text-pink-600">
                      {item.time}
                    </span>
                  </div>

                  {/* Icon Node */}
                  <div className="absolute -left-10 sm:relative sm:left-0 z-10 -translate-x-1/2 sm:translate-x-0 pt-1">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md transition-transform group-hover:scale-110 ${
                        item.highlight
                          ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white ring-4 ring-pink-100'
                          : 'bg-white border-2 border-pink-300 text-pink-600'
                      }`}
                    >
                      <Icon size={17} />
                    </div>
                  </div>

                  {/* Content Box */}
                  <div
                    className={`flex-1 p-5 sm:p-6 rounded-2xl border transition-all ${
                      item.highlight
                        ? 'bg-gradient-to-br from-[#FFF0F5] to-white border-pink-300 shadow-md ring-1 ring-pink-200/50'
                        : 'bg-white border-pink-100 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="sm:hidden text-xs font-bold text-pink-600 bg-pink-100/80 px-3 py-1 rounded-full">
                        ⏰ {item.time}
                      </span>
                      {item.highlight && (
                        <span className="text-[10px] font-semibold text-rose-600 bg-rose-100/90 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          Башкы Жөрөлгө
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif-custom font-semibold text-slate-800 mb-1.5">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
