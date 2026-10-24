import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WaxSealStamp } from './StationeryArtwork';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Invitation', href: '#invitation' },
  { label: 'Our Story', href: '#story' },
  { label: 'Events', href: '#events' },
  { label: 'RSVP', href: '#rsvp' },
];

export function StationeryNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section spy
      const sections = ['hero', 'invitation', 'story', 'events', 'rsvp'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF7F0]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(73,55,43,0.06)] border-b border-[#B69A62]/30 py-2.5'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Couple Monogram / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-hidden"
            aria-label="Prithvi & Varshini Home"
          >
            <WaxSealStamp className="w-9 h-9 sm:w-10 sm:h-10 transition-transform group-hover:scale-105" />
            <div className="flex flex-col text-left">
              <span className="font-editorial text-lg sm:text-xl font-bold text-[#49372B] tracking-wide leading-none group-hover:text-[#B69A62] transition-colors">
                Prithvi &amp; Varshini
              </span>
              <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#A6B49A] font-semibold mt-0.5">
                18 &amp; 19 Nov 2026
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-editorial text-sm sm:text-base tracking-widest uppercase transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-[#B69A62] font-semibold'
                      : 'text-[#49372B]/80 hover:text-[#49372B]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 inset-x-0 h-0.5 bg-[#B69A62] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: RSVP Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#rsvp"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#B69A62] bg-[#FFFDF9] hover:bg-[#FAF7F0] text-[#49372B] font-editorial text-xs sm:text-sm tracking-wider uppercase font-semibold transition-all shadow-xs hover:shadow-sm hover:border-[#8A6D3B]"
            >
              <span>💌</span>
              <span>RSVP</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#49372B] focus:outline-hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-30 bg-[#FAF7F0]/98 backdrop-blur-lg border-b border-[#B69A62]/30 p-6 shadow-xl md:hidden text-center"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-editorial text-lg tracking-widest uppercase text-[#49372B] hover:text-[#B69A62] py-1 border-b border-[#B69A62]/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#rsvp"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex justify-center items-center gap-2 py-2.5 px-6 rounded-full bg-[#B69A62] text-[#FAF7F0] font-editorial text-sm tracking-wider uppercase font-semibold shadow-sm"
              >
                <span>💌</span>
                <span>Confirm Your RSVP</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
