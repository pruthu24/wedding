import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoodleHeart, DoodleStar, DoodleSparkle, DoodleMarigold, DoodleRibbonBanner } from './DoodleIcons';
import { wedding } from '../../config/wedding';

export function FoldOutInvitation() {
  const [isOpen, setIsOpen] = useState(true);

  const { familyOne, familyTwo, and: andConnector } = wedding.invocation;
  const { groom, bride } = wedding.couple;

  return (
    <section
      id="invitation"
      aria-label="The Wedding Invitation"
      className="relative min-h-[90svh] w-full py-16 sm:py-24 bg-[#FAF8F3] notebook-dots overflow-hidden flex flex-col items-center justify-center px-4"
    >
      {/* Background doodles */}
      <div className="absolute top-8 left-6 sm:left-16 pointer-events-none opacity-60">
        <DoodleSparkle className="w-8 h-8 text-[#FFD166]" />
      </div>
      <div className="absolute top-12 right-6 sm:right-20 pointer-events-none opacity-60">
        <DoodleStar className="w-8 h-8 text-[#EF476F]" />
      </div>
      <div className="absolute bottom-10 left-8 sm:left-24 pointer-events-none opacity-60">
        <DoodleMarigold className="w-7 h-7" />
      </div>

      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12 select-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFDF8] border-2 border-[#262626] rounded-full shadow-[2px_2px_0px_#262626] mb-3">
          <DoodleHeart className="w-4 h-4" />
          <span className="font-hand text-xs uppercase tracking-widest font-bold text-[#EF476F]">
            Official Invitation
          </span>
        </div>
        <h2 className="font-doodle text-4xl sm:text-5xl md:text-6xl font-bold text-[#262626]">
          A Little Something Special For You
        </h2>
        <p className="font-hand text-base sm:text-lg text-[#262626]/75 mt-1">
          {isOpen ? 'Tap below to fold letter' : 'Click the envelope to open! 💌'}
        </p>
      </div>

      {/* Interactive Envelope / Fold-Out Letter */}
      <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
        
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* ----------------- CLOSED ENVELOPE ----------------- */
            <motion.div
              key="closed-envelope"
              initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: -1.5 }}
              exit={{ scale: 0.9, opacity: 0 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer relative w-full max-w-md h-64 sm:h-72 bg-[#FFFDF8] border-3 border-[#262626] rounded-md shadow-[6px_8px_0px_#262626] flex flex-col items-center justify-center p-6 text-center select-none group"
            >
              {/* Envelope flap lines */}
              <svg
                viewBox="0 0 400 250"
                className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
              >
                <path d="M0 0 L200 130 L400 0" stroke="#262626" strokeWidth="2.5" fill="none" />
                <path d="M0 250 L150 110" stroke="#262626" strokeWidth="2" fill="none" />
                <path d="M400 250 L250 110" stroke="#262626" strokeWidth="2" fill="none" />
              </svg>

              {/* Heart Wax Seal Sticker */}
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#EF476F] border-2 border-[#262626] rounded-full shadow-[2px_3px_0px_#262626] flex items-center justify-center group-hover:scale-110 transition-transform">
                <DoodleHeart className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>

              <p className="relative z-10 font-doodle text-2xl sm:text-3xl font-bold text-[#262626] mt-4">
                Open your invitation ✨
              </p>
              <span className="relative z-10 font-hand text-xs text-[#D96C4A] font-semibold mt-1 bg-[#FFD166]/60 px-3 py-0.5 rounded-full border border-[#262626]">
                Click to unfold
              </span>
            </motion.div>
          ) : (
            /* ----------------- UNFOLDED LETTER / SKETCHBOOK PAGE ----------------- */
            <motion.div
              key="open-letter"
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-full bg-[#FFFDF8] border-3 border-[#262626] rounded-sm p-6 sm:p-10 md:p-12 shadow-[6px_8px_0px_#262626] text-center select-none"
            >
              {/* Corner washi tape pieces */}
              <div
                className="absolute -top-3 left-6 w-20 h-5 bg-[#FFD166]/85 border border-[#262626]/40 -rotate-3"
                style={{
                  clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 98% 85%, 95% 100%, 5% 100%, 0% 85%)',
                }}
              />
              <div
                className="absolute -top-3 right-6 w-20 h-5 bg-[#06D6A0]/85 border border-[#262626]/40 rotate-3"
                style={{
                  clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 98% 85%, 95% 100%, 5% 100%, 0% 85%)',
                }}
              />

              {/* 1. Sacred Lord Ganesha Emblem & Mantra */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative p-2 rounded-full border-2 border-dashed border-[#262626]/40 bg-[#FAF8F3] mb-2">
                  <img
                    src="/ganesh-logo.png"
                    alt="Lord Ganesha Sacred Line Art"
                    width="72"
                    height="72"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain mix-blend-multiply"
                  />
                </div>
                <p className="font-serif text-sm tracking-widest text-[#D96C4A] font-bold">
                  ॐ श्री वेंकटेशाय नमः
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-8 h-px bg-[#262626]/30" />
                  <DoodleMarigold className="w-4 h-4" />
                  <span className="w-8 h-px bg-[#262626]/30" />
                </div>
              </div>

              {/* 2. Blessing intro */}
              <p className="font-hand text-base sm:text-lg text-[#262626]/80 font-bold uppercase tracking-wider mb-2">
                With the blessings of our families
              </p>

              {/* 3. Families Ribbon Banner */}
              <div className="my-4 sm:my-6 flex flex-col items-center">
                <DoodleRibbonBanner
                  title={familyOne}
                  subtitle={andConnector ? `${andConnector} ${familyTwo}` : familyTwo}
                  className="max-w-md w-full"
                />
              </div>

              {/* 4. Cordial invitation */}
              <p className="font-hand text-base sm:text-xl text-[#262626]/85 font-medium mt-4">
                Cordially invite you to celebrate the auspicious wedding of
              </p>

              {/* 5. Couple Names in Big Hand-Drawn Display */}
              <div className="my-4">
                <h3 className="font-doodle text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#262626] tracking-tight">
                  <span className="text-[#EF476F]">{groom}</span>
                  <span className="font-comic text-[#262626] mx-2">&amp;</span>
                  <span className="text-[#118AB2]">{bride}</span>
                </h3>
                <div className="w-48 mx-auto h-2 bg-[#FFD166]/70 rounded-full mt-1 -rotate-1" />
              </div>

              {/* 6. Tagline */}
              <p className="font-hand text-base sm:text-lg italic text-[#D96C4A] font-semibold mt-3">
                Two families, two hearts, one beautiful beginning.
              </p>

              {/* Toggle fold button */}
              <div className="mt-8 pt-4 border-t border-dashed border-[#262626]/20">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FAF8F3] hover:bg-[#FAF0D8] text-[#262626] font-hand text-xs font-bold rounded-full border border-[#262626] shadow-[1px_1px_0px_#262626] transition-colors"
                >
                  <span>✉️</span>
                  <span>Fold back into envelope</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
