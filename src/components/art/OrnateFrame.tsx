import type { ReactNode } from 'react';

export type FrameTone = 'silver' | 'gold';

interface OrnateFrameProps {
  children: ReactNode;
  tone?: FrameTone;
  /** Scales the moulding and ornaments together. */
  scale?: number;
  className?: string;
  /** Adds the swan-neck crest above the frame. */
  crest?: boolean;
}

const TONES: Record<
  FrameTone,
  { rail: string; bead: string; ink: string; light: string; shadow: string; border: string }
> = {
  silver: {
    rail: '#E6E3DB',
    border: '#B9B4A9',
    bead: '#8E8A80',
    ink: '#6E6A62',
    light: '#F6F4EF',
    shadow: 'rgba(30,26,22,0.15)',
  },
  gold: {
    rail: '#EAD1A3', // Soft muted gold
    border: '#C19958',
    bead: '#8A6526',
    ink: '#6B4A2F',
    light: '#F5E3B6',
    shadow: 'rgba(30,20,10,0.12)',
  },
};

/**
 * Antique rococo frame. The rails are CSS gradients (so they stretch to any
 * aspect without smearing) while the scrollwork corners and crest are fixed
 * SVGs pinned on top.
 */
export function OrnateFrame({
  children,
  tone = 'gold',
  scale = 1,
  className = '',
  crest = true,
}: OrnateFrameProps) {
  const t = TONES[tone];
  const rail = 22 * scale;

  return (
    <div className={`relative ${className}`} style={{ padding: rail * 1.1 }}>
      {/* outer moulding */}
      <div
        className="absolute inset-0 rounded-[10px]"
        style={{
          background: t.rail,
          border: `1px solid ${t.border}`,
          boxShadow: `0 ${12 * scale}px ${30 * scale}px ${t.shadow}, inset 0 0 0 1px rgba(255,255,255,0.4)`,
        }}
      />
      {/* beaded inner course */}
      <div
        className="absolute rounded-[4px]"
        style={{
          inset: rail * 0.72,
          background: `repeating-linear-gradient(90deg, ${t.light} 0 3px, ${t.bead} 3px 6px)`,
          opacity: 0.85,
        }}
      />
      {/* fillet shadow so the picture sits deep in the frame */}
      <div
        className="absolute rounded-[3px]"
        style={{
          inset: rail * 0.98,
          boxShadow: `inset 0 0 ${16 * scale}px rgba(0,0,0,0.55)`,
        }}
      />

      {/* the picture itself */}
      <div
        className="relative overflow-hidden rounded-[2px]"
        style={{ boxShadow: `inset 0 0 ${10 * scale}px rgba(0,0,0,0.5)` }}
      >
        {children}
      </div>

      {/* corner scrollwork */}
      {(
        [
          ['top-0 left-0', 'rotate(0)'],
          ['top-0 right-0', 'scale(-1,1)'],
          ['bottom-0 left-0', 'scale(1,-1)'],
          ['bottom-0 right-0', 'scale(-1,-1)'],
        ] as const
      ).map(([pos, tf]) => (
        <svg
          key={pos}
          aria-hidden
          viewBox="0 0 120 120"
          className={`pointer-events-none absolute ${pos}`}
          style={{
            width: 72 * scale,
            height: 72 * scale,
            transform: `${tf} translate(${-8 * scale}px, ${-8 * scale}px)`,
          }}
        >
          <g
            fill="none"
            stroke={t.ink}
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.95"
          >
            <path
              d="M14 106C14 62 34 30 78 18c-16 16-20 30-14 40 6 10 22 10 28 0 5-9 0-20-12-22"
              stroke={t.light}
              strokeWidth="5"
            />
            <path d="M14 106C14 62 34 30 78 18c-16 16-20 30-14 40 6 10 22 10 28 0 5-9 0-20-12-22" />
            <path d="M30 100c0-30 14-52 44-64" strokeWidth="1.4" opacity="0.8" />
            <path d="M46 92c2-20 12-34 30-42" strokeWidth="1.2" opacity="0.65" />
            <path
              d="M22 74c-8 2-14 8-14 16 8 0 14-5 14-16z"
              fill={t.light}
              stroke={t.ink}
              strokeWidth="1.4"
            />
            <path
              d="M74 26c2-8 8-14 16-14 0 8-5 14-16 14z"
              fill={t.light}
              stroke={t.ink}
              strokeWidth="1.4"
            />
            <circle cx="92" cy="56" r="4" fill={t.light} strokeWidth="1.4" />
          </g>
        </svg>
      ))}

      {/* crest */}
      {crest && (
        <svg
          aria-hidden
          viewBox="0 0 200 80"
          className="pointer-events-none absolute left-1/2 -translate-x-1/2"
          style={{ width: 150 * scale, height: 60 * scale, top: -34 * scale }}
        >
          <g fill="none" stroke={t.ink} strokeWidth="2" strokeLinecap="round">
            <path
              d="M100 16c-14 0-24 10-24 22 0 10 8 18 18 18"
              stroke={t.light}
              strokeWidth="5"
            />
            <path d="M100 16c-14 0-24 10-24 22 0 10 8 18 18 18" />
            <path
              d="M100 16c14 0 24 10 24 22 0 10-8 18-18 18"
              stroke={t.light}
              strokeWidth="5"
            />
            <path d="M100 16c14 0 24 10 24 22 0 10-8 18-18 18" />
            <path d="M76 44C60 44 46 52 38 66" />
            <path d="M124 44c16 0 30 8 38 22" />
            <path
              d="M100 4c5 4 7 9 5 15-4-3-8-3-10 0-2-6 0-11 5-15z"
              fill={t.light}
              strokeWidth="1.6"
            />
            <circle cx="100" cy="40" r="6" fill={t.light} strokeWidth="1.6" />
          </g>
        </svg>
      )}
    </div>
  );
}
