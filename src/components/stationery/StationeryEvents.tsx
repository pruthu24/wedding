import { motion } from 'framer-motion';
import { KuthuVilakku, SacredKalash, CornerBotanical } from './StationeryArtwork';
import { wedding } from '../../config/wedding';

export function StationeryEvents() {
  const events = wedding.events.items;

  return (
    <section
      id="events"
      aria-label="Wedding Events and Celebrations"
      className="relative w-full py-20 sm:py-28 bg-[#F5EBDD]/50 overflow-hidden select-none"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="font-editorial text-xs sm:text-sm tracking-[0.3em] uppercase text-[#B69A62] font-semibold block">
            ~ Sacred Celebrations &amp; Gatherings ~
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-normal text-[#49372B] tracking-tight mt-1.5">
            Wedding Itinerary
          </h2>
          <p className="font-editorial italic text-base sm:text-lg text-[#725E50] mt-3">
            We warmly invite you to join us across both auspicious moments in Bengaluru.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="w-12 h-px bg-[#B69A62]/40" />
            <span className="text-base text-[#B69A62]">✦</span>
            <span className="w-12 h-px bg-[#B69A62]/40" />
          </div>
        </div>

        {/* ----------------- Two Bespoke Illustrated Celebration Cards ----------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Card 1: Grand Reception */}
          {events[0] && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl bg-[#FFFDF9] border border-[#B69A62]/40 p-6 sm:p-10 shadow-[0_10px_35px_rgba(73,55,43,0.07)] flex flex-col justify-between group"
              style={{
                boxShadow:
                  '0 1px 3px rgba(73,55,43,0.04), 0 12px 30px -6px rgba(73,55,43,0.08), inset 0 0 0 1px rgba(255,255,255,0.9), inset 0 0 0 5px #FAF7F0, inset 0 0 0 6px rgba(182,154,98,0.2)',
              }}
            >
              <CornerBotanical className="absolute top-3.5 left-3.5 w-10 h-10 opacity-70" />
              <CornerBotanical className="absolute top-3.5 right-3.5 w-10 h-10 opacity-70" flipX />

              <div>
                {/* Event Category Tag */}
                <div className="text-center pt-2 mb-4">
                  <span className="font-editorial text-xs tracking-[0.25em] uppercase text-[#B69A62] font-semibold px-3 py-1 rounded-full border border-[#B69A62]/30 bg-[#FAF7F0]">
                    Evening Celebrations
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-[#49372B] text-center tracking-wide">
                  {events[0].name}
                </h3>

                {/* Illustrated Watercolor Vignette for Reception (Festive Lights & Floral Arch) */}
                <div className="my-6 relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#B69A62]/25 bg-[#FAF7F0] flex items-center justify-center">
                  <img
                    src="/reception.jpg"
                    alt="Reception Celebration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating badge */}
                  <span className="absolute bottom-3 left-4 text-xs font-editorial text-[#FAF7F0] tracking-widest uppercase font-semibold drop-shadow-sm">
                    Festive Lights &amp; Dinner
                  </span>
                </div>

                {/* Date & Time Capsule */}
                <div className="space-y-3 py-3 border-y border-[#B69A62]/20">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#B69A62]/40 flex items-center justify-center text-sm shrink-0">
                      📅
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#725E50] font-sans font-semibold block">
                        Date &amp; Day
                      </span>
                      <p className="font-editorial text-base sm:text-lg font-bold text-[#49372B]">
                        {events[0].date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#B69A62]/40 flex items-center justify-center text-sm shrink-0">
                      ⏰
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#725E50] font-sans font-semibold block">
                        Time
                      </span>
                      <p className="font-editorial text-base sm:text-lg font-bold text-[#49372B]">
                        {events[0].time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#B69A62]/40 flex items-center justify-center text-sm shrink-0 mt-0.5">
                      📍
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#725E50] font-sans font-semibold block">
                        Auspicious Venue
                      </span>
                      <p className="font-editorial text-sm sm:text-base text-[#49372B] leading-snug">
                        {events[0].venue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: View Venue Map */}
              <div className="mt-6 pt-2">
                <a
                  href={events[0].routeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-[#B69A62] bg-[#FFFDF9] hover:bg-[#FAF7F0] text-[#49372B] font-editorial text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold transition-all shadow-xs hover:shadow-md hover:border-[#8A6D3B]"
                >
                  <span>📍</span>
                  <span>View Venue Map &amp; Directions</span>
                </a>
              </div>
            </motion.div>
          )}

          {/* Card 2: Auspicious Muhurtham (Wedding Ceremony) */}
          {events[1] && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative rounded-3xl bg-[#FFFDF9] border border-[#B69A62]/40 p-6 sm:p-10 shadow-[0_10px_35px_rgba(73,55,43,0.07)] flex flex-col justify-between group"
              style={{
                boxShadow:
                  '0 1px 3px rgba(73,55,43,0.04), 0 12px 30px -6px rgba(73,55,43,0.08), inset 0 0 0 1px rgba(255,255,255,0.9), inset 0 0 0 5px #FAF7F0, inset 0 0 0 6px rgba(182,154,98,0.2)',
              }}
            >
              <CornerBotanical className="absolute top-3.5 left-3.5 w-10 h-10 opacity-70" />
              <CornerBotanical className="absolute top-3.5 right-3.5 w-10 h-10 opacity-70" flipX />

              <div>
                {/* Event Category Tag */}
                <div className="text-center pt-2 mb-4">
                  <span className="font-editorial text-xs tracking-[0.25em] uppercase text-[#B69A62] font-semibold px-3 py-1 rounded-full border border-[#B69A62]/30 bg-[#FAF7F0]">
                    Auspicious Vedic Ceremony
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-[#49372B] text-center tracking-wide">
                  {events[1].name}
                </h3>

                {/* Illustrated Watercolor Vignette for Muhurtham (Sacred Kalash & Lamp) */}
                <div className="my-6 relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#B69A62]/25 bg-[#FAF7F0] flex items-center justify-center">
                  <img
                    src="/wedding.jpg"
                    alt="Wedding Ceremony Muhurtham"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Motif Accents */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 pointer-events-none opacity-85 flex items-center gap-1.5">
                    <SacredKalash className="w-7 h-9" />
                    <KuthuVilakku className="w-6 h-12" />
                  </div>
                  <div className="absolute bottom-3 left-4 text-xs font-editorial text-[#FAF7F0] tracking-widest uppercase font-semibold drop-shadow-sm flex items-center gap-1.5">
                    <span>Dawn Muhurtham &amp; Mangalyadharanam</span>
                  </div>
                </div>

                {/* Date & Time Capsule */}
                <div className="space-y-3 py-3 border-y border-[#B69A62]/20">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#B69A62]/40 flex items-center justify-center text-sm shrink-0">
                      📅
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#725E50] font-sans font-semibold block">
                        Date &amp; Day
                      </span>
                      <p className="font-editorial text-base sm:text-lg font-bold text-[#49372B]">
                        {events[1].date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#B69A62]/40 flex items-center justify-center text-sm shrink-0">
                      ⏰
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#725E50] font-sans font-semibold block">
                        Time
                      </span>
                      <p className="font-editorial text-base sm:text-lg font-bold text-[#49372B]">
                        {events[1].time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#B69A62]/40 flex items-center justify-center text-sm shrink-0 mt-0.5">
                      📍
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#725E50] font-sans font-semibold block">
                        Auspicious Venue
                      </span>
                      <p className="font-editorial text-sm sm:text-base text-[#49372B] leading-snug">
                        {events[1].venue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button: View Venue Map */}
              <div className="mt-6 pt-2">
                <a
                  href={events[1].routeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-[#B69A62] bg-[#FFFDF9] hover:bg-[#FAF7F0] text-[#49372B] font-editorial text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold transition-all shadow-xs hover:shadow-md hover:border-[#8A6D3B]"
                >
                  <span>📍</span>
                  <span>View Venue Map &amp; Directions</span>
                </a>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
