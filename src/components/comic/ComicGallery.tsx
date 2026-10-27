import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StampPhoto {
  id: string;
  image: string;
  stampBg: string;
  rotation: number;
}

const STAMP_PHOTOS: StampPhoto[] = [
  {
    id: 'c1',
    image: '/couple.jpg',
    stampBg: '#FAF0ED',
    rotation: -2,
  },
  {
    id: 'c2',
    image: '/couple3.jpg',
    stampBg: '#EFF5ED',
    rotation: 2.5,
  },
  {
    id: 'c3',
    image: '/couple2.jpg',
    stampBg: '#FDF7EB',
    rotation: -1.8,
  },
  {
    id: 'c4',
    image: '/couple5.jpg',
    stampBg: '#FAF5EA',
    rotation: 2.2,
  },
  {
    id: 'c5',
    image: '/couple4.jpg',
    stampBg: '#EFF5ED',
    rotation: -2.5,
  },
  {
    id: 'c6',
    image: '/reception.jpg',
    stampBg: '#FAF0ED',
    rotation: 1.8,
  },
];

export function ComicGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<StampPhoto | null>(null);

  return (
    <section id="gallery" className="relative w-full py-16 sm:py-24 bg-transparent overflow-hidden select-none">
      
      {/* Section Header with Reference Styling */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-3">
          <span className="text-xl">🕊️</span>
          <span className="text-[#3D2E24]/40 text-xl font-hand">~</span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#3D2E24] tracking-tight">
            Gallery
          </h2>
          <span className="text-[#3D2E24]/40 text-xl font-hand">~</span>
          <span className="text-xl">🕊️</span>
        </div>
        <p className="font-script text-2xl sm:text-3xl text-[#557A3C] mt-2">
          Moments &amp; Memories of Us
        </p>
      </div>

      {/* Postage Stamp Photo Grid (Without tags or captions) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {STAMP_PHOTOS.map((photo) => (
            <motion.div
              key={photo.id}
              whileHover={{ scale: 1.03, rotate: 0 }}
              onClick={() => setSelectedPhoto(photo)}
              className="relative p-4 sm:p-5 rounded-3xl shadow-sm hover:shadow-md cursor-pointer transition-all border-2 border-dashed border-[#3D2E24]/20 flex flex-col justify-center overflow-hidden group"
              style={{
                backgroundColor: photo.stampBg,
                transform: `rotate(${photo.rotation}deg)`,
              }}
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden border-2 border-[#3D2E24]/15 bg-white shadow-2xs">
                <img
                  src={photo.image}
                  alt="Wedding memory"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Lightbox Modal (Without captions or tags) */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-[#3D2E24]/20"
              style={{ backgroundColor: selectedPhoto.stampBg }}
            >
              <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-[#3D2E24]/20 shadow-md bg-white mb-4">
                <img
                  src={selectedPhoto.image}
                  alt="Wedding memory"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="px-7 py-2.5 bg-[#889A80] hover:bg-[#74866C] text-[#FAF4E8] font-hand text-lg font-bold rounded-full shadow-xs cursor-pointer transition-all active:scale-95"
                >
                  Close Frame 🌸
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
