/**
 * Hand-painted botanical layers: the flanking trees and the dense garden
 * band that closes the bottom of the illustrated scenes.
 */

const LEAF =
  'M0 0c9-3 17 1 21 9-8 5-17 4-24-2-2-2-1-5 3-7z';

interface TreeProps {
  side?: 'left' | 'right';
  className?: string;
  /** Darker, bluer foliage for night scenes. */
  night?: boolean;
}

/** A single lush tree, canopy weighted toward the centre of the frame. */
export function Tree({ side = 'left', className = '', night = false }: TreeProps) {
  const dark = night ? '#0E1D14' : '#1B3527';
  const mid = night ? '#17301F' : '#2C5238';
  const light = night ? '#20402B' : '#437A4E';
  const accent = night ? '#2A4F34' : '#6A9A5E';

  // Canopy blobs, roughly a cumulus mass.
  const clumps: [number, number, number][] = [
    [150, 150, 96],
    [78, 196, 74],
    [222, 190, 78],
    [120, 96, 62],
    [196, 104, 58],
    [62, 118, 48],
    [244, 132, 44],
    [152, 248, 68],
    [92, 268, 50],
    [214, 262, 52],
  ];

  return (
    <svg
      aria-hidden
      viewBox="0 0 300 560"
      className={className}
      preserveAspectRatio="xMidYMax meet"
      style={{ transform: side === 'right' ? 'scaleX(-1)' : undefined }}
    >
      <defs>
        <filter id={`tree-paint-${side}`} x="-8%" y="-8%" width="116%" height="116%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05"
            numOctaves="2"
            seed={side === 'left' ? 3 : 11}
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="5" />
        </filter>
      </defs>

      {/* trunk and boughs */}
      <g stroke={night ? '#1A120C' : '#3A2617'} strokeLinecap="round" fill="none">
        <path d="M150 560c-6-70 2-130 6-176" strokeWidth="20" />
        <path d="M156 384c-22-22-34-46-40-74" strokeWidth="11" />
        <path d="M156 384c26-20 40-42 48-70" strokeWidth="10" />
        <path d="M150 470c-18-14-28-28-34-46" strokeWidth="7" />
        <path d="M152 440c20-12 32-24 38-40" strokeWidth="6" />
      </g>

      <g filter={`url(#tree-paint-${side})`}>
        {clumps.map(([cx, cy, r], i) => (
          <g key={i}>
            <ellipse
              cx={cx}
              cy={cy}
              rx={r}
              ry={r * 0.82}
              fill={i % 3 === 0 ? mid : dark}
            />
            <ellipse
              cx={cx - r * 0.22}
              cy={cy - r * 0.26}
              rx={r * 0.58}
              ry={r * 0.46}
              fill={light}
              opacity="0.55"
            />
          </g>
        ))}

        {/* individual leaves catching the light along the canopy edge */}
        {clumps.slice(0, 6).map(([cx, cy, r], i) =>
          Array.from({ length: 5 }, (_, k) => {
            const a = (k / 5) * Math.PI * 2 + i;
            return (
              <path
                key={`${i}-${k}`}
                d={LEAF}
                transform={`translate(${cx + Math.cos(a) * r * 0.92} ${
                  cy + Math.sin(a) * r * 0.8
                }) rotate(${(a * 180) / Math.PI}) scale(1.1)`}
                fill={accent}
                opacity="0.8"
              />
            );
          }),
        )}

        {/* berries */}
        {[
          [96, 236],
          [206, 226],
          [140, 306],
          [238, 168],
          [64, 160],
        ].map(([cx, cy], i) => (
          <g key={`b${i}`}>
            <circle cx={cx} cy={cy} r="4.6" fill="#9E4A52" />
            <circle cx={cx + 8} cy={cy + 6} r="3.4" fill="#C4767C" />
          </g>
        ))}
      </g>
    </svg>
  );
}

interface GardenBandProps {
  className?: string;
  night?: boolean;
  /** 0 = sparse silhouette, 1 = dense flowering foreground. */
  density?: number;
}

/** The dense vegetation that closes the bottom of a scene. */
export function GardenBand({
  className = '',
  night = false,
  density = 1,
}: GardenBandProps) {
  const back = night ? '#0C1A12' : '#1C3A28';
  const mid = night ? '#12261A' : '#285034';
  const front = night ? '#0A150E' : '#17301F';
  const bloomA = night ? '#8E4048' : '#C4767C';
  const bloomB = night ? '#B07A3A' : '#E0B473';

  const bushes = Array.from({ length: 16 }, (_, i) => {
    const x = (i / 15) * 1440;
    const r = 110 + ((i * 53) % 70);
    return [x, 250 - ((i * 37) % 40), r] as const;
  });

  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 300"
      className={className}
      preserveAspectRatio="none"
    >
      {/* far hedge */}
      <path
        d={`M0 300V150 ${bushes
          .map(([x, y, r]) => `Q${x + 40} ${y - r * 0.32} ${x + 90} ${y + 6}`)
          .join(' ')} V300Z`}
        fill={back}
      />
      {/* mid mass */}
      <path
        d={`M0 300V196 ${bushes
          .slice()
          .reverse()
          .map(([x, y, r]) => `Q${1440 - x - 30} ${y - r * 0.2} ${1440 - x - 84} ${y + 44}`)
          .join(' ')} V300Z`}
        fill={mid}
      />

      {/* flowering plants and sprigs */}
      {Array.from({ length: Math.round(34 * density) }, (_, i) => {
        const x = ((i * 97) % 1440) + 8;
        const h = 44 + ((i * 29) % 58);
        const baseY = 300 - ((i * 17) % 26);
        const tone = i % 3 === 0 ? bloomA : i % 3 === 1 ? bloomB : '#E2AFB2';
        return (
          <g key={i} opacity="0.95">
            <path
              d={`M${x} ${baseY} C${x - 6} ${baseY - h * 0.5} ${x + 8} ${
                baseY - h * 0.7
              } ${x + 2} ${baseY - h}`}
              stroke={night ? '#1A3322' : '#2F5A3A'}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d={LEAF}
              transform={`translate(${x - 2} ${baseY - h * 0.45}) rotate(200) scale(0.9)`}
              fill={night ? '#1D3A26' : '#3C6046'}
            />
            <path
              d={LEAF}
              transform={`translate(${x + 4} ${baseY - h * 0.66}) scale(0.85)`}
              fill={night ? '#1D3A26' : '#3C6046'}
            />
            {i % 2 === 0 && (
              <>
                <circle cx={x + 2} cy={baseY - h - 3} r="5" fill={tone} />
                <circle
                  cx={x + 2}
                  cy={baseY - h - 3}
                  r="1.8"
                  fill={night ? '#3A2716' : '#8A6526'}
                />
              </>
            )}
          </g>
        );
      })}

      {/* front silhouette with berries */}
      <path
        d={`M0 300V236 ${bushes
          .map(([x, y]) => `Q${x + 26} ${y + 6} ${x + 70} ${y + 62}`)
          .join(' ')} V300Z`}
        fill={front}
      />
      {Array.from({ length: Math.round(18 * density) }, (_, i) => {
        const x = ((i * 151) % 1420) + 12;
        const y = 268 - ((i * 23) % 26);
        return (
          <g key={`br${i}`}>
            <circle cx={x} cy={y} r="3.6" fill={bloomA} opacity="0.9" />
            <circle cx={x + 7} cy={y + 5} r="2.6" fill={bloomB} opacity="0.85" />
          </g>
        );
      })}
    </svg>
  );
}
