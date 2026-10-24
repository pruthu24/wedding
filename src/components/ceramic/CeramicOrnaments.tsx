interface OrnamentProps {
  className?: string;
  color?: string;
  size?: number;
}

/**
 * Ceramic Daisy Cutout (Matches the 6-petal white & mustard flowers in the reference)
 */
export function CeramicDaisy({ className = 'w-8 h-8', petalColor = '#FFFBF3', centerColor = '#EDB355' }: { className?: string; petalColor?: string; centerColor?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 6 Round Ceramic Petals */}
      <circle cx="24" cy="11" r="7.5" fill={petalColor} />
      <circle cx="35" cy="17.5" r="7.5" fill={petalColor} />
      <circle cx="35" cy="30.5" r="7.5" fill={petalColor} />
      <circle cx="24" cy="37" r="7.5" fill={petalColor} />
      <circle cx="13" cy="30.5" r="7.5" fill={petalColor} />
      <circle cx="13" cy="17.5" r="7.5" fill={petalColor} />
      {/* Center Pistil */}
      <circle cx="24" cy="24" r="6" fill={centerColor} />
    </svg>
  );
}

/**
 * Ceramic Terracotta Tulip with Stem (Matches the tulip in vase & background in reference)
 */
export function CeramicTulip({ className = 'w-10 h-16', flowerColor = '#D45D52', stemColor = '#3A4C37' }: { className?: string; flowerColor?: string; stemColor?: string }) {
  return (
    <svg viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Curved Stem */}
      <path d="M20 28C20 42 22 56 22 60" stroke={stemColor} strokeWidth="3" strokeLinecap="round" />
      {/* Leaf */}
      <path d="M21 44C28 40 34 32 36 24C28 26 22 34 21 44Z" fill={stemColor} />
      {/* Tulip Petals */}
      <path
        d="M20 6C15 14 14 26 20 28C26 26 25 14 20 6Z"
        fill={flowerColor}
      />
      <path
        d="M12 10C9 17 11 26 19 28C15 25 13 18 12 10Z"
        fill={flowerColor}
        fillOpacity="0.85"
      />
      <path
        d="M28 10C31 17 29 26 21 28C25 25 27 18 28 10Z"
        fill={flowerColor}
        fillOpacity="0.85"
      />
    </svg>
  );
}

/**
 * Soft Ceramic Botanical Leaf Branch
 */
export function CeramicBranch({ className = 'w-16 h-28', color = '#3A4C37' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M30 95C30 65 32 30 35 5" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M32 75C20 70 12 60 15 48C24 52 30 62 32 75Z" fill={color} />
      <path d="M33 55C44 50 52 40 48 28C40 32 34 42 33 55Z" fill={color} />
      <path d="M34 35C24 30 18 20 20 10C28 14 33 22 34 35Z" fill={color} />
      <path d="M35 15C42 10 46 4 44 0C38 2 35 8 35 15Z" fill={color} />
    </svg>
  );
}

/**
 * Squiggly Wave Divider (Seen under every title in the reference image)
 */
export function SquigglyWave({ className = 'w-16 h-3 text-[#D45D52]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M0 6 Q 12.5 0 25 6 T 50 6 T 75 6 T 100 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Scalloped Edge Border Divider (The signature design element of the reference image)
 */
export function ScallopBorder({
  color = '#6B2634',
  position = 'bottom',
  className = '',
}: {
  color?: string;
  position?: 'top' | 'bottom';
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      style={{
        transform: position === 'top' ? 'rotate(180deg)' : 'none',
        height: '24px',
      }}
    >
      <svg
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        className="w-full h-full block"
        fill={color}
      >
        <path d="M0,0 C25,24 50,24 75,0 C100,24 125,24 150,0 C175,24 200,24 225,0 C250,24 275,24 300,0 C325,24 350,24 375,0 C400,24 425,24 450,0 C475,24 500,24 525,0 C550,24 575,24 600,0 C625,24 650,24 675,0 C700,24 725,24 750,0 C775,24 800,24 825,0 C850,24 875,24 900,0 C925,24 950,24 975,0 C1000,24 1025,24 1050,0 C1075,24 1100,24 1125,0 C1150,24 1175,24 1200,0 L1200,0 L0,0 Z" />
      </svg>
    </div>
  );
}

/**
 * Ceramic Cup / Mug Icon (Handmade pottery emblem)
 */
export function CeramicMug({ className = 'w-10 h-10', color = '#EDB355' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Mug Body */}
      <path d="M12 14H32C32 28 30 36 22 36C14 36 12 28 12 14Z" fill={color} />
      {/* Mug Handle */}
      <path d="M32 18C37 18 39 23 37 28C35 31 32 30 32 30" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Cute tulip on mug */}
      <path d="M22 22C20 25 21 28 22 30C23 28 24 25 22 22Z" fill="#D45D52" />
      <circle cx="18" cy="23" r="1.5" fill="#FFFBF3" />
      <circle cx="26" cy="23" r="1.5" fill="#FFFBF3" />
    </svg>
  );
}
