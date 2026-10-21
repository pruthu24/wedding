import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Fibre, Grain, WatercolourStain } from './art/Textures';
import { Flourish } from './art/Ornaments';
import { wedding } from '../config/wedding';
import { AIAssistantRSVP } from './AIAssistantRSVP';

/**
 * Section 5 — RSVP. 
 * Renders the integrated AI Concierge.
 */
export function RsvpSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-ivory px-6 min-h-[100svh] flex flex-col justify-center items-center pt-12 pb-20 md:pb-24 border-t border-gold/10">
      
      <WatercolourStain
        tone="bg-forest-light"
        className="left-[-10%] top-[10%] h-[60vh] w-[60vh] opacity-[0.04]"
      />
      <WatercolourStain
        tone="bg-terracotta"
        className="right-[-15%] bottom-[10%] h-[70vh] w-[70vh] opacity-[0.03]"
      />
      <Fibre />
      <Grain />

      {/* ------------------------------- Header ------------------------------- */}
      <div className="relative z-10 flex flex-col items-center text-center mt-4 sm:mt-6 mb-8 sm:mb-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[11px] sm:text-xs uppercase tracking-[0.38em] text-[#8B4E18] font-medium"
        >
          Your Presence is Our Blessing
        </motion.p>

        <div className="w-24 sm:w-32 mx-auto mt-2 mb-3 text-[#B4893C]">
          <Flourish className="h-4 sm:h-5 w-full" color="#B4893C" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#2F1607] tracking-wider flex items-baseline justify-center gap-2 sm:gap-3"
          style={{ textShadow: '0 2px 10px rgba(62,36,16,0.06)' }}
        >
          <span className="font-serif italic font-normal text-2xl sm:text-3xl md:text-4xl text-[#6B4A2F]">
            {wedding.rsvp.headingTop.toLowerCase() === 'please' ? 'Please' : wedding.rsvp.headingTop}
          </span>
          <span className="font-display tracking-[0.24em] text-[#8B4E18] font-light uppercase">
            {wedding.rsvp.headingBottom}
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.4 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-3.5 w-20 h-px bg-gradient-to-r from-transparent via-[#B4893C]/60 to-transparent"
        />
      </div>

      {/* ------------------------------ Embedded AI Concierge ---------------------------- */}
      <div className="relative z-20 w-full flex-1 flex justify-center items-center">
        <AIAssistantRSVP />
      </div>

      <div className="relative z-20 mt-10 text-center">
        <p className="font-serif italic text-sm text-[#8A6526]/80 tracking-wider">
          With love &amp; blessings • <span className="text-[#9C7026] font-medium not-italic">Prithvi &amp; Varshini</span>
        </p>
      </div>
    </section>
  );
}
