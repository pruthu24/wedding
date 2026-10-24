import { motion } from 'framer-motion';
import { GaneshaLineArt, CornerBotanical, WaxSealStamp } from './StationeryArtwork';
import { wedding } from '../../config/wedding';

export function StationeryInvitation() {
  const { familyOne, familyTwo, and: andConnector } = wedding.invocation;
  const { groom, bride } = wedding.couple;

  return (
    <section
      id="invitation"
      aria-label="Wedding Invitation Letter"
      className="relative w-full py-20 sm:py-28 bg-[#F5EBDD]/60 overflow-hidden select-none"
    >
      {/* Background watercolor wash accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FAF7F0] via-[#F5EBDD] to-[#FAF7F0] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* ----------------- The Bespoke Digital Stationery Letter ----------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl sm:rounded-[36px] bg-[#FFFDF9] border border-[#B69A62]/50 p-7 sm:p-14 md:p-16 text-center shadow-[0_12px_40px_rgba(73,55,43,0.08)]"
          style={{
            boxShadow:
              '0 1px 3px rgba(73,55,43,0.05), 0 16px 36px -8px rgba(73,55,43,0.09), inset 0 0 0 1px rgba(255,255,255,0.9), inset 0 0 0 6px #FAF7F0, inset 0 0 0 7px rgba(182,154,98,0.25)',
          }}
        >
          {/* Four Botanical Corners */}
          <CornerBotanical className="absolute top-4 left-4 w-10 sm:w-14 h-10 sm:h-14 opacity-80" />
          <CornerBotanical className="absolute top-4 right-4 w-10 sm:w-14 h-10 sm:h-14 opacity-80" flipX />
          <CornerBotanical className="absolute bottom-4 left-4 w-10 sm:w-14 h-10 sm:h-14 opacity-80" flipY />
          <CornerBotanical className="absolute bottom-4 right-4 w-10 sm:w-14 h-10 sm:h-14 opacity-80" flipX flipY />

          {/* 1. Reverent Lord Ganesha Line-Art Illustration */}
          <div className="flex justify-center mb-3">
            <GaneshaLineArt className="w-16 h-20 sm:w-20 sm:h-24 hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Auspicious Sanskrit Mantra */}
          <p className="font-editorial text-xs sm:text-sm tracking-[0.35em] text-[#B69A62] font-semibold uppercase mb-2">
            ॐ श्री वेंकटेशाय नमः
          </p>

          <p className="font-editorial text-xs sm:text-sm uppercase tracking-[0.25em] text-[#725E50] font-semibold">
            With the heavenly blessings of our families
          </p>

          {/* 2. Family Names Framed in Elegant Serif */}
          <div className="my-6 max-w-lg mx-auto py-5 px-4 rounded-2xl bg-[#FAF7F0]/70 border border-[#B69A62]/30">
            <h3 className="font-editorial text-2xl sm:text-4xl font-normal text-[#49372B] tracking-wide leading-snug">
              {familyOne}
            </h3>

            {/* Subtle Antique Gold Divider */}
            <div className="my-2.5 flex items-center justify-center gap-3">
              <span className="w-10 sm:w-16 h-px bg-[#B69A62]/40" />
              <span className="font-script text-2xl sm:text-3xl text-[#B69A62] font-normal">
                {andConnector || 'And'}
              </span>
              <span className="w-10 sm:w-16 h-px bg-[#B69A62]/40" />
            </div>

            <h3 className="font-editorial text-2xl sm:text-4xl font-normal text-[#49372B] tracking-wide leading-snug">
              {familyTwo}
            </h3>
          </div>

          {/* Invitation Copy */}
          <p className="font-editorial italic text-base sm:text-xl text-[#725E50] mt-4 max-w-md mx-auto">
            Cordially invite you to celebrate the auspicious wedding of
          </p>

          {/* 3. Couple Names in Calligraphy */}
          <div className="my-5">
            <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal text-[#49372B] tracking-tight">
              <span>{groom}</span>
              <span className="font-script text-4xl sm:text-6xl text-[#B69A62] mx-2 sm:mx-3 inline-block">
                &amp;
              </span>
              <span>{bride}</span>
            </h2>
          </div>

          {/* Tagline */}
          <p className="font-editorial text-xs sm:text-sm uppercase tracking-[0.22em] text-[#475747] font-semibold mt-3">
            Two families, two hearts, one unforgettable adventure.
          </p>

          {/* Date & Location Capsule */}
          <div className="mt-7 pt-5 border-t border-[#B69A62]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs tracking-wider uppercase text-[#725E50]">
            <span>Wednesday &amp; Thursday</span>
            <span className="font-editorial font-bold text-[#49372B] text-sm sm:text-base">
              18 &amp; 19 November 2026
            </span>
            <span>Bengaluru, Karnataka</span>
          </div>

          {/* Pressed Wax Seal Accent on Letter Foot */}
          <div className="flex justify-center mt-6">
            <WaxSealStamp className="w-12 h-12 sm:w-14 sm:h-14" />
          </div>

        </motion.div>

      </div>
    </section>
  );
}
