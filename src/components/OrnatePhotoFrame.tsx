interface OrnatePhotoFrameProps {
  src?: string;
  alt: string;
  className?: string;
  ratio?: string;
}

/**
 * Luxury Royal Antique Gold Portrait Frame.
 * Features a multi-tiered gilded antique gold bevel moulding, an ivory mount,
 * and an inner golden fillet that presents the couple's photograph with warmth and clarity.
 */
export function OrnatePhotoFrame({
  src,
  alt,
  className = '',
  ratio = '3/4',
}: OrnatePhotoFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer Gilded Antique Gold Moulding */}
      <div className="relative rounded-md p-2.5 sm:p-3.5 bg-gradient-to-br from-[#E7C686] via-[#C99E52] to-[#8A6224] shadow-[0_22px_60px_rgba(47,22,7,0.22)] border border-[#FFE8BA]/70">
        
        {/* Inner Ivory Mat / Mount (Passe-partout) */}
        <div className="relative rounded-[4px] p-3 sm:p-4 bg-gradient-to-b from-[#FFFDF9] to-[#FAF4E8] shadow-[inset_0_2px_8px_rgba(47,22,7,0.1)] border border-[#B4893C]/35">
          
          {/* Corner gold florets */}
          <span className="absolute top-1.5 left-2 text-[#B4893C] text-[10px] select-none">✦</span>
          <span className="absolute top-1.5 right-2 text-[#B4893C] text-[10px] select-none">✦</span>
          <span className="absolute bottom-1.5 left-2 text-[#B4893C] text-[10px] select-none">✦</span>
          <span className="absolute bottom-1.5 right-2 text-[#B4893C] text-[10px] select-none">✦</span>

          {/* Inner Recessed Gilded Fillet holding the photograph */}
          <div 
            className="relative overflow-hidden rounded-[2px] border border-[#8A6526]/50 shadow-[0_4px_16px_rgba(47,22,7,0.14)] bg-[#2A2018]"
            style={{ aspectRatio: ratio }}
          >
            {src ? (
              <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover brightness-[1.02] contrast-[1.03]"
              />
            ) : (
              <PortraitStandIn />
            )}

            {/* Subtle natural edge depth */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_rgba(47,22,7,0.18)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Fallback portrait stand-in */
function PortraitStandIn() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 400"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="pt-bg" cx="50%" cy="38%" r="72%">
          <stop offset="0%" stopColor="#9B8054" />
          <stop offset="62%" stopColor="#6B5535" />
          <stop offset="100%" stopColor="#33261A" />
        </radialGradient>
      </defs>
      <rect width="300" height="400" fill="url(#pt-bg)" />

      {/* studio drape */}
      <path
        d="M0 400V210c40 16 70 8 96-14 30-26 64-26 96 0 28 22 60 28 108 10v194z"
        fill="#4A3826"
        opacity="0.55"
      />

      {/* groom */}
      <g fill="#2E2318">
        <path d="M118 400V284c0-30 12-48 30-54 18 6 30 24 30 54v116z" opacity="0.9" />
        <circle cx="148" cy="206" r="30" fill="#8A6E4A" />
        <path d="M120 202c-3-26 12-40 28-40s31 14 28 40c-8-14-18-20-28-20s-20 6-28 20z" />
      </g>
      {/* bride */}
      <g>
        <path
          d="M158 400c-4-56 10-100 36-112 26 12 40 56 36 112z"
          fill="#3A2C1D"
          opacity="0.92"
        />
        <circle cx="194" cy="216" r="27" fill="#8A6E4A" />
        <path
          d="M166 216c-4-28 12-44 28-44s32 16 28 44c-6-16-16-22-28-22s-22 6-28 22z"
          fill="#231A11"
        />
        <path
          d="M164 218c-10 30-8 68 8 102 10-38 10-74 4-102z"
          fill="#5A452C"
          opacity="0.85"
        />
        <path
          d="M224 218c10 30 8 68-8 102-10-38-10-74-4-102z"
          fill="#5A452C"
          opacity="0.85"
        />
      </g>

      {/* garlands */}
      <path
        d="M132 254c-8 30-2 58 16 72 18-14 24-42 16-72"
        stroke="#A08558"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M180 262c-8 28-2 54 14 66 16-12 22-38 14-66"
        stroke="#A08558"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}
