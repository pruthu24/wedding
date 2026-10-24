import { wedding } from '../../config/wedding';

export function ComicFooter() {
  const { groom, bride } = wedding.couple;

  return (
    <footer className="relative w-full bg-[#2A1D18] text-[#FFF9ED] border-t-4 border-[#2A1D18] pt-12 pb-14 px-6 text-center select-none">
      <div className="max-w-4xl mx-auto">
        <div className="text-3xl mb-3">🌻 🌸 🌻</div>

        <h3 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#FFF9ED]">
          {groom} &amp; {bride}
        </h3>

        <p className="font-comic text-base sm:text-lg text-[#F5B738] font-bold mt-2">
          November 18 &amp; 19, 2026 • Bengaluru, Karnataka
        </p>

        <p className="font-comic text-sm text-[#FFF9ED]/75 max-w-md mx-auto mt-2 leading-relaxed">
          Venkatamma Ramaiah Kalyana Soudha, Gokula Extension, Mathikere, Bengaluru.
          We can&apos;t wait to celebrate our big day with you! ❤️
        </p>

        <div className="w-24 h-0.5 bg-[#FFF9ED]/20 mx-auto my-6" />

        <p className="font-comic text-xs text-[#FFF9ED]/50 tracking-wider uppercase">
          Illustrated Indian Storybook &amp; Comic-Romance Adventure
        </p>
      </div>
    </footer>
  );
}
