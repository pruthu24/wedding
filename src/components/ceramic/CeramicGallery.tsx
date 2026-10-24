import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CeramicDaisy, SquigglyWave } from './CeramicOrnaments';
import { wedding } from '../../config/wedding';

interface MomentCard {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tag: string;
  bg: string;
}

const MOMENTS: MomentCard[] = [
  {
    id: 'm1',
    image: '/couple.jpg',
    title: 'The Beginning',
    subtitle: 'Where forever found its name',
    tag: 'Favorite Moment',
    bg: '#F1D6CC',
  },
  {
    id: 'm2',
    image: '/couple3.jpg',
    title: 'Warm Smiles',
    subtitle: 'Celebrating with cherished families',
    tag: 'Pure Joy',
    bg: '#FAF0D4',
  },
  {
    id: 'm3',
    image: '/couple2.jpg',
    title: 'Auspicious Blessings',
    subtitle: 'Bound by rituals, guided by love',
    tag: 'Muhurtham',
    bg: '#DCE4D8',
  },
  {
    id: 'm4',
    image: '/couple5.jpg',
    title: 'Shared Laughter',
    subtitle: 'Every little adventure together',
    tag: 'Two Souls',
    bg: '#F7E5DC',
  },
  {
    id: 'm5',
    image: '/couple4.jpg',
    title: 'The Sacred Promise',
    subtitle: 'Standing together for a lifetime',
    tag: 'Promise',
    bg: '#F1D6CC',
  },
  {
    id: 'm6',
    image: '/reception.jpg',
    title: 'Royal Evening',
    subtitle: 'An unforgettable celebration of two hearts',
    tag: 'Celebration',
    bg: '#FAF0D4',
  },
];

export function CeramicGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<MomentCard | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Duplicate for seamless 50% loop
  const marqueeCards = [...MOMENTS, ...MOMENTS];

  return (
    <section id="memories" className="relative w-full py-16 sm:py-24 bg-[#FAF4E8] overflow-hidden">
      
      {/* Section Header matching "Studio Picks" / "You Might Also Like" in reference */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-10 sm:mb-14">
        <div className="flex items-center justify-center gap-2 mb-2">
          <CeramicDaisy className="w-5 h-5" petalColor="#6B2634" centerColor="#EDB355" />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#D45D52]">
            Studio Showcase
          </span>
          <CeramicDaisy className="w-5 h-5" petalColor="#6B2634" centerColor="#EDB355" />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#6B2634]">
          Cherished Moments
        </h2>

        <div className="flex justify-center my-2">
          <SquigglyWave className="w-20 h-4 text-[#D45D52]" />
        </div>

        <p className="font-sans text-sm sm:text-base text-[#2A1F1E]/75 max-w-xl mx-auto">
          {wedding.story.paragraph}
        </p>

        <p className="font-sans text-xs text-[#6B2634] font-semibold mt-2">
          (Hover to pause • Click any portrait to view in full resolution)
        </p>
      </div>

      {/* Marquee Track with Arched Ceramic Cards */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        <div className="polaroid-marquee-track px-4 space-x-5 sm:space-x-7">
          {marqueeCards.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              onClick={() => setSelectedPhoto(card)}
              className="cursor-pointer shrink-0 w-[240px] sm:w-[280px] group flex flex-col items-center text-center"
            >
              {/* Arched Top Ceramic Container matching reference niches */}
              <div
                className="relative w-full aspect-[4/5] rounded-t-[54px] sm:rounded-t-[68px] rounded-b-[20px] p-3.5 sm:p-4.5 overflow-hidden border border-[#2A1F1E]/10 shadow-[0_6px_20px_rgba(70,40,35,0.06)] group-hover:shadow-[0_12px_30px_rgba(70,40,35,0.14)] group-hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: card.bg }}
              >
                {/* Pill tag on card */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-[#FFFBF3]/90 backdrop-blur-xs text-[#2A1F1E] font-sans text-[10px] sm:text-xs font-bold px-3 py-0.5 rounded-full border border-[#2A1F1E]/15 shadow-2xs">
                  {card.tag}
                </div>

                <div className="w-full h-full rounded-t-[44px] sm:rounded-t-[56px] rounded-b-[12px] overflow-hidden bg-[#FAF4E8]">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Title & Subtitle in reference style */}
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#6B2634] mt-3 group-hover:text-[#D45D52] transition-colors">
                {card.title}
              </h3>
              <p className="font-sans text-xs text-[#2A1F1E]/65 mt-0.5">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.title}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#FFFBF3] border-2 border-[#2A1F1E]/20 rounded-[28px] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] select-none"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close Lightbox"
                className="absolute top-4 right-4 w-9 h-9 bg-[#6B2634] text-white rounded-full flex items-center justify-center hover:bg-[#521B26] transition-colors cursor-pointer text-sm font-bold shadow-sm"
              >
                ✕
              </button>

              {/* Arched image viewport */}
              <div className="relative w-full aspect-square rounded-t-[48px] rounded-b-[16px] overflow-hidden bg-[#FAF4E8] border border-[#2A1F1E]/10">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-2xl font-bold text-[#6B2634]">
                    {selectedPhoto.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[#2A1F1E]/70 mt-0.5">
                    {selectedPhoto.subtitle}
                  </p>
                </div>
                <span className="px-3.5 py-1 bg-[#DCE4D8] text-[#3A4C37] font-sans text-xs font-bold rounded-full">
                  {selectedPhoto.tag}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
