import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoodleHeart, DoodleStar } from './DoodleIcons';
import { wedding } from '../../config/wedding';

interface ScrapbookPhoto {
  id: string;
  image: string;
  caption: string;
  badge?: string;
  rotation: number;
  tapeColor: string;
}

const SCRAPBOOK_PHOTOS: ScrapbookPhoto[] = [
  {
    id: 's1',
    image: '/couple.jpg',
    caption: 'Best Day Ever!',
    badge: '✨ Pure Magic',
    rotation: -2.5,
    tapeColor: '#FFD166',
  },
  {
    id: 's2',
    image: '/couple3.jpg',
    caption: 'My Favourite Human',
    badge: '❤️ Forever',
    rotation: 2.2,
    tapeColor: '#EF476F',
  },
  {
    id: 's3',
    image: '/couple2.jpg',
    caption: 'Made for Each Other',
    badge: '💍 Auspicious',
    rotation: -1.8,
    tapeColor: '#06D6A0',
  },
  {
    id: 's4',
    image: '/couple5.jpg',
    caption: 'Our Kind of Crazy',
    badge: '🎉 Best Pals',
    rotation: 3,
    tapeColor: '#118AB2',
  },
  {
    id: 's5',
    image: '/couple4.jpg',
    caption: 'Forever Starts Here',
    badge: '💫 The Promise',
    rotation: -2.8,
    tapeColor: '#D96C4A',
  },
  {
    id: 's6',
    image: '/reception.jpg',
    caption: 'A Little More Love',
    badge: '✨ Royal Joy',
    rotation: 1.5,
    tapeColor: '#CDB4DB',
  },
];

export function ScrapbookGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<ScrapbookPhoto | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Marquee duplicates
  const marqueeItems = [...SCRAPBOOK_PHOTOS, ...SCRAPBOOK_PHOTOS];

  return (
    <section
      id="memories"
      aria-label="The Love Story Scrapbook"
      className="relative w-full py-20 sm:py-28 bg-[#FAF8F3] notebook-grid overflow-hidden"
    >
      {/* ----------------- Section Header ----------------- */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center mb-10 sm:mb-14 select-none">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFDF8] border-2 border-[#262626] rounded-full shadow-[2px_2px_0px_#262626] mb-3">
          <DoodleStar className="w-4 h-4 text-[#FFD166]" />
          <span className="font-hand text-xs uppercase tracking-widest font-bold text-[#118AB2]">
            Our Love Story
          </span>
        </div>

        <h2 className="font-doodle text-4xl sm:text-6xl md:text-7xl font-bold text-[#262626] tracking-tight">
          A Scrapbook of Memories
        </h2>

        <p className="font-hand text-base sm:text-xl text-[#262626]/80 max-w-2xl mx-auto mt-2 italic">
          {wedding.story.paragraph}
        </p>

        <p className="font-hand text-xs sm:text-sm text-[#EF476F] font-bold mt-3">
          (Hover to pause • Click any photo for a closer peek! 📸)
        </p>
      </div>

      {/* ----------------- Polaroid Marquee Track ----------------- */}
      <div className="relative w-full overflow-hidden select-none py-6">
        <div className="polaroid-marquee-track px-4 py-4 space-x-4 sm:space-x-6">
          {marqueeItems.map((photo, index) => (
            <motion.div
              key={`${photo.id}-${index}`}
              whileHover={{ scale: 1.06, rotate: 0 }}
              onClick={() => setSelectedPhoto(photo)}
              className="cursor-pointer shrink-0 will-change-transform"
              style={{
                transform: `rotate(${photo.rotation}deg)`,
              }}
            >
              {/* Polaroid Card */}
              <div className="relative w-[220px] sm:w-[260px] bg-[#FFFDF8] p-3 pb-6 rounded-sm border-2 border-[#262626] shadow-[4px_5px_0px_#262626] transition-all">
                
                {/* Washi tape on corner */}
                <div
                  className="absolute -top-3 left-6 w-16 sm:w-20 h-5 border border-[#262626]/40 shadow-xs -rotate-3 z-10 pointer-events-none"
                  style={{
                    backgroundColor: photo.tapeColor,
                    clipPath: 'polygon(0% 12%, 4% 0%, 96% 0%, 100% 12%, 98% 88%, 95% 100%, 4% 100%, 0% 88%)',
                  }}
                />

                {/* Sticker Badge */}
                {photo.badge && (
                  <div className="absolute top-2 right-2 z-10 bg-[#FFD166] text-[#262626] font-doodle text-xs font-bold px-2 py-0.5 rounded-full border border-[#262626] shadow-xs rotate-6 pointer-events-none">
                    {photo.badge}
                  </div>
                )}

                {/* Photo aperture */}
                <div className="relative w-full aspect-square overflow-hidden rounded-xs border border-[#262626]/20 bg-[#EDE4D5]">
                  <img
                    src={photo.image}
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Handwritten caption */}
                <div className="mt-3 text-center px-1">
                  <p className="font-doodle text-lg sm:text-xl font-bold text-[#262626] leading-tight">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ----------------- Accessible Lightbox ----------------- */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.caption}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#FFFDF8] border-3 border-[#262626] rounded-sm p-4 sm:p-6 shadow-[8px_10px_0px_#262626] select-none"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close Lightbox"
                className="absolute -top-3.5 -right-3.5 w-9 h-9 bg-[#EF476F] text-white font-bold rounded-full border-2 border-[#262626] shadow-[2px_2px_0px_#262626] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform text-lg"
              >
                ✕
              </button>

              {/* Large Image */}
              <div className="relative w-full aspect-square overflow-hidden rounded-xs border-2 border-[#262626] bg-[#EDE4D5]">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption & Badges */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-doodle text-2xl sm:text-3xl font-extrabold text-[#262626]">
                    {selectedPhoto.caption}
                  </h3>
                  <p className="font-hand text-xs text-[#D96C4A] font-semibold mt-0.5">
                    Varshini &amp; Prithvi • Auspicious Celebrations
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[#EF476F]">
                  <DoodleHeart className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
