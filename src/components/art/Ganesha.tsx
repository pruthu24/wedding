/**
 * Traditional black line-art Ganesha, seated on a lotus beneath an arched
 * prabhavali. Drawn entirely with strokes so it reads as pen-and-ink on the
 * parchment rather than as an image dropped onto it.
 */
export function Ganesha({ className = '' }: { className?: string }) {
  const ink = '#1A1613';

  return (
    <svg
      aria-hidden
      viewBox="0 0 340 430"
      className={className}
      fill="none"
      stroke={ink}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* ------------------------- prabhavali arch ------------------------- */}
      <path
        d="M52 372V214C52 142 103 84 170 84s118 58 118 130v158"
        strokeWidth="2.6"
      />
      <path
        d="M66 372V216c0-64 46-118 104-118s104 54 104 118v156"
        strokeWidth="1.1"
        opacity="0.6"
      />
      {/* flame tips along the arch */}
      {Array.from({ length: 17 }, (_, i) => {
        const t = i / 16;
        const a = Math.PI * (1 - t);
        const cx = 170 + Math.cos(a) * 118;
        const cy = 214 - Math.sin(a) * 130;
        return (
          <path
            key={i}
            d="M0 0c4-4 6-9 4-15-4 4-9 5-12 1 0 6 3 11 8 14z"
            transform={`translate(${cx} ${cy}) rotate(${(-a * 180) / Math.PI + 90}) scale(0.9)`}
            strokeWidth="1.3"
            opacity="0.75"
          />
        );
      })}

      {/* ------------------------------ crown ------------------------------ */}
      <path d="M170 96c-30 0-52-12-52-12l10 36h84l10-36s-22 12-52 12z" />
      <path d="M170 60c8 0 14 7 14 16 0 7-5 12-14 20-9-8-14-13-14-20 0-9 6-16 14-16z" />
      <path d="M170 52v8" strokeWidth="1.4" />
      <circle cx="170" cy="46" r="5" />
      <path d="M128 120h84" strokeWidth="1.4" />
      {[-30, -15, 0, 15, 30].map((dx) => (
        <path key={dx} d={`M${170 + dx} 104v14`} strokeWidth="1" opacity="0.7" />
      ))}

      {/* ------------------------------- head ------------------------------ */}
      <path d="M170 126c34 0 56 24 56 54 0 14-4 26-11 36" />
      <path d="M170 126c-34 0-56 24-56 54 0 14 4 26 11 36" />

      {/* ears */}
      <path d="M116 138c-28-8-52 4-58 28-7 26 8 54 32 66 16 8 28 6 34-4 5-9 2-20-6-30-9-12-10-22-2-30 6-6 4-14 0-30z" />
      <path d="M224 138c28-8 52 4 58 28 7 26-8 54-32 66-16 8-28 6-34-4-5-9-2-20 6-30 9-12 10-22 2-30-6-6-4-14 0-30z" />
      <path
        d="M112 156c-18-2-32 8-35 26-3 17 6 36 22 44"
        strokeWidth="1.1"
        opacity="0.65"
      />
      <path
        d="M228 156c18-2 32 8 35 26 3 17-6 36-22 44"
        strokeWidth="1.1"
        opacity="0.65"
      />

      {/* tilaka */}
      <path d="M170 132v20" strokeWidth="1.6" />
      <path d="M162 138c4 6 12 6 16 0" strokeWidth="1.2" opacity="0.7" />

      {/* eyes */}
      <path d="M140 166c6-6 16-6 22 0-6 6-16 6-22 0z" fill={ink} strokeWidth="0" />
      <path d="M178 166c6-6 16-6 22 0-6 6-16 6-22 0z" fill={ink} strokeWidth="0" />
      <path d="M136 158c8-6 20-6 28-1" strokeWidth="1.4" />
      <path d="M176 157c8-5 20-5 28 1" strokeWidth="1.4" />

      {/* tusks — the right one broken, as tradition has it */}
      <path d="M144 196c-6 12-4 22 4 30" strokeWidth="1.8" />
      <path d="M196 196c5 8 5 14 2 19" strokeWidth="1.8" />

      {/* trunk, curling left toward the bowl of modaks */}
      <path d="M170 184c0 20-3 36-14 52-12 18-30 26-40 40-9 12-6 24 6 28 11 4 22-2 26-12" />
      <path
        d="M182 186c0 22-4 38-16 56-12 18-28 24-36 36"
        strokeWidth="1.2"
        opacity="0.6"
      />
      {[0.28, 0.44, 0.6, 0.76].map((t, i) => (
        <path
          key={i}
          d={`M${170 - t * 34} ${196 + t * 62}l${12 - t * 4} ${-4 - t * 2}`}
          strokeWidth="1"
          opacity="0.5"
        />
      ))}

      {/* ------------------------------ body ------------------------------- */}
      <path d="M170 216c-16 0-30 6-40 16" strokeWidth="1.6" />
      <path d="M170 216c16 0 30 6 40 16" strokeWidth="1.6" />
      {/* belly */}
      <path d="M96 286c0-38 33-62 74-62s74 24 74 62c0 34-33 56-74 56s-74-22-74-56z" />
      <path d="M170 300c-10 0-18-6-18-13" strokeWidth="1.2" opacity="0.7" />
      {/* sacred thread */}
      <path d="M126 236c22 30 40 58 50 96" strokeWidth="1.3" opacity="0.8" />
      {/* waistband */}
      <path d="M104 316c40 16 92 16 132 0" strokeWidth="1.6" />
      <path d="M104 324c40 16 92 16 132 0" strokeWidth="1.1" opacity="0.6" />

      {/* necklaces */}
      <path d="M134 230c18 20 54 20 72 0" strokeWidth="1.4" />
      <path d="M126 240c22 32 66 32 88 0" strokeWidth="1.1" opacity="0.7" />
      <circle cx="170" cy="258" r="5" strokeWidth="1.4" />

      {/* ------------------------------ arms -------------------------------- */}
      {/* upper left — ankusha */}
      <path d="M112 244c-22-6-38-20-44-40" />
      <path d="M68 204c-8-4-12-12-10-20" strokeWidth="1.6" />
      <path d="M58 184l-8-34" strokeWidth="1.8" />
      <path d="M50 150c-8-2-14-10-12-18 6 2 11 7 12 18z" strokeWidth="1.5" />
      {/* upper right — pasha */}
      <path d="M228 244c22-6 38-20 44-40" />
      <path d="M272 204c8-4 12-12 10-20" strokeWidth="1.6" />
      <circle cx="286" cy="164" r="13" strokeWidth="1.6" />
      <path d="M282 178l-6 12" strokeWidth="1.3" />
      {/* lower left — bowl of modaks */}
      <path d="M100 276c-16 8-26 22-26 38 0 10 6 18 16 18" />
      <path d="M76 330h44" strokeWidth="1.8" />
      <path d="M80 330c2 10 10 16 18 16s16-6 18-16" strokeWidth="1.5" />
      <path d="M90 328c2-8 5-12 8-12s6 4 8 12" strokeWidth="1.3" />
      {/* lower right — abhaya mudra, the gesture of fearlessness */}
      <path d="M240 276c18 8 30 22 30 40" />
      <path d="M270 316c0-4 3-7 7-7s7 3 7 7v26c0 8-6 14-14 14s-14-6-14-14v-14" />
      {[0, 5, 10].map((dx) => (
        <path key={dx} d={`M${272 + dx} 320v18`} strokeWidth="1" opacity="0.6" />
      ))}

      {/* ------------------------------ legs -------------------------------- */}
      <path d="M96 330c-14 10-22 24-20 36 2 12 14 18 30 18h128c16 0 28-6 30-18 2-12-6-26-20-36" />
      <path d="M112 384c14-10 34-14 58-14s44 4 58 14" strokeWidth="1.2" opacity="0.7" />
      <path d="M150 384c8-8 12-16 12-26" strokeWidth="1.2" opacity="0.6" />
      <path d="M190 384c-8-8-12-16-12-26" strokeWidth="1.2" opacity="0.6" />

      {/* ------------------------------ lotus ------------------------------- */}
      <path d="M62 388h216" strokeWidth="2.2" />
      {Array.from({ length: 11 }, (_, i) => {
        const x = 68 + i * 20.4;
        return (
          <path
            key={i}
            d={`M${x} 390c-8 6-12 14-10 22 8 4 18 0 22-8 3-6 1-11-12-14z`}
            strokeWidth="1.5"
          />
        );
      })}
      <path d="M54 390c40 30 192 30 232 0" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}
