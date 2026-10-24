interface IllustrationProps {
  className?: string;
  color?: string;
}

/**
 * Top Hanging Floral Toran (Mango Leaves, Jasmine & Flowers)
 * Matches the top border of the reference illustration.
 */
export function TopToranGarland({ className = 'w-full h-16' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 1200 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
      {/* Top vine strand */}
      <path d="M0 15 Q 150 35 300 15 T 600 15 T 900 15 T 1200 15" stroke="#487A38" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Hanging leaf clusters & floral bells across the width */}
      {[50, 140, 230, 320, 410, 500, 590, 680, 770, 860, 950, 1040, 1130].map((x, i) => (
        <g key={i}>
          {/* Hanging string */}
          <path d={`M${x} 20 Q ${x + (i % 2 === 0 ? 5 : -5)} 45 ${x} 70`} stroke="#6A9A4A" strokeWidth="1.8" strokeLinecap="round" />
          {/* Mango Leaves */}
          <path d={`M${x - 2} 32 C${x - 12} 36 ${x - 10} 48 ${x} 50 C${x + 2} 44 ${x} 36 ${x - 2} 32Z`} fill="#6A9A4A" stroke="#2A1D18" strokeWidth="1" />
          <path d={`M${x + 2} 44 C${x + 12} 48 ${x + 10} 60 ${x} 62 C${x - 2} 56 ${x} 48 ${x + 2} 44Z`} fill="#487A38" stroke="#2A1D18" strokeWidth="1" />
          {/* Flower bell / Marigold drop */}
          <circle cx={x} cy="72" r="5.5" fill={i % 3 === 0 ? '#E8769D' : '#F5B738'} stroke="#2A1D18" strokeWidth="1.2" />
          <circle cx={x} cy="72" r="2" fill="#FAF7F0" />
        </g>
      ))}
    </svg>
  );
}

/**
 * Auspicious Golden Ganesha Medallion
 * Matches the top calligraphy scroll emblem in the reference illustration.
 */
export function AuspiciousGaneshaScroll({ className = 'w-16 h-12' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Small hanging red hearts flanking */}
      <path d="M12 28C10 24 6 25 6 28C6 32 12 36 12 36C12 36 18 32 18 28C18 25 14 24 12 28Z" fill="#D4527D" stroke="#2A1D18" strokeWidth="1" />
      <path d="M88 28C86 24 82 25 82 28C82 32 88 36 88 36C88 36 94 32 94 28C94 25 90 24 88 28Z" fill="#D4527D" stroke="#2A1D18" strokeWidth="1" />

      {/* Rolled parchment ribbon */}
      <path
        d="M26 22H74C82 22 86 28 84 36C82 44 76 50 68 50H32C24 50 18 44 16 36C14 28 18 22 26 22Z"
        fill="#F5B738"
        stroke="#2A1D18"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Scroll curl edge */}
      <path d="M22 24C16 28 16 42 24 46" stroke="#2A1D18" strokeWidth="2" fill="#E5A627" />
      <path d="M78 24C84 28 84 42 76 46" stroke="#2A1D18" strokeWidth="2" fill="#E5A627" />
      
      {/* Auspicious Calligraphy Symbol (ॐ / Shree / Ganesha) */}
      <text
        x="50"
        y="42"
        fontFamily="sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="#2A1D18"
        textAnchor="middle"
      >
        ॐ
      </text>
    </svg>
  );
}

/**
 * Comic Strip Milestone 1: "First Meet"
 * Handshake at traditional family gathering / temple with auspicious laddus.
 */
export function MilestoneFirstMeet({ className = 'w-full h-full' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background wall & temple entrance */}
      <rect width="280" height="240" fill="#FFF9ED" />
      
      {/* Temple Mandap Gate */}
      <path d="M25 40H115V225H25V40Z" fill="#E8F4E5" stroke="#2A1D18" strokeWidth="2" />
      <path d="M20 40H120V60H20V40Z" fill="#487A38" stroke="#2A1D18" strokeWidth="2" />
      <text x="70" y="54" fontFamily="cursive, sans-serif" fontSize="13" fontWeight="bold" fill="#FFF9ED" textAnchor="middle">
        ~ first meet ~
      </text>
      
      {/* Marigold toran on doorway */}
      <path d="M25 60 Q 70 80 115 60" stroke="#F5B738" strokeWidth="6" strokeLinecap="round" strokeDasharray="1 8" />
      
      {/* Mini Ganesha idol in background */}
      <circle cx="70" cy="95" r="16" fill="#F5B738" stroke="#2A1D18" strokeWidth="1.5" />
      <path d="M66 95Q70 105 74 95" stroke="#2A1D18" strokeWidth="2" />

      {/* Laddu Bowls on left & right */}
      <path d="M28 175 C28 190 70 190 70 175Z" fill="#EDB355" stroke="#2A1D18" strokeWidth="2" />
      <circle cx="42" cy="170" r="5" fill="#F5B738" stroke="#2A1D18" strokeWidth="1" />
      <circle cx="52" cy="170" r="5" fill="#F5B738" stroke="#2A1D18" strokeWidth="1" />
      <circle cx="47" cy="164" r="5" fill="#F5B738" stroke="#2A1D18" strokeWidth="1" />

      <path d="M125 185 C125 200 165 200 165 185Z" fill="#EDB355" stroke="#2A1D18" strokeWidth="2" />
      <circle cx="138" cy="180" r="5" fill="#F5B738" stroke="#2A1D18" strokeWidth="1" />
      <circle cx="148" cy="180" r="5" fill="#F5B738" stroke="#2A1D18" strokeWidth="1" />

      {/* Varshini (Smiling in blue salwar) */}
      <circle cx="75" cy="115" r="15" fill="#F4D3C4" stroke="#2A1D18" strokeWidth="2" />
      {/* Hair */}
      <path d="M60 115C60 98 90 98 90 115C90 130 88 150 88 150H62C62 150 60 130 60 115Z" fill="#2A1D18" />
      <circle cx="75" cy="115" r="14" fill="#F4D3C4" />
      {/* Face features */}
      <circle cx="71" cy="113" r="1.8" fill="#2A1D18" />
      <circle cx="80" cy="113" r="1.8" fill="#2A1D18" />
      <path d="M73 121Q76 125 80 121" stroke="#2A1D18" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="76" cy="107" r="1.2" fill="#D4527D" /> {/* Bindi */}
      {/* Blue Kurti */}
      <path d="M62 135L52 210H100L90 135H62Z" fill="#2C69B2" stroke="#2A1D18" strokeWidth="2" />

      {/* Prithvi (Smiling in maroon shirt) */}
      <circle cx="205" cy="112" r="15" fill="#F4D3C4" stroke="#2A1D18" strokeWidth="2" />
      {/* Hair */}
      <path d="M190 110C190 95 220 95 220 110V118H190V110Z" fill="#2A1D18" />
      <circle cx="205" cy="114" r="14" fill="#F4D3C4" />
      {/* Face features */}
      <circle cx="200" cy="112" r="1.8" fill="#2A1D18" />
      <circle cx="209" cy="112" r="1.8" fill="#2A1D18" />
      <path d="M202 120Q206 124 210 120" stroke="#2A1D18" strokeWidth="1.8" strokeLinecap="round" />
      {/* Maroon Shirt */}
      <path d="M190 134L180 215H232L222 134H190Z" fill="#93362E" stroke="#2A1D18" strokeWidth="2" />

      {/* The Warm Handshake! */}
      <path d="M85 150L135 158" stroke="#F4D3C4" strokeWidth="7" strokeLinecap="round" />
      <path d="M85 150L135 158" stroke="#2A1D18" strokeWidth="2" fill="none" />
      <path d="M192 148L145 158" stroke="#F4D3C4" strokeWidth="7" strokeLinecap="round" />
      <path d="M192 148L145 158" stroke="#2A1D18" strokeWidth="2" fill="none" />
      {/* Interlocked Hands */}
      <circle cx="140" cy="158" r="6" fill="#F4D3C4" stroke="#2A1D18" strokeWidth="1.8" />
      
      {/* Floating little heart between them */}
      <path d="M140 132C138 128 134 129 134 132C134 136 140 140 140 140C140 140 146 136 146 132C146 129 142 128 140 132Z" fill="#E8769D" />
    </svg>
  );
}

/**
 * Comic Strip Milestone 2: "= coffee date ="
 * Cozy South Indian filter coffee date with steaming glass tumblers and blushing smiles.
 */
export function MilestoneCoffeeDate({ className = 'w-full h-full' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="280" height="240" fill="#FFF9ED" />

      {/* Header Tag */}
      <text x="140" y="32" fontFamily="cursive, sans-serif" fontSize="16" fontWeight="bold" fill="#2A1D18" textAnchor="middle">
        = coffee date =
      </text>

      {/* Cute little hearts */}
      <path d="M140 48C138 45 135 46 135 48C135 51 140 54 140 54C140 54 145 51 145 48C145 46 142 45 140 48Z" fill="#E8769D" />

      {/* Varshini Smiling (Left) */}
      <circle cx="95" cy="85" r="16" fill="#F4D3C4" stroke="#2A1D18" strokeWidth="2" />
      {/* Hair */}
      <path d="M78 85C78 68 112 68 112 85C112 105 110 130 110 130H80C80 130 78 105 78 85Z" fill="#2A1D18" />
      <circle cx="95" cy="86" r="15" fill="#F4D3C4" />
      {/* Closed happy smiling eyes (curved arcs) */}
      <path d="M88 84Q92 88 96 84" stroke="#2A1D18" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M99 84Q103 88 107 84" stroke="#2A1D18" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Blushing cheeks */}
      <circle cx="88" cy="90" r="3" fill="#E8769D" opacity="0.6" />
      <circle cx="106" cy="90" r="3" fill="#E8769D" opacity="0.6" />
      <path d="M93 92Q97 97 101 92" stroke="#2A1D18" strokeWidth="1.8" strokeLinecap="round" />
      {/* Pink Top */}
      <path d="M80 110L72 190H120L112 110H80Z" fill="#E8769D" stroke="#2A1D18" strokeWidth="2" />

      {/* Prithvi Smiling & Winking (Right) */}
      <circle cx="185" cy="85" r="16" fill="#F4D3C4" stroke="#2A1D18" strokeWidth="2" />
      {/* Hair & Beard */}
      <path d="M168 85C168 68 202 68 202 85V95H168V85Z" fill="#2A1D18" />
      <circle cx="185" cy="86" r="15" fill="#F4D3C4" />
      {/* Beard stubble line */}
      <path d="M174 88C174 98 185 102 185 102C185 102 196 98 196 88" stroke="#2A1D18" strokeWidth="1.2" strokeDasharray="1 2" fill="none" />
      {/* Happy closed smile eyes */}
      <path d="M176 83Q180 87 184 83" stroke="#2A1D18" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M187 83Q191 87 195 83" stroke="#2A1D18" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M182 91Q186 96 190 91" stroke="#2A1D18" strokeWidth="1.8" strokeLinecap="round" />
      {/* Black Shirt */}
      <path d="M170 110L162 190H210L202 110H170Z" fill="#2A1D18" stroke="#2A1D18" strokeWidth="2" />

      {/* Round Wooden Cafe Table */}
      <ellipse cx="140" cy="188" rx="80" ry="24" fill="#FAF7F0" stroke="#2A1D18" strokeWidth="2.5" />

      {/* Two South Indian Filter Coffee Glasses / Tumblers */}
      {/* Glass 1 (Varshini's) */}
      <g transform="translate(105, 150)">
        {/* Davarah (bowl) */}
        <ellipse cx="18" cy="28" rx="16" ry="6" fill="#D4AF37" stroke="#2A1D18" strokeWidth="1.5" />
        {/* Tumbler */}
        <path d="M8 8 L11 26 H25 L28 8 H8 Z" fill="#F5B738" stroke="#2A1D18" strokeWidth="1.8" />
        <ellipse cx="18" cy="8" rx="10" ry="3" fill="#6A3B18" stroke="#2A1D18" strokeWidth="1.2" />
        {/* Steaming vapor swirls */}
        <path d="M15 4 Q 13 -6 18 -12" stroke="#2A1D18" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M21 2 Q 24 -4 20 -10" stroke="#2A1D18" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Glass 2 (Prithvi's) */}
      <g transform="translate(150, 150)">
        {/* Davarah (bowl) */}
        <ellipse cx="18" cy="28" rx="16" ry="6" fill="#D4AF37" stroke="#2A1D18" strokeWidth="1.5" />
        {/* Tumbler */}
        <path d="M8 8 L11 26 H25 L28 8 H8 Z" fill="#F5B738" stroke="#2A1D18" strokeWidth="1.8" />
        <ellipse cx="18" cy="8" rx="10" ry="3" fill="#6A3B18" stroke="#2A1D18" strokeWidth="1.2" />
        {/* Steaming vapor swirls */}
        <path d="M15 4 Q 13 -6 18 -12" stroke="#2A1D18" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M21 2 Q 24 -4 20 -10" stroke="#2A1D18" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

/**
 * Comic Strip Milestone 3: "Ooty ~ Yes!"
 * Romantic mountain proposal moment under fluffy clouds with bouquet and joyful "yes!".
 */
export function MilestoneProposal({ className = 'w-full h-full' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="280" height="240" fill="#E3F2FD" />

      {/* Mountain hills in Ooty */}
      <path d="M0 120 Q 70 80 140 110 T 280 100 V 240 H 0 Z" fill="#A8D595" stroke="#2A1D18" strokeWidth="2" />
      <path d="M50 140 Q 140 105 220 130 T 280 125 V 240 H 50 Z" fill="#6A9A4A" stroke="#2A1D18" strokeWidth="2" />

      {/* Cartoon clouds */}
      <path d="M185 30C185 24 195 20 202 24C208 20 218 22 222 28C228 28 232 34 230 40C232 46 226 52 220 52H188C182 52 180 44 185 40V30Z" fill="#FFF9ED" stroke="#2A1D18" strokeWidth="1.8" />
      
      {/* Hand-lettered location tag */}
      <text x="215" y="24" fontFamily="cursive, sans-serif" fontSize="15" fontWeight="bold" fill="#2A1D18" textAnchor="middle">
        ~ Ooty ~
      </text>

      {/* Speech bubble "yes!" */}
      <path d="M110 50C110 40 125 40 132 40C142 40 150 45 150 52C150 58 144 64 135 64L130 72L128 64H120C112 64 110 58 110 50Z" fill="#FFF9ED" stroke="#2A1D18" strokeWidth="1.8" />
      <text x="130" y="56" fontFamily="cursive, sans-serif" fontSize="14" fontWeight="bold" fill="#D4527D" textAnchor="middle">
        yes!
      </text>

      {/* Varshini holding yellow flowers (Left) */}
      <circle cx="115" cy="115" r="15" fill="#F4D3C4" stroke="#2A1D18" strokeWidth="2" />
      {/* Hair */}
      <path d="M100 115C100 98 130 98 130 115C130 135 128 160 128 160H102C102 160 100 135 100 115Z" fill="#2A1D18" />
      <circle cx="115" cy="115" r="14" fill="#F4D3C4" />
      <circle cx="111" cy="113" r="1.8" fill="#2A1D18" />
      <circle cx="120" cy="113" r="1.8" fill="#2A1D18" />
      <path d="M113 121Q116 125 120 121" stroke="#2A1D18" strokeWidth="1.8" strokeLinecap="round" />
      {/* Red Winter Sweater */}
      <path d="M102 135L94 210H138L130 135H102Z" fill="#9C2738" stroke="#2A1D18" strokeWidth="2" />

      {/* Big Yellow Flower Bouquet in her hands */}
      <circle cx="122" cy="165" r="7" fill="#F5B738" stroke="#2A1D18" strokeWidth="1.2" />
      <circle cx="132" cy="162" r="7" fill="#F5B738" stroke="#2A1D18" strokeWidth="1.2" />
      <circle cx="126" cy="172" r="7" fill="#F5B738" stroke="#2A1D18" strokeWidth="1.2" />
      <circle cx="138" cy="170" r="7" fill="#F5B738" stroke="#2A1D18" strokeWidth="1.2" />

      {/* Prithvi looking at her happily (Right) */}
      <circle cx="185" cy="112" r="15" fill="#F4D3C4" stroke="#2A1D18" strokeWidth="2" />
      {/* Hair */}
      <path d="M170 110C170 95 200 95 200 110V118H170V110Z" fill="#2A1D18" />
      <circle cx="185" cy="114" r="14" fill="#F4D3C4" />
      <circle cx="180" cy="112" r="1.8" fill="#2A1D18" />
      <circle cx="189" cy="112" r="1.8" fill="#2A1D18" />
      <path d="M182 120Q186 124 190 120" stroke="#2A1D18" strokeWidth="1.8" strokeLinecap="round" />
      {/* Blue Jacket */}
      <path d="M172 134L164 215H210L202 134H172Z" fill="#1D539B" stroke="#2A1D18" strokeWidth="2" />
    </svg>
  );
}

/**
 * The Grand Couple Centerpiece (Traditional South Indian Wedding Attire)
 * Exact match of the bottom half of the user's reference illustration:
 * - Prithvi in white shirt & gold-bordered veshti (dhoti).
 * - Varshini in sunny yellow kurti with flowing pink dupatta.
 * - Flanked by their two cute pet dogs with bowties/vests.
 * - Big banana leaves, sunflowers, colorful floral rangoli wheel.
 */
export function GrandCoupleCenterpiece({ className = 'w-full max-w-2xl mx-auto' }: IllustrationProps) {
  return (
    <div className={`relative ${className} select-none`}>
      <svg viewBox="0 0 540 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
        
        {/* 1. Sky & Sunbeams Background */}
        <rect width="540" height="520" rx="32" fill="#E8F4FC" />
        
        {/* Painterly Sky Swirls */}
        <path d="M420 40 Q 480 80 520 40 T 540 120" stroke="#68AEE8" strokeWidth="4" strokeLinecap="round" opacity="0.4" fill="none" />
        <path d="M20 180 Q 60 140 40 220" stroke="#68AEE8" strokeWidth="3" strokeLinecap="round" opacity="0.4" fill="none" />

        {/* Fluffy cartoon clouds in sky */}
        <path d="M340 100 C340 85 365 75 385 85 C400 75 425 80 435 95 C450 95 460 110 455 125 C460 140 445 155 430 155 H345 C330 155 325 135 335 125 V100 Z" fill="#FFF9ED" stroke="#2A1D18" strokeWidth="2.5" />

        {/* 2. Big Lush Banana Leaves (Vazhai Ilai) */}
        <g id="banana-leaves">
          {/* Left giant banana leaf */}
          <path
            d="M80 230 C40 180 120 130 240 160 C260 210 200 280 140 290 Z"
            fill="#6A9A4A"
            stroke="#2A1D18"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Leaf rib veins */}
          <path d="M85 225 Q 160 195 240 160" stroke="#487A38" strokeWidth="3.5" fill="none" />
          <path d="M120 215 L140 235 M160 200 L185 225 M195 185 L225 210" stroke="#487A38" strokeWidth="2" fill="none" />
          {/* Cut notches in leaf */}
          <path d="M110 185 L125 195 M180 155 L190 170" stroke="#2A1D18" strokeWidth="2.5" />
        </g>

        {/* 3. Colorful Floral Rangoli Wheel / Parasol (Behind the couple) */}
        <g id="rangoli-wheel" transform="translate(190, 260)">
          {/* Outer Ring */}
          <circle cx="0" cy="0" r="75" fill="#E8769D" stroke="#2A1D18" strokeWidth="3" />
          {/* Green Middle Ring */}
          <circle cx="0" cy="0" r="56" fill="#6A9A4A" stroke="#2A1D18" strokeWidth="2.5" />
          {/* Yellow Inner Ring */}
          <circle cx="0" cy="0" r="38" fill="#F5B738" stroke="#2A1D18" strokeWidth="2" />
          {/* Cyan Center */}
          <circle cx="0" cy="0" r="20" fill="#68AEE8" stroke="#2A1D18" strokeWidth="2" />
          {/* Petal radial points */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <circle
              key={i}
              cx={Math.cos((angle * Math.PI) / 180) * 47}
              cy={Math.sin((angle * Math.PI) / 180) * 47}
              r="4.5"
              fill="#FAF7F0"
              stroke="#2A1D18"
              strokeWidth="1.2"
            />
          ))}
        </g>

        {/* 4. Giant Sunflowers on the Right */}
        <g id="sunflowers" transform="translate(390, 240)">
          {/* Stems */}
          <path d="M0 60 C5 90 10 120 15 160" stroke="#487A38" strokeWidth="4" strokeLinecap="round" />
          <path d="M40 70 C42 100 45 130 48 160" stroke="#487A38" strokeWidth="4" strokeLinecap="round" />

          {/* Sunflower 1 */}
          <g transform="translate(0, 50)">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
              <ellipse
                key={i}
                cx={Math.cos((deg * Math.PI) / 180) * 22}
                cy={Math.sin((deg * Math.PI) / 180) * 22}
                rx="10"
                ry="5"
                transform={`rotate(${deg} ${Math.cos((deg * Math.PI) / 180) * 22} ${Math.sin((deg * Math.PI) / 180) * 22})`}
                fill="#F5B738"
                stroke="#2A1D18"
                strokeWidth="1.5"
              />
            ))}
            <circle cx="0" cy="0" r="14" fill="#6A3B18" stroke="#2A1D18" strokeWidth="2" />
            <circle cx="0" cy="0" r="8" fill="#42220C" />
          </g>

          {/* Sunflower 2 */}
          <g transform="translate(48, 65)">
            {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg, i) => (
              <ellipse
                key={i}
                cx={Math.cos((deg * Math.PI) / 180) * 18}
                cy={Math.sin((deg * Math.PI) / 180) * 18}
                rx="8"
                ry="4"
                transform={`rotate(${deg} ${Math.cos((deg * Math.PI) / 180) * 18} ${Math.sin((deg * Math.PI) / 180) * 18})`}
                fill="#F5B738"
                stroke="#2A1D18"
                strokeWidth="1.5"
              />
            ))}
            <circle cx="0" cy="0" r="11" fill="#6A3B18" stroke="#2A1D18" strokeWidth="2" />
          </g>
        </g>

        {/* 5. Green Grass Mound at Bottom */}
        <path
          d="M0 450 Q 140 420 270 440 T 540 450 V 520 H 0 Z"
          fill="#8CC665"
          stroke="#2A1D18"
          strokeWidth="3"
        />
        {/* Tufts of grass blades */}
        <path d="M40 440 L45 425 M45 440 L52 420 M50 440 L60 428" stroke="#2A1D18" strokeWidth="2" strokeLinecap="round" />
        <path d="M120 445 L125 430 M128 445 L135 428" stroke="#2A1D18" strokeWidth="2" strokeLinecap="round" />
        <path d="M440 450 L445 432 M448 450 L455 430" stroke="#2A1D18" strokeWidth="2" strokeLinecap="round" />

        {/* =========================================================================
            6. PRITHVI (The Groom in White Shirt & Gold-Bordered Veshti/Dhoti)
            ========================================================================= */}
        <g id="prithvi-groom">
          {/* Head & Face */}
          <circle cx="230" cy="245" r="22" fill="#F4D3C4" stroke="#2A1D18" strokeWidth="2.5" />
          {/* Hair & Trimmed Beard */}
          <path d="M208 245 C208 220 252 220 252 245 V255 H208 Z" fill="#2A1D18" />
          <circle cx="230" cy="246" r="21" fill="#F4D3C4" />
          {/* Happy Closed-Eye Smile */}
          <path d="M217 242 Q 223 247 228 242" stroke="#2A1D18" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M232 242 Q 237 247 243 242" stroke="#2A1D18" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Beard and mustache */}
          <path d="M218 248 C218 262 230 268 230 268 C230 268 242 262 242 248" stroke="#2A1D18" strokeWidth="2.5" strokeLinecap="round" fill="#2A1D18" fillOpacity="0.15" />
          <path d="M224 254 Q 230 260 236 254" stroke="#2A1D18" strokeWidth="2" strokeLinecap="round" />

          {/* Crisp White Shirt */}
          <path
            d="M204 275 L180 345 L208 348 L212 305 L248 305 L252 348 L280 345 L256 275 Z"
            fill="#FAF7F0"
            stroke="#2A1D18"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Shirt Collar */}
          <polygon points="218,275 230,288 224,275" fill="#FAF7F0" stroke="#2A1D18" strokeWidth="2" />
          <polygon points="242,275 230,288 236,275" fill="#FAF7F0" stroke="#2A1D18" strokeWidth="2" />
          {/* Buttons */}
          <circle cx="230" cy="296" r="1.8" fill="#2A1D18" />
          <circle cx="230" cy="308" r="1.8" fill="#2A1D18" />

          {/* Traditional South Indian Silk Veshti / Mundu (Dhoti) with Gold Zari Border */}
          <path
            d="M202 345 L190 475 H254 L258 345 Z"
            fill="#FAF7F0"
            stroke="#2A1D18"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Gold Zari Border down the front pleat (Kasavu) */}
          <path d="M230 345 V 475" stroke="#D4AF37" strokeWidth="6" strokeLinecap="round" />
          <path d="M230 345 V 475" stroke="#9E7D1A" strokeWidth="1" strokeDasharray="2 3" />
          <path d="M190 470 H 254" stroke="#D4AF37" strokeWidth="5" />

          {/* Bare Feet */}
          <path d="M194 475 C190 488 210 488 214 475 Z" fill="#F4D3C4" stroke="#2A1D18" strokeWidth="2" />
          <path d="M234 475 C230 488 250 488 254 475 Z" fill="#F4D3C4" stroke="#2A1D18" strokeWidth="2" />
        </g>

        {/* =========================================================================
            7. VARSHINI (The Bride in Sunny Kurti & Flowing Pink Dupatta)
            ========================================================================= */}
        <g id="varshini-bride">
          {/* Head & Face */}
          <circle cx="305" cy="250" r="22" fill="#F4D3C4" stroke="#2A1D18" strokeWidth="2.5" />
          {/* Long Dark Hair cascading back */}
          <path d="M284 250 C284 220 326 220 326 250 C326 280 320 340 320 340 H288 C288 340 284 280 284 250 Z" fill="#2A1D18" stroke="#2A1D18" strokeWidth="2" />
          <circle cx="305" cy="251" r="21" fill="#F4D3C4" />
          {/* Beautiful Smiling Face */}
          <circle cx="298" cy="248" r="2.5" fill="#2A1D18" />
          <circle cx="312" cy="248" r="2.5" fill="#2A1D18" />
          {/* Traditional Bindi */}
          <circle cx="305" cy="240" r="2" fill="#D4527D" />
          {/* Golden Jhumka Earrings */}
          <path d="M285 258 L283 268 H289 L287 258" fill="#F5B738" stroke="#2A1D18" strokeWidth="1.2" />
          <circle cx="286" cy="269" r="1.5" fill="#F5B738" />
          <path d="M325 258 L323 268 H329 L327 258" fill="#F5B738" stroke="#2A1D18" strokeWidth="1.2" />
          <circle cx="326" cy="269" r="1.5" fill="#F5B738" />
          {/* Sweet Broad Smile */}
          <path d="M299 257 Q 305 264 311 257" stroke="#2A1D18" strokeWidth="2.2" strokeLinecap="round" />

          {/* Sunny Yellow Festive Kurti with Star Patterns */}
          <path
            d="M284 280 L268 375 H345 L328 280 Z"
            fill="#FEE580"
            stroke="#2A1D18"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Little pink star/flower motifs on kurti */}
          <circle cx="295" cy="305" r="2" fill="#E8769D" />
          <circle cx="315" cy="320" r="2" fill="#E8769D" />
          <circle cx="300" cy="340" r="2" fill="#E8769D" />
          <circle cx="330" cy="345" r="2" fill="#E8769D" />

          {/* Golden Yellow Salwar Pants */}
          <path
            d="M272 375 C264 420 274 465 288 475 C295 475 304 425 304 380 Z"
            fill="#F5D76E"
            stroke="#2A1D18"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M340 375 C348 420 338 465 324 475 C317 475 308 425 308 380 Z"
            fill="#F5D76E"
            stroke="#2A1D18"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Bare Feet with Anklet / Toe ring touch */}
          <path d="M278 475 C274 488 294 488 298 475 Z" fill="#F4D3C4" stroke="#2A1D18" strokeWidth="2" />
          <path d="M316 475 C312 488 332 488 336 475 Z" fill="#F4D3C4" stroke="#2A1D18" strokeWidth="2" />

          {/* =========================================================================
              THE SIGNATURE FLOWING PINK DUPATTA IN THE BREEZE!
              Matches the pink scarf flowing gracefully to the right in the reference.
              ========================================================================= */}
          <path
            d="M292 278 C302 290 314 310 324 330 C340 310 400 280 470 260 C480 300 450 330 380 330 C340 330 306 315 292 278 Z"
            fill="#F48FB1"
            stroke="#2A1D18"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="M324 330 C380 330 450 310 470 260"
            stroke="#C2185B"
            strokeWidth="1.8"
            strokeDasharray="4 4"
            fill="none"
          />
        </g>

        {/* =========================================================================
            8. THE TWO ADORABLE FURRY PET DOGS (Just like in the reference illustration!)
            ========================================================================= */}
        {/* Left Puppy: Black & White with cute red bowtie */}
        <g id="dog-left" transform="translate(130, 395)">
          {/* Body */}
          <path d="M12 40 C8 55 10 75 14 85 H32 C34 75 32 55 30 40 Z" fill="#2A1D18" stroke="#2A1D18" strokeWidth="2" />
          {/* White Chest Patch */}
          <path d="M18 45 C18 60 22 75 22 75 C22 75 26 60 26 45 Z" fill="#FFF9ED" />
          {/* Head */}
          <circle cx="22" cy="30" r="14" fill="#2A1D18" stroke="#2A1D18" strokeWidth="2" />
          {/* Pointy Ears */}
          <polygon points="10,24 6,6 18,18" fill="#2A1D18" stroke="#2A1D18" strokeWidth="1.8" />
          <polygon points="34,24 38,6 26,18" fill="#2A1D18" stroke="#2A1D18" strokeWidth="1.8" />
          {/* Eyes & Snout */}
          <circle cx="17" cy="28" r="2.2" fill="#FFF9ED" />
          <circle cx="27" cy="28" r="2.2" fill="#FFF9ED" />
          <ellipse cx="22" cy="34" rx="4" ry="2.5" fill="#FAF7F0" />
          <circle cx="22" cy="33" r="1.5" fill="#2A1D18" />
          {/* Red Festive Bowtie */}
          <polygon points="14,44 22,47 14,50" fill="#E8769D" stroke="#2A1D18" strokeWidth="1.2" />
          <polygon points="30,44 22,47 30,50" fill="#E8769D" stroke="#2A1D18" strokeWidth="1.2" />
          <circle cx="22" cy="47" r="2" fill="#F5B738" />
        </g>

        {/* Right Puppy: White with eye-patch and cute red checkered vest */}
        <g id="dog-right" transform="translate(365, 390)">
          {/* Body */}
          <path d="M14 42 C10 58 12 78 16 88 H36 C38 78 36 58 34 42 Z" fill="#FFF9ED" stroke="#2A1D18" strokeWidth="2" />
          {/* Red Checkered Festive Vest */}
          <path d="M16 46 L14 74 H36 L34 46 Z" fill="#D4527D" stroke="#2A1D18" strokeWidth="1.8" />
          <line x1="20" y1="46" x2="20" y2="74" stroke="#FFF9ED" strokeWidth="1.2" strokeDasharray="2 2" />
          <line x1="30" y1="46" x2="30" y2="74" stroke="#FFF9ED" strokeWidth="1.2" strokeDasharray="2 2" />
          {/* Head */}
          <circle cx="26" cy="32" r="15" fill="#FFF9ED" stroke="#2A1D18" strokeWidth="2" />
          {/* Black pirate eye-patch spot */}
          <ellipse cx="20" cy="30" rx="6" ry="7" fill="#2A1D18" />
          {/* Pointy Floppy Ears */}
          <polygon points="14,24 8,8 20,18" fill="#2A1D18" stroke="#2A1D18" strokeWidth="1.8" />
          <polygon points="38,24 44,8 32,18" fill="#FFF9ED" stroke="#2A1D18" strokeWidth="1.8" />
          {/* Eyes & Snout */}
          <circle cx="20" cy="30" r="2" fill="#FFF9ED" />
          <circle cx="32" cy="30" r="2" fill="#2A1D18" />
          <ellipse cx="26" cy="37" rx="4" ry="2.5" fill="#F4D3C4" />
          <circle cx="26" cy="36" r="1.5" fill="#2A1D18" />
          {/* Wagging Tail */}
          <path d="M12 60 C4 55 2 45 4 40" stroke="#2A1D18" strokeWidth="3" strokeLinecap="round" />
        </g>

      </svg>
    </div>
  );
}
