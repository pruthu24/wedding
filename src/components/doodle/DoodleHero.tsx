import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DoodleSun,
  DoodleCloud,
  DoodleHeart,
  DoodleStar,
  DoodleSparkle,
  DoodleArrow,
  DoodleTempleGopuram,
  DoodleKalasha,
  DoodleMarigold,
  DoodleCoffee,
} from './DoodleIcons';
import { wedding } from '../../config/wedding';

interface DoodleHeroProps {
  onThrowConfetti?: () => void;
}

export function DoodleHero({ onThrowConfetti }: DoodleHeroProps) {
  const [secretHeartOpen, setSecretHeartOpen] = useState(false);
  const [secretSignatureOpen, setSecretSignatureOpen] = useState(false);

  const { groom, bride } = wedding.couple;

  return (
    <section
      id="hero"
      aria-label="The Wedding Adventure of Prithvi & Varshini"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#FAF8F3] notebook-grid pt-16 sm:pt-20 pb-16 flex flex-col justify-between"
    >
      {/* ----------------- Floating Sky Elements ----------------- */}
      <div className="absolute top-4 left-3 sm:left-10 z-10 flex items-center gap-1 select-none pointer-events-none">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <DoodleSun className="w-16 h-16 sm:w-20 sm:h-20" />
        </motion.div>
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="-ml-6 mt-4"
        >
          <DoodleCloud className="w-20 sm:w-28 opacity-90" />
        </motion.div>
      </div>

      <div className="absolute top-6 right-4 sm:right-12 z-10 select-none">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          <div className="px-3 py-1 bg-[#FFD166] border-2 border-[#262626] rounded-full shadow-[2px_2px_0px_#262626] -rotate-3 text-xs sm:text-sm font-doodle font-bold text-[#262626]">
            LET&apos;S GET THIS PARTY STARTED! ✨
          </div>
          <div className="flex gap-2 mt-2">
            <DoodleSparkle className="w-5 h-5 text-[#FFD166] animate-pulse" />
            <DoodleStar className="w-6 h-6 text-[#EF476F]" />
          </div>
        </motion.div>
      </div>

      {/* ----------------- Main Hero Content ----------------- */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 pt-10 sm:pt-14 text-center">
        
        {/* Intro Tagline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFFDF8] border-2 border-[#262626] rounded-full shadow-[2px_2px_0px_#262626] mb-4 sm:mb-6"
        >
          <DoodleMarigold className="w-4 h-4" />
          <span className="font-hand text-xs sm:text-sm font-bold tracking-widest uppercase text-[#D96C4A]">
            The Wedding Adventure Of
          </span>
          <DoodleMarigold className="w-4 h-4" />
        </motion.div>

        {/* Big Handwritten Couple Names with Easter Egg */}
        <div className="relative inline-block my-1">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring' }}
            onClick={() => setSecretSignatureOpen(true)}
            className="cursor-pointer font-doodle text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#262626] tracking-tight leading-tight select-none group"
            title="Click for a cute secret note!"
          >
            <span className="relative inline-block hover:text-[#EF476F] transition-colors">
              {groom}
            </span>
            <span className="relative inline-block font-comic text-[#EF476F] mx-2 sm:mx-4 -rotate-6">
              &amp;
            </span>
            <span className="relative inline-block hover:text-[#118AB2] transition-colors">
              {bride}
            </span>
          </motion.h1>

          {/* Marker underline highlight */}
          <div className="mx-auto w-3/4 h-3 bg-[#FFD166]/70 rounded-full -rotate-1 -mt-2 sm:-mt-3 shadow-sm pointer-events-none" />

          {/* Secret Heart Easter Egg button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSecretHeartOpen(true);
              onThrowConfetti?.();
            }}
            className="absolute -top-3 -right-5 sm:-right-8 p-1.5 hover:scale-125 transition-transform"
            title="Psst... click me!"
            aria-label="Secret Heart"
          >
            <DoodleHeart className="w-7 h-7 sm:w-9 sm:h-9 hover:rotate-12 transition-transform" />
            <span className="absolute -bottom-4 right-0 font-hand text-[10px] text-[#EF476F] font-bold whitespace-nowrap bg-white/90 px-1 rounded border border-[#EF476F]">
              Click me!
            </span>
          </button>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-hand text-lg sm:text-2xl md:text-3xl text-[#262626]/85 font-medium mt-3 sm:mt-4 italic max-w-2xl mx-auto"
        >
          Two people. One beautiful story. A lifetime of adventures.
        </motion.p>

        {/* ----------------- Scrapbook Couple Photo & Landscape ----------------- */}
        <div className="relative mt-8 sm:mt-12 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10">
          
          {/* Left: Temple Gopuram & Dotted Trail */}
          <div className="hidden md:flex flex-col items-center text-center opacity-85">
            <DoodleTempleGopuram className="w-28 h-36" />
            <span className="font-hand text-xs text-[#262626]/70 mt-1 font-semibold">
              Gokula, Bengaluru
            </span>
            <div className="w-24 border-b-2 border-dashed border-[#262626]/30 my-2" />
          </div>

          {/* Center: Scrapbook Framed Polaroid with Washi Tape */}
          <motion.div
            initial={{ scale: 0.92, rotate: -2 }}
            whileHover={{ scale: 1.02, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className="relative p-3 pb-6 bg-[#FFFDF8] border-2 border-[#262626] rounded-sm shadow-[4px_6px_0px_#262626] max-w-[280px] sm:max-w-[320px] will-change-transform"
          >
            {/* Top Washi Tape */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#06D6A0]/80 border border-[#262626]/40 shadow-sm rotate-1"
              style={{
                clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 98% 85%, 95% 100%, 5% 100%, 0% 85%)',
              }}
            />

            {/* Couple Photo */}
            <div className="relative aspect-square w-full overflow-hidden border border-[#262626]/20 bg-[#EDE4D5]">
              <img
                src={wedding.couple.photo}
                alt={wedding.couple.photoAlt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Handwritten note on bottom */}
            <div className="mt-3 flex items-center justify-between px-1">
              <span className="font-doodle text-base sm:text-lg font-bold text-[#262626]">
                Varshini &amp; Prithvi 💕
              </span>
              <span className="font-hand text-[11px] text-[#D96C4A] font-semibold">
                Beginning of Forever
              </span>
            </div>

            {/* Arrow pointing to them */}
            <div className="absolute -right-12 bottom-6 hidden sm:block pointer-events-none">
              <DoodleArrow direction="curved-down" className="w-12 h-10 text-[#EF476F]" />
              <span className="font-doodle text-xs text-[#EF476F] font-bold block -mt-2 rotate-6">
                The Cutest!
              </span>
            </div>
          </motion.div>

          {/* Right: Kalasha, Filter Coffee & Auspicious Doodles */}
          <div className="hidden md:flex flex-col items-center text-center opacity-85">
            <DoodleKalasha className="w-20 h-24" />
            <div className="flex items-center gap-2 mt-2">
              <DoodleCoffee className="w-7 h-10" />
              <span className="font-hand text-xs text-[#262626]/70 font-semibold">
                Filter Coffee &amp; Smiles ☕
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* ----------------- Bottom Scroll Prompt ----------------- */}
      <div className="relative z-20 mt-8 text-center select-none">
        <a
          href="#invitation"
          className="inline-flex flex-col items-center gap-1 font-hand text-sm sm:text-base text-[#262626] font-bold hover:text-[#EF476F] transition-colors"
        >
          <span>Scroll to explore our storybook ↓</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <DoodleArrow direction="down" className="w-5 h-8 text-[#262626]" />
          </motion.div>
        </a>
      </div>

      {/* ----------------- Secret Easter Egg Modals ----------------- */}
      {/* 1. Secret Heart Modal */}
      <AnimatePresence>
        {secretHeartOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-sm w-full bg-[#FFFDF8] border-3 border-[#262626] rounded-sm p-6 shadow-[5px_6px_0px_#262626] text-center rotate-1"
            >
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#EF476F]/80 border border-[#262626]/40"
                style={{
                  clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 98% 85%, 95% 100%, 5% 100%, 0% 85%)',
                }}
              />
              <DoodleHeart className="w-12 h-12 mx-auto text-[#EF476F] mb-3" />
              <h3 className="font-doodle text-2xl font-bold text-[#262626] mb-2">
                A Secret Note For You!
              </h3>
              <p className="font-hand text-lg text-[#262626]/90 leading-relaxed">
                “Psst... you&apos;re officially part of our story now! ❤️”
              </p>
              <p className="font-hand text-sm text-[#D96C4A] mt-2 italic">
                We cannot wait to celebrate with you!
              </p>
              <button
                type="button"
                onClick={() => setSecretHeartOpen(false)}
                className="mt-5 px-5 py-1.5 bg-[#FFD166] text-[#262626] font-doodle font-bold rounded-full border-2 border-[#262626] shadow-[2px_2px_0px_#262626] hover:bg-[#ffe082]"
              >
                Awww, Yay! ✨
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. Secret Signature Modal */}
      <AnimatePresence>
        {secretSignatureOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-sm w-full bg-[#FFFDF8] border-3 border-[#262626] rounded-sm p-6 shadow-[5px_6px_0px_#262626] text-center -rotate-1"
            >
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#118AB2]/80 border border-[#262626]/40"
                style={{
                  clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 98% 85%, 95% 100%, 5% 100%, 0% 85%)',
                }}
              />
              <DoodleCoffee className="w-8 h-12 mx-auto mb-3" />
              <h3 className="font-doodle text-2xl font-bold text-[#262626] mb-2">
                Prithvi &amp; Varshini
              </h3>
              <p className="font-hand text-lg text-[#262626]/90 leading-relaxed">
                “Made with love, a little chaos, and a lot of chai. ☕”
              </p>
              <button
                type="button"
                onClick={() => setSecretSignatureOpen(false)}
                className="mt-5 px-5 py-1.5 bg-[#06D6A0] text-[#262626] font-doodle font-bold rounded-full border-2 border-[#262626] shadow-[2px_2px_0px_#262626] hover:bg-[#1fe3b1]"
              >
                Cheers to that! 💛
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
