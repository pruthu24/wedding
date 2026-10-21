import React, { useMemo } from "react";

const COLORS = ["#c46f78", "#a8424a", "#d9a0a0", "#b5525c", "#e3b7b0"];

// Drifting petals rendered with CSS keyframes (transform/opacity only).
// Count is halved on small screens for performance.
export default function PetalSystem({ count = 18, className = "", scale = 1, opacity = 0.9 }) {
  const petals = useMemo(() => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const n = isMobile ? Math.ceil(count / 2) : count;
    return Array.from({ length: n }, (_, i) => {
      const depth = Math.random();
      return {
        id: i,
        left: Math.random() * 100,
        size: (8 + depth * 18) * scale,
        d: 16 + (1 - depth) * 16,
        delay: -Math.random() * 30,
        f: 2.5 + Math.random() * 3,
        sway: `${(Math.random() * 10 + 4) * (Math.random() > 0.5 ? 1 : -1)}vw`,
        drift: `${(Math.random() - 0.3) * 24}vw`,
        o: (0.45 + depth * 0.5) * opacity,
        blur: depth < 0.25 ? 1.5 : 0,
        color: COLORS[i % COLORS.length],
      };
    });
  }, [count, scale, opacity]);

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal absolute top-0"
          style={{
            left: `${p.left}%`,
            "--d": `${p.d}s`,
            "--delay": `${p.delay}s`,
            "--f": `${p.f}s`,
            "--sway": p.sway,
            "--drift": p.drift,
            "--o": p.o,
            filter: p.blur ? `blur(${p.blur}px)` : undefined,
          }}
        >
          <span>
            <svg width={p.size} height={p.size * 1.25} viewBox="0 0 20 25">
              <path d="M10 0C16 5 20 12 17 19c-2 4-5 6-7 6s-5-2-7-6C0 12 4 5 10 0z" fill={p.color} />
              <path d="M10 3c0 7 0 14-1 20" stroke="#7a2a32" strokeOpacity=".25" strokeWidth=".6" fill="none" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
