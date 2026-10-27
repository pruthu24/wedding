import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wedding } from '../../config/wedding';
import { fireGrandConfettiBurst } from '../doodle/ConfettiEffect';

interface ComicHeroProps {
  onThrowConfetti?: () => void;
}

export function ComicHero({ onThrowConfetti }: ComicHeroProps) {
  const [showChaiSecret, setShowChaiSecret] = useState(false);
  const { groom, bride } = wedding.couple;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConfetti = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;
    if (onThrowConfetti) {
      onThrowConfetti();
    } else {
      fireGrandConfettiBurst(originX, originY);
    }
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-transparent pt-6 sm:pt-10 md:pt-14 pb-12 sm:pb-20 select-none">
      
      {/* ----------------- Two-Column Storybook Hero (Wedding Ceremony Painting + Couple Introduction) ----------------- */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Traditional South Indian Wedding Saptapadi Ceremony Painting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center items-center relative order-2 lg:order-1"
          >
            <div className="relative max-w-md sm:max-w-lg lg:max-w-xl w-full flex justify-center">
              <img
                src="/wedding_ceremony_painting.png"
                alt="Traditional South Indian Wedding Saptapadi Ceremony with Bride, Groom, Carved Wooden Mandap, Sacred Agni, Family Elders and Nadaswaram Musicians"
                className="w-full h-auto max-h-[500px] sm:max-h-[560px] lg:max-h-[600px] object-contain drop-shadow-md hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Right Column: Romantic Storybook Couple Calligraphy & Inviting CTA */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start justify-center order-1 lg:order-2"
          >
            {/* Fairytale Couple Names */}
            <h1
              onClick={() => setShowChaiSecret(true)}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3D2E24] tracking-tight leading-[1.1] cursor-pointer group"
              title="Click for a cute note!"
            >
              <span className="block hover:text-[#557A3C] transition-colors">
                Prithvi Kumar
              </span>
              <span className="font-hand text-3xl sm:text-4xl md:text-5xl text-[#C49B45] inline-block mr-2">
                &amp;
              </span>
              <span className="hover:text-[#DE8B7C] transition-colors">
                Varshini
              </span>
            </h1>

            {/* Romantic Tagline */}
            <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[#3D2E24]/90 my-2 sm:my-3 font-normal tracking-wide">
              Two Hearts, One Beautiful Journey
            </p>

            {/* Confirmed Wedding Date & Venue Badge */}
            <div className="my-2 text-center lg:text-left">
              <p className="font-serif text-base sm:text-lg font-bold text-[#3D2E24] tracking-wider uppercase">
                18 &amp; 19 November 2026
              </p>
              <p className="font-hand text-base sm:text-lg text-[#557A3C] font-bold tracking-wide mt-0.5">
                Venkatamma Ramaiah Kalyana Soudha • Bengaluru
              </p>
            </div>

            {/* Action Buttons: "You're Invited" Sage Pill + Shower Confetti Button (matching size & font) */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <button
                type="button"
                onClick={() => scrollTo('rsvp')}
                className="h-12 px-7 bg-[#889A80] hover:bg-[#74866C] text-white font-hand text-lg sm:text-xl font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>💌</span>
                <span>You&apos;re Invited</span>
              </button>

              <button
                type="button"
                onClick={handleConfetti}
                className="h-12 px-7 bg-white hover:bg-[#FAF4E8] text-[#3D2E24] font-hand text-lg sm:text-xl font-bold rounded-full border border-[#3D2E24]/20 shadow-xs hover:shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                title="Shower celebration confetti!"
              >
                <span>🎊</span>
                <span>Shower Confetti!</span>
              </button>
            </div>

          </motion.div>

        </div>
      </div>

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
              className="relative max-w-sm w-full bg-[#FAF4E8] border-2 border-[#3D2E24]/30 rounded-3xl p-6 text-center shadow-lg"
            >
              <div className="text-4xl mb-2">☕</div>
              <h3 className="font-serif text-2xl font-bold text-[#3D2E24]">
                {groom} &amp; {bride}
              </h3>
              <p className="font-hand text-lg text-[#3D2E24]/90 mt-2 font-medium">
                “Made with love, a little chaos, and endless cups of South Indian filter coffee. ☕”
              </p>
              <button
                type="button"
                onClick={() => setShowChaiSecret(false)}
                className="mt-4 px-6 py-2 bg-[#889A80] text-[#FAF4E8] font-hand text-lg font-bold rounded-full shadow-xs hover:bg-[#74866C] cursor-pointer active:scale-95 transition-all"
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
