import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function VenueMap() {
  const address = 'Победа проспектиси, 351';
  const restaurant = '"Алтын казына" рестораны';

  // Navigation Links
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant + ' ' + address)}`;
  const yandexMapsUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(restaurant + ' ' + address)}`;
  const gisUrl = `https://2gis.kg/search/${encodeURIComponent(restaurant + ' ' + address)}`;

  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="max-w-3xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-50 border border-pink-200 text-pink-500 mb-3 shadow-xs">
            <MapPin size={20} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-custom text-slate-800">
            Өткөрүлүүчү орду
          </h2>
          <div className="w-16 h-0.5 bg-pink-300 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-[#FFF5F7] to-white rounded-3xl p-8 sm:p-12 shadow-xl border border-pink-100 text-center relative overflow-hidden"
        >
          {/* Restaurant Icon Frame */}
          <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-pink-200 text-pink-600 flex items-center justify-center mx-auto mb-6">
            <Navigation size={28} />
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif-custom text-slate-800 font-bold mb-2">
            {restaurant}
          </h3>

          <p className="text-base sm:text-lg text-pink-600 font-medium mb-6">
            📍 Дареги: {address}
          </p>

          <p className="text-slate-600 font-light text-sm max-w-md mx-auto mb-8">
            Сиздерди 15-ноябрь күнү саат 15:00дө дасторконубузда чыдамсыздык менен күтөбүз!
          </p>

          {/* Map Preview Card */}
          <div className="w-full h-48 sm:h-64 rounded-2xl overflow-hidden shadow-inner border border-pink-200 mb-8 relative bg-pink-100/50 flex flex-col items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/40 via-rose-100/30 to-amber-100/30 opacity-70" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg animate-bounce">
                <MapPin size={24} />
              </div>
              <span className="font-serif-custom text-lg font-bold text-slate-800">
                "Алтын казына"
              </span>
              <span className="text-xs text-slate-500">Победа проспектиси 351</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white border border-pink-200 text-slate-700 text-xs sm:text-sm font-medium hover:bg-pink-50 hover:border-pink-300 transition-all flex items-center gap-2 shadow-xs"
            >
              <span>Google Maps</span>
              <ExternalLink size={14} className="text-pink-400" />
            </a>

            <a
              href={yandexMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white border border-pink-200 text-slate-700 text-xs sm:text-sm font-medium hover:bg-pink-50 hover:border-pink-300 transition-all flex items-center gap-2 shadow-xs"
            >
              <span>Yandex Maps</span>
              <ExternalLink size={14} className="text-pink-400" />
            </a>

            <a
              href={gisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-white border border-pink-200 text-slate-700 text-xs sm:text-sm font-medium hover:bg-pink-50 hover:border-pink-300 transition-all flex items-center gap-2 shadow-xs"
            >
              <span>2GIS</span>
              <ExternalLink size={14} className="text-pink-400" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
