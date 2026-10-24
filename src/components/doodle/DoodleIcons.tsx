interface DoodleProps {
  className?: string;
  color?: string;
  size?: number;
}

export function DoodleHeart({ className = 'w-6 h-6', color = '#EF476F' }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M20 33C17 30 5 22 5 13C5 7.5 9.5 4 14.5 4C17.5 4 19.5 5.5 20 7C20.5 5.5 22.5 4 25.5 4C30.5 4 35 7.5 35 13C35 22 23 30 20 33Z"
        fill={color}
        stroke="#262626"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Hand-drawn shine accent */}
      <path d="M11 11C12 9 14 8 16 8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleStar({ className = 'w-6 h-6', color = '#FFD166' }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M16 2.5L19.5 11.5L29 12.5L21.5 18.5L24 28L16 23L8 28L10.5 18.5L3 12.5L12.5 11.5L16 2.5Z"
        fill={color}
        stroke="#262626"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleSparkle({ className = 'w-5 h-5', color = '#FFD166' }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"
        fill={color}
        stroke="#262626"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function DoodleArrow({ className = 'w-10 h-10', color = '#262626', direction = 'right' }: DoodleProps & { direction?: 'right' | 'down' | 'curved-down' | 'curved-up' }) {
  if (direction === 'curved-down') {
    return (
      <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path
          d="M5 8C20 4 45 12 48 30"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M38 27L48 31L53 22"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'down') {
    return (
      <svg viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M15 4C14 18 16 30 15 42" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M6 35L15 44L24 35" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 15C18 14 30 16 42 15" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M35 6L44 15L35 24" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DoodleSun({ className = 'w-16 h-16' }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sun rays */}
      <path d="M40 8V16M40 64V72M8 40H16M64 40H72M18 18L24 24M56 56L62 62M18 62L24 56M56 24L62 18" stroke="#FFD166" strokeWidth="3" strokeLinecap="round" />
      {/* Sun body */}
      <circle cx="40" cy="40" r="18" fill="#FFD166" stroke="#262626" strokeWidth="2.5" />
      {/* Cute blushing face */}
      <circle cx="34" cy="37" r="2" fill="#262626" />
      <circle cx="46" cy="37" r="2" fill="#262626" />
      <circle cx="31" cy="42" r="2.5" fill="#EF476F" opacity="0.6" />
      <circle cx="49" cy="42" r="2.5" fill="#EF476F" opacity="0.6" />
      {/* Smile */}
      <path d="M36 43C38 46 42 46 44 43" stroke="#262626" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleCloud({ className = 'w-24 h-14', color = '#FFFDF8' }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M20 40C12 40 5 34 5 26C5 19 10 14 17 13C19 6 26 2 34 2C42 2 48 6 51 12C54 9 59 7 64 7C72 7 79 13 80 20C88 21 95 27 95 35C95 43 88 49 80 49H20C18 49 19 40 20 40Z"
        fill={color}
        stroke="#262626"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DoodleTempleGopuram({ className = 'w-32 h-44' }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Kalash on top */}
      <path d="M60 4V12M56 12H64M58 8H62" stroke="#FFD166" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M60 12L53 20H67L60 12Z" fill="#FFD166" stroke="#262626" strokeWidth="2" />

      {/* Tier 1 (top) */}
      <path d="M48 20L44 38H76L72 20H48Z" fill="#FAF8F3" stroke="#262626" strokeWidth="2" />
      <circle cx="60" cy="29" r="3" fill="#D96C4A" />

      {/* Tier 2 */}
      <path d="M40 38L35 60H85L80 38H40Z" fill="#FFD166" fillOpacity="0.3" stroke="#262626" strokeWidth="2" />
      <path d="M48 48H54M66 48H72" stroke="#262626" strokeWidth="2" strokeLinecap="round" />
      <circle cx="60" cy="49" r="4" fill="#EF476F" />

      {/* Tier 3 */}
      <path d="M30 60L24 88H96L90 60H30Z" fill="#FAF8F3" stroke="#262626" strokeWidth="2" />
      <path d="M40 74H48M72 74H80" stroke="#262626" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 68H64V88H56V68Z" fill="#06D6A0" fillOpacity="0.4" stroke="#262626" strokeWidth="2" />

      {/* Tier 4 (bottom tier) */}
      <path d="M20 88L14 122H106L100 88H20Z" fill="#FFD166" fillOpacity="0.25" stroke="#262626" strokeWidth="2" />
      <path d="M30 102H40M80 102H90" stroke="#262626" strokeWidth="2" strokeLinecap="round" />
      
      {/* Main Gateway (Dwaram) */}
      <path d="M8 122H112V156H8V122Z" fill="#FAF8F3" stroke="#262626" strokeWidth="2.5" />
      <path d="M46 156V134C46 128 74 128 74 134V156H46Z" fill="#D96C4A" stroke="#262626" strokeWidth="2" />
      
      {/* Decorative toran hanging */}
      <path d="M12 126C20 130 30 130 38 126C46 130 56 130 64 126C72 130 82 130 90 126C98 130 104 130 108 126" stroke="#06D6A0" strokeWidth="2" strokeLinecap="round" />
      {/* Little hanging marigolds */}
      <circle cx="25" cy="132" r="2.5" fill="#FFD166" />
      <circle cx="50" cy="132" r="2.5" fill="#FFD166" />
      <circle cx="75" cy="132" r="2.5" fill="#FFD166" />
      <circle cx="100" cy="132" r="2.5" fill="#FFD166" />
    </svg>
  );
}

export function DoodleKalasha({ className = 'w-16 h-20' }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Coconut on top */}
      <ellipse cx="40" cy="24" rx="14" ry="18" fill="#8B4E18" stroke="#262626" strokeWidth="2" />
      {/* Coconut tuft */}
      <path d="M40 4L37 10M40 4L43 10M40 4V11" stroke="#5C330E" strokeWidth="2" strokeLinecap="round" />
      
      {/* Mango leaves (mavilai) */}
      <path d="M26 26C16 16 12 30 24 38C28 34 26 26 26 26Z" fill="#06D6A0" stroke="#262626" strokeWidth="1.8" />
      <path d="M54 26C64 16 68 30 56 38C52 34 54 26 54 26Z" fill="#06D6A0" stroke="#262626" strokeWidth="1.8" />
      <path d="M40 18C44 6 52 14 43 28" fill="#06D6A0" stroke="#262626" strokeWidth="1.8" />

      {/* Brass Kalasha Pot */}
      <path
        d="M28 42H52C54 42 56 46 58 50C62 58 66 66 64 78C62 88 54 94 40 94C26 94 18 88 16 78C14 66 18 58 22 50C24 46 26 42 28 42Z"
        fill="#FFD166"
        stroke="#262626"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Swastika / Auspicious mark */}
      <path d="M40 60V76M32 68H48M32 60H40M40 76H48M48 60V68M32 68V76" stroke="#EF476F" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleMarigold({ className = 'w-7 h-7' }: DoodleProps) {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="18" cy="18" r="14" fill="#FFD166" stroke="#262626" strokeWidth="1.8" />
      <path d="M18 6C14 10 14 26 18 30M6 18C10 14 26 14 30 18M10 10C14 14 22 22 26 26M10 26C14 22 22 14 26 10" stroke="#D96C4A" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18" cy="18" r="5" fill="#EF476F" stroke="#262626" strokeWidth="1.5" />
    </svg>
  );
}

export function DoodleCoffee({ className = 'w-10 h-14' }: DoodleProps) {
  return (
    <svg viewBox="0 0 50 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Steam heart */}
      <path d="M25 14C23 10 17 8 18 4C19 2 24 3 25 7C26 3 31 2 32 4C33 8 27 10 25 14Z" fill="#D96C4A" stroke="#262626" strokeWidth="1.2" />
      
      {/* Tumbler */}
      <path d="M15 22L18 56H32L35 22H15Z" fill="#FFD166" stroke="#262626" strokeWidth="2" />
      <ellipse cx="25" cy="22" rx="10" ry="3" fill="#8B4E18" stroke="#262626" strokeWidth="1.5" />
      
      {/* Davarah (bowl below) */}
      <path d="M8 44C8 60 42 60 42 44H8Z" fill="#FAF8F3" stroke="#262626" strokeWidth="2" />
    </svg>
  );
}

export function DoodleDancingCouple({ className = 'w-16 h-16' }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Guy */}
      <circle cx="28" cy="20" r="7" fill="#FFD166" stroke="#262626" strokeWidth="2" />
      <path d="M28 27V48M28 35L16 28M28 35L40 32M28 48L18 64M28 48L34 64" stroke="#262626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Kurta color splash */}
      <path d="M24 32H32V46H24V32Z" fill="#118AB2" fillOpacity="0.4" />

      {/* Girl */}
      <circle cx="52" cy="22" r="7" fill="#FFD166" stroke="#262626" strokeWidth="2" />
      <path d="M52 29V42M52 34L40 32M52 34L64 26" stroke="#262626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Lehenga skirt */}
      <path d="M44 44L36 64H68L60 44H44Z" fill="#EF476F" stroke="#262626" strokeWidth="2" strokeLinejoin="round" />
      
      {/* Little hearts floating between them */}
      <path d="M40 16C39 14 36 13 36 11C36 9 38 8 40 10C42 8 44 9 44 11C44 13 41 14 40 16Z" fill="#EF476F" />
    </svg>
  );
}

export function DoodleMusicNotes({ className = 'w-8 h-8' }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M12 28C10 28 8 30 8 32C8 34 10 36 12 36C14 36 16 34 16 32V12L28 8V28C26 28 24 30 24 32C24 34 26 36 28 36C30 36 32 34 32 32V6L12 10V28Z" fill="#118AB2" stroke="#262626" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function DoodleMocktail({ className = 'w-8 h-10' }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8 8L20 28V44M20 44H10M20 44H30M20 28L32 8H8Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14H28L20 25L12 14Z" fill="#EF476F" fillOpacity="0.7" />
      {/* Straw */}
      <path d="M26 4L18 20" stroke="#FFD166" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="14" cy="8" r="4" fill="#06D6A0" stroke="#262626" strokeWidth="1.2" />
    </svg>
  );
}

export function DoodleWashiTape({ className = 'w-24 h-6', color = '#FFD166' }: DoodleProps) {
  return (
    <div
      className={`relative inline-block opacity-90 select-none pointer-events-none ${className}`}
      style={{
        backgroundColor: color,
        clipPath: 'polygon(0% 12%, 4% 0%, 96% 0%, 100% 12%, 98% 88%, 95% 100%, 4% 100%, 0% 88%)',
        boxShadow: '0 1px 3px rgba(38,38,38,0.18)',
      }}
    />
  );
}

export function DoodleRibbonBanner({ title, subtitle, className = '' }: { title: string; subtitle?: string; className?: string }) {
  return (
    <div className={`relative inline-block my-2 ${className}`}>
      {/* Left ribbon tail */}
      <div
        className="absolute -left-6 top-2 w-8 h-10 bg-[#FFD166] border-2 border-[#262626] -z-10"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 40% 50%)',
        }}
      />
      {/* Right ribbon tail */}
      <div
        className="absolute -right-6 top-2 w-8 h-10 bg-[#FFD166] border-2 border-[#262626] -z-10"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 60% 50%, 100% 100%, 0% 100%)',
        }}
      />
      {/* Center banner */}
      <div className="relative px-6 py-2.5 bg-[#FFFDF8] border-2 border-[#262626] shadow-[2px_3px_0px_#262626] rounded-sm text-center">
        <h3 className="font-doodle text-xl sm:text-2xl font-bold text-[#262626] tracking-wide leading-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="font-hand text-xs sm:text-sm text-[#D96C4A] mt-0.5 font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
