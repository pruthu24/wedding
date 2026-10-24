import { WaxSealStamp } from './StationeryArtwork';

export function StationeryFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Wedding Stationery Footer"
      className="relative w-full py-16 sm:py-20 bg-[#FAF7F0] border-t border-[#B69A62]/30 text-center select-none"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        {/* Central Monogram Wax Seal */}
        <div className="mb-4">
          <WaxSealStamp className="w-14 h-14" />
        </div>

        {/* Sanskrit Blessing */}
        <p className="font-editorial text-xs sm:text-sm tracking-[0.35em] uppercase text-[#B69A62] font-semibold mb-2">
          ॥ शुभमस्तु • कल्याणमस्तु ॥
        </p>

        {/* Closing Couple Names */}
        <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal text-[#49372B] tracking-tight">
          Prithvi &amp; Varshini
        </h3>

        <p className="font-editorial italic text-base sm:text-lg text-[#725E50] mt-2 max-w-md">
          Two families, two hearts, one unforgettable adventure.
        </p>

        {/* Event Dates & Venue Reminder */}
        <div className="my-6 flex items-center justify-center gap-3 text-xs tracking-widest uppercase text-[#725E50] flex-wrap">
          <span>18 &amp; 19 November 2026</span>
          <span>•</span>
          <span>Venkatamma Ramaiah Kalyana Soudha, Mathikere</span>
          <span>•</span>
          <span>Bengaluru</span>
        </div>

        {/* Back To Top Button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="mt-2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#B69A62]/30 bg-[#FFFDF9] hover:bg-[#F5EBDD] text-[#49372B] font-editorial text-xs uppercase tracking-widest font-semibold transition-all shadow-2xs hover:shadow-xs cursor-pointer"
        >
          <span>↑</span>
          <span>Return To Top</span>
        </button>

        <p className="font-sans text-[10px] text-[#A6B49A] uppercase tracking-[0.25em] font-medium mt-8">
          Crafted with love for our beloved guests • 2026
        </p>

      </div>
    </footer>
  );
}
