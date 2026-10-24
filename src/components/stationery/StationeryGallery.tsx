import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CornerBotanical } from './StationeryArtwork';
import { wedding } from '../../config/wedding';

interface StoryPhoto {
  id: string;
  image: string;
  title: string;
  caption: string;
  tag: string;
  aspect: string;
}

const STORY_PHOTOS: StoryPhoto[] = [
  {
    id: 'sp1',
    image: '/couple.jpg',
    title: 'A Beautiful Beginning',
    caption: 'Two souls finding their shared rhythm amidst laughter, tea, and endless conversations.',
    tag: 'Chapter I',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'sp2',
    image: '/couple2.jpg',
    title: 'Temple Bells & Sweet Laddus',
    caption: 'Our first auspicious meeting — what was meant to be twenty minutes became two hours.',
    tag: 'Chapter II',
    aspect: 'aspect-square',
  },
  {
    id: 'sp3',
    image: '/couple4.jpg',
    title: 'Bangalore Filter Coffee',
    caption: 'Steaming davarah tumblers, shared dreams, and counting the days to forever.',
    tag: 'Chapter III',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'sp4',
    image: '/couple5.jpg',
    title: 'The Misty Hills Proposal',
    caption: 'Surrounded by mountain air, whispering pines, and the happiest "Yes" in the world.',
    tag: 'Chapter IV',
    aspect: 'aspect-square',
  },
  {
    id: 'sp5',
    image: '/couple3.jpg',
    title: 'Pure Serendipity',
    caption: 'Every little path leading right here — to celebrating with everyone we cherish most.',
    tag: 'Chapter V',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'sp6',
    image: '/wedding.jpg',
    title: 'Together In Harmony',
    caption: 'Two families uniting under the sacred mantram of love, trust, and everlasting joy.',
    tag: 'Chapter VI',
    aspect: 'aspect-square',
  },
];

export function StationeryGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<StoryPhoto | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPhoto(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="story"
      aria-label="Couple Story and Photo Album"
      className="relative w-full py-20 sm:py-28 stationery-paper overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="font-editorial text-xs sm:text-sm tracking-[0.3em] uppercase text-[#B69A62] font-semibold block">
            ~ Botanical Scrapbook Album ~
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#49372B] tracking-tight mt-1.5">
            The Story of Us
          </h2>
          <p className="font-editorial italic text-base sm:text-lg text-[#725E50] mt-3 leading-relaxed">
            {wedding.story.paragraph}
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-[#B69A62]/40" />
            <span className="text-xs tracking-widest uppercase text-[#B69A62] font-semibold">
              Click any portrait to view full memory
            </span>
            <span className="w-8 h-px bg-[#B69A62]/40" />
          </div>
        </div>

        {/* ----------------- Curated Editorial Stationery Album Grid ----------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STORY_PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => setSelectedPhoto(photo)}
              className="cursor-pointer group flex flex-col"
            >
              {/* Luxury Stationery Photo Card */}
              <div
                className="relative bg-[#FFFDF9] p-4 pb-5 rounded-2xl border border-[#B69A62]/35 shadow-[0_4px_20px_rgba(73,55,43,0.06)] group-hover:shadow-[0_12px_30px_rgba(73,55,43,0.12)] transition-shadow duration-300"
                style={{
                  boxShadow:
                    '0 1px 3px rgba(73,55,43,0.04), 0 8px 24px -4px rgba(73,55,43,0.07), inset 0 0 0 1px rgba(255,255,255,0.8)',
                }}
              >
                {/* Botanical Accent on Top Corner */}
                <CornerBotanical className="absolute top-2.5 right-2.5 w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity" flipX />

                {/* Chapter Tag */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-editorial text-xs tracking-[0.2em] uppercase text-[#B69A62] font-semibold">
                    {photo.tag}
                  </span>
                  <span className="text-[11px] text-[#A6B49A] font-sans">
                    ✦
                  </span>
                </div>

                {/* Image Aperture with Fine Ivory Border */}
                <div className={`relative w-full ${photo.aspect} rounded-xl overflow-hidden border border-[#B69A62]/25 bg-[#FAF7F0]`}>
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Poetic Caption & Title */}
                <div className="mt-3.5 text-center px-1">
                  <h3 className="font-editorial text-lg sm:text-xl font-normal text-[#49372B] tracking-wide group-hover:text-[#B69A62] transition-colors">
                    {photo.title}
                  </h3>
                  <p className="font-editorial italic text-xs sm:text-sm text-[#725E50] mt-1 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>

                {/* Understated Read More Prompt */}
                <div className="mt-3 pt-2.5 border-t border-[#B69A62]/15 flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-widest text-[#B69A62] font-semibold">
                  <span>View Memory</span>
                  <span>→</span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ----------------- Accessible Stationery Lightbox Modal ----------------- */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.title}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#FFFDF9] border border-[#B69A62]/60 rounded-3xl p-6 sm:p-8 shadow-2xl"
              style={{
                boxShadow:
                  '0 20px 50px -10px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.9), inset 0 0 0 5px #FAF7F0, inset 0 0 0 6px rgba(182,154,98,0.3)',
              }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo view"
                className="absolute top-4 right-4 w-9 h-9 rounded-full border border-[#B69A62]/40 bg-[#FAF7F0] text-[#49372B] flex items-center justify-center hover:bg-[#B69A62] hover:text-[#FAF7F0] transition-colors focus:outline-hidden text-sm"
              >
                ✕
              </button>

              <span className="font-editorial text-xs uppercase tracking-[0.25em] text-[#B69A62] font-semibold block">
                {selectedPhoto.tag}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#49372B] mt-0.5">
                {selectedPhoto.title}
              </h3>

              {/* Full Image */}
              <div className="my-4 aspect-[4/3] rounded-2xl overflow-hidden border border-[#B69A62]/30 bg-[#FAF7F0]">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption */}
              <p className="font-editorial italic text-sm sm:text-base text-[#49372B] leading-relaxed">
                “{selectedPhoto.caption}”
              </p>

              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#A6B49A] font-semibold mt-3 text-right">
                Prithvi &amp; Varshini • November 2026
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
