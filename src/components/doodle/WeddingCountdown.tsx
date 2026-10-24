import { useState, useEffect } from 'react';
import { DoodleHeart, DoodleSparkle, DoodleMarigold } from './DoodleIcons';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export function WeddingCountdown({ onThrowConfetti }: { onThrowConfetti?: () => void }) {
  // Target: Reception November 18, 2026 at 18:30 IST (UTC+5:30)
  const targetDate = new Date('2026-11-18T18:30:00+05:30');

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto my-6 max-w-xl px-4 select-none">
      {/* Sticky Note Container */}
      <div className="relative bg-[#FFFDF8] border-2 border-[#262626] rounded-sm p-4 sm:p-6 shadow-[3px_4px_0px_#262626] -rotate-1 transform transition-transform hover:rotate-0">
        {/* Washi tape on top */}
        <div
          aria-hidden="true"
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#FFD166]/90 border border-[#262626]/40 shadow-sm -rotate-2"
          style={{
            clipPath: 'polygon(0% 15%, 5% 0%, 95% 0%, 100% 15%, 98% 85%, 95% 100%, 5% 100%, 0% 85%)',
          }}
        />

        <div className="flex items-center justify-between border-b border-[#262626]/20 pb-2 mb-4">
          <div className="flex items-center gap-1.5">
            <DoodleMarigold className="w-5 h-5" />
            <h4 className="font-doodle text-lg sm:text-xl font-bold text-[#262626]">
              {timeLeft.isPast ? "It's Wedding Day! 🎉" : 'Counting Down To Forever'}
            </h4>
          </div>
          <DoodleSparkle className="w-4 h-4 text-[#FFD166]" />
        </div>

        {timeLeft.isPast ? (
          <div className="text-center py-3">
            <p className="font-hand text-xl text-[#EF476F] font-bold">
              The adventure has officially begun! ❤️ Thank you for celebrating with us!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
            {[
              { val: timeLeft.days, label: 'Days', bg: '#FFD166' },
              { val: timeLeft.hours, label: 'Hours', bg: '#06D6A0' },
              { val: timeLeft.minutes, label: 'Mins', bg: '#EF476F' },
              { val: timeLeft.seconds, label: 'Secs', bg: '#118AB2' },
            ].map((box, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-2 sm:p-3 rounded-sm border-2 border-[#262626] shadow-[2px_2px_0px_#262626]"
                style={{ backgroundColor: box.bg }}
              >
                <span className="font-doodle text-2xl sm:text-3xl font-extrabold text-[#262626] leading-none">
                  {String(box.val).padStart(2, '0')}
                </span>
                <span className="font-hand text-[11px] sm:text-xs font-semibold text-[#262626]/85 uppercase tracking-wider mt-0.5">
                  {box.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Celebration Confetti Button */}
        <div className="mt-4 pt-3 border-t border-dashed border-[#262626]/25 flex items-center justify-between flex-wrap gap-2">
          <p className="font-hand text-xs text-[#262626]/75 italic flex items-center gap-1">
            <DoodleHeart className="w-3.5 h-3.5 inline" /> Save the date: 18 & 19 Nov 2026
          </p>

          <button
            type="button"
            onClick={onThrowConfetti}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EF476F] text-white font-doodle text-sm sm:text-base font-bold rounded-full border-1.5 border-[#262626] shadow-[1px_2px_0px_#262626] hover:scale-105 active:scale-95 transition-transform"
          >
            <span>🎊</span>
            <span>Throw Confetti!</span>
          </button>
        </div>
      </div>
    </div>
  );
}
