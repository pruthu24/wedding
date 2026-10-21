/** Small engraved ornaments used as dividers and punctuation. */

interface OrnamentProps {
  className?: string;
  color?: string;
}

/** Hairline rule broken in the middle by a diamond and two leaves. */
export function DiamondRule({
  className = '',
  color = 'currentColor',
}: OrnamentProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 320 18"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="1"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M4 9h118" strokeLinecap="round" opacity="0.7" />
      <path d="M198 9h118" strokeLinecap="round" opacity="0.7" />
      <path d="M160 2.5 167.5 9 160 15.5 152.5 9z" />
      <path d="M152 9c-6-5-12-5-18 0 6 5 12 5 18 0z" opacity="0.85" />
      <path d="M168 9c6-5 12-5 18 0-6 5-12 5-18 0z" opacity="0.85" />
      <circle cx="130" cy="9" r="1.4" fill={color} stroke="none" />
      <circle cx="190" cy="9" r="1.4" fill={color} stroke="none" />
    </svg>
  );
}

/** Symmetrical scrollwork flourish, used above headings. */
export function Flourish({ className = '', color = 'currentColor' }: OrnamentProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 220 44"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="1.1"
      strokeLinecap="round"
    >
      <path d="M110 6c0 8-5 12-5 16s5 6 5 12" />
      <path d="M110 6c-10 6-26 4-34 12-6 6-2 14 6 14 7 0 11-6 8-11-4-6-14-4-18 2" />
      <path d="M110 6c10 6 26 4 34 12 6 6 2 14-6 14-7 0-11-6-8-11 4-6 14-4 18 2" />
      <path d="M62 30c-14 2-24 6-30 10" opacity="0.7" />
      <path d="M158 30c14 2 24 6 30 10" opacity="0.7" />
      <circle cx="110" cy="38" r="2.4" fill={color} stroke="none" />
    </svg>
  );
}

/** Temple finial (kalasam) — repeated along the gopuram crest. */
export function Kalasam({ className = '', color = 'currentColor' }: OrnamentProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 44" className={className} fill={color}>
      <path d="M12 0c1.6 3.4 1.2 5.6 0 7.4-1.2-1.8-1.6-4 0-7.4z" />
      <rect x="10.6" y="7" width="2.8" height="6" rx="1" />
      <path d="M12 12c5 0 8 3.4 8 7.6 0 4.4-3.6 7.4-8 7.4s-8-3-8-7.4C4 15.4 7 12 12 12z" />
      <rect x="7" y="26" width="10" height="3" rx="1.2" />
      <path d="M5 29h14l-2 5H7z" />
      <rect x="4" y="34" width="16" height="3.4" rx="1.4" />
      <rect x="2.5" y="37.6" width="19" height="4" rx="1.6" />
    </svg>
  );
}

/** Blooming sprig — scattered through the garden scenes. */
export function Sprig({ className = '', color = 'currentColor' }: OrnamentProps) {
  return (
    <svg aria-hidden viewBox="0 0 60 90" className={className} fill="none">
      <path
        d="M30 90V22"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M30 70c-10-2-16-8-18-18 10 1 16 7 18 18zM30 56c10-2 16-8 18-18-10 1-16 7-18 18zM30 42c-8-2-13-7-14-15 8 1 13 6 14 15z"
        fill={color}
        opacity="0.75"
      />
      <circle cx="30" cy="18" r="5" fill={color} opacity="0.9" />
      <circle cx="21" cy="26" r="3.4" fill={color} opacity="0.7" />
      <circle cx="39" cy="27" r="3" fill={color} opacity="0.7" />
    </svg>
  );
}
