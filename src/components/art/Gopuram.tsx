/**
 * South Indian temple gopuram, drawn rather than photographed so it keeps
 * the hand-painted storybook feel at any screen size.
 *
 * The tower is generated: seven receding tiers, each with its own cornice,
 * shrine niches and finials, tapering toward a barrel-vaulted crest.
 */

const VB_W = 460;
const BASE_Y = 500; // top of the plinth
const CREST_Y = 120; // where the tiers stop and the vault begins
const CX = VB_W / 2;
const TIERS = 7;
const TIER_H = (BASE_Y - CREST_Y) / TIERS;
const NICHES_PER_TIER = [7, 6, 6, 5, 4, 4, 3];

/** Half-width of the tower at a given y — linear taper. */
const hw = (y: number) => 75 + (95 * (y - CREST_Y)) / (BASE_Y - CREST_Y);

export function Gopuram({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${VB_W} 620`}
      className={className}
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <linearGradient id="gp-stone" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9E5B33" />
          <stop offset="26%" stopColor="#C98449" />
          <stop offset="55%" stopColor="#E0A566" />
          <stop offset="82%" stopColor="#BE7A41" />
          <stop offset="100%" stopColor="#8D4E2B" />
        </linearGradient>
        <linearGradient id="gp-cornice" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0CE92" />
          <stop offset="60%" stopColor="#C89A55" />
          <stop offset="100%" stopColor="#8A5C2C" />
        </linearGradient>
        <linearGradient id="gp-plinth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CDA271" />
          <stop offset="100%" stopColor="#7A4E2C" />
        </linearGradient>
        <linearGradient id="gp-door" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2B1A10" />
          <stop offset="100%" stopColor="#120A06" />
        </linearGradient>
        <filter id="gp-paint" x="-10%" y="-10%" width="120%" height="120%">
          {/* Nudges every edge slightly off-true, the way a brush would. */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.028"
            numOctaves="2"
            seed="7"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" />
        </filter>
      </defs>

      <g filter="url(#gp-paint)" stroke="#4A2B16" strokeWidth="1.1">
        {/* ---------------- tiers, bottom to top ---------------- */}
        {Array.from({ length: TIERS }, (_, i) => {
          const yBot = BASE_Y - i * TIER_H;
          const yTop = BASE_Y - (i + 1) * TIER_H;
          const hwBot = hw(yBot);
          const hwTop = hw(yTop);
          const hwMid = (hwBot + hwTop) / 2;
          const niches = NICHES_PER_TIER[i];
          const nicheW = Math.min(26, (2 * hwMid) / (niches + 1.1));
          const nicheH = TIER_H * 0.52;
          const nicheY = yBot - TIER_H * 0.78;

          return (
            <g key={i}>
              {/* tier body */}
              <polygon
                points={`${CX - hwBot},${yBot} ${CX + hwBot},${yBot} ${CX + hwTop},${yTop} ${CX - hwTop},${yTop}`}
                fill="url(#gp-stone)"
              />

              {/* shrine niches */}
              {Array.from({ length: niches }, (_, k) => {
                const x =
                  CX - hwMid + ((k + 0.55) * (2 * hwMid)) / niches - nicheW / 2;
                return (
                  <g key={k}>
                    <path
                      d={`M${x},${nicheY + nicheH}
                          V${nicheY + nicheW / 2}
                          a${nicheW / 2},${nicheW / 2} 0 0 1 ${nicheW},0
                          V${nicheY + nicheH} Z`}
                      fill="#6E3C20"
                      opacity="0.85"
                      strokeWidth="0.8"
                    />
                    {/* the little deity inside each niche */}
                    <circle
                      cx={x + nicheW / 2}
                      cy={nicheY + nicheW * 0.62}
                      r={nicheW * 0.17}
                      fill="#E8C288"
                      stroke="none"
                    />
                    <path
                      d={`M${x + nicheW * 0.28},${nicheY + nicheH}
                          q${nicheW * 0.22},-${nicheH * 0.42} ${nicheW * 0.44},0 Z`}
                      fill="#E8C288"
                      stroke="none"
                      opacity="0.9"
                    />
                  </g>
                );
              })}

              {/* cornice slab capping the tier */}
              <rect
                x={CX - hwTop - 10}
                y={yTop - 9}
                width={2 * (hwTop + 10)}
                height={11}
                rx="2.5"
                fill="url(#gp-cornice)"
              />
              {/* dentils under the cornice */}
              {Array.from({ length: Math.round(hwTop / 9) }, (_, d) => (
                <rect
                  key={`d${d}`}
                  x={CX - hwTop + d * 18 + 3}
                  y={yTop + 2}
                  width="7"
                  height="4"
                  fill="#7A4E2C"
                  stroke="none"
                  opacity="0.6"
                />
              ))}

              {/* corner finials */}
              <Finial x={CX - hwTop - 4} y={yTop - 9} scale={0.42} />
              <Finial x={CX + hwTop + 4} y={yTop - 9} scale={0.42} />
            </g>
          );
        })}

        {/* ---------------- barrel-vaulted crest (shala) ---------------- */}
        <path
          d={`M${CX - 88},${CREST_Y}
              V${CREST_Y - 22}
              a88,34 0 0 1 176,0
              V${CREST_Y} Z`}
          fill="url(#gp-stone)"
        />
        <path
          d={`M${CX - 88},${CREST_Y - 22} a88,34 0 0 1 176,0`}
          fill="none"
          stroke="#4A2B16"
          strokeWidth="1.4"
        />
        {/* vault ribs */}
        {[-60, -30, 0, 30, 60].map((dx) => (
          <path
            key={dx}
            d={`M${CX + dx},${CREST_Y} V${CREST_Y - 18 - (22 - Math.abs(dx) * 0.22)}`}
            stroke="#7A4E2C"
            strokeWidth="1"
            opacity="0.7"
          />
        ))}
        {/* kudu — the horseshoe window in the vault face */}
        <path
          d={`M${CX - 16},${CREST_Y - 6} v-12 a16,16 0 0 1 32,0 v12 Z`}
          fill="#5B3219"
        />
        <circle cx={CX} cy={CREST_Y - 16} r="5" fill="#EBC78C" stroke="none" />

        <rect
          x={CX - 100}
          y={CREST_Y - 2}
          width="200"
          height="10"
          rx="3"
          fill="url(#gp-cornice)"
        />

        {/* ---------------- plinth & gateway ---------------- */}
        <rect
          x={CX - 186}
          y={BASE_Y}
          width="372"
          height="96"
          fill="url(#gp-plinth)"
        />
        <rect
          x={CX - 196}
          y={BASE_Y - 12}
          width="392"
          height="14"
          rx="3"
          fill="url(#gp-cornice)"
        />
        <rect
          x={CX - 200}
          y={BASE_Y + 90}
          width="400"
          height="16"
          rx="3"
          fill="#6B421F"
        />

        {/* pilasters flanking the entrance */}
        {[-150, -112, 112, 150].map((dx) => (
          <g key={dx}>
            <rect
              x={CX + dx - 9}
              y={BASE_Y + 6}
              width="18"
              height="84"
              rx="2"
              fill="#B87C46"
            />
            <rect
              x={CX + dx - 13}
              y={BASE_Y + 2}
              width="26"
              height="8"
              rx="2"
              fill="#D9AB6C"
            />
          </g>
        ))}

        {/* the doorway itself */}
        <path
          d={`M${CX - 52},${BASE_Y + 96}
              V${BASE_Y + 30}
              a52,46 0 0 1 104,0
              V${BASE_Y + 96} Z`}
          fill="url(#gp-door)"
        />
        <path
          d={`M${CX - 52},${BASE_Y + 96} V${BASE_Y + 30} a52,46 0 0 1 104,0 V${BASE_Y + 96}`}
          fill="none"
          stroke="#E0B473"
          strokeWidth="2.4"
        />
        {/* oil lamps glowing in the gateway */}
        <circle cx={CX - 26} cy={BASE_Y + 54} r="3" fill="#F2C878" stroke="none" />
        <circle cx={CX + 26} cy={BASE_Y + 54} r="3" fill="#F2C878" stroke="none" />
      </g>

      {/* ---------------- crest finials, above the paint filter ---------------- */}
      <g>
        {[-74, -37, 0, 37, 74].map((dx) => (
          <g
            key={dx}
            transform={`translate(${CX + dx - 12 * (dx === 0 ? 1.5 : 1)}, ${
              dx === 0 ? CREST_Y - 92 : CREST_Y - 74
            }) scale(${dx === 0 ? 1.5 : 1})`}
          >
            <KalasamPath />
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Inline copy of the kalasam path so it can be positioned inside the tower svg. */
function KalasamPath() {
  return (
    <g fill="#D8AE6B" stroke="#6B421F" strokeWidth="0.7">
      <path d="M12 0c1.6 3.4 1.2 5.6 0 7.4-1.2-1.8-1.6-4 0-7.4z" />
      <rect x="10.6" y="7" width="2.8" height="6" rx="1" />
      <path d="M12 12c5 0 8 3.4 8 7.6 0 4.4-3.6 7.4-8 7.4s-8-3-8-7.4C4 15.4 7 12 12 12z" />
      <rect x="7" y="26" width="10" height="3" rx="1.2" />
      <path d="M5 29h14l-2 5H7z" />
      <rect x="4" y="34" width="16" height="3.4" rx="1.4" />
      <rect x="2.5" y="37.6" width="19" height="4" rx="1.6" />
    </g>
  );
}

/** Small corner ornament sitting on each tier's cornice. */
function Finial({ x, y, scale }: { x: number; y: number; scale: number }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      <path
        d="M0 0 C-8 -6 -14 -14 -10 -24 C-4 -30 6 -28 8 -20 C10 -12 6 -6 0 0 Z"
        fill="#D8AE6B"
        stroke="#6B421F"
        strokeWidth="1.6"
      />
    </g>
  );
}
