import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  StationeryMandap,
  KuthuVilakku,
  SacredKalash,
  RoyalElephant,
  HangingToran,
} from './StationeryArtwork';
import { PetalSystem } from '../PetalSystem';
import { wedding } from '../../config/wedding';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function StationeryHero() {
  const { groom, bride } = wedding.couple;

  // Countdown to Reception: 18 Nov 2026, 18:30 IST
  const targetDate = new Date('2026-11-18T18:30:00+05:30');
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Wedding Celebration Hero"
      className="relative min-h-screen w-full overflow-hidden stationery-paper flex flex-col justify-between pt-16 sm:pt-20 pb-12 select-none"
    >
      {/* ----------------- Drifting Petal Particle System ----------------- */}
      <PetalSystem count={16} depth="back" className="opacity-45" />

      {/* ----------------- Top Hanging Mango Leaf & Marigold Toran ----------------- */}
      <div className="w-full absolute top-14 sm:top-16 inset-x-0 pointer-events-none z-10">
        <HangingToran className="w-full h-10 sm:h-14 opacity-90" />
      </div>

      {/* ----------------- Main Hero Content ----------------- */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-8 sm:pt-12 flex-1 flex flex-col justify-center items-center">
        
        {/* Subtle Sanskrit Invocation */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#B69A62] font-semibold mb-2"
        >
          ॥ ॐ श्री गणेशाय नमः ॥
        </motion.p>

        {/* Small Intro Pill */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.32em] text-[#49372B]/75 font-medium px-3.5 py-1 rounded-full border border-[#B69A62]/30 bg-[#FFFDF9]/80 backdrop-blur-xs mb-3"
        >
          The Wedding Celebration Of
        </motion.span>

        {/* ----------------- Couple Names Focal Point ----------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="my-1 sm:my-2"
        >
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#49372B] tracking-tight leading-tight">
            <span className="hover:text-[#B69A62] transition-colors">{groom}</span>
            <span className="font-script text-4xl sm:text-6xl md:text-7xl text-[#B69A62] mx-2 sm:mx-4 font-normal inline-block transform -rotate-3">
              &amp;
            </span>
            <span className="hover:text-[#B69A62] transition-colors">{bride}</span>
          </h1>
        </motion.div>

        {/* Poetic Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-editorial italic text-base sm:text-xl md:text-2xl text-[#725E50] max-w-xl mx-auto mt-1"
        >
          Two hearts, two families, one beautiful beginning.
        </motion.p>

        {/* Date & City Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-3 flex items-center justify-center gap-3 sm:gap-4 text-[#49372B]"
        >
          <span className="w-8 sm:w-16 h-px bg-[#B69A62]/40" />
          <p className="font-editorial text-sm sm:text-base tracking-[0.2em] uppercase font-semibold text-[#49372B]">
            18 &amp; 19 November 2026 • Bengaluru
          </p>
          <span className="w-8 sm:w-16 h-px bg-[#B69A62]/40" />
        </motion.div>

        {/* ----------------- The Central Wedding Mandap Illustration ----------------- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.55 }}
          className="relative w-full max-w-2xl sm:max-w-3xl mt-6 sm:mt-8 px-2"
        >
          {/* Central Mandap SVG */}
          <StationeryMandap className="w-full h-auto drop-shadow-xs" />

          {/* Flanking Traditional Motifs */}
          {/* Left: Traditional Brass Kuthu Vilakku */}
          <div className="hidden sm:block absolute left-2 md:left-6 bottom-4 md:bottom-8 w-12 md:w-16 pointer-events-none">
            <KuthuVilakku className="w-full h-auto drop-shadow-xs" />
          </div>

          {/* Right: Sacred Kalash & Royal Elephant */}
          <div className="hidden sm:flex flex-col items-center absolute right-2 md:right-6 bottom-4 md:bottom-8 pointer-events-none">
            <SacredKalash className="w-10 md:w-14 h-auto drop-shadow-xs mb-2" />
            <RoyalElephant className="w-14 md:w-20 h-auto drop-shadow-xs" />
          </div>
        </motion.div>

        {/* ----------------- Live Wedding Countdown ----------------- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 sm:mt-8 flex flex-col items-center"
        >
          <span className="font-editorial text-xs sm:text-sm tracking-[0.25em] uppercase text-[#B69A62] font-semibold mb-2.5">
            Counting Down To The Auspicious Day
          </span>

          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            {[
              { val: timeLeft.days, label: 'Days' },
              { val: timeLeft.hours, label: 'Hours' },
              { val: timeLeft.minutes, label: 'Mins' },
              { val: timeLeft.seconds, label: 'Secs' },
            ].map((box, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center w-16 sm:w-20 py-2 sm:py-2.5 rounded-xl border border-[#B69A62]/40 bg-[#FFFDF9]/90 backdrop-blur-xs shadow-xs"
              >
                <span className="font-editorial text-xl sm:text-2xl font-bold text-[#49372B] leading-none">
                  {String(box.val).padStart(2, '0')}
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] tracking-wider uppercase text-[#725E50] font-medium mt-1">
                  {box.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* ----------------- Scroll Prompt ----------------- */}
      <div className="relative z-20 text-center mt-6">
        <a
          href="#invitation"
          className="inline-flex flex-col items-center text-[#49372B]/70 hover:text-[#B69A62] transition-colors group focus:outline-hidden"
          aria-label="Scroll to Invitation"
        >
          <span className="font-editorial italic text-xs sm:text-sm tracking-wider">
            Scroll to discover our story
          </span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="text-base text-[#B69A62] mt-0.5"
          >
            ↓
          </motion.span>
        </a>
      </div>

    </section>
  );
}
