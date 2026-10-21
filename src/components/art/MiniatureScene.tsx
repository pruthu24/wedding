import type { EventVariant } from '../../config/wedding';

/**
 * Vertical "hand-painted Indian miniature" that sits inside each event
 * frame. One drawing, tailored palettes and props so the
 * panels read as a matched set from one atelier.
 */

interface Palette {
  sky: [string, string];
  ground: string;
  pavilion: string;
  pavilionDark: string;
  robeA: string;
  robeB: string;
  accent: string;
  border: string;
}

const defaultPalette: Palette = {
  sky: ['#C57B22', '#F0D9A4'],
  ground: '#8A6526',
  pavilion: '#E0B473',
  pavilionDark: '#A5702E',
  robeA: '#E8C05A',
  robeB: '#FBF1D4',
  accent: '#A5452A',
  border: '#B4893C',
};

const PALETTES: Record<string, Palette> = {
  reception: {
    sky: ['#243A60', '#8E6C86'],
    ground: '#3A2A4A',
    pavilion: '#C4767C',
    pavilionDark: '#7E3A46',
    robeA: '#E0B473',
    robeB: '#CBB4D8',
    accent: '#F0D9A4',
    border: '#B4893C',
  },
  wedding: {
    sky: ['#C57B22', '#F0D9A4'],
    ground: '#8A6526',
    pavilion: '#E0B473',
    pavilionDark: '#A5702E',
    robeA: '#E8C05A',
    robeB: '#FBF1D4',
    accent: '#A5452A',
    border: '#B4893C',
  },
  mehendi: {
    sky: ['#2F6B60', '#CBB48B'],
    ground: '#3C6046',
    pavilion: '#C88A4A',
    pavilionDark: '#8A5A2A',
    robeA: '#9E4A52',
    robeB: '#E2AFB2',
    accent: '#2C5238',
    border: '#B4893C',
  },
  haldi: {
    sky: ['#C57B22', '#F0D9A4'],
    ground: '#8A6526',
    pavilion: '#E0B473',
    pavilionDark: '#A5702E',
    robeA: '#E8C05A',
    robeB: '#FBF1D4',
    accent: '#A5452A',
    border: '#B4893C',
  },
  sangeet: {
    sky: ['#243A60', '#8E6C86'],
    ground: '#3A2A4A',
    pavilion: '#C4767C',
    pavilionDark: '#7E3A46',
    robeA: '#E0B473',
    robeB: '#CBB4D8',
    accent: '#F0D9A4',
    border: '#B4893C',
  },
};

export function MiniatureScene({
  variant = 'wedding',
  className = '',
}: {
  variant?: EventVariant | string;
  className?: string;
}) {
  const p = (variant && PALETTES[variant]) ? PALETTES[variant] : (PALETTES.wedding || defaultPalette);
  const id = `min-${variant || 'default'}`;

  return (
    <svg
      aria-hidden
      viewBox="0 0 300 420"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.sky[0]} />
          <stop offset="100%" stopColor={p.sky[1]} />
        </linearGradient>
        <filter id={`${id}-paint`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="2"
            seed="5"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="3" />
        </filter>
      </defs>

      {/* sky and ground */}
      <rect width="300" height="420" fill={`url(#${id}-sky)`} />
      <path d="M0 300c60-18 120-18 160-6 40 12 90 14 140 4v122H0z" fill={p.ground} />

      {/* distant hills */}
      <path
        d="M0 292c40-30 76-34 110-12 26 17 46 16 70 2 30-18 66-14 120 14v14H0z"
        fill={p.pavilionDark}
        opacity="0.35"
      />

      <g filter={`url(#${id}-paint)`}>
        {/* pavilion */}
        <path d="M60 300V170h180v130z" fill={p.pavilion} opacity="0.95" />
        <path d="M46 172h208l-24-34H70z" fill={p.pavilionDark} />
        <path d="M150 104l86 34H64z" fill={p.pavilion} />
        <path d="M150 88c4 6 3 10 0 14-3-4-4-8 0-14z" fill={p.border} />
        {/* cusped arches */}
        {[92, 150, 208].map((cx) => (
          <path
            key={cx}
            d={`M${cx - 26} 300v-62q0-12 8-16 6-14 18-14t18 14q8 4 8 16v62z`}
            fill={p.pavilionDark}
            opacity="0.85"
          />
        ))}
        {/* pillars */}
        {[60, 118, 182, 240].map((x) => (
          <rect
            key={x}
            x={x - 5}
            y="176"
            width="10"
            height="124"
            fill={p.border}
            opacity="0.9"
          />
        ))}
      </g>

      {/* two figures, posed for the occasion */}
      <g>
        <Figure x={112} y={300} robe={p.robeA} skin="#8A5A2A" accent={p.border} />
        <Figure x={188} y={300} robe={p.robeB} skin="#8A5A2A" accent={p.border} />
      </g>

      {/* per-event props */}
      {(variant === 'reception' || variant === 'mehendi') && (
        <g stroke={p.accent} strokeWidth="2" fill="none" strokeLinecap="round">
          {/* evening celebration / garland accent */}
          <path d="M150 336l10-16 10 16z" fill={p.accent} />
          <path d="M126 350h48" strokeWidth="3" />
          {[132, 146, 160, 174].map((x) => (
            <path key={x} d={`M${x} 350c-4-8 0-14 4-16`} />
          ))}
        </g>
      )}
      {(variant === 'wedding' || variant === 'haldi') && (
        <g>
          {/* auspicious brass pots & kalasam */}
          {[126, 152, 178].map((x, i) => (
            <g key={x}>
              <ellipse cx={x} cy={352} rx={13 - i} ry={11 - i} fill={p.accent} />
              <ellipse cx={x} cy={344} rx={9 - i} ry={4} fill={p.robeA} />
            </g>
          ))}
        </g>
      )}

      {/* foreground flowering border */}
      {Array.from({ length: 22 }, (_, i) => {
        const x = 6 + i * 13.6;
        const h = 22 + ((i * 31) % 20);
        return (
          <g key={i}>
            <path
              d={`M${x} 420v-${h}`}
              stroke={p.accent}
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.9"
            />
            <circle cx={x} cy={420 - h - 3} r="4" fill={i % 2 ? p.robeB : p.robeA} />
          </g>
        );
      })}
    </svg>
  );
}

function Figure({
  x,
  y,
  robe,
  skin,
  accent,
}: {
  x: number;
  y: number;
  robe: string;
  skin: string;
  accent: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* robe / sari silhouette */}
      <path
        d="M-22 0c2-48 10-84 22-84s20 36 22 84z"
        fill={robe}
        opacity="0.95"
      />
      {/* sash across the shoulder */}
      <path d="M-10 -72l28 56" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      {/* head */}
      <circle cx="0" cy="-96" r="11" fill={skin} />
      {/* turban / headwrap / hair */}
      <path
        d="M-12 -98c0-8 6-14 12-14s12 6 12 14c-4 3-8 4-12 4s-8-1-12-4z"
        fill={accent}
      />
    </g>
  );
}
