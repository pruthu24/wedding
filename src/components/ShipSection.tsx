import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Ship } from './art/Ship';
import { Grain, Vignette } from './art/Textures';
import { wedding } from '../config/wedding';
import { useIsMobile } from '../hooks/useViewport';

/**
 * Section 6 — travel. A layered editorial composition: the words are set
 * first, then the ship is laid over them so the last one is only half read.
 */
export function ShipSection() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const k = isMobile ? 0.4 : 1;
  const shipY = useTransform(scrollYProgress, [0, 1], [`${16 * k}%`, `${-18 * k}%`]);
  const shipX = useTransform(scrollYProgress, [0, 1], [`${6 * k}%`, `${-4 * k}%`]);
  const typeY = useTransform(scrollYProgress, [0, 1], [`${-8 * k}%`, `${10 * k}%`]);
  const grainY = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-forest-deep"
    >
      {/* Copper/wood grain: long horizontal streaks read as planed timber. */}
      <motion.div
        aria-hidden
        style={{ y: grainY }}
        className="absolute inset-0 -top-[6%] h-[112%] opacity-30 mix-blend-overlay"
      >
        <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="h-full w-full">
          <defs>
            <filter id="wood">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.004 0.36"
                numOctaves="4"
                seed="21"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect width="1440" height="900" filter="url(#wood)" />
        </svg>
      </motion.div>

      <a
        href={wedding.travel.url}
        target="_blank"
        rel="noreferrer"
        className="group relative flex min-h-[100svh] w-full items-center"
        aria-label={wedding.travel.prompt}
      >
        {/* ------------------------------- words ------------------------------- */}
        <motion.div
          style={{ y: typeY }}
          className="relative z-10 w-full px-6 sm:px-14 lg:px-24"
        >
          <div className="flex flex-col">
            {wedding.travel.words.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  delay: i * 0.16,
                  duration: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display font-light uppercase leading-[0.82] text-[#EFE0BE]"
                style={{
                  fontSize: 'clamp(3.6rem, 17vw, 15rem)',
                  letterSpacing: '-0.01em',
                  // The last word is set wider and starts further in, so the
                  // hull crosses it rather than sitting beside it.
                  marginLeft: i === 2 ? '0.08em' : i === 1 ? '0.22em' : 0,
                  opacity: i === 2 ? 0.92 : 1,
                  textShadow: '0 8px 40px rgba(0,0,0,0.5)',
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.7, duration: 1.2 }}
            className="mt-10 inline-flex items-center gap-3 border-b border-[#EFE0BE]/30 pb-1
                       font-sans text-[10px] uppercase tracking-widest2 text-[#EFE0BE]/80
                       transition-colors duration-500 group-hover:border-[#EFE0BE] group-hover:text-[#EFE0BE]"
          >
            {wedding.travel.prompt}
            <svg
              aria-hidden
              viewBox="0 0 24 12"
              className="h-2.5 w-6 transition-transform duration-700 group-hover:translate-x-1.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            >
              <path d="M0 6h21M16 1l5 5-5 5" />
            </svg>
          </motion.span>
        </motion.div>

        {/* -------------------------------- ship -------------------------------- */}
        <motion.div
          style={{ y: shipY, x: shipX }}
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute right-[-14%] top-1/2 z-20 w-[104%] -translate-y-1/2
                     will-change-transform sm:right-[-8%] sm:w-[78%] lg:right-[-4%] lg:w-[64%]"
        >
          <div className="bob-slow">
            <Ship className="h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]" />
          </div>
        </motion.div>
      </a>

      <Grain />
      <Vignette strength={0.6} />
    </section>
  );
}
