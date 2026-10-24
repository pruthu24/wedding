import { wedding } from '../../config/wedding';

export function ComicEvents() {
  const events = wedding.events.items;
  const reception = events.find((e) => e.id === 'reception') || events[0];
  const ceremony = events.find((e) => e.id === 'wedding') || events[1];

  return (
    <section id="events" className="relative w-full py-16 sm:py-24 bg-[#FFF9ED] overflow-hidden select-none">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12 sm:mb-16">
        <span className="font-comic text-xs sm:text-sm font-bold uppercase tracking-widest text-[#D4527D] block">
          ~ Join The Fun ~
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#2A1D18] tracking-tight mt-1">
          The Wedding Itinerary
        </h2>

        <p className="font-comic text-base sm:text-lg text-[#2A1D18]/80 max-w-lg mx-auto mt-2">
          Two days filled with traditional rituals, joyful laughter, and authentic South Indian feasts!
        </p>
      </div>

      {/* Event Cards Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* ==================== EVENT 1: GRAND RECEPTION ==================== */}
          <div className="relative rounded-3xl bg-[#FAF7F0] border-4 border-[#2A1D18] shadow-[6px_8px_0px_#2A1D18] p-6 sm:p-8 flex flex-col justify-between overflow-hidden group">
            
            {/* Top Comic Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3.5 py-1 bg-[#E8769D] text-[#2A1D18] font-comic text-xs font-bold rounded-full border-2 border-[#2A1D18] shadow-xs">
                Party Time! 🕺✨
              </span>
              <span className="font-comic text-sm font-bold text-[#D4527D]">
                Day 1
              </span>
            </div>

            <div>
              {/* Event Picture */}
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#2A1D18] shadow-xs mb-5 bg-[#E8F4FC]">
                <img
                  src={reception.image || '/reception.jpg'}
                  alt={reception.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2A1D18]">
                {reception.name}
              </h3>

              {/* Event Details */}
              <div className="space-y-2.5 font-comic my-5 border-y-2 border-dashed border-[#2A1D18]/25 py-4">
                <p className="flex items-center gap-2.5 text-base sm:text-lg">
                  <span className="text-xl">📅</span>
                  <span className="font-bold text-[#2A1D18]">{reception.date}</span>
                </p>
                <p className="flex items-center gap-2.5 text-base sm:text-lg">
                  <span className="text-xl">⏰</span>
                  <span className="font-bold text-[#93362E]">{reception.time}</span>
                </p>
                <p className="flex items-start gap-2.5 text-sm sm:text-base pt-1">
                  <span className="text-xl shrink-0">📍</span>
                  <span className="font-medium text-[#2A1D18]/90 leading-snug">{reception.venue}</span>
                </p>
              </div>

              <p className="font-comic text-xs sm:text-sm text-[#2A1D18]/75 italic">
                Evening Wear, Suits &amp; Gowns, dancing and grand dinner banquet!
              </p>
            </div>

            {/* Button */}
            <div className="mt-6 pt-2">
              <a
                href={reception.routeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F5B738] hover:bg-[#ffc54d] text-[#2A1D18] font-comic text-base font-bold rounded-full border-2 border-[#2A1D18] shadow-[2px_3px_0px_#2A1D18] active:translate-y-0.5 transition-all text-center cursor-pointer"
              >
                <span>Find The Venue 📍</span>
              </a>
            </div>
          </div>

          {/* ==================== EVENT 2: WEDDING CEREMONY ==================== */}
          <div className="relative rounded-3xl bg-[#FAF7F0] border-4 border-[#2A1D18] shadow-[6px_8px_0px_#2A1D18] p-6 sm:p-8 flex flex-col justify-between overflow-hidden group">
            
            {/* Top Comic Tag */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3.5 py-1 bg-[#6A9A4A] text-[#FFF9ED] font-comic text-xs font-bold rounded-full border-2 border-[#2A1D18] shadow-xs">
                Auspicious Muhurtham 💍🌸
              </span>
              <span className="font-comic text-sm font-bold text-[#487A38]">
                Day 2
              </span>
            </div>

            <div>
              {/* Event Picture */}
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#2A1D18] shadow-xs mb-5 bg-[#FFF9ED]">
                <img
                  src={ceremony.image || '/wedding.jpg'}
                  alt={ceremony.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2A1D18]">
                {ceremony.name}
              </h3>

              {/* Event Details */}
              <div className="space-y-2.5 font-comic my-5 border-y-2 border-dashed border-[#2A1D18]/25 py-4">
                <p className="flex items-center gap-2.5 text-base sm:text-lg">
                  <span className="text-xl">📅</span>
                  <span className="font-bold text-[#2A1D18]">{ceremony.date}</span>
                </p>
                <p className="flex items-center gap-2.5 text-base sm:text-lg">
                  <span className="text-xl">⏰</span>
                  <span className="font-bold text-[#487A38]">{ceremony.time}</span>
                </p>
                <p className="flex items-start gap-2.5 text-sm sm:text-base pt-1">
                  <span className="text-xl shrink-0">📍</span>
                  <span className="font-medium text-[#2A1D18]/90 leading-snug">{ceremony.venue}</span>
                </p>
              </div>

              <p className="font-comic text-xs sm:text-sm text-[#2A1D18]/75 italic">
                Traditional Silk / Formals followed by authentic plantain leaf feast! 🍃
              </p>
            </div>

            {/* Button */}
            <div className="mt-6 pt-2">
              <a
                href={ceremony.routeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#6A9A4A] hover:bg-[#59843e] text-[#FFF9ED] font-comic text-base font-bold rounded-full border-2 border-[#2A1D18] shadow-[2px_3px_0px_#2A1D18] active:translate-y-0.5 transition-all text-center cursor-pointer"
              >
                <span>Take Me There 📍</span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
