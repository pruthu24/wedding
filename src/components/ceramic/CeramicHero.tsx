import { motion } from 'framer-motion';
import {
  CeramicDaisy,
  CeramicTulip,
  SquigglyWave,
  ScallopBorder,
  CeramicMug,
} from './CeramicOrnaments';
import { wedding } from '../../config/wedding';

interface CeramicHeroProps {
  onThrowConfetti?: () => void;
}

export function CeramicHero({ onThrowConfetti }: CeramicHeroProps) {
  const { groom, bride } = wedding.couple;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#FAF4E8] pt-8 sm:pt-14 pb-16">
      
      {/* ----------------- 1. Top Teaser Heading (Matching Reference Top Left) ----------------- */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-10 sm:mb-14">
        <div className="flex items-center justify-center gap-2 mb-2">
          <CeramicDaisy className="w-5 h-5" petalColor="#FFFBF3" centerColor="#EDB355" />
          <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#6B2634]">
            A Colorful Beginning
          </span>
          <CeramicDaisy className="w-5 h-5" petalColor="#FFFBF3" centerColor="#EDB355" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#6B2634] leading-[1.08] tracking-tight"
        >
          Love Made Playful
        </motion.h1>

        <p className="font-sans text-sm sm:text-lg text-[#2A1F1E]/75 mt-2 max-w-xl mx-auto">
          Handcrafted moments for a joyful lifetime. Celebrating {groom} &amp; {bride}.
        </p>
      </div>

      {/* ----------------- 2. Scalloped Wine Hero Block (The Signature Showcase) ----------------- */}
      <div className="relative mx-3 sm:mx-8 md:mx-12 rounded-t-[32px] sm:rounded-t-[44px] bg-[#6B2634] text-[#FFFBF3] overflow-hidden shadow-[0_16px_40px_rgba(107,38,52,0.18)]">
        
        {/* Floating Decorative Daisies inside Hero Banner */}
        <div className="absolute top-6 left-6 sm:left-12 pointer-events-none opacity-90">
          <CeramicDaisy className="w-10 h-10 sm:w-14 sm:h-14" petalColor="#FFFBF3" centerColor="#EDB355" />
        </div>
        <div className="absolute top-6 right-6 sm:right-12 pointer-events-none opacity-90">
          <CeramicDaisy className="w-10 h-10 sm:w-14 sm:h-14" petalColor="#FFFBF3" centerColor="#EDB355" />
        </div>
        <div className="hidden md:block absolute bottom-12 left-10 pointer-events-none">
          <CeramicTulip className="w-12 h-20" flowerColor="#FFFBF3" stemColor="#8F9F86" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-12 sm:pt-20 pb-16 text-center">
          
          {/* Couple Ceramic Icon Banner */}
          <div className="inline-flex items-center gap-3 p-2 px-4 rounded-full bg-[#521B26] border border-[#FFFBF3]/20 mb-6">
            <CeramicMug className="w-6 h-6 text-[#EDB355]" />
            <span className="font-sans text-xs tracking-widest uppercase font-semibold text-[#EDB355]">
              Prithvi weds Varshini
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FFFBF3] leading-[1.08]">
            The Joy of Forever
          </h2>

          <p className="font-sans text-sm sm:text-lg text-[#FFFBF3]/85 max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            Two souls, one sacred path, and a celebration filled with laughter, traditions, and memories.
          </p>

          {/* Yellow Pill Button (Exact match of "Shop the Collection" in reference) */}
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => scrollTo('invitation')}
              className="px-8 py-3.5 bg-[#EDB355] hover:bg-[#f3bf65] text-[#2A1F1E] font-sans text-sm font-bold tracking-wide uppercase rounded-full shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Open The Invitation
            </button>

            <button
              onClick={onThrowConfetti}
              className="px-6 py-3.5 bg-transparent hover:bg-[#521B26] text-[#FFFBF3] border border-[#FFFBF3]/40 font-sans text-sm font-semibold rounded-full transition-colors cursor-pointer"
            >
              Sprinkle Petals 🌸
            </button>
          </div>
        </div>

        {/* Signature Scalloped Bottom Edge */}
        <ScallopBorder color="#FAF4E8" position="bottom" className="w-full -mb-1" />
      </div>

      {/* ----------------- 3. "Made Slowly, Shaped by Hand" Sub-Section ----------------- */}
      <div className="max-w-4xl mx-auto px-6 text-center mt-16 sm:mt-24 mb-10">
        
        <div className="flex items-center justify-center gap-3 mb-2">
          <CeramicDaisy className="w-6 h-6" petalColor="#D45D52" centerColor="#EDB355" />
          <h3 className="font-display text-3xl sm:text-5xl font-bold text-[#6B2634]">
            Shaped by Love, Bound for Life
          </h3>
          <CeramicDaisy className="w-6 h-6" petalColor="#EDB355" centerColor="#D45D52" />
        </div>

        {/* Squiggly Wave Divider matching reference image */}
        <div className="flex justify-center my-2">
          <SquigglyWave className="w-20 h-4 text-[#D45D52]" />
        </div>

        <p className="font-sans text-sm sm:text-base text-[#2A1F1E]/75 max-w-lg mx-auto">
          Every celebration, every tradition, and every cherished memory curated for our big days.
        </p>
      </div>

      {/* ----------------- 4. The 4 Arched Pottery Niche Cards (Matching Reference Grid) ----------------- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Card 1: Couple Portrait in Blush Arch Niche */}
          <div className="group flex flex-col items-center text-center cursor-pointer" onClick={() => scrollTo('memories')}>
            <div className="relative w-full aspect-[4/5] rounded-t-[48px] sm:rounded-t-[64px] rounded-b-[16px] bg-[#F1D6CC] p-3 sm:p-4 overflow-hidden border border-[#2A1F1E]/10 shadow-[0_4px_16px_rgba(70,40,35,0.06)] group-hover:shadow-[0_8px_24px_rgba(70,40,35,0.12)] transition-all">
              <div className="w-full h-full rounded-t-[40px] sm:rounded-t-[54px] rounded-b-[10px] overflow-hidden bg-[#FAF4E8]">
                <img
                  src={wedding.couple.photo}
                  alt={wedding.couple.photoAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#6B2634] mt-3">
              Varshini &amp; Prithvi
            </h4>
            <p className="font-sans text-xs text-[#2A1F1E]/60 mt-0.5">
              Two hearts, one story
            </p>
          </div>

          {/* Card 2: Divine Emblem in Butter Mustard Arch Niche */}
          <div className="group flex flex-col items-center text-center cursor-pointer" onClick={() => scrollTo('invitation')}>
            <div className="relative w-full aspect-[4/5] rounded-t-[48px] sm:rounded-t-[64px] rounded-b-[16px] bg-[#FAF0D4] p-3 sm:p-4 overflow-hidden border border-[#2A1F1E]/10 shadow-[0_4px_16px_rgba(70,40,35,0.06)] group-hover:shadow-[0_8px_24px_rgba(70,40,35,0.12)] transition-all">
              <div className="w-full h-full rounded-t-[40px] sm:rounded-t-[54px] rounded-b-[10px] overflow-hidden bg-[#FFFBF3] flex flex-col items-center justify-center p-4">
                <img
                  src="/ganesh-logo.png"
                  alt="Lord Ganesha Emblem"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain mix-blend-multiply group-hover:scale-110 transition-transform"
                />
                <span className="font-serif text-[11px] text-[#A36818] font-bold tracking-wider mt-2">
                  श्री गणेशाय नमः
                </span>
              </div>
            </div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#6B2634] mt-3">
              Family Blessings
            </h4>
            <p className="font-sans text-xs text-[#2A1F1E]/60 mt-0.5">
              With divine grace
            </p>
          </div>

          {/* Card 3: Grand Reception in Rose Arch Niche */}
          <div className="group flex flex-col items-center text-center cursor-pointer" onClick={() => scrollTo('events')}>
            <div className="relative w-full aspect-[4/5] rounded-t-[48px] sm:rounded-t-[64px] rounded-b-[16px] bg-[#F7E5DC] p-3 sm:p-4 overflow-hidden border border-[#2A1F1E]/10 shadow-[0_4px_16px_rgba(70,40,35,0.06)] group-hover:shadow-[0_8px_24px_rgba(70,40,35,0.12)] transition-all">
              <div className="w-full h-full rounded-t-[40px] sm:rounded-t-[54px] rounded-b-[10px] overflow-hidden bg-[#FAF4E8]">
                <img
                  src="/reception.jpg"
                  alt="Reception Celebration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#6B2634] mt-3">
              Grand Reception
            </h4>
            <p className="font-sans text-xs text-[#2A1F1E]/60 mt-0.5">
              Wed, 18 Nov • 6:30 PM
            </p>
          </div>

          {/* Card 4: Wedding Muhurtham in Sage Green Arch Niche */}
          <div className="group flex flex-col items-center text-center cursor-pointer" onClick={() => scrollTo('events')}>
            <div className="relative w-full aspect-[4/5] rounded-t-[48px] sm:rounded-t-[64px] rounded-b-[16px] bg-[#DCE4D8] p-3 sm:p-4 overflow-hidden border border-[#2A1F1E]/10 shadow-[0_4px_16px_rgba(70,40,35,0.06)] group-hover:shadow-[0_8px_24px_rgba(70,40,35,0.12)] transition-all">
              <div className="w-full h-full rounded-t-[40px] sm:rounded-t-[54px] rounded-b-[10px] overflow-hidden bg-[#FAF4E8]">
                <img
                  src="/wedding.jpg"
                  alt="Wedding Muhurtham"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#6B2634] mt-3">
              Auspicious Muhurtham
            </h4>
            <p className="font-sans text-xs text-[#2A1F1E]/60 mt-0.5">
              Thu, 19 Nov • 4:40 AM
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
