import { StationeryNavbar } from './stationery/StationeryNavbar';
import { StationeryHero } from './stationery/StationeryHero';
import { HorizontalStory } from './HorizontalStory';
import { StationeryInvitation } from './stationery/StationeryInvitation';
import { StationeryGallery } from './stationery/StationeryGallery';
import { StationeryEvents } from './stationery/StationeryEvents';
import { StationeryRSVP } from './stationery/StationeryRSVP';
import { StationeryFooter } from './stationery/StationeryFooter';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

/**
 * Prithvi & Varshini — Bespoke Illustrated Indian Wedding Stationery Experience
 * Inspired by luxury hand-drawn illustrations, delicate watercolor washes,
 * traditional Indian wedding motifs, and refined editorial web design.
 */
export function WeddingExperience() {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen w-full bg-[#FAF7F0] text-[#49372B] font-editorial selection:bg-[#B69A62]/30 selection:text-[#49372B] overflow-x-hidden">
      
      {/* 1. Bespoke Illustrated Stationery Navbar */}
      <StationeryNavbar />

      <main className="relative w-full">
        {/* 2. Hero: Mandap Canopy, Ganesha Inscription, Calligraphy Names, Countdown & Drifting Petals */}
        <StationeryHero />

        {/* 3. Auspicious Blessings Marquee Ticker */}
        <HorizontalStory />

        {/* 4. Sacred Digital Invitation Letter (Indira Balaram Family And Potham Family) */}
        <StationeryInvitation />

        {/* 5. Botanical Scrapbook Photo Gallery & Lightbox */}
        <StationeryGallery />

        {/* 6. Illustrated Event Celebration Cards (Reception & Auspicious Muhurtham) */}
        <StationeryEvents />

        {/* 7. Interactive RSVP Card & AI Concierge */}
        <StationeryRSVP />

        {/* 8. Poetic Stationery Sign-Off & Sanskrit Blessings */}
        <StationeryFooter />
      </main>

    </div>
  );
}
