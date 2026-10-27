import { wedding } from '../../config/wedding';

export function ComicEvents() {
  const events = wedding.events.items;
  const reception = events.find((e) => e.id === 'reception') || events[0];
  const ceremony = events.find((e) => e.id === 'wedding') || events[1];

  const EVENT_CARDS = [
    {
      id: 'reception',
      title: 'Grand Reception',
      image: '/event_reception.jpg',
      imageAlt: 'Illustrated Grand Reception of Prithvi & Varshini on Stage in Royal Blue Outfits with Family and Friends',
      badge: 'Music, Feasting & Joy 🕺✨',
      borderColor: 'border-[#DE8B7C]/40',
      tagBg: 'bg-[#DE8B7C]',
      date: 'Wednesday, 18th November 2026',
      time: reception.time || '6:30 PM Onwards',
      venue: 'Venkatamma Ramaiah Kalyana Soudha, Gokula Extension, Mathikere, Bengaluru',
      routeUrl: reception.routeUrl || 'https://maps.app.goo.gl/QhoFSfF5ETn89EUR7',
      buttonText: 'See The Route 📍',
    },
    {
      id: 'wedding',
      title: 'Wedding Ceremony (Muhurtham)',
      image: '/event_muhurtham.jpg',
      imageAlt: 'Traditional South Indian Muhurtham Ceremony with Groom Tying Mangalsutra, Sacred Agni, Family Elders and Musicians',
      badge: 'Auspicious Muhurtham 🌸',
      borderColor: 'border-[#EAA82C]/40',
      tagBg: 'bg-[#EAA82C]',
      date: 'Thursday, 19th November 2026',
      time: ceremony.time || '4:40 AM Onwards (Muhurtham)',
      venue: 'Venkatamma Ramaiah Kalyana Soudha, Gokula Extension, Mathikere, Bengaluru',
      routeUrl: ceremony.routeUrl || 'https://maps.app.goo.gl/QhoFSfF5ETn89EUR7',
      buttonText: 'See The Route 📍',
    },
  ];

  return (
    <section id="events" className="relative w-full py-16 sm:py-24 bg-transparent overflow-hidden select-none">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-3">
          <span className="text-[#3D2E24]/40 text-xl font-hand">~ 🌸</span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#3D2E24] tracking-tight">
            Wedding Events
          </h2>
          <span className="text-[#3D2E24]/40 text-xl font-hand">🌸 ~</span>
        </div>
        <p className="font-script text-2xl sm:text-3xl text-[#557A3C] mt-2">
          Celebrate each auspicious moment with us
        </p>
      </div>

      {/* 2-Column Grand Illustrated Event Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {EVENT_CARDS.map((card) => (
            <div
              key={card.id}
              className={`relative rounded-3xl bg-[#FAF4E8]/95 backdrop-blur-xs border-2 ${card.borderColor} shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden group`}
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-4 py-1.5 ${card.tagBg} text-white font-hand text-sm font-bold rounded-full shadow-2xs`}>
                    {card.badge}
                  </span>
                  <span className="font-hand text-xs text-[#3D2E24]/60 font-semibold">
                    18 &amp; 19 Nov 2026
                  </span>
                </div>

                {/* Event Name */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2E24] mt-2 mb-4 text-center sm:text-left">
                  {card.title}
                </h3>

                {/* Large, Beautiful Showcase Artwork */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/70 border border-[#3D2E24]/15 shadow-sm my-4 flex items-center justify-center p-2 group-hover:scale-[1.01] transition-transform duration-300">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="w-full h-full object-contain drop-shadow-xs"
                  />
                </div>

                {/* Event Details Box */}
                <div className="space-y-3 font-hand text-base sm:text-lg my-6 bg-white/60 border border-dashed border-[#3D2E24]/20 rounded-2xl p-4 sm:p-5 text-[#3D2E24]">
                  <p className="flex items-center gap-3">
                    <span className="text-xl shrink-0">📅</span>
                    <span className="font-bold">{card.date}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-xl shrink-0">⏰</span>
                    <span className="font-bold text-[#DE8B7C]">{card.time}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-xl shrink-0 mt-0.5">📍</span>
                    <span className="font-medium text-[#3D2E24]/85 leading-snug">{card.venue}</span>
                  </p>
                </div>
              </div>

              {/* Action Button: "See the route" */}
              <a
                href={card.routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 inline-flex items-center justify-center gap-2 px-6 bg-[#889A80] hover:bg-[#74866C] text-white font-hand text-lg sm:text-xl font-bold rounded-full shadow-xs hover:shadow-md active:scale-95 transition-all text-center mt-2 cursor-pointer"
              >
                <span>{card.buttonText}</span>
              </a>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
