import { AuspiciousGaneshaScroll } from './ComicIllustrations';
import { wedding } from '../../config/wedding';

export function ComicInvitation() {
  const { familyOne, familyTwo, and: andConnector } = wedding.invocation;
  const { groom, bride } = wedding.couple;

  return (
    <section id="invitation" className="relative w-full py-16 sm:py-24 bg-[#FAF7F0] overflow-hidden select-none">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* South Indian Illustrated Mandap Frame */}
        <div className="relative rounded-3xl bg-[#FFF9ED] border-4 border-[#2A1D18] shadow-[8px_10px_0px_#2A1D18] p-6 sm:p-12 md:p-16 text-center overflow-hidden">
          
          {/* Top Temple Arch / Toran Line */}
          <div className="absolute top-0 inset-x-0 h-4 bg-[#6A9A4A] border-b-2 border-[#2A1D18]" />
          
          {/* Sacred Ganesha Emblem */}
          <div className="flex justify-center mb-3 pt-2">
            <AuspiciousGaneshaScroll className="w-20 h-16" />
          </div>

          <p className="font-serif text-sm tracking-widest text-[#9E7D1A] font-bold uppercase mb-2">
            ॐ श्री वेंकटेशाय नमः
          </p>

          <p className="font-comic text-sm sm:text-base tracking-widest uppercase text-[#487A38] font-bold">
            With the heavenly blessings of our families
          </p>

          {/* Families Golden Ribbon Scroll */}
          <div className="my-6 max-w-xl mx-auto rounded-2xl bg-[#FFF9ED] border-3 border-[#2A1D18] p-5 sm:p-7 shadow-[4px_5px_0px_#2A1D18]">
            <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#2A1D18] leading-tight">
              {familyOne}
            </h3>

            <div className="my-2 flex items-center justify-center gap-3">
              <span className="w-12 h-0.5 bg-[#D4527D]" />
              <span className="font-script text-2xl sm:text-3xl text-[#D4527D] font-bold">
                {andConnector || 'and'}
              </span>
              <span className="w-12 h-0.5 bg-[#D4527D]" />
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#2A1D18] leading-tight">
              {familyTwo}
            </h3>
          </div>

          <p className="font-comic text-base sm:text-lg text-[#2A1D18]/85 font-medium mt-4">
            Cordially invite you to celebrate the auspicious wedding of
          </p>

          {/* Couple Names */}
          <div className="my-4">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#2A1D18] tracking-tight">
              <span className="text-[#93362E]">{groom}</span>
              <span className="font-script text-4xl sm:text-6xl text-[#E5A627] mx-2">&amp;</span>
              <span className="text-[#2C69B2]">{bride}</span>
            </h2>
          </div>

          {/* Tagline */}
          <p className="font-comic italic text-base sm:text-xl text-[#487A38] font-bold mt-2">
            Two families, two hearts, one unforgettable adventure.
          </p>

        </div>

      </div>

    </section>
  );
}
