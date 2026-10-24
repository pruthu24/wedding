import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TopToranGarland, AuspiciousGaneshaScroll } from './ComicIllustrations';
import { HeroCenterpieceCard } from './HeroCenterpieceCard';
import { MilestoneCards } from './MilestoneCards';
import { CoupleTriviaQuiz } from './CoupleTriviaQuiz';
import { wedding } from '../../config/wedding';

interface ComicHeroProps {
  onThrowConfetti?: () => void;
}

export function ComicHero({ onThrowConfetti }: ComicHeroProps) {
  const [showChaiSecret, setShowChaiSecret] = useState(false);
  const { groom, bride } = wedding.couple;

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#FFF9ED] pt-0 pb-12 select-none">
      
      {/* ----------------- 1. Top Hanging Mango & Floral Toran ----------------- */}
      <div className="w-full">
        <TopToranGarland className="w-full h-14 sm:h-20" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center pt-2 sm:pt-4">
        
        {/* 2. Auspicious Ganesha Calligraphy Medallion */}
        <div className="flex justify-center mb-1">
          <AuspiciousGaneshaScroll className="w-20 h-16 sm:w-24 sm:h-20 hover:scale-105 transition-transform cursor-pointer" />
        </div>

        {/* 3. Fairytale Couple Names */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => setShowChaiSecret(true)}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#2A1D18] tracking-tight leading-tight cursor-pointer group"
          title="Click for a cute note!"
        >
          <span className="hover:text-[#D4527D] transition-colors">{groom}</span>
          <span className="font-script text-4xl sm:text-6xl text-[#E5A627] mx-2 sm:mx-3">&amp;</span>
          <span className="hover:text-[#2C69B2] transition-colors">{bride}</span>
        </motion.h1>

        {/* 4. Cursive "Save the date" Flourish */}
        <div className="my-1 sm:my-2 flex items-center justify-center gap-3">
          <span className="hidden sm:inline-block w-12 h-px bg-[#2A1D18]/30" />
          <h2 className="font-script text-3xl sm:text-5xl md:text-6xl text-[#2A1D18] tracking-wide font-normal">
            ~ Save the date ~
          </h2>
          <span className="hidden sm:inline-block w-12 h-px bg-[#2A1D18]/30" />
        </div>

        {/* Confirmed Date */}
        <p className="font-serif text-lg sm:text-2xl font-bold text-[#2A1D18] tracking-widest uppercase">
          18 &amp; 19 Nov 2026
        </p>
        <p className="font-sans text-xs sm:text-sm text-[#487A38] font-bold tracking-wider uppercase mt-0.5">
          Bengaluru, Karnataka
        </p>

        {/* Interactive Confetti / Joy Pill */}
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={onThrowConfetti}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#F5B738] hover:bg-[#ffc652] text-[#2A1D18] font-comic text-sm font-bold rounded-full border-2 border-[#2A1D18] shadow-[2px_3px_0px_#2A1D18] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            <span>🎊</span>
            <span>Shower Confetti!</span>
          </button>
        </div>
      </div>

      {/* ----------------- 5. The Grand Celebratory Couple Centerpiece ----------------- */}
      <HeroCenterpieceCard onThrowConfetti={onThrowConfetti} />

      {/* ----------------- 6. "The Story of Us" Milestone Photo Cards ----------------- */}
      <MilestoneCards />

      {/* ----------------- 7. Interactive Couple Trivia Quiz ----------------- */}
      <CoupleTriviaQuiz onThrowConfetti={onThrowConfetti} />

      {/* ----------------- Secret Chai Easter Egg Modal ----------------- */}
      <AnimatePresence>
        {showChaiSecret && (
          <div
            role="dialog"
            aria-modal="true"
            onClick={() => setShowChaiSecret(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full bg-[#FFF9ED] border-3 border-[#2A1D18] rounded-2xl p-6 text-center shadow-[6px_8px_0px_#2A1D18]"
            >
              <div className="text-4xl mb-2">☕</div>
              <h3 className="font-serif text-2xl font-bold text-[#2A1D18]">
                {groom} &amp; {bride}
              </h3>
              <p className="font-comic text-base text-[#2A1D18] mt-2 font-medium">
                “Made with love, a little chaos, and a lot of chai. ☕”
              </p>
              <button
                type="button"
                onClick={() => setShowChaiSecret(false)}
                className="mt-4 px-5 py-1.5 bg-[#F5B738] text-[#2A1D18] font-comic font-bold rounded-full border-2 border-[#2A1D18] shadow-xs cursor-pointer active:scale-95"
              >
                Awww, lovely! ✨
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
