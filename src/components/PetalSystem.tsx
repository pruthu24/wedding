import { useMemo } from 'react';
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useViewport';

/**
 * Drifting flower petals.
 *
 * Motion is three nested CSS transforms — a linear fall, an eased lateral
 * sway and a slow tumble — so nothing falls straight down and nothing costs
 * a JavaScript frame. Depth is expressed through size, blur and opacity, and
 * the caller decides whether a layer sits behind the artwork or in front.
 */

const TONES = ['#C4767C', '#E2AFB2', '#9E4A52', '#D79AA0', '#B5636B'];

/** Deterministic pseudo-random so petals don't re-shuffle on every render. */
function rand(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

interface PetalSystemProps {
  /** Desktop petal count; mobile automatically uses about a third. */
  count?: number;
  /** `back` petals are small, hazy and dim; `front` ones are large and sharp. */
  depth?: 'back' | 'front';
  className?: string;
  seed?: number;
}

export function PetalSystem({
  count = 18,
  depth = 'back',
  className = '',
  seed = 1,
}: PetalSystemProps) {
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();

  const petals = useMemo(() => {
    const n = reduced ? 0 : isMobile ? Math.max(4, Math.round(count * 0.35)) : count;
    return Array.from({ length: n }, (_, i) => {
      const s = seed * 100 + i;
      const near = depth === 'front';
      // Depth factor: 0 = far away, 1 = right in front of the lens.
      const d = rand(s) * (near ? 0.55 : 0.5) + (near ? 0.45 : 0);
      return {
        id: i,
        left: rand(s + 1) * 104 - 2,
        size: (near ? 16 : 9) + d * (near ? 22 : 12),
        fallDuration: (near ? 16 : 26) - d * 6 + rand(s + 2) * 8,
        fallDelay: -rand(s + 3) * 30,
        swayDuration: 4 + rand(s + 4) * 5,
        swayDelay: -rand(s + 5) * 6,
        spinDuration: 7 + rand(s + 6) * 12,
        opacity: (near ? 0.62 : 0.34) + d * 0.3,
        blur: near ? (1 - d) * 1.2 : 0.6 + (1 - d) * 1.8,
        tone: TONES[Math.floor(rand(s + 7) * TONES.length)],
        flip: rand(s + 8) > 0.5,
      };
    });
  }, [count, depth, isMobile, reduced, seed]);

  if (petals.length === 0) return null;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal-fall absolute top-0"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.fallDuration}s`,
            animationDelay: `${p.fallDelay}s`,
          }}
        >
          <div
            className="petal-sway"
            style={{
              animationDuration: `${p.swayDuration}s`,
              animationDelay: `${p.swayDelay}s`,
              fontSize: `${p.size}px`,
            }}
          >
            <div
              className="petal-spin"
              style={{ animationDuration: `${p.spinDuration}s` }}
            >
              <Petal
                size={p.size}
                tone={p.tone}
                opacity={p.opacity}
                blur={p.blur}
                flip={p.flip}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Petal({
  size,
  tone,
  opacity,
  blur,
  flip,
}: {
  size: number;
  tone: string;
  opacity: number;
  blur: number;
  flip: boolean;
}) {
  return (
    <svg
      width={size}
      height={size * 0.78}
      viewBox="0 0 40 32"
      style={{
        opacity,
        filter: blur > 0.15 ? `blur(${blur.toFixed(2)}px)` : undefined,
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    >
      {/* A single fallen petal: one curled edge, one soft one. */}
      <path
        d="M1 18C5 5 17 0 30 1c8 1 10 7 8 13-3 9-14 18-25 17-8-1-13-6-12-13z"
        fill={tone}
      />
      <path
        d="M4 18C8 8 18 3 29 4c-9 3-18 9-25 16z"
        fill="#FBF7EE"
        opacity="0.28"
      />
      <path
        d="M2 19c9-1 19-6 27-14"
        stroke="#7E3A46"
        strokeWidth="0.7"
        fill="none"
        opacity="0.35"
      />
    </svg>
  );
}
