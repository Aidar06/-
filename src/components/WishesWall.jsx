import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Send, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WishesWall() {
  const [wishes, setWishes] = useState([
    {
      id: 1,
      author: 'Нурбек & Айгүл',
      text: 'Дария кызыбыздын кадамы берекелүү болсун! Батабыз тийип, ак жолу ачылсын! 🌸',
      date: 'Бүгүн',
    },
    {
      id: 2,
      author: 'Акылбек агасы',
      text: 'Өмүрү узун, келечеги кең, акылдуу да бактылуу кыз болуп чоңойсун! ❤️',
      date: 'Кечээ',
    },
    {
      id: 3,
      author: 'Салтанат эжеси',
      text: '1 жашың кут болсун, ширин кыз! Балалыгың дайыма күлкү менен коштолсун! ✨',
      date: 'Кечээ',
    }
  ]);

  const [authorInput, setAuthorInput] = useState('');
  const [textInput, setTextInput] = useState('');

  const handleAddWish = (e) => {
    e.preventDefault();
    if (!authorInput.trim() || !textInput.trim()) return;

    const newWish = {
      id: Date.now(),
      author: authorInput,
      text: textInput,
      date: 'Азыр эле',
    };

    setWishes([newWish, ...wishes]);
    setAuthorInput('');
    setTextInput('');

    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#F48FB1', '#FF69B4', '#FFF']
    });
  };

  return (
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-50 border border-pink-200 text-pink-500 mb-3 shadow-xs">
            <Heart size={20} className="fill-pink-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-custom text-slate-800">
            Ак тилектер & Баталар
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Дарияга каалоо-тилегиңизди калтырыңыз
          </p>
        </motion.div>

        {/* Wish Form */}
        <motion.form
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleAddWish}
          className="bg-[#FFF5F7] p-6 rounded-3xl border border-pink-100 mb-10 shadow-sm space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              required
              placeholder="Атыңыз / Фамилияңыз"
              value={authorInput}
              onChange={(e) => setAuthorInput(e.target.value)}
              className="sm:col-span-1 px-4 py-3 rounded-2xl bg-white border border-pink-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <input
              type="text"
              required
              placeholder="Ак тилегиңизди жазыңыз..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="sm:col-span-2 px-4 py-3 rounded-2xl bg-white border border-pink-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-xs sm:text-sm font-medium shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Send size={14} />
            <span>Каалоо тилек калтыруу</span>
          </button>
        </motion.form>

        {/* Wishes Cards Grid */}
        <div className="space-y-4">
          <AnimatePresence>
            {wishes.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-serif-custom font-bold text-slate-800 text-base">
                      {item.author}
                    </h4>
                    <span className="text-[10px] text-slate-400">{item.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
