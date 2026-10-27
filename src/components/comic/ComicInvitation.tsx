import { wedding } from '../../config/wedding';

export function ComicInvitation() {
  const { familyOne, familyTwo, and: andConnector } = wedding.invocation;
  const { groom, bride } = wedding.couple;

  return (
    <section id="invitation" className="relative w-full py-16 sm:py-24 bg-transparent overflow-hidden select-none">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* South Indian Illustrated Mandap Frame */}
        <div className="relative rounded-3xl bg-[#FAF4E8]/95 backdrop-blur-xs border-2 border-[#3D2E24]/20 shadow-md p-6 sm:p-12 md:p-16 text-center overflow-hidden">
          
          {/* Top Temple Arch / Toran Line */}
          <div className="absolute top-0 inset-x-0 h-3 bg-[#889A80] border-b border-[#3D2E24]/15" />
          
          {/* Sacred Om Symbol */}
          <div className="flex justify-center mb-4 pt-2">
            <img
              src="/om_symbol.png"
              alt="Sacred Om Symbol"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain hover:scale-105 transition-transform drop-shadow-2xs"
            />
          </div>

          <p className="font-hand text-base sm:text-lg tracking-widest uppercase text-[#557A3C] font-bold">
            With the heavenly blessings of our families
          </p>

          {/* Families Golden Ribbon Scroll */}
          <div className="my-6 max-w-xl mx-auto rounded-2xl bg-white/70 border border-[#3D2E24]/20 p-5 sm:p-7 shadow-xs">
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#3D2E24] leading-tight">
              {familyOne}
            </h3>

            <div className="my-2 flex items-center justify-center gap-3">
              <span className="w-12 h-0.5 bg-[#DE8B7C]" />
              <span className="font-script text-2xl sm:text-3xl text-[#DE8B7C] font-bold">
                {andConnector || 'and'}
              </span>
              <span className="w-12 h-0.5 bg-[#DE8B7C]" />
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#3D2E24] leading-tight">
              {familyTwo}
            </h3>
          </div>

          <p className="font-hand text-lg sm:text-xl text-[#3D2E24]/85 font-medium mt-4">
            Cordially invite you to celebrate the auspicious wedding of
          </p>

          {/* Couple Names */}
          <div className="my-4">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#3D2E24] tracking-tight">
              <span>{groom}</span>
              <span className="font-script text-4xl sm:text-6xl text-[#EAA82C] mx-3">&amp;</span>
              <span>{bride}</span>
            </h2>
          </div>

          {/* Tagline */}
          <p className="font-script text-xl sm:text-2xl text-[#557A3C] mt-2">
            Two families, two hearts, one unforgettable adventure.
          </p>
        </div>

      </div>

    </section>
  );
}
