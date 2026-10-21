/**
 * Illustrated bride and groom in traditional wedding dress — the small
 * figures tucked into the corner of the footer's call-to-action card.
 */
export function BrideGroom({ className = '' }: { className?: string }) {
  const ink = '#3E2A1B';
  const skin = '#C79A6B';
  const gold = '#B4893C';

  return (
    <svg
      aria-hidden
      viewBox="0 0 280 320"
      className={className}
      preserveAspectRatio="xMidYMax meet"
    >
      {/* ------------------------------ groom ------------------------------ */}
      <g stroke={ink} strokeWidth="1.6" strokeLinejoin="round">
        {/* sherwani */}
        <path
          d="M92 320V196c0-30 12-48 32-54 20 6 32 24 32 54v124z"
          fill="#F0E2C4"
        />
        <path d="M124 142v178" strokeWidth="1.2" opacity="0.7" fill="none" />
        {/* churidar hem */}
        <path d="M92 300h64" strokeWidth="1.2" opacity="0.6" fill="none" />
        {/* embroidery */}
        {[176, 200, 224, 248].map((y) => (
          <path
            key={y}
            d={`M100 ${y}q24 8 48 0`}
            stroke={gold}
            strokeWidth="1.4"
            fill="none"
            opacity="0.9"
          />
        ))}
        {/* arms */}
        <path
          d="M96 156c-12 8-18 22-18 40v34"
          stroke="#F0E2C4"
          strokeWidth="13"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M152 156c12 8 18 22 18 40v30"
          stroke="#F0E2C4"
          strokeWidth="13"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="78" cy="232" r="6" fill={skin} />
        <circle cx="170" cy="228" r="6" fill={skin} />
        {/* head and turban */}
        <circle cx="124" cy="120" r="19" fill={skin} />
        <path
          d="M104 116c-2-20 10-32 20-32s22 12 20 32c-6-10-14-14-20-14s-14 4-20 14z"
          fill="#A5452A"
        />
        <path d="M104 112q20-14 40 0" stroke={gold} strokeWidth="2" fill="none" />
        <path
          d="M124 84c4-6 4-12 0-18-4 6-4 12 0 18z"
          fill={gold}
          strokeWidth="1"
        />
        {/* garland */}
        <path
          d="M108 142c-10 26-6 52 16 66 22-14 26-40 16-66"
          stroke="#E2AFB2"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* ------------------------------ bride ------------------------------ */}
      <g stroke={ink} strokeWidth="1.6" strokeLinejoin="round">
        {/* lehenga */}
        <path
          d="M156 320c-4-52 6-96 30-108 24 12 34 56 30 108z"
          fill="#A5452A"
        />
        <path
          d="M158 296q28 10 56 0"
          stroke={gold}
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M162 268q24 8 48 0"
          stroke={gold}
          strokeWidth="1.6"
          fill="none"
          opacity="0.9"
        />
        {/* blouse */}
        <path
          d="M170 212c0-18 6-28 16-30 10 2 16 12 16 30z"
          fill="#9E4A52"
        />
        {/* arms with bangles */}
        <path
          d="M172 190c-10 8-14 22-12 40"
          stroke={skin}
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M202 190c10 8 14 22 12 40"
          stroke={skin}
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
        {[218, 224, 230].map((y) => (
          <g key={y}>
            <path d={`M156 ${y}h9`} stroke={gold} strokeWidth="2" />
            <path d={`M209 ${y}h9`} stroke={gold} strokeWidth="2" />
          </g>
        ))}
        {/* head and dupatta drawn over it */}
        <circle cx="186" cy="164" r="17" fill={skin} />
        <path
          d="M166 168c-2-22 8-34 20-34s22 12 20 34c-6-12-12-16-20-16s-14 4-20 16z"
          fill="#3E2A1B"
        />
        <path
          d="M164 166c-10 26-8 62 6 92 10-34 10-66 4-92z"
          fill="#C4767C"
          opacity="0.92"
        />
        <path
          d="M208 166c10 26 8 62-6 92-10-34-10-66-4-92z"
          fill="#C4767C"
          opacity="0.92"
        />
        <path
          d="M164 166q22-16 44 0"
          stroke={gold}
          strokeWidth="2.4"
          fill="none"
        />
        {/* maang tikka and nose ring */}
        <path d="M186 148v-10" stroke={gold} strokeWidth="1.6" />
        <circle cx="186" cy="136" r="3.4" fill={gold} />
        <circle cx="178" cy="170" r="3" fill="none" stroke={gold} strokeWidth="1.4" />
        {/* garland */}
        <path
          d="M172 190c-8 24-4 46 14 58 18-12 22-34 14-58"
          stroke="#E2AFB2"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* scattered petals at their feet */}
      {[
        [70, 310],
        [104, 316],
        [148, 312],
        [206, 314],
        [242, 308],
      ].map(([x, y], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="7"
          ry="4"
          fill={i % 2 ? '#E2AFB2' : '#C4767C'}
          opacity="0.85"
          transform={`rotate(${i * 27 - 30} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}
