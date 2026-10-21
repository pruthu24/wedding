import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// @ts-ignore
import { Image } from "../components/Image";
import { weddingNew } from "../config/wedding";

export function HeroTemple() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.4 });
  const bgY = useTransform(p, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(p, [0, 1], [1.06, 1.16]);
  const titleY = useTransform(p, [0, 1], ["0%", "-80%"]);
  const titleOpacity = useTransform(p, [0, 0.55], [1, 0]);
  const { groom, bride, joiner } = weddingNew.couple;

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden bg-[#9fc2b8]" style={{ zIndex: 1 }}>
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 will-change-transform">
        <Image src={weddingNew.images.hero} alt="Hand-painted South Indian temple gopuram in a lush garden" className="h-full w-full vintage-art" loading="eager" />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_18%,rgba(250,240,220,0.45),transparent_55%)]" />

      {/* <PetalSystem count={12} className="z-10" scale={0.8} opacity={0.8} /> */}

      <motion.div style={{ y: titleY, opacity: titleOpacity }} className="absolute inset-x-0 top-[3.5vh] z-20 px-3 text-center sm:top-[5vh] sm:px-6 md:top-[6vh]">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.45em" }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif mb-2 sm:mb-3.5 text-[10px] uppercase tracking-[0.38em] text-[#8B1E2B] sm:text-[11px] sm:tracking-[0.48em] md:text-xs font-medium flex items-center justify-center gap-2"
        >
          <span className="text-[#8B1E2B] text-[9px] opacity-70">✦</span>
          <span>The Wedding Of</span>
          <span className="text-[#8B1E2B] text-[9px] opacity-70">✦</span>
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[9.5vw] font-light leading-none tracking-normal whitespace-nowrap text-[#8B1E2B] sm:text-[7vw] md:text-[5.5vw] lg:text-[74px] xl:text-[84px]"
          style={{
            textShadow:
              '0 1px 0 rgba(255, 252, 245, 0.95), 0 2px 10px rgba(139, 30, 43, 0.22), 0 8px 24px rgba(100, 20, 30, 0.12)',
          }}
        >
          {groom} <em className="font-light italic text-[#C05621] mx-1 sm:mx-2">{joiner}</em> {bride}
        </motion.h1>

        {/* Coordinated Crimson & Terracotta Tapered Hairline with Star Ornament */}
        <div className="mx-auto mt-3 sm:mt-4 flex items-center justify-center gap-2 pointer-events-none">
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#8B1E2B]/50" />
          <span className="text-[#8B1E2B] text-[8px] opacity-80">✦</span>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#8B1E2B]/50" />
        </div>
      </motion.div>

      {/* <PetalSystem count={8} className="z-30" scale={1.4} /> */}

      <div className="pointer-events-none absolute inset-0 z-30 shadow-[inset_0_0_180px_rgba(30,20,8,0.45)]" />
      <motion.div
        style={{ opacity: titleOpacity }}
        className="font-serif absolute bottom-16 left-1/2 z-30 -translate-x-1/2 text-center text-[10px] uppercase tracking-[0.4em] text-[#f4ede4]"
      >
        Scroll Down
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2.4, repeat: Infinity }} className="mx-auto mt-3 block h-10 w-px bg-[#f4ede4]/70" />
      </motion.div>
    </section>
  );
}