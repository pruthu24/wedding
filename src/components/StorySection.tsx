import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PolaroidMarquee } from './PolaroidMarquee';
import { Fibre, Grain, Vignette, WatercolourStain } from './art/Textures';
import { Flourish, Sprig } from './art/Ornaments';
import { wedding } from '../config/wedding';
import { useIsMobile } from '../hooks/useViewport';

/**
 * Section 4 — A Note From Us (Our Story).
 * Styled in warm antique South Indian ivory parchment, deep bark ink,
 * and an authentic horizontal polaroid photo stack marquee of memories.
 */
export function StorySection() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const k = isMobile ? 0.5 : 1;
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', `${-12 * k}%`]);

  return (
    <section
      ref={ref}
      aria-label="A Note From Us"
      className="relative w-full overflow-hidden py-24 sm:py-36 bg-gradient-to-b from-[#FCF8EE] via-[#F7EFE1] to-[#EFE2D0]"
    >
      {/* Warm celestial glow behind the content */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(210,172,99,0.2),transparent_65%)]" />

      {/* Decorative boundary hairlines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B4893C]/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#B4893C]/40 to-transparent" />

      {/* Soft authentic watercolor washes */}
      <WatercolourStain
        tone="bg-terracotta"
        className="left-[-12%] top-[8%] h-[52vh] w-[52vh] opacity-[0.06]"
      />
      <WatercolourStain
        tone="bg-gold"
        className="bottom-[6%] right-[-14%] h-[58vh] w-[58vh] opacity-[0.06]"
      />
      <Fibre className="opacity-10" />
      <Grain className="opacity-15" />

      {/* Botanical marginalia in theme gold and terracotta */}
      <Sprig className="absolute left-4 top-[18%] h-28 w-14 text-[#B4893C]/35 sm:left-12 sm:h-40 sm:w-20" />
      <Sprig className="absolute right-4 top-[26%] h-24 w-12 -scale-x-100 text-[#A5452A]/25 sm:right-14 sm:h-36 sm:w-16" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        
        {/* ------------------------------ The Note ------------------------------ */}
        <motion.div style={{ y: textY }} className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.38em] text-[#8B4E18] font-medium"
          >
            A note from us
          </motion.p>

          <div className="w-28 sm:w-36 mx-auto mt-2.5 mb-6 text-[#B4893C]">
            <Flourish className="h-4 sm:h-5 w-full" color="#B4893C" />
          </div>

          {/* Staggered poetic story paragraph */}
          <p className="font-serif text-[17px] sm:text-[19px] md:text-[21px] font-light leading-[1.85] text-[#2F1607] sm:leading-[1.9]">
            {wedding.story.paragraph
              .split('. ')
              .filter(Boolean)
              .map((sentence, i, all) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    delay: 0.15 + i * 0.16,
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline"
                >
                  {sentence}
                  {i < all.length - 1 ? '. ' : ''}
                </motion.span>
              ))}
          </p>
        </motion.div>
      </div>

      {/* ----------------- Horizontal Polaroid Photo Stack Marquee ----------------- */}
      <div className="relative z-10 mt-12 sm:mt-18 w-full">
        <PolaroidMarquee items={wedding.story.polaroids} />
      </div>

      {/* ------------------------------ Signature / Names ------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1.2 }}
        className="relative z-10 mt-6 sm:mt-10 flex flex-col items-center text-center px-6"
      >
        <h4
          className="font-display text-2xl sm:text-3xl italic tracking-wide"
          style={{
            color: '#9C7026',
            background: 'linear-gradient(135deg, #7A4E1B 0%, #B88A3E 35%, #F0CF87 50%, #B88A3E 65%, #7A4E1B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 1px 1px rgba(255,248,225,0.9))',
          }}
        >
          {wedding.couple.groom} &amp; {wedding.couple.bride}
        </h4>

        <div className="mt-3.5 w-24 h-px bg-gradient-to-r from-transparent via-[#B4893C]/70 to-transparent" />
      </motion.div>

      <Vignette strength={0.25} />
    </section>
  );
}
