import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { Fibre, Grain } from './art/Textures';
import { DiamondRule, Flourish } from './art/Ornaments';
import { wedding } from '../config/wedding';
import { useIsMobile } from '../hooks/useViewport';

/**
 * Traditional Royal Scroll Spindle with carved golden/wooden finials.
 */
function ScrollRoller() {
  return (
    <div className="relative flex items-center justify-center w-[calc(100%+24px)] sm:w-[calc(100%+48px)] -mx-[12px] sm:-mx-[24px] max-w-[calc(100vw-16px)] z-30 pointer-events-none select-none">
      {/* Left carved royal finial */}
      <div className="shrink-0 h-7 w-6 sm:h-9 sm:w-7 rounded-l-full bg-gradient-to-r from-[#5C330E] via-[#B88A3E] to-[#E7C686] border border-[#FFE8BA]/70 shadow-md" />
      <div className="shrink-0 h-9 w-2 sm:h-11 sm:w-2.5 rounded-sm bg-[#4A2409] border-y border-[#FFE8BA]/60" />

      {/* Central spindle rod */}
      <div className="relative flex-1 h-5 sm:h-6 bg-gradient-to-r from-[#7A4E24] via-[#E4B877] to-[#7A4E24] border-y border-[#FFE8BA]/80 shadow-[0_3px_10px_rgba(47,22,7,0.35)]">
        <div className="absolute inset-x-0 top-0.5 sm:top-1 h-0.5 bg-white/45" />
        <div className="absolute inset-x-0 bottom-0.5 sm:bottom-1 h-0.5 bg-black/35" />
      </div>

      {/* Right carved royal finial */}
      <div className="shrink-0 h-9 w-2 sm:h-11 sm:w-2.5 rounded-sm bg-[#4A2409] border-y border-[#FFE8BA]/60" />
      <div className="shrink-0 h-7 w-6 sm:h-9 sm:w-7 rounded-r-full bg-gradient-to-l from-[#5C330E] via-[#B88A3E] to-[#E7C686] border border-[#FFE8BA]/70 shadow-md" />
    </div>
  );
}

/**
 * Section 3 — The Royal Antique Parchment Scroll (Patrika).
 * As the user scrolls, the scroll physically rolls down without awkward 360° spin,
 * unveiling the grand family blessings and cordial wedding invitation.
 */
export function GaneshaInvitation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const targetHeight = isMobile ? 540 : 600;

  // Track scroll through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Balanced unroll timing:
  // Unrolls smoothly across the scroll, fully open by 78%,
  // with a brief, natural dwell before crisply proceeding to the next section.
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const unrollHeight = useTransform(scrollYProgress, [0.05, 0.78], [16, targetHeight]);
  const contentOpacity = useTransform(scrollYProgress, [0.10, 0.48], [0, 1]);

  const { blessingIntro, familyOne, familyTwo } = wedding.invocation;

  return (
    <section
      ref={containerRef}
      aria-label="Royal Parchment Invitation"
      className="relative h-[175vh] sm:h-[190vh] w-full bg-gradient-to-b from-[#FCF8EE] via-[#F6ECE0] to-[#EFE2D0]"
    >
      {/* Background antique textures */}
      <Grain className="opacity-15" />
      <Fibre className="opacity-10" />

      {/* Ambient warm celestial lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(210,172,99,0.24),transparent_65%)]" />

      {/* Decorative hairline section boundaries */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B4893C]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B4893C]/40 to-transparent" />

      {/* Sticky viewing chamber — locked to viewport top while parchment unrolls and stays open */}
      <div className="sticky top-0 flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
        
        {/* Scroll hint indicator */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute top-6 sm:top-10 z-30 flex flex-col items-center text-center"
        >
          <span className="font-serif text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#8B4E18]">
            Scroll to unroll the invitation
          </span>
          <span className="mt-1 text-xs text-[#B4893C] animate-bounce">↓</span>
        </motion.div>

        {/* -------------------- Grand Antique Unrolling Scroll -------------------- */}
        <div className="relative mt-4 sm:mt-8 flex flex-col items-center justify-center w-[min(90vw,420px)] sm:w-[94vw] sm:max-w-[580px] md:max-w-[640px] lg:max-w-[680px]">
          
          {/* Top Wooden/Gold Roller Spindle */}
          <ScrollRoller />

          {/* The Unrolling Parchment Body */}
          <motion.div
            style={{ height: unrollHeight }}
            className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAF3E5] via-[#F6EDE0] to-[#F2E5D4] shadow-[0_20px_55px_rgba(47,22,7,0.22)] border-x-[3px] border-[#B4893C]/60"
          >
            {/* Fine paper textures */}
            <Grain className="opacity-15" />
            <Fibre className="opacity-10" />

            {/* Inner margin hairline rules along left & right edges */}
            <div className="pointer-events-none absolute inset-y-0 left-3 sm:left-5 w-px bg-[#B4893C]/40" />
            <div className="pointer-events-none absolute inset-y-0 right-3 sm:right-5 w-px bg-[#B4893C]/40" />

            {/* Top & bottom roll shadows */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#7A4E24]/22 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#7A4E24]/22 to-transparent z-10" />

            {/* Corner gold florets */}
            <span className="absolute top-3.5 left-4 sm:left-6 text-[#B4893C] text-xs select-none z-10">✦</span>
            <span className="absolute top-3.5 right-4 sm:right-6 text-[#B4893C] text-xs select-none z-10">✦</span>
            <span className="absolute bottom-3.5 left-4 sm:left-6 text-[#B4893C] text-xs select-none z-10">✦</span>
            <span className="absolute bottom-3.5 right-4 sm:right-6 text-[#B4893C] text-xs select-none z-10">✦</span>

            {/* Content Container (Fixed height matching target height so text stays pinned while paper unrolls) */}
            <motion.div
              style={{ opacity: contentOpacity, height: targetHeight }}
              className="w-full flex flex-col justify-between py-6 sm:py-9 px-5 sm:px-12 md:px-14 text-center select-none"
            >
              {/* Top Sacred Ganesha Emblem */}
              <div className="flex flex-col items-center pt-1 shrink-0">
                <img
                  src="/ganesh-logo.png"
                  alt="Lord Ganesha Emblem"
                  width="88"
                  height="88"
                  loading="eager"
                  decoding="async"
                  className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain mx-auto shrink-0 mix-blend-multiply opacity-90 select-none pointer-events-none"
                />
                <div className="w-24 sm:w-36 mx-auto text-[#B4893C] mt-1.5 sm:mt-2 shrink-0 pointer-events-none">
                  <Flourish className="h-3 sm:h-4 w-full" color="#B4893C" />
                </div>
              </div>

              {/* 1. Blessing Intro */}
              <div className="my-auto">
                <p className="font-serif text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.4em] sm:tracking-[0.45em] text-[#8B4E18] font-medium mb-3 sm:mb-4">
                  {blessingIntro}
                </p>

                {/* 2. Family One */}
                <h3 
                  className="font-display text-3xl sm:text-4xl md:text-5xl text-[#2F1607] font-normal leading-tight tracking-wide"
                  style={{ textShadow: '0 1px 0 rgba(255,246,226,0.95)' }}
                >
                  {familyOne}
                </h3>

                {/* Golden Diamond Divider */}
                <div className="my-4 sm:my-6 flex items-center justify-center gap-3 sm:gap-5">
                  <span className="h-px w-10 sm:w-20 bg-gradient-to-r from-transparent to-[#B4893C]/70" />
                  <DiamondRule className="h-4 sm:h-4.5 w-36 sm:w-52 text-[#B4893C]" color="#B4893C" />
                  <span className="h-px w-10 sm:w-20 bg-gradient-to-l from-transparent to-[#B4893C]/70" />
                </div>

                {/* 3. Family Two */}
                <h3 
                  className="font-display text-3xl sm:text-4xl md:text-5xl text-[#2F1607] font-normal leading-tight tracking-wide"
                  style={{ textShadow: '0 1px 0 rgba(255,246,226,0.95)' }}
                >
                  {familyTwo}
                </h3>
              </div>

              {/* 4. Cordial Invitation Announcement */}
              <div className="border-t border-[#B4893C]/30 pt-5 sm:pt-6 pb-2 flex flex-col items-center">
                <span className="font-serif italic text-base sm:text-lg md:text-xl text-[#6B4A2F] mb-1">
                  Cordially
                </span>

                <h2
                  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light uppercase tracking-[0.3em] sm:tracking-[0.32em] text-[#8B4E18]"
                  style={{ textShadow: '0 1px 0 rgba(255,246,226,0.95), 0 3px 15px rgba(139,78,24,0.18)' }}
                >
                  INVITE YOU
                </h2>

                <p className="font-serif text-[11px] sm:text-xs md:text-sm tracking-[0.24em] uppercase text-[#6B4A2F]/85 mt-2.5 sm:mt-3">
                  To celebrate the auspicious wedding of their children
                </p>

                <div className="mt-4 sm:mt-5 w-28 h-px bg-gradient-to-r from-transparent via-[#B4893C]/70 to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Wooden/Gold Roller Spindle (Glides down naturally without spinning) */}
          <div className="w-full flex justify-center">
            <ScrollRoller />
          </div>

        </div>

      </div>
    </section>
  );
}
