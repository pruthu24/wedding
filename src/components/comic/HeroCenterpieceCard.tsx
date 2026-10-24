import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wedding } from '../../config/wedding';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function HeroCenterpieceCard({ onThrowConfetti }: { onThrowConfetti?: () => void }) {
  const [loveCount, setLoveCount] = useState(108);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number }[]>([]);

  // Wedding Date: Nov 18, 2026, 18:30 IST
  const targetDate = new Date('2026-11-18T18:30:00+05:30');
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };
    calc();
    const timer = setInterval(calc, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSendLove = () => {
    setLoveCount((c) => c + 1);
    const newHeart = { id: Date.now(), x: (Math.random() - 0.5) * 120 };
    setFloatingHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1600);
  };

  const { groom, bride } = wedding.couple;

  return (
    <div className="relative w-full max-w-4xl mx-auto px-3 sm:px-6 my-6 sm:my-10 select-none">
      
      {/* ----------------- The Main Celebratory Centerpiece Card ----------------- */}
      <div className="relative bg-[#FFF9ED] border-4 border-[#2A1D18] rounded-3xl sm:rounded-[40px] shadow-[8px_12px_0px_#2A1D18] p-5 sm:p-9 overflow-hidden">
        
        {/* Floating Hearts Animation Container */}
        <div className="absolute inset-x-0 bottom-24 flex justify-center pointer-events-none z-30">
          <AnimatePresence>
            {floatingHearts.map((h) => (
              <motion.span
                key={h.id}
                initial={{ opacity: 1, y: 0, x: h.x, scale: 0.6 }}
                animate={{ opacity: 0, y: -160, scale: 1.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                className="absolute text-3xl select-none"
              >
                ❤️
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        {/* Top Header Tag */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#F5B738] border-2 border-[#2A1D18] flex items-center justify-center text-sm font-bold shadow-xs">
              🌸
            </span>
            <span className="font-comic text-sm sm:text-base font-extrabold text-[#2A1D18] uppercase tracking-wider">
              Two Souls • One Beautiful Adventure
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSendLove}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FAF7F0] hover:bg-[#FEE580] text-[#2A1D18] font-comic text-xs sm:text-sm font-bold rounded-full border-2 border-[#2A1D18] shadow-xs active:scale-95 transition-transform cursor-pointer"
            >
              <span>❤️ Send Love</span>
              <span className="bg-[#E8769D] text-[#2A1D18] px-2 py-0.5 rounded-full text-[11px] font-extrabold">
                {loveCount}
              </span>
            </button>
          </div>
        </div>

        {/* ----------------- Centerpiece Photo in South Indian Festive Frame ----------------- */}
        <div className="relative mx-auto max-w-xl aspect-[16/11] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border-3 border-[#2A1D18] bg-[#FAF7F0] shadow-md group">
          <img
            src={wedding.couple.photo}
            alt={wedding.couple.photoAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Festive Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 pointer-events-none" />

          {/* Floating Names on Image */}
          <div className="absolute bottom-4 left-4 right-4 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#FFF9ED] drop-shadow-md">
                {groom} &amp; {bride}
              </h3>
              <p className="font-comic text-xs sm:text-sm text-[#F5B738] font-bold drop-shadow-sm">
                Auspicious Wedding Celebrations • Bengaluru
              </p>
            </div>

            <div className="hidden sm:block">
              <span className="px-3 py-1 bg-[#6A9A4A] text-white font-comic text-xs font-bold rounded-full border border-white shadow-xs">
                November 18 &amp; 19, 2026
              </span>
            </div>
          </div>
        </div>

        {/* ----------------- Live Wedding Countdown ----------------- */}
        <div className="mt-6 pt-5 border-t-3 border-dashed border-[#2A1D18]/25">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <span className="font-comic text-xs sm:text-sm font-bold text-[#487A38] uppercase tracking-wider">
              ⏳ Countdown to the Wedding Day:
            </span>
            <span className="font-comic text-xs text-[#2A1D18]/70 font-semibold">
              Reception: 18 Nov, 6:30 PM • Muhurtham: 19 Nov, 4:40 AM
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
            {[
              { val: timeLeft.days, label: 'Days', bg: '#F5B738' },
              { val: timeLeft.hours, label: 'Hours', bg: '#6A9A4A' },
              { val: timeLeft.minutes, label: 'Mins', bg: '#E8769D' },
              { val: timeLeft.seconds, label: 'Secs', bg: '#68AEE8' },
            ].map((box, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-2xl border-2 border-[#2A1D18] shadow-[2px_3px_0px_#2A1D18]"
                style={{ backgroundColor: box.bg }}
              >
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#2A1D18] leading-none">
                  {String(box.val).padStart(2, '0')}
                </span>
                <span className="font-comic text-[11px] sm:text-xs font-bold text-[#2A1D18]/85 uppercase tracking-wider mt-0.5">
                  {box.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------- Action Buttons ----------------- */}
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <button
            type="button"
            onClick={onThrowConfetti}
            className="px-6 py-2.5 bg-[#F5B738] hover:bg-[#ffc753] text-[#2A1D18] font-comic text-sm sm:text-base font-bold rounded-full border-2 border-[#2A1D18] shadow-[2px_3px_0px_#2A1D18] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            <span>🎊 Shower Confetti</span>
          </button>

          <a
            href="#rsvp"
            className="px-6 py-2.5 bg-[#6A9A4A] hover:bg-[#58853b] text-[#FFF9ED] font-comic text-sm sm:text-base font-bold rounded-full border-2 border-[#2A1D18] shadow-[2px_3px_0px_#2A1D18] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          >
            <span>💌 Confirm Your RSVP</span>
          </a>
        </div>

      </div>

    </div>
  );
}
