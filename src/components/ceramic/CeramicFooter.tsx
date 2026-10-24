import { CeramicDaisy, CeramicTulip, ScallopBorder } from './CeramicOrnaments';
import { wedding } from '../../config/wedding';

export function CeramicFooter() {
  const { groom, bride } = wedding.couple;

  return (
    <footer className="relative w-full bg-[#6B2634] text-[#FFFBF3] overflow-hidden pt-12 pb-14">
      {/* Top Scallop Border matching reference bottom styling */}
      <ScallopBorder color="#FAF4E8" position="top" className="absolute top-0 inset-x-0 w-full" />

      <div className="max-w-4xl mx-auto px-6 text-center pt-8">
        {/* Floating Daisy Accent */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <CeramicDaisy className="w-6 h-6" petalColor="#FFFBF3" centerColor="#EDB355" />
          <span className="font-hand text-xl sm:text-2xl text-[#EDB355] italic">
            A lifetime of colorful joys ~
          </span>
          <CeramicDaisy className="w-6 h-6" petalColor="#FFFBF3" centerColor="#EDB355" />
        </div>

        <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#FFFBF3]">
          {groom} &amp; {bride}
        </h3>

        <p className="font-sans text-xs sm:text-sm text-[#DCE4D8] uppercase tracking-widest mt-2">
          November 18 &amp; 19, 2026 • Bengaluru, Karnataka
        </p>

        <div className="w-24 h-px bg-[#FFFBF3]/20 mx-auto my-6" />

        <p className="font-sans text-xs text-[#FFFBF3]/65 max-w-md mx-auto leading-relaxed">
          Venkatamma Ramaiah Kalyana Soudha, Gokula Extension, Mathikere, Bengaluru.
          We can&apos;t wait to celebrate this milestone together with you!
        </p>

        <div className="mt-8 flex justify-center">
          <CeramicTulip className="w-8 h-12" flowerColor="#EDB355" stemColor="#8F9F86" />
        </div>
      </div>
    </footer>
  );
}
