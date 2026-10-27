import { ComicNavbar } from './comic/ComicNavbar';
import { ComicHero } from './comic/ComicHero';
import { CoupleTriviaQuiz } from './comic/CoupleTriviaQuiz';
import { ComicInvitation } from './comic/ComicInvitation';
import { ComicEvents } from './comic/ComicEvents';
import { ComicGallery } from './comic/ComicGallery';
import { ComicRSVP } from './comic/ComicRSVP';
import { ComicFooter } from './comic/ComicFooter';
import { useConfetti, ConfettiCanvas } from './doodle/ConfettiEffect';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

/**
 * Prithvi & Varshini — Illustrated Indian Storybook Wedding
 * Faithfully styled after the hand-drawn storybook design reference.
 */
export function WeddingExperience() {
  useSmoothScroll();
  const { particles, triggerConfetti } = useConfetti();

  return (
    <div className="relative min-h-screen w-full bg-[#FAF4E8] text-[#3D2E24] font-sans selection:bg-[#889A80]/30 selection:text-[#3D2E24] overflow-x-hidden">
      
      {/* Subtle, delicate watermark doodle wallpaper across entire website */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-15 select-none"
        style={{
          backgroundImage: "url('/wedding_doodle_transparent.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '520px auto',
        }}
      />
      
      {/* Top Floating / Sticky Storybook Navbar */}
      <ComicNavbar onThrowConfetti={() => triggerConfetti()} />

      {/* Confetti Particle Canvas */}
      <ConfettiCanvas particles={particles} />

      <main className="relative w-full">
        {/* 1. Hero: South Indian Wedding Ceremony Painting, Couple Names, Date & Sage Action Button */}
        <ComicHero onThrowConfetti={() => triggerConfetti()} />

        {/* 2. Interactive Guest Quiz Section (Positioned as second section with generous breathing room) */}
        <CoupleTriviaQuiz onThrowConfetti={() => triggerConfetti()} />

        {/* 3. Sacred Family Invitation */}
        <ComicInvitation />

        {/* 4. Wedding Events: Heritage Cards with Hand-Drawn Dholak, Sacred Diyas & Mehndi Icons */}
        <ComicEvents />

        {/* 5. Gallery: Scalloped Postage Stamp Photo Frames */}
        <ComicGallery />

        {/* 6. RSVP & AI Concierge */}
        <ComicRSVP />

        {/* 7. Storybook Footer */}
        <ComicFooter />
      </main>

    </div>
  );
}
