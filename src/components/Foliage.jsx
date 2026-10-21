import React from "react";

const LEAF = "M0 0C18-26 58-30 86 0C58 26 18 24 0 0Z";
const GREENS = ["#223226", "#2A3A2C", "#3b5034", "#4f6540", "#2f4430"];

// Hand-drawn leaf cluster used as a foreground parallax layer.
const leaves = [
  [20, 210, -40, 1.6], [70, 190, -20, 1.4], [0, 150, -70, 1.3], [120, 215, -8, 1.5],
  [40, 120, -55, 1.1], [150, 180, -30, 1.2], [200, 220, 5, 1.4], [90, 140, -45, 1],
  [230, 195, -15, 1.1], [10, 90, -80, 1], [170, 130, -60, 0.9], [260, 225, 10, 1.2],
];
const berries = [[110, 165], [118, 172], [104, 175], [210, 170], [218, 178], [60, 150]];

export default function Foliage({ flip = false, className = "" }) {
  return (
    <svg
      viewBox="0 0 320 240"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      {leaves.map(([x, y, r, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
          <path d={LEAF} fill={GREENS[i % GREENS.length]} />
          <path d="M2 0H80" stroke="#f4ede4" strokeOpacity=".12" strokeWidth="1" />
        </g>
      ))}
      {berries.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill={i % 2 ? "#a8424a" : "#8e2f38"} />
      ))}
      <g transform="translate(180 150)">
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse key={a} rx="6" ry="12" transform={`rotate(${a}) translate(0 -10)`} fill="#d9a0a0" />
        ))}
        <circle r="4" fill="#C5A059" />
      </g>
    </svg>
  );
}