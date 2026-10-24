import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'hero', label: 'Our Story', icon: '🏡', color: '#FFD166' },
  { id: 'invitation', label: 'Invitation', icon: '💌', color: '#EF476F' },
  { id: 'memories', label: 'Memories', icon: '📸', color: '#06D6A0' },
  { id: 'events', label: 'Events', icon: '🎊', color: '#118AB2' },
  { id: 'rsvp', label: 'RSVP', icon: '❤️', color: '#D96C4A' },
];

export function SketchbookNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      role="banner"
      className="fixed top-3 inset-x-0 z-50 flex justify-center px-3 pointer-events-none"
    >
      <nav
        aria-label="Sketchbook Navigation"
        className="pointer-events-auto flex items-center gap-1.5 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#FFFDF8]/95 backdrop-blur-sm border-2 border-[#262626] rounded-full shadow-[2px_3px_0px_#262626] max-w-fit overflow-x-auto scrollbar-hide"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-hand transition-all duration-200 select-none ${
                isActive
                  ? 'text-[#262626] font-bold shadow-[1px_2px_0px_#262626]'
                  : 'text-[#262626]/70 hover:text-[#262626] hover:bg-[#FAF8F3]'
              }`}
              style={{
                backgroundColor: isActive ? item.color : 'transparent',
                border: isActive ? '1.5px solid #262626' : '1.5px solid transparent',
              }}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="hidden xs:inline whitespace-nowrap">{item.label}</span>
              {isActive && (
                <motion.span
                  layoutId="active-nav-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#262626] rounded-full"
                />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
