import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Gopuram } from './art/Gopuram';
import { GardenBand, Tree } from './art/Foliage';
import { Grain, Vignette } from './art/Textures';
import { PetalSystem } from './PetalSystem';
import { DiamondRule } from './art/Ornaments';
import { wedding } from '../config/wedding';
import { useIsMobile } from '../hooks/useViewport';

/**
 * Section 7 — the last frame of the film. The same temple as the opening,
 * now at dusk and half-swallowed by the garden.
 */
export function ClosingSection() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const k = isMobile ? 0.45 : 1;
  const templeY = useTransform(scrollYProgress, [0, 1], [`${-14 * k}%`, `${8 * k}%`]);
  const gardenY = useTransform(scrollYProgress, [0, 1], [`${14 * k}%`, `${-8 * k}%`]);
  const textY = useTransform(scrollYProgress, [0, 1], [`${8 * k}%`, `${-10 * k}%`]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg,#132419 0%,#19301F 30%,#122016 62%,#0A130D 100%)',
      }}
    >
      {/* warm lantern glow behind the temple */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[18%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full blur-[90px]"
        style={{ background: 'radial-gradient(circle,#C57B22 0%,transparent 70%)', opacity: 0.35 }}
      />

      {/* ---------------------- temple, sunk into the dark ---------------------- */}
      <motion.div
        style={{ y: templeY }}
        className="absolute inset-x-0 top-0 flex justify-center opacity-[0.55]"
      >
        <div className="relative">
          <Gopuram className="h-[72vh] w-auto" />
          {/* night wash over the artwork */}
          <div className="absolute inset-0 bg-forest-deep mix-blend-color opacity-80" />
          <div className="absolute inset-0 bg-[#060C08] opacity-45" />
        </div>
      </motion.div>

      {/* flanking trees, night palette */}
      <div className="absolute -left-[10%] bottom-0 h-[66%] w-[42%] max-w-[520px] opacity-90">
        <Tree side="left" night className="h-full w-full" />
      </div>
      <div className="absolute -right-[10%] bottom-0 h-[70%] w-[44%] max-w-[540px] opacity-90">
        <Tree side="right" night className="h-full w-full" />
      </div>

      <PetalSystem count={10} depth="back" seed={41} className="z-[6] opacity-60" />

      {/* ------------------------------ the words ------------------------------ */}
      <motion.div
        style={{ y: textY }}
        className="relative z-[14] flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[6.4vw] font-light leading-snug text-cream/90 sm:text-[34px]"
        >
          {wedding.closing.lineOne}
        </motion.p>

        <motion.a
          href={wedding.closing.url}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 font-display text-[8.6vw] font-light italic text-ivory
                     transition-colors duration-700 hover:text-gold-light sm:text-[54px]"
          style={{ textShadow: '0 10px 40px rgba(0,0,0,0.6)' }}
        >
          {wedding.closing.lineTwo}
        </motion.a>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.5, duration: 1.3 }}
          className="mt-10 w-56 text-cream/45"
        >
          <DiamondRule className="h-4 w-full" />
        </motion.div>
      </motion.div>

      {/* --------------------- dense flowering foreground ---------------------- */}
      <motion.div
        style={{ y: gardenY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[20] h-[42%] min-h-[220px]"
      >
        <GardenBand night density={1} className="absolute inset-0 h-full w-full" />
      </motion.div>

      <PetalSystem count={7} depth="front" seed={57} className="z-[24] opacity-70" />

      <Grain />
      <Vignette strength={0.72} />
    </section>
  );
}
