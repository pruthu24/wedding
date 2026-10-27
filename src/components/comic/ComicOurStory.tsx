import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wedding } from '../../config/wedding';

interface StoryMoment {
  id: string;
  tag: string;
  title: string;
  image: string;
  date: string;
  description: string;
  tapeColor: string;
  rotation: number;
}

const STORY_MOMENTS: StoryMoment[] = [
  {
    id: 's1',
    tag: '~ first meet ~',
    title: 'The First Hello & Temple Laddus 🌸',
    image: '/couple2.jpg',
    date: 'The Beginning',
    description:
      'What was supposed to be a polite 20-minute traditional family meeting quickly turned into two hours of laughter, warm smiles, and sweet temple laddus.',
    tapeColor: '#DE8B7C',
    rotation: -2,
  },
  {
    id: 's2',
    tag: '= coffee dates =',
    title: 'Filter Coffee & 2 AM Talks ☕',
    image: '/couple4.jpg',
    date: 'Bangalore Days',
    description:
      'Countless coffee dates across Bengaluru. She ordered her brew sweet, he had his strong — and somehow, every single conversation felt effortless.',
    tapeColor: '#889A80',
    rotation: 2.5,
  },
  {
    id: 's3',
    tag: '~ the proposal ~',
    title: 'Misty Hills & The Joyful "YES!" 💍',
    image: '/couple5.jpg',
    date: 'Ooty Hills',
    description:
      'Surrounded by misty green tea gardens, sunflower meadows, and the cool mountain breeze of Ooty, she said the most joyful YES of all!',
    tapeColor: '#EAA82C',
    rotation: -1.5,
  },
];

export function ComicOurStory() {
  const [selectedMoment, setSelectedMoment] = useState<StoryMoment | null>(null);
  const guestNames = wedding.blessingsMarquee?.names || [
    'Ramakanth',
    'Varshini P S',
    'Kumar',
    'Rahul',
    'Harish',
    'Hanumantha',
    'Kallu',
    'Farnandes',
    'Gagan',
    'Drake',
  ];

  return (
    <section id="story" className="relative w-full py-12 sm:py-20 select-none overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with Hand-Drawn Flourishes */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3">
            <span className="text-[#3D2E24]/40 text-xl font-hand">~ 🌸</span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#3D2E24] tracking-tight">
              Our Story
            </h2>
            <span className="text-[#3D2E24]/40 text-xl font-hand">🌸 ~</span>
          </div>
          <p className="font-script text-xl sm:text-2xl text-[#557A3C] mt-1">
            Two Hearts, One Beautiful Journey
          </p>
        </div>

        {/* Story Card Container with Illustrated Dotted Journey Trail */}
        <div className="relative bg-[#FAF4E8]/90 sm:bg-[#FAF4E8]/95 backdrop-blur-xs rounded-3xl border-2 border-[#3D2E24]/20 shadow-md p-6 sm:p-10 overflow-hidden">
          
          {/* Whimsical Journey Dotted Trail (Bicycle, Teapots, Floating Hearts & Stars from Reference) */}
          <div className="w-full flex justify-center mb-8">
            <img
              src="/storybook_journey_trail.png"
              alt="Whimsical Romance Journey Trail with Bicycle, Teapots, Floating Hearts and Stars"
              className="w-full max-w-xl h-auto object-contain drop-shadow-2xs"
            />
          </div>

          {/* Narrative Story Paragraph */}
          <div className="max-w-2xl mx-auto text-center mb-10">
            <p className="font-hand text-xl sm:text-2xl text-[#3D2E24] leading-relaxed">
              We are deeply grateful for the kindness, prayers, and warmth we have received from you since our engagement. As we look forward to our wedding, your presence would make this joyous occasion even more special. We eagerly await celebrating together and creating beautiful memories that will last a lifetime.
            </p>
          </div>

          {/* Taped Polaroid Memories (Scrapbook Postcards with Washi Tape) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {STORY_MOMENTS.map((moment) => (
              <motion.div
                key={moment.id}
                whileHover={{ scale: 1.03, rotate: 0 }}
                onClick={() => setSelectedMoment(moment)}
                className="relative bg-[#FFFFFF] rounded-2xl p-4 shadow-sm hover:shadow-md border border-[#3D2E24]/15 cursor-pointer transition-all flex flex-col justify-between"
                style={{ transform: `rotate(${moment.rotation}deg)` }}
              >
                {/* Washi Tape Accent */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 opacity-90 rounded-xs shadow-2xs rotate-1 z-10"
                  style={{ backgroundColor: moment.tapeColor }}
                />

                {/* Photo */}
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-[#FAF4E8]">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption */}
                <div className="text-center pt-1">
                  <span className="font-hand text-xs text-[#557A3C] font-bold block uppercase tracking-wider">
                    {moment.tag}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#3D2E24] mt-0.5">
                    {moment.title}
                  </h4>
                  <p className="font-hand text-sm text-[#3D2E24]/75 line-clamp-2 mt-1">
                    {moment.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Rolling Family Blessings Marquee Ribbon at bottom */}
          <div className="mt-12 pt-6 border-t-2 border-dashed border-[#3D2E24]/15">
            <p className="text-center font-hand text-sm text-[#557A3C] font-bold uppercase tracking-widest mb-2">
              🌸 With the loving blessings of our families &amp; friends 🌸
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
              {guestNames.map((name, i) => (
                <span
                  key={i}
                  className="inline-block px-3 py-1 bg-[#889A80]/15 text-[#3D2E24] font-hand text-sm font-bold rounded-full border border-[#889A80]/30 shadow-2xs"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Expanded Story Modal Lightbox */}
      <AnimatePresence>
        {selectedMoment && (
          <div
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedMoment(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-[#FAF4E8] border-2 border-[#3D2E24]/30 rounded-3xl p-6 sm:p-7 shadow-xl text-center"
            >
              <div
                className="inline-block px-4 py-1 text-white font-hand text-sm font-bold rounded-full mb-3"
                style={{ backgroundColor: selectedMoment.tapeColor }}
              >
                {selectedMoment.tag}
              </div>

              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-white border border-[#3D2E24]/15">
                <img
                  src={selectedMoment.image}
                  alt={selectedMoment.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#3D2E24]">
                {selectedMoment.title}
              </h3>
              <p className="font-hand text-lg text-[#3D2E24]/85 mt-2 leading-relaxed">
                {selectedMoment.description}
              </p>

              <button
                type="button"
                onClick={() => setSelectedMoment(null)}
                className="mt-5 px-6 py-2 bg-[#889A80] hover:bg-[#74866C] text-[#FAF4E8] font-hand text-lg font-bold rounded-full shadow-xs cursor-pointer transition-all"
              >
                Close Moment 🌸
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
