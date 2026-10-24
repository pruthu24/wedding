import { CeramicDaisy, CeramicTulip, SquigglyWave } from './CeramicOrnaments';
import { wedding } from '../../config/wedding';

export function CeramicEvents() {
  const events = wedding.events.items;
  const reception = events.find((e) => e.id === 'reception') || events[0];
  const ceremony = events.find((e) => e.id === 'wedding') || events[1];

  return (
    <section id="events" className="relative w-full py-16 sm:py-24 bg-[#FAF4E8] overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12 sm:mb-16">
        <div className="flex items-center justify-center gap-2 mb-2">
          <CeramicDaisy className="w-5 h-5" petalColor="#6B2634" centerColor="#EDB355" />
          <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#D45D52]">
            Curated Programme
          </span>
          <CeramicDaisy className="w-5 h-5" petalColor="#6B2634" centerColor="#EDB355" />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#6B2634]">
          The Wedding Itinerary
        </h2>

        <div className="flex justify-center my-2">
          <SquigglyWave className="w-20 h-4 text-[#D45D52]" />
        </div>

        <p className="font-sans text-sm sm:text-base text-[#2A1F1E]/75 max-w-lg mx-auto">
          We eagerly look forward to welcoming you for two joyful days of South Indian traditions and feasts.
        </p>
      </div>

      {/* Events Grid matching the reference layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* ==================== CARD 1: RECEPTION ==================== */}
          <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#D45D52] text-[#FFFBF3] p-7 sm:p-9 shadow-[0_16px_36px_rgba(212,93,82,0.18)] flex flex-col justify-between overflow-hidden group">
            
            {/* Top Flowers Accent */}
            <div className="absolute top-4 right-4 pointer-events-none opacity-80">
              <CeramicDaisy className="w-10 h-10" petalColor="#FFFBF3" centerColor="#EDB355" />
            </div>

            <div>
              {/* Arched Event Picture Niche */}
              <div className="relative w-full aspect-[16/10] rounded-t-[36px] rounded-b-[16px] overflow-hidden bg-[#FAF4E8] mb-6 border border-[#FFFBF3]/20 shadow-inner">
                <img
                  src={reception.image || '/reception.jpg'}
                  alt={reception.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#6B2634] text-[#FFFBF3] font-sans text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Evening Soirée
                </div>
              </div>

              {/* Tag & Title */}
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#FFFBF3]/80 font-bold block">
                The Celebration Begins
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#FFFBF3] mt-1">
                {reception.name}
              </h3>

              {/* Event Details */}
              <div className="space-y-2 font-sans my-5 border-y border-[#FFFBF3]/25 py-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#FFFBF3] text-[#D45D52] flex items-center justify-center text-xs font-bold shrink-0">
                    📅
                  </span>
                  <span className="text-sm sm:text-base font-semibold">{reception.date}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#EDB355] text-[#2A1F1E] flex items-center justify-center text-xs font-bold shrink-0">
                    ⏰
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#EDB355]">{reception.time}</span>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <span className="w-7 h-7 rounded-full bg-[#FFFBF3] text-[#D45D52] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    📍
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed">{reception.venue}</span>
                </div>
              </div>

              <p className="font-sans text-xs text-[#FFFBF3]/85 italic">
                Evening suits, silk gowns, music and celebration dinner.
              </p>
            </div>

            {/* Pill CTA Button (Matching "Add to Bag" pill in reference) */}
            <div className="mt-6 pt-2">
              <a
                href={reception.routeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFFBF3] hover:bg-[#FAF0D4] text-[#D45D52] font-sans text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-full shadow-md transition-all active:scale-95 text-center cursor-pointer"
              >
                <span>Find The Venue 📍</span>
              </a>
            </div>
          </div>

          {/* ==================== CARD 2: WEDDING CEREMONY ==================== */}
          <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#3A4C37] text-[#FFFBF3] p-7 sm:p-9 shadow-[0_16px_36px_rgba(58,76,55,0.2)] flex flex-col justify-between overflow-hidden group">
            
            {/* Top Flowers Accent */}
            <div className="absolute top-4 right-4 pointer-events-none opacity-80">
              <CeramicTulip className="w-8 h-12" flowerColor="#EDB355" stemColor="#8F9F86" />
            </div>

            <div>
              {/* Arched Event Picture Niche */}
              <div className="relative w-full aspect-[16/10] rounded-t-[36px] rounded-b-[16px] overflow-hidden bg-[#FAF4E8] mb-6 border border-[#FFFBF3]/20 shadow-inner">
                <img
                  src={ceremony.image || '/wedding.jpg'}
                  alt={ceremony.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#EDB355] text-[#2A1F1E] font-sans text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Traditional Muhurtham
                </div>
              </div>

              {/* Tag & Title */}
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#DCE4D8] font-bold block">
                The Sacred Union
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#FFFBF3] mt-1">
                {ceremony.name}
              </h3>

              {/* Event Details */}
              <div className="space-y-2 font-sans my-5 border-y border-[#FFFBF3]/25 py-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#FFFBF3] text-[#3A4C37] flex items-center justify-center text-xs font-bold shrink-0">
                    📅
                  </span>
                  <span className="text-sm sm:text-base font-semibold">{ceremony.date}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#EDB355] text-[#2A1F1E] flex items-center justify-center text-xs font-bold shrink-0">
                    ⏰
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#EDB355]">{ceremony.time}</span>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <span className="w-7 h-7 rounded-full bg-[#FFFBF3] text-[#3A4C37] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    📍
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed">{ceremony.venue}</span>
                </div>
              </div>

              <p className="font-sans text-xs text-[#DCE4D8] italic">
                Auspicious dawn ceremony followed by authentic South Indian plantain leaf feast.
              </p>
            </div>

            {/* Pill CTA Button */}
            <div className="mt-6 pt-2">
              <a
                href={ceremony.routeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#EDB355] hover:bg-[#f3bf65] text-[#2A1F1E] font-sans text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-full shadow-md transition-all active:scale-95 text-center cursor-pointer"
              >
                <span>Find The Venue 📍</span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
