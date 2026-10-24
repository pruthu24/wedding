import { motion } from 'framer-motion';
import {
  DoodleDancingCouple,
  DoodleMusicNotes,
  DoodleMocktail,
  DoodleKalasha,
  DoodleMarigold,
  DoodleSparkle,
  DoodleStar,
  DoodleArrow,
} from './DoodleIcons';
import { wedding } from '../../config/wedding';

export function DoodleEvents() {
  const events = wedding.events.items;
  const reception = events.find((e) => e.id === 'reception') || events[0];
  const ceremony = events.find((e) => e.id === 'wedding') || events[1];

  return (
    <section
      id="events"
      aria-label="Wedding Events and Schedule"
      className="relative w-full py-20 sm:py-32 bg-[#FAF8F3] notebook-dots overflow-hidden"
    >
      {/* ----------------- Section Header ----------------- */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center mb-12 sm:mb-16 select-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFDF8] border-2 border-[#262626] rounded-full shadow-[2px_2px_0px_#262626] mb-3">
          <DoodleSparkle className="w-4 h-4 text-[#FFD166]" />
          <span className="font-hand text-xs uppercase tracking-widest font-bold text-[#D96C4A]">
            Programme &amp; Venue
          </span>
        </div>

        <h2 className="font-doodle text-4xl sm:text-6xl md:text-7xl font-bold text-[#262626] tracking-tight">
          Your Adventure Schedule
        </h2>

        <p className="font-hand text-base sm:text-xl text-[#262626]/80 max-w-2xl mx-auto mt-2 italic">
          Two days of love, laughter, traditional rituals, and delicious South Indian feasts!
        </p>
      </div>

      {/* ----------------- Event Cards Container ----------------- */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Dotted connecting line between cards on desktop */}
        <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0 border-t-2 border-dashed border-[#262626]/35 -z-1" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">
          
          {/* ==================== CARD 1: RECEPTION ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, rotate: -0.5 }}
            className="relative bg-[#FFFDF8] border-3 border-[#262626] rounded-sm p-6 sm:p-8 shadow-[6px_8px_0px_#262626] -rotate-1 flex flex-col justify-between"
          >
            {/* Top Tape */}
            <div
              className="absolute -top-3 left-8 w-24 h-6 bg-[#FFD166]/85 border border-[#262626]/40 shadow-xs -rotate-2"
              style={{
                clipPath: 'polygon(0% 12%, 4% 0%, 96% 0%, 100% 12%, 98% 88%, 95% 100%, 4% 100%, 0% 88%)',
              }}
            />

            {/* Corner Badge */}
            <div className="absolute top-3 right-3 bg-[#EF476F] text-white font-doodle text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#262626] rotate-3 shadow-xs">
              Part 1: The Party! 🕺
            </div>

            <div>
              {/* Event Illustrations Header */}
              <div className="flex items-center justify-between mb-4">
                <DoodleDancingCouple className="w-14 h-14" />
                <div className="flex gap-2">
                  <DoodleMocktail className="w-7 h-9" />
                  <DoodleMusicNotes className="w-7 h-7" />
                </div>
              </div>

              {/* Title & Timing */}
              <span className="font-hand text-xs font-bold uppercase tracking-widest text-[#EF476F] block">
                The Celebration Begins!
              </span>
              <h3 className="font-doodle text-3xl sm:text-4xl font-extrabold text-[#262626] mt-0.5 mb-2">
                Reception
              </h3>

              <div className="space-y-1.5 font-hand text-base sm:text-lg text-[#262626]/90 my-4 border-y border-dashed border-[#262626]/20 py-3">
                <p className="flex items-center gap-2">
                  <span className="text-[#EF476F]">📅</span>
                  <span className="font-bold">{reception.date}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#EF476F]">⏰</span>
                  <span className="font-bold text-[#D96C4A]">{reception.time}</span>
                </p>
                <p className="flex items-start gap-2 pt-1">
                  <span className="text-[#EF476F] shrink-0">📍</span>
                  <span className="text-sm sm:text-base leading-snug">{reception.venue}</span>
                </p>
              </div>

              {/* Doodle note */}
              <p className="font-hand text-xs sm:text-sm text-[#262626]/75 italic">
                Dress Code: Evening wear, sparkle &amp; comfortable dancing shoes!
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-3">
              <a
                href={reception.routeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#FFD166] hover:bg-[#ffe082] text-[#262626] font-doodle text-lg font-bold rounded-full border-2 border-[#262626] shadow-[2px_3px_0px_#262626] active:translate-y-0.5 transition-all text-center"
              >
                <span>Find the party 🎉</span>
                <DoodleArrow direction="right" className="w-4 h-3 inline" />
              </a>
            </div>
          </motion.div>

          {/* ==================== CARD 2: WEDDING CEREMONY ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            className="relative bg-[#FFFDF8] border-3 border-[#262626] rounded-sm p-6 sm:p-8 shadow-[6px_8px_0px_#262626] rotate-1 flex flex-col justify-between"
          >
            {/* Top Tape */}
            <div
              className="absolute -top-3 left-8 w-24 h-6 bg-[#06D6A0]/85 border border-[#262626]/40 shadow-xs rotate-2"
              style={{
                clipPath: 'polygon(0% 12%, 4% 0%, 96% 0%, 100% 12%, 98% 88%, 95% 100%, 4% 100%, 0% 88%)',
              }}
            />

            {/* Corner Badge */}
            <div className="absolute top-3 right-3 bg-[#06D6A0] text-[#262626] font-doodle text-xs font-bold px-2.5 py-0.5 rounded-full border border-[#262626] -rotate-2 shadow-xs">
              Part 2: The Muhurtham! 💍
            </div>

            <div>
              {/* Event Illustrations Header */}
              <div className="flex items-center justify-between mb-4">
                <DoodleKalasha className="w-14 h-18" />
                <div className="flex gap-2 items-center">
                  <DoodleMarigold className="w-8 h-8" />
                  <DoodleStar className="w-7 h-7 text-[#FFD166]" />
                </div>
              </div>

              {/* Title & Timing */}
              <span className="font-hand text-xs font-bold uppercase tracking-widest text-[#06D6A0] block">
                The Forever Moment
              </span>
              <h3 className="font-doodle text-3xl sm:text-4xl font-extrabold text-[#262626] mt-0.5 mb-2">
                Wedding Ceremony
              </h3>

              <div className="space-y-1.5 font-hand text-base sm:text-lg text-[#262626]/90 my-4 border-y border-dashed border-[#262626]/20 py-3">
                <p className="flex items-center gap-2">
                  <span className="text-[#06D6A0]">📅</span>
                  <span className="font-bold">{ceremony.date}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#06D6A0]">⏰</span>
                  <span className="font-bold text-[#D96C4A]">{ceremony.time}</span>
                </p>
                <p className="flex items-start gap-2 pt-1">
                  <span className="text-[#06D6A0] shrink-0">📍</span>
                  <span className="text-sm sm:text-base leading-snug">{ceremony.venue}</span>
                </p>
              </div>

              {/* Doodle note */}
              <p className="font-hand text-xs sm:text-sm text-[#262626]/75 italic">
                Auspicious muhurtham followed by traditional South Indian plantain leaf feast! 🍃
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-3">
              <a
                href={ceremony.routeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#06D6A0] hover:bg-[#1ee3b0] text-[#262626] font-doodle text-lg font-bold rounded-full border-2 border-[#262626] shadow-[2px_3px_0px_#262626] active:translate-y-0.5 transition-all text-center"
              >
                <span>Take me there 📍</span>
                <DoodleArrow direction="right" className="w-4 h-3 inline" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
