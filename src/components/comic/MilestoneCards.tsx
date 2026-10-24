import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Milestone {
  id: string;
  tag: string;
  title: string;
  date: string;
  image: string;
  badge: string;
  badgeBg: string;
  description: string;
  funFact: string;
}

const MILESTONES: Milestone[] = [
  {
    id: 'm1',
    tag: '~ first meet ~',
    title: 'Temple Bells & Laddus 🌸',
    date: 'The Very Beginning',
    image: '/couple2.jpg',
    badge: 'Love at First Sight ✨',
    badgeBg: '#F5B738',
    description:
      'What was supposed to be a polite 20-minute traditional family meeting quickly turned into two hours of laughter, warm smiles, and sweet temple laddus.',
    funFact: 'Prithvi practiced his greeting five times before saying hello!',
  },
  {
    id: 'm2',
    tag: '= coffee date =',
    title: 'Filter Coffee & 2 AM Talks ☕',
    date: 'Bangalore Days',
    image: '/couple4.jpg',
    badge: 'Unstoppable Chemistry ☕',
    badgeBg: '#E8769D',
    description:
      'Countless coffee dates across Bengaluru. She ordered her brew sweet, he had his strong — and somehow, every single conversation felt effortless.',
    funFact: 'Over 150 cups of South Indian filter coffee shared since!',
  },
  {
    id: 'm3',
    tag: '~ ooty ~ yes! ~',
    title: 'Misty Hills & The Proposal 💍',
    date: 'Forever Starts Here',
    image: '/couple5.jpg',
    badge: 'She Said YES! 🎉',
    badgeBg: '#6A9A4A',
    description:
      'Surrounded by misty green tea gardens, sunflower meadows, and the cool mountain breeze of Ooty, she said the most joyful YES of all!',
    funFact: 'Both were grinning so hard they almost forgot the ring!',
  },
];

export function MilestoneCards() {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-2 sm:px-4 my-8 sm:my-12 select-none">
      
      {/* ----------------- Golden Parchment Scroll Frame ----------------- */}
      <div className="relative bg-[#FFF9ED] border-4 border-[#2A1D18] rounded-3xl sm:rounded-[36px] shadow-[8px_10px_0px_#2A1D18] p-4 sm:p-7 overflow-hidden">
        
        {/* Top Scroll Ribbon Label */}
        <div className="flex items-center justify-between border-b-3 border-[#2A1D18]/20 pb-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">📜</span>
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#2A1D18]">
              The Story of Us • Chapter by Chapter
            </h3>
          </div>
          <span className="hidden sm:inline-block font-comic text-xs font-bold text-[#487A38] bg-[#E8F4FC] px-3 py-1 rounded-full border border-[#2A1D18]">
            Click any chapter for full story 📸
          </span>
        </div>

        {/* 3 Interactive Real Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {MILESTONES.map((m) => (
            <motion.div
              key={m.id}
              whileHover={{ scale: 1.025, rotate: 0 }}
              onClick={() => setSelectedMilestone(m)}
              className="cursor-pointer bg-[#FAF7F0] border-3 border-[#2A1D18] rounded-2xl p-3.5 pb-4 shadow-[4px_5px_0px_#2A1D18] flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Washi tape header with script tag */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="font-comic text-sm font-bold text-[#93362E]">
                    {m.tag}
                  </span>
                  <span
                    className="font-comic text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#2A1D18] shadow-2xs text-[#2A1D18]"
                    style={{ backgroundColor: m.badgeBg }}
                  >
                    {m.badge}
                  </span>
                </div>

                {/* Real Photo in Arched Frame */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#2A1D18] bg-[#FFF9ED] mb-3">
                  <img
                    src={m.image}
                    alt={m.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-2.5 text-[11px] font-bold text-[#FFF9ED] font-comic drop-shadow-sm">
                    {m.date}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#2A1D18] leading-snug group-hover:text-[#D4527D] transition-colors">
                  {m.title}
                </h4>

                {/* Short story preview */}
                <p className="font-comic text-xs sm:text-sm text-[#2A1D18]/80 mt-1.5 line-clamp-3 leading-relaxed">
                  {m.description}
                </p>
              </div>

              {/* Tap to read more pill */}
              <div className="mt-4 pt-2.5 border-t border-dashed border-[#2A1D18]/20 flex items-center justify-between text-xs font-comic font-bold text-[#2C69B2]">
                <span>Tap to read more →</span>
                <span>✨</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ----------------- Interactive Milestone Story Modal ----------------- */}
      <AnimatePresence>
        {selectedMilestone && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedMilestone.title}
            onClick={() => setSelectedMilestone(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#FFF9ED] border-4 border-[#2A1D18] rounded-3xl p-5 sm:p-7 shadow-[8px_10px_0px_#2A1D18]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedMilestone(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 bg-[#E8769D] text-[#2A1D18] font-bold rounded-full border-2 border-[#2A1D18] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform text-sm shadow-xs"
              >
                ✕
              </button>

              <span className="font-comic text-xs font-bold uppercase tracking-wider text-[#93362E] block">
                {selectedMilestone.tag}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#2A1D18] mt-0.5">
                {selectedMilestone.title}
              </h3>

              {/* Photo */}
              <div className="my-4 aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#2A1D18] bg-[#FAF7F0]">
                <img
                  src={selectedMilestone.image}
                  alt={selectedMilestone.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-comic text-sm sm:text-base text-[#2A1D18]/90 leading-relaxed">
                {selectedMilestone.description}
              </p>

              {/* Fun Fact Callout */}
              <div className="mt-4 p-3 bg-[#FAF7F0] border-2 border-dashed border-[#2A1D18] rounded-xl flex items-start gap-2.5">
                <span className="text-xl shrink-0">💡</span>
                <div>
                  <span className="font-comic text-xs font-bold text-[#93362E] block uppercase tracking-wide">
                    Fun Little Secret:
                  </span>
                  <p className="font-comic text-xs sm:text-sm text-[#2A1D18] font-medium">
                    {selectedMilestone.funFact}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
