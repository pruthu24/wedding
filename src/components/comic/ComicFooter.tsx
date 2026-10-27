import { wedding } from '../../config/wedding';

export function ComicFooter() {
  const { groom, bride } = wedding.couple;

  return (
    <footer className="relative w-full bg-[#3D2E24] text-[#FAF4E8] border-t-2 border-[#B69A62]/30 pt-14 pb-16 px-6 text-center select-none">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 text-2xl mb-3 opacity-80">
          <span>🌸</span>
          <span>🌻</span>
          <span>🕊️</span>
          <span>🌻</span>
          <span>🌸</span>
        </div>

        <p className="font-script text-2xl sm:text-3xl text-[#EAA82C] mb-1">
          With love, laughter, and lifelong memories
        </p>

        <h3 className="font-serif text-3xl sm:text-5xl font-bold text-[#FAF4E8]">
          {groom} &amp; {bride}
        </h3>

        <p className="font-hand text-lg sm:text-xl text-[#FAF4E8]/90 font-bold mt-2">
          November 18 &amp; 19, 2026 • Bengaluru, Karnataka
        </p>

        <p className="font-hand text-base text-[#FAF4E8]/75 max-w-md mx-auto mt-2 leading-relaxed">
          Venkatamma Ramaiah Kalyana Soudha, Gokula Extension, Mathikere, Bengaluru.
          We can&apos;t wait to celebrate our big day with you! ❤️
        </p>

        <div className="w-24 h-0.5 bg-[#FAF4E8]/20 mx-auto my-6" />

        <p className="font-hand text-xs text-[#FAF4E8]/50 tracking-wider uppercase">
          Illustrated Indian Storybook Celebration
        </p>
      </div>
    </footer>
  );
}
