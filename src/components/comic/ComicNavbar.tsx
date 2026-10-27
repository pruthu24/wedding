import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fireGrandConfettiBurst } from '../doodle/ConfettiEffect';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'events', label: 'Events' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'rsvp', label: 'RSVP' },
];

export function ComicNavbar({ onThrowConfetti }: { onThrowConfetti?: () => void }) {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (const item of NAV_LINKS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF4E8]/95 backdrop-blur-md border-b-2 border-[#3D2E24]/15 py-2.5 px-4 sm:px-8 select-none shadow-xs">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand */}
        <button
          onClick={() => scrollTo('hero')}
          className="text-left group cursor-pointer flex items-center gap-3"
        >
          <img
            src="/navbar_ganesha.png"
            alt="Lord Ganesha"
            className="w-11 h-11 sm:w-13 sm:h-13 object-contain group-hover:scale-105 transition-transform shrink-0 drop-shadow-2xs"
          />
          <div>
            <span className="font-serif text-base sm:text-lg font-bold text-[#3D2E24] block leading-none">
              Prithvi Kumar &amp; Varshini
            </span>
            <span className="font-hand text-xs text-[#557A3C] font-semibold block mt-0.5">
              18 &amp; 19 Nov 2026 • Bengaluru
            </span>
          </div>
        </button>

        {/* Center Nav Links with Hand-Drawn Flourishes */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          <span className="text-[#3D2E24]/40 text-sm mr-1">🌸 ~</span>
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-hand text-base px-3.5 py-1 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#FAF4E8] font-bold bg-[#889A80] shadow-xs'
                    : 'text-[#3D2E24]/80 hover:text-[#3D2E24] hover:bg-[#889A80]/15'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <span className="text-[#3D2E24]/40 text-sm ml-1">~ 🌸</span>
        </nav>

        {/* Right Celebration CTA */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const originX = rect.left + rect.width / 2;
              const originY = rect.top + rect.height / 2;
              if (onThrowConfetti) {
                onThrowConfetti();
              } else {
                fireGrandConfettiBurst(originX, originY);
              }
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 bg-[#889A80] hover:bg-[#74866C] text-[#FAF4E8] font-hand text-sm font-bold rounded-full shadow-xs hover:shadow-sm transition-all cursor-pointer"
            title="Throw celebration confetti!"
          >
            <span>🎊</span>
            <span>Throw Joy!</span>
          </motion.button>

          <button
            onClick={() => scrollTo('rsvp')}
            className="px-3.5 sm:px-4 py-1.5 bg-[#FAF4E8] hover:bg-[#889A80]/15 text-[#3D2E24] font-hand text-sm font-bold rounded-full border border-[#3D2E24]/25 shadow-xs transition-colors cursor-pointer"
          >
            RSVP
          </button>
        </div>

      </div>
    </header>
  );
}
