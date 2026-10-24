import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'hero', label: 'Story & Milestones' },
  { id: 'invitation', label: 'Invitation' },
  { id: 'memories', label: 'Moments' },
  { id: 'events', label: 'Schedule' },
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
    <header className="sticky top-0 z-50 w-full bg-[#FFF9ED]/95 backdrop-blur-md border-b-3 border-[#2A1D18] py-3 px-4 sm:px-8 select-none shadow-xs">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand */}
        <button
          onClick={() => scrollTo('hero')}
          className="text-left group cursor-pointer flex items-center gap-2"
        >
          <span className="text-xl">🌸</span>
          <div>
            <span className="font-serif text-base sm:text-lg font-extrabold text-[#2A1D18] block leading-none">
              Prithvi &amp; Varshini
            </span>
            <span className="font-comic text-xs text-[#487A38] font-bold block mt-0.5">
              18 &amp; 19 Nov 2026 • Bengaluru
            </span>
          </div>
        </button>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-comic text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'text-[#2A1D18] font-extrabold bg-[#F5B738] px-3 py-1 rounded-full border border-[#2A1D18] shadow-xs -rotate-1'
                    : 'text-[#2A1D18]/75 hover:text-[#2A1D18] font-bold hover:bg-[#FAF7F0] px-3 py-1 rounded-full'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Celebration CTA */}
        <div className="flex items-center gap-2">
          <button
            onClick={onThrowConfetti}
            className="px-3.5 sm:px-4 py-1.5 bg-[#E8769D] hover:bg-[#d85c86] text-[#2A1D18] font-comic text-xs sm:text-sm font-bold rounded-full border-2 border-[#2A1D18] shadow-[2px_2px_0px_#2A1D18] active:translate-y-0.5 transition-transform cursor-pointer"
          >
            <span>🎊 Throw Joy!</span>
          </button>

          <button
            onClick={() => scrollTo('rsvp')}
            className="hidden sm:inline-block px-4 py-1.5 bg-[#6A9A4A] hover:bg-[#59843e] text-[#FFF9ED] font-comic text-xs sm:text-sm font-bold rounded-full border-2 border-[#2A1D18] shadow-[2px_2px_0px_#2A1D18] active:translate-y-0.5 transition-transform cursor-pointer"
          >
            RSVP
          </button>
        </div>
      </div>
    </header>
  );
}
