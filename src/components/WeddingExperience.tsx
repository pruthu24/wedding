import { HeroTemple } from './HeroTemple';
import { HorizontalStory } from './HorizontalStory';
import { GaneshaInvitation } from './GaneshaInvitation';
import { StorySection } from './StorySection';
import { EventsSection } from './EventsSection';
import { RsvpSection } from './RsvpSection';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

/**
 * The whole storybook, in order. Each scene carries its own background, so
 * the joins between them are handled by the gradients at the top and bottom
 * of each section rather than by a shared page background.
 */
export function WeddingExperience() {
  useSmoothScroll();

  return (
    <main className="relative w-full">
      <HeroTemple />
      <HorizontalStory />
      <GaneshaInvitation />
      <StorySection />
      <EventsSection />
      <RsvpSection />
    </main>
  );
}
