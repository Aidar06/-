import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, Heart } from 'lucide-react';

export default function CountdownCalendar() {
  const targetDate = new Date('2026-11-15T15:00:00');

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // November 2026 calendar days setup (Nov 1, 2026 is Sunday)
  // Weekday order: Дш, Сш, Шш, Бш, Жм, Иш, Жш (Sun is 7th column)
  // Days in Nov: 30
  const daysInNov = 30;
  // Nov 1 2026 is Sunday (index 6 if Mon=0)
  const startOffset = 6; 

  const weekDays = ['Дш', 'Сш', 'Шш', 'Бш', 'Жм', 'Иш', 'Жш'];

  return (
    <section className="py-16 px-4 bg-[#FFF5F7] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-pink-200 text-pink-500 mb-3 shadow-xs">
            <Clock size={20} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-custom text-slate-800">
            Тойго чейин калды
          </h2>
          <p className="text-sm text-pink-600 mt-1">15-Ноябрь 2026-жыл • Саат 15:00</p>
        </motion.div>

        {/* Live Countdown Timer Grid */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto mb-16">
          {[
            { label: 'Күн', value: timeLeft.days },
            { label: 'Саат', value: timeLeft.hours },
            { label: 'Мүнөт', value: timeLeft.minutes },
            { label: 'Секунд', value: timeLeft.seconds },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-pink-100 flex flex-col items-center justify-center"
            >
              <span className="text-2xl sm:text-4xl font-bold font-serif-custom text-pink-600">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* November 2026 Calendar Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-pink-100 max-w-lg mx-auto"
        >
          <div className="flex items-center justify-between border-b border-pink-100 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <CalendarIcon className="text-pink-500" size={20} />
              <h3 className="text-xl font-serif-custom font-semibold text-slate-800">
                Ноябрь 2026
              </h3>
            </div>
            <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">
              Жекшемби
            </span>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 text-center mb-3 text-xs font-semibold text-pink-600">
            {weekDays.map((day, idx) => (
              <div key={idx} className="py-1">{day}</div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 text-center gap-1 text-xs sm:text-sm">
            {/* Empty slots for offset */}
            {Array.from({ length: startOffset }).map((_, idx) => (
              <div key={`empty-${idx}`} className="p-2" />
            ))}

            {/* Nov days 1 to 30 */}
            {Array.from({ length: daysInNov }).map((_, idx) => {
              const dayNum = idx + 1;
              const isTargetDay = dayNum === 15;

              return (
                <div
                  key={`day-${dayNum}`}
                  className="p-1.5 flex items-center justify-center relative"
                >
                  {isTargetDay ? (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white flex flex-col items-center justify-center shadow-lg font-bold relative"
                    >
                      <span className="text-xs leading-none">{dayNum}</span>
                      <Heart size={8} className="fill-white mt-0.5" />
                    </motion.div>
                  ) : (
                    <span className="text-slate-600 font-light hover:text-pink-600 transition-colors">
                      {dayNum}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-pink-100 text-center">
            <p className="text-xs text-slate-500">
              💖 15-ноябрь — Чакырылган коноктордун кубанычтуу күнү!
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
