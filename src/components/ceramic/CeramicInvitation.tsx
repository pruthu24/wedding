import { CeramicDaisy, CeramicTulip, SquigglyWave } from './CeramicOrnaments';
import { wedding } from '../../config/wedding';

export function CeramicInvitation() {
  const { familyOne, familyTwo, and: andConnector } = wedding.invocation;
  const { groom, bride } = wedding.couple;

  return (
    <section id="invitation" className="relative w-full py-16 sm:py-24 bg-[#FAF4E8] overflow-hidden">
      
      {/* Container matching the ceramic studio card width */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Scalloped Ceramic Invitation Block */}
        <div className="relative rounded-[32px] sm:rounded-[44px] bg-[#3A4C37] text-[#FFFBF3] p-8 sm:p-14 md:p-16 shadow-[0_16px_36px_rgba(58,76,55,0.2)] overflow-hidden text-center">
          
          {/* Decorative Corner Flowers */}
          <div className="absolute top-6 left-6 pointer-events-none opacity-85">
            <CeramicDaisy className="w-10 h-10" petalColor="#FFFBF3" centerColor="#EDB355" />
          </div>
          <div className="absolute top-6 right-6 pointer-events-none opacity-85">
            <CeramicDaisy className="w-10 h-10" petalColor="#FFFBF3" centerColor="#EDB355" />
          </div>
          <div className="hidden sm:block absolute bottom-8 left-8 pointer-events-none opacity-75">
            <CeramicTulip className="w-10 h-16" flowerColor="#EDB355" stemColor="#8F9F86" />
          </div>
          <div className="hidden sm:block absolute bottom-8 right-8 pointer-events-none opacity-75">
            <CeramicTulip className="w-10 h-16" flowerColor="#D45D52" stemColor="#8F9F86" />
          </div>

          {/* 1. Sacred Lord Ganesha Medallion */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFFBF3] p-3 shadow-md flex items-center justify-center border-2 border-[#EDB355]">
              <img
                src="/ganesh-logo.png"
                alt="Lord Ganesha Sacred Emblem"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain mix-blend-multiply"
              />
            </div>
            <p className="font-serif text-xs sm:text-sm tracking-widest text-[#EDB355] font-bold uppercase mt-3">
              ॐ श्री वेंकटेशाय नमः
            </p>
          </div>

          {/* 2. Blessing Intro */}
          <p className="font-sans text-xs sm:text-sm tracking-[0.22em] uppercase text-[#DCE4D8] font-bold">
            With the blessings of our families
          </p>

          {/* 3. Families Card on Warm Cream Ceramic Banner */}
          <div className="my-6 sm:my-8 max-w-xl mx-auto rounded-[24px] bg-[#FFFBF3] text-[#2A1F1E] p-6 sm:p-8 shadow-md border border-[#2A1F1E]/10">
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#6B2634] leading-tight">
              {familyOne}
            </h3>
            
            <div className="my-2.5 flex items-center justify-center gap-3">
              <span className="w-12 h-px bg-[#D45D52]/40" />
              <span className="font-display italic text-lg sm:text-xl text-[#D45D52] font-semibold">
                {andConnector || 'and'}
              </span>
              <span className="w-12 h-px bg-[#D45D52]/40" />
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[#6B2634] leading-tight">
              {familyTwo}
            </h3>
          </div>

          {/* 4. Cordial Invitation Copy */}
          <p className="font-sans text-sm sm:text-base text-[#DCE4D8] font-medium">
            Cordially invite you to celebrate the auspicious wedding of
          </p>

          {/* 5. Couple Names */}
          <div className="my-4">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#FFFBF3] tracking-tight">
              {groom} <span className="text-[#EDB355] italic font-serif">&amp;</span> {bride}
            </h2>
            
            <div className="flex justify-center mt-2">
              <SquigglyWave className="w-24 h-4 text-[#EDB355]" />
            </div>
          </div>

          {/* 6. Tagline */}
          <p className="font-display italic text-base sm:text-xl text-[#DCE4D8] font-normal max-w-md mx-auto mt-2">
            Two families, two hearts, one beautiful beginning.
          </p>

        </div>

      </div>

    </section>
  );
}
