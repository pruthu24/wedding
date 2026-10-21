import { motion } from 'framer-motion';
import { EventCard } from './EventCard';
import { Fibre, Grain, WatercolourStain } from './art/Textures';
import { Flourish } from './art/Ornaments';
import { PetalSystem } from './PetalSystem';
import { wedding } from '../config/wedding';

/**
 * Section 4 — the programme. Three framed miniatures on a sheet of
 * antique-gold parchment; on phones each one takes roughly a screen.
 */
export function EventsSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-28 sm:py-36 bg-ivory"
    >
      <WatercolourStain
        tone="bg-terracotta"
        className="left-[-10%] top-[22%] h-[46vh] w-[46vh] opacity-[0.07]"
      />
      <WatercolourStain
        tone="bg-forest-light"
        className="bottom-[10%] right-[-12%] h-[50vh] w-[50vh] opacity-[0.05]"
      />
      <Fibre />
      <Grain />
      <PetalSystem count={8} depth="back" seed={21} className="z-[2] opacity-70" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* ------------------------------ heading ------------------------------ */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scaleX: 0.4 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-44 text-[#8A6526]"
          >
            <Flourish className="h-8 w-full" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="mt-5 max-w-3xl font-display text-[10vw] font-light italic leading-[1.05] text-[#3E2410] sm:text-[58px]"
          >
            {wedding.events.heading}
          </motion.h2>
        </div>

        {/* ------------------------------- panels ------------------------------ */}
        <div
          className="mt-20 flex flex-col items-center gap-28
                     md:mt-24 md:flex-row md:items-start md:justify-center md:gap-8 lg:gap-14"
        >
          {wedding.events.items.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
