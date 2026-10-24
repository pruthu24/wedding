interface ArtworkProps {
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Lord Ganesha — Minimal, respectful fine ink drawing with antique-gold wash.
 * Perfect for the top of the sacred digital wedding invitation letter.
 */
export function GaneshaLineArt({ className = 'w-16 h-20' }: ArtworkProps) {
  return (
    <svg
      viewBox="0 0 160 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lord Ganesha Emblem"
    >
      {/* Soft watercolor halo */}
      <circle cx="80" cy="85" r="54" fill="#E9B949" fillOpacity="0.12" />
      <circle cx="80" cy="85" r="44" fill="#B69A62" fillOpacity="0.08" />

      {/* Prabhavali arch */}
      <path
        d="M32 155 V90 C32 58 52 32 80 32 C108 32 128 58 128 90 V155"
        stroke="#B69A62"
        strokeWidth="1.5"
        strokeDasharray="2 3"
      />

      {/* Crown (Mukut) */}
      <path
        d="M65 52 L80 20 L95 52 Z"
        stroke="#49372B"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="#FAF7F0"
      />
      <circle cx="80" cy="36" r="3" fill="#E9B949" stroke="#49372B" strokeWidth="1" />
      <line x1="72" y1="46" x2="88" y2="46" stroke="#B69A62" strokeWidth="1.2" />

      {/* Ears */}
      <path
        d="M62 62 C40 60 36 84 48 98 C56 106 64 100 66 94"
        stroke="#49372B"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M98 62 C120 60 124 84 112 98 C104 106 96 100 94 94"
        stroke="#49372B"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Forehead & Auspicious Namam / Tilak */}
      <path
        d="M66 64 C72 58 88 58 94 64"
        stroke="#49372B"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M76 60 V78 M84 60 V78 M72 74 C76 82 84 82 88 74"
        stroke="#C87558"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="80" cy="80" r="2.5" fill="#E9B949" />

      {/* Eyes */}
      <path d="M68 76 Q73 73 76 77" stroke="#49372B" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M84 77 Q87 73 92 76" stroke="#49372B" strokeWidth="1.6" strokeLinecap="round" />

      {/* Tusk & Trunk gracefully curving to the left (Valampuri / auspicious) */}
      <path
        d="M74 88 C76 104 70 120 62 128 C54 136 46 130 50 122 C53 116 60 114 62 110"
        stroke="#49372B"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Tusk */}
      <line x1="88" y1="90" x2="94" y2="92" stroke="#FAF7F0" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="88" y1="90" x2="94" y2="92" stroke="#49372B" strokeWidth="1" strokeLinecap="round" />

      {/* Seated Pose on Lotus */}
      <path
        d="M48 145 C48 135 60 125 80 125 C100 125 112 135 112 145 Z"
        stroke="#49372B"
        strokeWidth="1.5"
        fill="#FAF7F0"
      />
      {/* Hands holding lotus / modak */}
      <circle cx="50" cy="120" r="4" fill="#E9B949" stroke="#49372B" strokeWidth="1.2" />
      <circle cx="110" cy="120" r="4" fill="#C87558" stroke="#49372B" strokeWidth="1.2" />

      {/* Lotus Petals Base */}
      <path
        d="M40 160 C55 148 65 160 80 152 C95 160 105 148 120 160 C110 172 90 174 80 168 C70 174 50 172 40 160 Z"
        stroke="#49372B"
        strokeWidth="1.5"
        fill="#D8A6A0"
        fillOpacity="0.4"
      />
    </svg>
  );
}

/**
 * Elegant Indian Wedding Mandap / Canopy Illustration.
 * Serves as the heroic centerpiece with floral garlands, hanging bells, and pillars.
 */
export function StationeryMandap({ className = 'w-full max-w-3xl' }: ArtworkProps) {
  return (
    <svg
      viewBox="0 0 900 480"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="South Indian Wedding Mandap Canopy"
    >
      <defs>
        {/* Watercolor gradients */}
        <radialGradient id="marigold-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E9B949" stopOpacity="0.9" />
          <stop offset="80%" stopColor="#C87558" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#C87558" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gold-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B69A62" />
          <stop offset="50%" stopColor="#FFF0C2" />
          <stop offset="100%" stopColor="#8A6D3B" />
        </linearGradient>
      </defs>

      {/* ---------------- Mandap Dome / Curved Scalloped Canopy Roof ---------------- */}
      {/* Canopy backdrop soft watercolor tint */}
      <path
        d="M150 160 Q450 70 750 160 L730 180 Q450 110 170 180 Z"
        fill="#F5EBDD"
        opacity="0.8"
      />
      <path
        d="M140 165 C260 100 640 100 760 165"
        stroke="#B69A62"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M160 178 C280 120 620 120 740 178"
        stroke="#49372B"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />

      {/* Ornamental Crown Finial on Mandap Top */}
      <g transform="translate(450, 85)">
        <path d="M0 -30 L10 -5 L-10 -5 Z" fill="#E9B949" stroke="#49372B" strokeWidth="1.5" />
        <circle cx="0" cy="-35" r="4.5" fill="#B69A62" />
        <path d="M-25 0 Q0 -20 25 0 Q0 5 -25 0" fill="#FAF7F0" stroke="#49372B" strokeWidth="1.5" />
      </g>

      {/* ---------------- Layered Scalloped Marigold & Jasmine Garlands ---------------- */}
      {/* Top Main Garland */}
      <path
        d="M160 180 Q250 220 340 185 Q450 230 560 185 Q650 220 740 180"
        stroke="#E9B949"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M160 180 Q250 220 340 185 Q450 230 560 185 Q650 220 740 180"
        stroke="#C87558"
        strokeWidth="4"
        strokeDasharray="6 8"
        strokeLinecap="round"
      />

      {/* Secondary Jasmine Garland (White & Gold) */}
      <path
        d="M200 190 Q300 240 400 200 Q450 235 500 200 Q600 240 700 190"
        stroke="#FAF7F0"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M200 190 Q300 240 400 200 Q450 235 500 200 Q600 240 700 190"
        stroke="#B69A62"
        strokeWidth="1.5"
        strokeDasharray="3 6"
      />

      {/* ---------------- Four Ornate Wooden / Brass Pillars ---------------- */}
      {/* Left Outer Pillar */}
      <g transform="translate(180, 180)">
        {/* Pillar Capital */}
        <rect x="-16" y="0" width="32" height="14" rx="2" fill="#B69A62" stroke="#49372B" strokeWidth="1.5" />
        {/* Pillar Shaft */}
        <line x1="-8" y1="14" x2="-8" y2="280" stroke="#49372B" strokeWidth="1.5" />
        <line x1="8" y1="14" x2="8" y2="280" stroke="#49372B" strokeWidth="1.5" />
        <rect x="-8" y="14" width="16" height="266" fill="#F5EBDD" />
        {/* Decorative carved rings */}
        <line x1="-12" y1="80" x2="12" y2="80" stroke="#B69A62" strokeWidth="2" />
        <line x1="-12" y1="180" x2="12" y2="180" stroke="#B69A62" strokeWidth="2" />
        {/* Pillar Base */}
        <rect x="-18" y="280" width="36" height="16" rx="2" fill="#B69A62" stroke="#49372B" strokeWidth="1.5" />
        
        {/* Climbing Botanical Vines on Pillar */}
        <path
          d="M-8 270 Q-14 220 0 170 Q12 120 -4 70 Q-10 40 4 20"
          stroke="#475747"
          strokeWidth="2"
          fill="none"
        />
        {/* Leaves */}
        {[-220, -180, -140, -100, -60, -30].map((y, i) => (
          <ellipse
            key={i}
            cx={i % 2 === 0 ? 6 : -6}
            cy={y + 270}
            rx="5"
            ry="2.5"
            transform={`rotate(${i % 2 === 0 ? 30 : -30} ${i % 2 === 0 ? 6 : -6} ${y + 270})`}
            fill="#A6B49A"
            stroke="#475747"
            strokeWidth="0.8"
          />
        ))}
      </g>

      {/* Right Outer Pillar */}
      <g transform="translate(720, 180)">
        <rect x="-16" y="0" width="32" height="14" rx="2" fill="#B69A62" stroke="#49372B" strokeWidth="1.5" />
        <line x1="-8" y1="14" x2="-8" y2="280" stroke="#49372B" strokeWidth="1.5" />
        <line x1="8" y1="14" x2="8" y2="280" stroke="#49372B" strokeWidth="1.5" />
        <rect x="-8" y="14" width="16" height="266" fill="#F5EBDD" />
        <line x1="-12" y1="80" x2="12" y2="80" stroke="#B69A62" strokeWidth="2" />
        <line x1="-12" y1="180" x2="12" y2="180" stroke="#B69A62" strokeWidth="2" />
        <rect x="-18" y="280" width="36" height="16" rx="2" fill="#B69A62" stroke="#49372B" strokeWidth="1.5" />
        
        {/* Climbing Botanical Vines */}
        <path
          d="M8 270 Q14 220 0 170 Q-12 120 4 70 Q10 40 -4 20"
          stroke="#475747"
          strokeWidth="2"
          fill="none"
        />
        {[-220, -180, -140, -100, -60, -30].map((y, i) => (
          <ellipse
            key={i}
            cx={i % 2 === 0 ? -6 : 6}
            cy={y + 270}
            rx="5"
            ry="2.5"
            transform={`rotate(${i % 2 === 0 ? -30 : 30} ${i % 2 === 0 ? -6 : 6} ${y + 270})`}
            fill="#A6B49A"
            stroke="#475747"
            strokeWidth="0.8"
          />
        ))}
      </g>

      {/* ---------------- Tiny Hanging Brass Temple Bells ---------------- */}
      {[240, 320, 410, 490, 580, 660].map((bx, i) => (
        <g key={i} transform={`translate(${bx}, 205)`} className="animate-bell" style={{ animationDelay: `${i * 0.4}s` }}>
          <line x1="0" y1="0" x2="0" y2="24" stroke="#B69A62" strokeWidth="1.5" />
          {/* Bell Body */}
          <path
            d="M-7 36 C-7 27 -4 24 0 24 C4 24 7 27 7 36 C8 38 -8 38 -7 36 Z"
            fill="#E9B949"
            stroke="#49372B"
            strokeWidth="1.2"
          />
          {/* Clapper / Dangling bead */}
          <circle cx="0" cy="40" r="2" fill="#B69A62" />
        </g>
      ))}

      {/* ---------------- Flanking Botanical Foliage (Mango leaves & Flowers) ---------------- */}
      {/* Top Left Leaf Cluster */}
      <g transform="translate(140, 160)">
        <path d="M0 0 C-40 -20 -60 10 -80 0 C-60 30 -30 20 0 0" fill="#A6B49A" stroke="#475747" strokeWidth="1.2" />
        <path d="M-10 10 C-30 40 -70 50 -60 70 C-30 60 -10 30 -10 10" fill="#475747" opacity="0.8" />
        {/* Blush floral accent */}
        <circle cx="-35" cy="18" r="8" fill="#D8A6A0" opacity="0.9" />
        <circle cx="-35" cy="18" r="3" fill="#C87558" />
      </g>

      {/* Top Right Leaf Cluster */}
      <g transform="translate(760, 160)">
        <path d="M0 0 C40 -20 60 10 80 0 C60 30 30 20 0 0" fill="#A6B49A" stroke="#475747" strokeWidth="1.2" />
        <path d="M10 10 C30 40 70 50 60 70 C30 60 10 30 10 10" fill="#475747" opacity="0.8" />
        <circle cx="35" cy="18" r="8" fill="#D8A6A0" opacity="0.9" />
        <circle cx="35" cy="18" r="3" fill="#C87558" />
      </g>
    </svg>
  );
}

/**
 * Traditional Brass Kuthu Vilakku (Auspicious South Indian Lamp)
 */
export function KuthuVilakku({ className = 'w-16 h-36' }: ArtworkProps) {
  return (
    <svg
      viewBox="0 0 100 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kuthu Vilakku Brass Lamp"
    >
      {/* Glowing Warm Flame Aura */}
      <circle cx="50" cy="22" r="16" fill="#E9B949" fillOpacity="0.25" />
      <path
        d="M50 8 C46 16 44 20 44 25 C44 30 47 34 50 34 C53 34 56 30 56 25 C56 20 54 16 50 8 Z"
        fill="#E9B949"
        stroke="#C87558"
        strokeWidth="1.2"
      />
      <circle cx="50" cy="26" r="3" fill="#FAF7F0" />

      {/* Swan Finial / Bird Crest (Annam) */}
      <path
        d="M50 34 C46 38 42 45 50 48 C58 45 54 38 50 34"
        fill="#B69A62"
        stroke="#49372B"
        strokeWidth="1.4"
      />

      {/* Top Oil Cup with 5 Spouts */}
      <path
        d="M25 56 C28 66 72 66 75 56 C75 52 25 52 25 56 Z"
        fill="#FAF7F0"
        stroke="#49372B"
        strokeWidth="1.5"
      />
      <line x1="20" y1="56" x2="80" y2="56" stroke="#B69A62" strokeWidth="2" />

      {/* Ornamental Stem with Ribbed Brass Bulbs */}
      <ellipse cx="50" cy="74" rx="14" ry="8" fill="#B69A62" stroke="#49372B" strokeWidth="1.4" />
      <line x1="47" y1="82" x2="47" y2="135" stroke="#49372B" strokeWidth="1.2" />
      <line x1="53" y1="82" x2="53" y2="135" stroke="#49372B" strokeWidth="1.2" />
      <ellipse cx="50" cy="140" rx="18" ry="10" fill="#B69A62" stroke="#49372B" strokeWidth="1.4" />

      {/* Secondary Mid-Tray */}
      <path
        d="M30 152 C35 162 65 162 70 152 Z"
        fill="#FAF7F0"
        stroke="#49372B"
        strokeWidth="1.4"
      />

      {/* Base Pedestal with Lotus Petals */}
      <path
        d="M20 200 C30 180 70 180 80 200 C84 208 16 208 20 200 Z"
        fill="#FAF7F0"
        stroke="#49372B"
        strokeWidth="1.6"
      />
      <rect x="18" y="206" width="64" height="6" rx="2" fill="#B69A62" stroke="#49372B" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Sacred Kalash (Auspicious Pot with Coconut & Mango Leaves)
 */
export function SacredKalash({ className = 'w-16 h-20' }: ArtworkProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sacred Kalash"
    >
      {/* Mango leaves spreading out */}
      <path d="M60 48 C40 30 20 40 18 20 C36 24 50 40 60 48" fill="#A6B49A" stroke="#475747" strokeWidth="1.2" />
      <path d="M60 48 C80 30 100 40 102 20 C84 24 70 40 60 48" fill="#A6B49A" stroke="#475747" strokeWidth="1.2" />
      <path d="M60 48 C55 20 50 10 60 0 C70 10 65 20 60 48" fill="#475747" stroke="#475747" strokeWidth="1.2" />

      {/* Coconut on top */}
      <ellipse cx="60" cy="40" rx="16" ry="18" fill="#C87558" stroke="#49372B" strokeWidth="1.5" />
      {/* Coconut tuft fiber */}
      <path d="M56 22 L60 14 L64 22" stroke="#49372B" strokeWidth="1.2" strokeLinecap="round" />

      {/* Brass Pot Rim & Body */}
      <ellipse cx="60" cy="56" rx="22" ry="5" fill="#B69A62" stroke="#49372B" strokeWidth="1.4" />
      <path
        d="M38 56 C26 75 26 100 40 114 C50 122 70 122 80 114 C94 100 94 75 82 56 Z"
        fill="#FAF7F0"
        stroke="#49372B"
        strokeWidth="1.6"
      />

      {/* Sacred Swastika / Auspicious Tilak Symbol on Pot */}
      <path
        d="M52 82 H68 M60 74 V90 M52 74 H58 M68 90 H62 M52 90 V84 M68 74 V80"
        stroke="#C87558"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Base */}
      <ellipse cx="60" cy="116" rx="18" ry="4" fill="#B69A62" stroke="#49372B" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * Royal Decorated Wedding Elephant with Floral Saddle
 */
export function RoyalElephant({ className = 'w-24 h-24' }: ArtworkProps) {
  return (
    <svg
      viewBox="0 0 160 130"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Decorated Indian Wedding Elephant"
    >
      {/* Elephant Body Contour */}
      <path
        d="M30 95 C26 65 40 40 70 38 C95 36 125 45 130 70 C132 82 130 105 130 115 H115 V88 C115 84 105 84 105 88 V115 H80 V88 C80 84 70 84 70 88 V115 H52 C52 95 48 95 44 95 L30 95 Z"
        fill="#FAF7F0"
        stroke="#49372B"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Trunk curled upward auspiciously */}
      <path
        d="M32 65 C20 65 14 75 14 85 C14 96 24 100 30 90 C34 82 36 75 32 65 Z"
        fill="#FAF7F0"
        stroke="#49372B"
        strokeWidth="1.5"
      />
      {/* Tusk */}
      <path d="M26 80 Q18 78 22 72 Q28 75 26 80" fill="#FFF" stroke="#49372B" strokeWidth="1" />

      {/* Ear */}
      <path
        d="M50 48 C42 46 38 60 42 70 C46 76 54 74 54 68 Z"
        fill="#F5EBDD"
        stroke="#49372B"
        strokeWidth="1.4"
      />

      {/* Ceremonial Headcloth (Nettipattam) with Gold Bells */}
      <path d="M34 52 L48 50 L42 66 Z" fill="#E9B949" stroke="#49372B" strokeWidth="1.2" />
      <circle cx="41" cy="59" r="1.5" fill="#C87558" />

      {/* Floral Saddle / Howdah Cloth (Jhool) */}
      <path
        d="M68 52 C75 50 100 50 108 52 C110 75 106 82 104 82 C98 84 76 84 70 82 C68 82 66 75 68 52 Z"
        fill="#C87558"
        stroke="#49372B"
        strokeWidth="1.4"
      />
      {/* Gold Trim & Tassels on Saddle */}
      <line x1="70" y1="80" x2="104" y2="80" stroke="#E9B949" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="87" cy="65" r="4" fill="#E9B949" stroke="#FAF7F0" strokeWidth="1" />
    </svg>
  );
}

/**
 * Hanging Mango Leaves & Marigold Garlands (Top Page Toran)
 */
export function HangingToran({ className = 'w-full h-12' }: ArtworkProps) {
  return (
    <svg
      viewBox="0 0 1200 70"
      className={className}
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Braided Sacred Rope */}
      <line x1="0" y1="8" x2="1200" y2="8" stroke="#B69A62" strokeWidth="3" />
      <line x1="0" y1="10" x2="1200" y2="10" stroke="#475747" strokeWidth="1.5" strokeDasharray="6 4" />

      {/* Repeated Mango Leaves (Mavilai) & Marigold Drops */}
      {Array.from({ length: 24 }).map((_, i) => {
        const x = i * 50 + 25;
        return (
          <g key={i}>
            {/* Mango Leaf */}
            <path
              d={`M${x - 8} 10 C${x - 14} 24 ${x - 6} 44 ${x} 54 C${x + 6} 44 ${x + 14} 24 ${x + 8} 10 Z`}
              fill={i % 2 === 0 ? '#475747' : '#A6B49A'}
              stroke="#49372B"
              strokeWidth="1"
            />
            {/* Midrib line */}
            <line x1={x} y1="10" x2={x} y2="48" stroke="#FAF7F0" strokeWidth="0.8" opacity="0.6" />
            {/* Marigold Drop */}
            <circle cx={x + 25} cy="18" r="6" fill="#E9B949" stroke="#C87558" strokeWidth="1" />
            <circle cx={x + 25} cy="18" r="2.5" fill="#FAF7F0" />
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Antique Gold Monogram Wax Seal ("P & V")
 */
export function WaxSealStamp({ className = 'w-14 h-14' }: ArtworkProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full select-none shadow-md ${className}`}
      style={{
        background: 'radial-gradient(circle at 35% 30%, #E9B949 0%, #B69A62 55%, #8A6D3B 100%)',
        border: '1.5px solid rgba(255, 240, 194, 0.6)',
      }}
    >
      {/* Outer irregular stamped edge ring */}
      <div className="absolute inset-1 rounded-full border border-[#FAF7F0]/40 pointer-events-none" />
      {/* Monogram */}
      <span className="font-editorial text-sm sm:text-base font-bold text-[#49372B] tracking-wider drop-shadow-xs">
        P &amp; V
      </span>
    </div>
  );
}

/**
 * Botanical Corner Flourish for luxury stationery framing
 */
export function CornerBotanical({
  className = 'w-12 h-12',
  flipX = false,
  flipY = false,
}: ArtworkProps & { flipX?: boolean; flipY?: boolean }) {
  const transform = `${flipX ? 'scaleX(-1)' : ''} ${flipY ? 'scaleY(-1)' : ''}`.trim() || undefined;

  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      style={{ transform }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Corner corner line */}
      <path d="M4 76 V24 C4 13 13 4 24 4 H76" stroke="#B69A62" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 76 V28 C12 19 19 12 28 12 H76" stroke="#B69A62" strokeWidth="0.6" strokeDasharray="2 3" />
      {/* Delicate leaves */}
      <path d="M4 36 C-4 28 8 20 18 26 C12 34 8 36 4 36 Z" fill="#A6B49A" stroke="#475747" strokeWidth="0.8" />
      <path d="M36 4 C28 -4 20 8 26 18 C34 12 36 8 36 4 Z" fill="#A6B49A" stroke="#475747" strokeWidth="0.8" />
      {/* Tiny flower bud */}
      <circle cx="20" cy="20" r="3.5" fill="#D8A6A0" stroke="#C87558" strokeWidth="0.8" />
    </svg>
  );
}
