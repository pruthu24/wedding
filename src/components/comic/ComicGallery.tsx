import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wedding } from '../../config/wedding';

interface ComicPhoto {
  id: string;
  image: string;
  caption: string;
  badge: string;
  rotation: number;
}

const PHOTOS: ComicPhoto[] = [
  {
    id: 'c1',
    image: '/couple.jpg',
    caption: 'Best Day Ever!',
    badge: '✨ Pure Magic',
    rotation: -2,
  },
  {
    id: 'c2',
    image: '/couple3.jpg',
    caption: 'My Favourite Human',
    badge: '❤️ Forever',
    rotation: 2.5,
  },
  {
    id: 'c3',
    image: '/couple2.jpg',
    caption: 'Made for Each Other',
    badge: '🌸 Auspicious',
    rotation: -1.8,
  },
  {
    id: 'c4',
    image: '/couple5.jpg',
    caption: 'Our Kind of Crazy',
    badge: '🎉 Best Pals',
    rotation: 2.2,
  },
  {
    id: 'c5',
    image: '/couple4.jpg',
    caption: 'Forever Starts Here',
    badge: '💍 The Promise',
    rotation: -2.5,
  },
  {
    id: 'c6',
    image: '/reception.jpg',
    caption: 'A Little More Love',
    badge: '✨ Royal Joy',
    rotation: 1.8,
  },
];

export function ComicGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<ComicPhoto | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const marqueePhotos = [...PHOTOS, ...PHOTOS];

  return (
    <section id="memories" className="relative w-full py-16 sm:py-24 bg-[#FFF9ED] overflow-hidden select-none">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-10 sm:mb-14">
        <span className="font-comic text-xs sm:text-sm font-bold uppercase tracking-widest text-[#487A38] block">
          ~ Our Journey ~
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#2A1D18] tracking-tight mt-1">
          A Scrapbook of Memories
        </h2>

        <p className="font-comic text-base sm:text-lg text-[#2A1D18]/80 max-w-xl mx-auto mt-2">
          {wedding.story.paragraph}
        </p>

        <p className="font-comic text-xs sm:text-sm text-[#D4527D] font-bold mt-2">
          (Hover to pause • Click any photo for a full peek! 📸)
        </p>
      </div>

      {/* Marquee Track with Cartoon Polaroids */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="polaroid-marquee-track px-4 space-x-6 sm:space-x-8">
          {marqueePhotos.map((photo, idx) => (
            <div
              key={`${photo.id}-${idx}`}
              onClick={() => setSelectedPhoto(photo)}
              className="cursor-pointer shrink-0 w-[240px] sm:w-[270px] group will-change-transform"
              style={{
                transform: `rotate(${photo.rotation}deg)`,
              }}
            >
              {/* Comic Polaroid Frame */}
              <div className="relative bg-[#FAF7F0] p-3 pb-3 sm:p-3.5 sm:pb-3.5 rounded-2xl border-3 border-[#2A1D18] shadow-[5px_6px_0px_#2A1D18] group-hover:scale-105 group-hover:rotate-0 transition-transform duration-300">
                {/* Photo Aperture */}
                <div className="w-full aspect-[4/5] sm:aspect-square rounded-xl overflow-hidden border-2 border-[#2A1D18] bg-[#FFF9ED]">
                  <img
                    src={photo.image}
                    alt="Prithvi & Varshini"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.caption}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#FAF7F0] border-4 border-[#2A1D18] rounded-3xl p-5 sm:p-7 shadow-[8px_10px_0px_#2A1D18]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close Lightbox"
                className="absolute top-4 right-4 w-9 h-9 bg-[#E8769D] text-[#2A1D18] font-bold rounded-full border-2 border-[#2A1D18] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform text-sm shadow-xs"
              >
                ✕
              </button>

              <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-[#2A1D18] bg-[#FFF9ED]">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-2xl font-bold text-[#2A1D18]">
                    {selectedPhoto.caption}
                  </h4>
                  <p className="font-comic text-xs sm:text-sm text-[#487A38] font-semibold mt-0.5">
                    Varshu &amp; Pruthu • Auspicious Celebrations
                  </p>
                </div>
                <span className="px-3 py-1 bg-[#F5B738] text-[#2A1D18] font-comic text-xs font-bold rounded-full border border-[#2A1D18]">
                  {selectedPhoto.badge}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
