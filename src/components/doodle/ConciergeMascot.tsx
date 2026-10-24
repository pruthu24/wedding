import { motion } from 'framer-motion';

export function ConciergeMascot({ isTyping = false }: { isTyping?: boolean }) {
  return (
    <div className="relative flex items-center justify-center select-none">
      <motion.div
        animate={isTyping ? { y: [0, -3, 0] } : {}}
        transition={{ repeat: Infinity, duration: 0.6 }}
        className="relative"
      >
        <svg viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-18 sm:w-20 sm:h-22">
          {/* Hair / Headgear */}
          <ellipse cx="50" cy="42" rx="22" ry="20" fill="#FFD166" stroke="#262626" strokeWidth="2.5" />
          <path d="M30 36C35 24 65 24 70 36" stroke="#262626" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Cute Eyes (Blinking animation) */}
          <motion.circle
            cx="42"
            cy="40"
            r="3"
            fill="#262626"
            animate={{ scaleY: [1, 1, 0.1, 1] }}
            transition={{ repeat: Infinity, duration: 4, times: [0, 0.9, 0.95, 1] }}
          />
          <motion.circle
            cx="58"
            cy="40"
            r="3"
            fill="#262626"
            animate={{ scaleY: [1, 1, 0.1, 1] }}
            transition={{ repeat: Infinity, duration: 4, times: [0, 0.9, 0.95, 1] }}
          />
          
          {/* Blushing cheeks */}
          <circle cx="36" cy="46" r="3.5" fill="#EF476F" opacity="0.6" />
          <circle cx="64" cy="46" r="3.5" fill="#EF476F" opacity="0.6" />

          {/* Sweet smile */}
          <path d="M46 47C48 51 52 51 54 47" stroke="#262626" strokeWidth="2" strokeLinecap="round" />

          {/* Little Bow Tie */}
          <polygon points="44,60 50,63 44,66" fill="#EF476F" stroke="#262626" strokeWidth="1.5" />
          <polygon points="56,60 50,63 56,66" fill="#EF476F" stroke="#262626" strokeWidth="1.5" />
          <circle cx="50" cy="63" r="2" fill="#FFD166" />

          {/* Body / Kurta */}
          <path d="M34 66L28 98H72L66 66H34Z" fill="#118AB2" stroke="#262626" strokeWidth="2.5" strokeLinejoin="round" />

          {/* Mini Clipboard */}
          <rect x="52" y="72" width="22" height="28" rx="2" fill="#FFFDF8" stroke="#262626" strokeWidth="2" transform="rotate(-6 52 72)" />
          <rect x="58" y="70" width="10" height="4" rx="1" fill="#FFD166" stroke="#262626" strokeWidth="1.5" transform="rotate(-6 58 70)" />
          <line x1="56" y1="78" x2="68" y2="76.5" stroke="#D96C4A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="55" y1="83" x2="67" y2="81.5" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="54" y1="88" x2="66" y2="86.5" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" />

          {/* Hand holding clipboard */}
          <circle cx="52" cy="85" r="4" fill="#FFD166" stroke="#262626" strokeWidth="2" />
          {/* Other hand waving */}
          <path d="M30 74L18 64" stroke="#262626" strokeWidth="3" strokeLinecap="round" />
          <circle cx="17" cy="63" r="4" fill="#FFD166" stroke="#262626" strokeWidth="2" />
        </svg>

        {/* Name badge */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#FFFDF8] border-1.5 border-[#262626] rounded-full px-2 py-0.5 shadow-xs whitespace-nowrap">
          <span className="font-doodle text-[11px] font-bold text-[#262626]">
            Wedding Sidekick ✨
          </span>
        </div>
      </motion.div>
    </div>
  );
}
