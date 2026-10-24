import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'hero', label: 'Our Story' },
  { id: 'invitation', label: 'Invitation' },
  { id: 'memories', label: 'Moments' },
  { id: 'events', label: 'Schedule' },
  { id: 'rsvp', label: 'RSVP' },
];

export function CeramicNavbar({ onThrowConfetti }: { onThrowConfetti?: () => void }) {
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
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF4E8]/95 backdrop-blur-md border-b border-[#2A1F1E]/10 py-3.5 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Logo matching reference */}
        <button
          onClick={() => scrollTo('hero')}
          className="text-left group cursor-pointer"
        >
          <span className="font-display text-sm sm:text-base font-extrabold uppercase tracking-[0.22em] text-[#6B2634] block leading-none">
            PRITHVI &amp; VARSHINI
          </span>
          <span className="font-sans text-[10px] tracking-widest text-[#2A1F1E]/60 uppercase block mt-0.5">
            Wedding Studio • Nov 2026
          </span>
        </button>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-sans text-xs tracking-wider uppercase transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#6B2634] font-bold border-b-2 border-[#6B2634] pb-0.5'
                    : 'text-[#2A1F1E]/75 hover:text-[#6B2634] font-medium'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Badge matching pill button in reference */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onThrowConfetti}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FFFBF3] hover:bg-[#F1D6CC] text-[#2A1F1E] font-sans text-xs font-semibold rounded-full border border-[#2A1F1E]/20 shadow-xs transition-colors cursor-pointer"
          >
            <span>🌸</span>
            <span>Joy</span>
          </button>

          <button
            onClick={() => scrollTo('rsvp')}
            className="px-4 sm:px-5 py-1.5 sm:py-2 bg-[#3A4C37] hover:bg-[#2B3929] text-[#FFFBF3] font-sans text-xs font-semibold tracking-wide uppercase rounded-full shadow-sm transition-transform active:scale-95 cursor-pointer"
          >
            Save Seat (RSVP)
          </button>
        </div>
      </div>
    </header>
  );
}
