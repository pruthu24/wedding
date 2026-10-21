/**
 * Antique three-masted sailing vessel, drawn as a plate from an old
 * illustrated atlas: cream canvas, wooden hull, full standing rigging.
 */

interface Mast {
  x: number;
  top: number;
  /** [yardY, halfWidth, sailHeight] for each course of canvas. */
  sails: [number, number, number][];
}

const MASTS: Mast[] = [
  { x: 214, top: 92, sails: [[124, 44, 62], [200, 56, 70], [284, 64, 62]] },
  { x: 336, top: 54, sails: [[86, 50, 68], [168, 64, 78], [260, 74, 72]] },
  { x: 452, top: 108, sails: [[140, 40, 58], [212, 50, 66], [292, 56, 56]] },
];

export function Ship({ className = '' }: { className?: string }) {
  const rope = '#7A5A38';
  const canvas = '#EFE4CB';
  const canvasShade = '#D6C4A2';

  return (
    <svg
      aria-hidden
      viewBox="0 0 660 520"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="ship-hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B4A2F" />
          <stop offset="45%" stopColor="#4A3220" />
          <stop offset="100%" stopColor="#2A1B10" />
        </linearGradient>
        <linearGradient id="ship-canvas" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stopColor={canvasShade} />
          <stop offset="38%" stopColor={canvas} />
          <stop offset="100%" stopColor="#C9B695" />
        </linearGradient>
        <filter id="ship-ink">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035"
            numOctaves="2"
            seed="13"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" />
        </filter>
      </defs>

      <g filter="url(#ship-ink)">
        {/* ------------------------- standing rigging ------------------------ */}
        <g stroke={rope} strokeWidth="1" opacity="0.75" fill="none">
          {MASTS.map((m) => (
            <g key={`r${m.x}`}>
              <path d={`M${m.x} ${m.top + 14}L${m.x - 78} 384`} />
              <path d={`M${m.x} ${m.top + 14}L${m.x + 78} 384`} />
              <path d={`M${m.x} ${m.top + 40}L${m.x - 52} 384`} opacity="0.6" />
              <path d={`M${m.x} ${m.top + 40}L${m.x + 52} 384`} opacity="0.6" />
            </g>
          ))}
          {/* stays running fore and aft */}
          <path d="M336 58L96 330" />
          <path d="M214 96L96 330" opacity="0.7" />
          <path d="M452 112L336 60" opacity="0.7" />
          <path d="M452 112L560 300" opacity="0.7" />
        </g>

        {/* ------------------------------ masts ------------------------------ */}
        {MASTS.map((m) => (
          <g key={m.x}>
            <rect
              x={m.x - 4}
              y={m.top}
              width="8"
              height={392 - m.top}
              rx="3"
              fill="#5A3E26"
            />
            {/* crow's nest */}
            <path
              d={`M${m.x - 15} ${m.top + 48}h30l-4 12h-22z`}
              fill="#6B4A2F"
              stroke="#33220F"
              strokeWidth="1"
            />
            {/* pennant */}
            <path
              d={`M${m.x} ${m.top}l34 8-34 8z`}
              fill="#A5452A"
              stroke="#5A2415"
              strokeWidth="0.8"
            />

            {m.sails.map(([sy, hwd, sh], i) => (
              <g key={i}>
                {/* yard */}
                <rect
                  x={m.x - hwd - 8}
                  y={sy - 3}
                  width={2 * hwd + 16}
                  height="5"
                  rx="2.5"
                  fill="#6B4A2F"
                />
                {/* belly of canvas */}
                <path
                  d={`M${m.x - hwd} ${sy}
                      C${m.x - hwd - 10} ${sy + sh * 0.5} ${m.x - hwd * 0.6} ${sy + sh} ${m.x} ${sy + sh}
                      C${m.x + hwd * 0.6} ${sy + sh} ${m.x + hwd + 10} ${sy + sh * 0.5} ${m.x + hwd} ${sy}
                      Z`}
                  fill="url(#ship-canvas)"
                  stroke="#8A6B45"
                  strokeWidth="1.1"
                />
                {/* seams */}
                {[-0.55, -0.2, 0.2, 0.55].map((f) => (
                  <path
                    key={f}
                    d={`M${m.x + hwd * f} ${sy}q${f * 6} ${sh * 0.55} ${f * 3} ${sh * 0.94}`}
                    stroke="#B9A57F"
                    strokeWidth="0.8"
                    fill="none"
                    opacity="0.8"
                  />
                ))}
                {/* reef points */}
                <path
                  d={`M${m.x - hwd + 6} ${sy + sh * 0.34}h${2 * hwd - 12}`}
                  stroke="#B9A57F"
                  strokeWidth="0.7"
                  opacity="0.7"
                />
              </g>
            ))}
          </g>
        ))}

        {/* ------------------------ bowsprit and jibs ------------------------ */}
        <rect
          x="60"
          y="318"
          width="130"
          height="7"
          rx="3.5"
          fill="#5A3E26"
          transform="rotate(-16 125 321)"
        />
        <path
          d="M96 330L176 262v76z"
          fill="url(#ship-canvas)"
          stroke="#8A6B45"
          strokeWidth="1.1"
        />
        <path
          d="M132 344L192 292v66z"
          fill="url(#ship-canvas)"
          stroke="#8A6B45"
          strokeWidth="1.1"
          opacity="0.95"
        />

        {/* -------------------------------- hull ----------------------------- */}
        <path
          d="M104 384h456c-8 44-30 72-62 84-44 16-236 18-286 0-30-11-52-40-58-84z"
          fill="url(#ship-hull)"
          stroke="#1E1209"
          strokeWidth="1.4"
        />
        {/* stern castle */}
        <path
          d="M492 384V332c0-8 6-14 14-14h44c8 0 14 6 14 14v52z"
          fill="#5A3E26"
          stroke="#1E1209"
          strokeWidth="1.2"
        />
        <path d="M492 348h72" stroke="#33220F" strokeWidth="1" />
        {/* gun ports */}
        {Array.from({ length: 9 }, (_, i) => (
          <rect
            key={i}
            x={146 + i * 40}
            y="404"
            width="18"
            height="14"
            rx="2"
            fill="#160D06"
            stroke="#8A6B45"
            strokeWidth="0.8"
          />
        ))}
        {/* strakes */}
        <path
          d="M112 396c130 12 306 12 440 0"
          stroke="#8A6B45"
          strokeWidth="1.6"
          fill="none"
          opacity="0.75"
        />
        <path
          d="M122 434c126 14 288 14 414 0"
          stroke="#8A6B45"
          strokeWidth="1.2"
          fill="none"
          opacity="0.55"
        />
        {/* railing */}
        <path d="M104 384h456" stroke="#8A6B45" strokeWidth="3" />
        {Array.from({ length: 22 }, (_, i) => (
          <rect
            key={`p${i}`}
            x={112 + i * 21}
            y="372"
            width="3"
            height="12"
            fill="#6B4A2F"
            opacity="0.8"
          />
        ))}
      </g>

      {/* water the hull sits in — a few engraved swells */}
      <g stroke="#8A6B45" strokeWidth="1.4" fill="none" opacity="0.5">
        <path d="M40 470c40-10 80-10 120 0s80 10 120 0 80-10 120 0 80 10 120 0 80-10 120 0" />
        <path
          d="M20 492c44-10 88-10 132 0s88 10 132 0 88-10 132 0 88 10 132 0"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}
