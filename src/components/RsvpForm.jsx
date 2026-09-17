import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Heart, CheckCircle2, UserCheck, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RsvpForm() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('yes');
  const [guestCount, setGuestCount] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#F48FB1', '#FFD54F', '#4CAF50']
    });

    setIsSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    let statusText = '';
    if (status === 'yes') statusText = `Келемин (${guestCount} киши)`;
    else if (status === 'family') statusText = `Үй-бүлөм менен келемин (${guestCount} киши)`;
    else statusText = 'Тилекке каршы келе албайм';

    const text = `Саламатсыздарбы, Алтынбек жана Джамиля! 👋\n\nДариянын Тушоо тоюна жооп:\n👤 Аты-жөнү: ${name}\n✨ Катышуу: ${statusText}\n\nКуттуктообузду билдиребиз! 🎉`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-16 px-4 bg-[#FFF5F7] relative">
      <div className="max-w-xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-pink-200 text-pink-500 mb-3 shadow-xs">
            <UserCheck size={20} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-custom text-slate-800">
            Тойго катышууңузду ырастаңыз
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Сураныч, жообуңузду алдын ала билдирип коюңуз
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-pink-100 relative"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-serif-custom text-slate-800 mb-2 font-bold">
                Рахмат, {name}!
              </h3>
              <p className="text-sm text-slate-600 mb-6 font-light">
                Сиздин жообуңуз кабыл алынды. Тойдо көрүшкөнчө! 🌸
              </p>

              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <MessageSquare size={18} />
                <span>WhatsApp аркылуу жөнөтүү</span>
              </a>

              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-xs text-pink-600 underline hover:text-pink-700"
              >
                Жоопту өзгөртүү
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Аты-жөнүңүз *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Мис: Асан Асанов"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl bg-pink-50/50 border border-pink-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white transition-all text-sm"
                />
              </div>

              {/* Attendance Options */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                  Катышууңуз:
                </label>
                <div className="space-y-2.5">
                  {[
                    { id: 'yes', label: 'Ооба, кубаныч менен келемин' },
                    { id: 'family', label: 'Жубайым / үй-бүлөм менен келемин' },
                    { id: 'no', label: 'Өкүнүчтүүсү, келе албайм' },
                  ].map((opt) => (
                    <label
                      key={opt.id}
                      onClick={() => setStatus(opt.id)}
                      className={`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                        status === opt.id
                          ? 'border-pink-500 bg-pink-50/80 text-pink-900 shadow-xs'
                          : 'border-pink-100 bg-white text-slate-600 hover:bg-pink-50/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name="status"
                        checked={status === opt.id}
                        onChange={() => setStatus(opt.id)}
                        className="accent-pink-500 w-4 h-4"
                      />
                      <span className="text-xs sm:text-sm font-medium">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Guest Count (If coming) */}
              {status !== 'no' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="pt-2"
                >
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Коноктордун саны:
                  </label>
                  <div className="flex items-center gap-4">
                    {[1, 2, 3, 4, 5].map((cnt) => (
                      <button
                        type="button"
                        key={cnt}
                        onClick={() => setGuestCount(cnt)}
                        className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                          guestCount === cnt
                            ? 'bg-pink-500 text-white shadow-md'
                            : 'bg-pink-50 text-pink-700 hover:bg-pink-100'
                        }`}
                      >
                        {cnt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-medium text-sm sm:text-base shadow-lg hover:from-pink-600 hover:to-rose-500 transition-all active:scale-98 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                <span>Жоопту жөнөтүү</span>
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
