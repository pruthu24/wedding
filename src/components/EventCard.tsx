import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { OrnateFrame } from './art/OrnateFrame';
import { MiniatureScene } from './art/MiniatureScene';
import { DiamondRule } from './art/Ornaments';
import type { WeddingEvent } from '../config/wedding';
import { useIsMobile } from '../hooks/useViewport';

/**
 * One event, presented as a framed miniature painting with its details
 * lettered beneath — not a card. Each instance drifts at its own rate so
 * the three of them never move as a block.
 */
export function EventCard({ event, index }: { event: WeddingEvent; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // The middle panel hangs a little lower, the outer two a little higher.
  const drift = (index === 1 ? 26 : 14) * (isMobile ? 0.4 : 1);
  const y = useTransform(scrollYProgress, [0, 1], [drift, -drift]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: index * 0.18,
        duration: 1.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex min-h-[88svh] w-full max-w-[360px] flex-col items-center
                 justify-center md:min-h-0 md:justify-start"
    >
      <motion.div
        whileHover={{ scale: 1.035 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full will-change-transform"
      >
        <OrnateFrame tone="gold" scale={0.78} crest={false}>
          <div className="relative aspect-[3/4.2] w-full overflow-hidden bg-[#2A1D13]">
            {event.image ? (
              <img
                src={event.image}
                alt={event.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-cinematic group-hover:scale-[1.06]"
              />
            ) : (
              <MiniatureScene
                variant={event.variant}
                className="h-full w-full transition-transform duration-[1200ms] ease-cinematic group-hover:scale-[1.06]"
              />
            )}
            <div className="grain-overlay" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(80% 70% at 50% 40%, transparent 46%, rgba(42,29,19,0.45) 100%)',
              }}
            />
          </div>
        </OrnateFrame>
      </motion.div>

      {/* ------------------------------ details ------------------------------ */}
      <h3 className="mt-7 font-display text-[9vw] font-light italic leading-none text-[#3E2410] sm:text-[42px]">
        {event.name}
      </h3>

      <DiamondRule className="my-4 h-4 w-36 text-gold-deep/70" />

      <dl className="flex flex-col items-center gap-1.5 text-center">
        <dt className="sr-only">Date</dt>
        <dd className="font-serif text-[15px] tracking-wide text-[#4A2E14]">
          {event.date}
        </dd>
        <dt className="sr-only">Venue</dt>
        <dd className="font-serif text-[15px] italic text-[#6B4A2F]">
          {event.venue}
        </dd>
        <dt className="sr-only">Time</dt>
        <dd className="font-sans text-[10px] uppercase tracking-widest2 text-[#8A6526]">
          {event.time}
        </dd>
      </dl>

      <a
        href={event.routeUrl}
        target="_blank"
        rel="noreferrer"
        className="group/cta mt-6 inline-flex items-center gap-2 border-b border-[#8A6526]/40 pb-1
                   font-sans text-[10px] uppercase tracking-widest2 text-[#6B4A2F]
                   transition-colors duration-500 hover:border-[#6B4A2F] hover:text-[#3E2410]"
      >
        {event.cta}
        <svg
          aria-hidden
          viewBox="0 0 24 12"
          className="h-2.5 w-6 transition-transform duration-500 group-hover/cta:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        >
          <path d="M0 6h21M16 1l5 5-5 5" />
        </svg>
      </a>
    </motion.div>
  );
}
