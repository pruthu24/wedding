import { ComicNavbar } from './comic/ComicNavbar';
import { ComicHero } from './comic/ComicHero';
import { HorizontalStory } from './HorizontalStory';
import { ComicInvitation } from './comic/ComicInvitation';
import { ComicGallery } from './comic/ComicGallery';
import { ComicEvents } from './comic/ComicEvents';
import { ComicRSVP } from './comic/ComicRSVP';
import { ComicFooter } from './comic/ComicFooter';
import { useConfetti, ConfettiCanvas } from './doodle/ConfettiEffect';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

/**
 * Prithvi & Varshini — Illustrated Indian Storybook & Comic-Romance Adventure
 * Directly inspired by traditional hand-drawn Indian wedding caricature art.
 */
export function WeddingExperience() {
  useSmoothScroll();
  const { particles, triggerConfetti } = useConfetti();

  return (
    <div className="relative min-h-screen w-full bg-[#FFF9ED] text-[#2A1D18] font-sans selection:bg-[#F5B738] selection:text-[#2A1D18] overflow-x-hidden">
      
      {/* Top Floating / Sticky Storybook Navbar */}
      <ComicNavbar onThrowConfetti={() => triggerConfetti()} />

      {/* Confetti Particle Canvas */}
      <ConfettiCanvas particles={particles} />

      <main className="relative w-full">
        {/* 1. Hero: Toran, Ganesha, Save the Date, Milestone Comic Scroll & Grand Couple Centerpiece */}
        <ComicHero onThrowConfetti={() => triggerConfetti()} />

        {/* 2. Marigold Blessings Marquee Ticker */}
        <HorizontalStory />

        {/* 3. Sacred South Indian Mandap Family Invitation */}
        <ComicInvitation />

        {/* 4. Comic Scrapbook Memories Marquee & Full-Screen Lightbox */}
        <ComicGallery />

        {/* 5. The Wedding Itinerary (Grand Reception & Auspicious Muhurtham) */}
        <ComicEvents />

        {/* 6. The Interactive RSVP Experience & AI Concierge */}
        <ComicRSVP />

        {/* 7. Storybook Footer */}
        <ComicFooter />
      </main>

    </div>
  );
}
