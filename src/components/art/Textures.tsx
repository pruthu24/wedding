/**
 * Shared texture layers. Everything here is pure CSS/SVG so no bitmap
 * assets ship with the site and the grain stays crisp at any density.
 */

interface GrainProps {
  variant?: 'default' | 'light' | 'heavy';
  className?: string;
}

export function Grain({ variant = 'default', className = '' }: GrainProps) {
  const modifier =
    variant === 'light'
      ? 'grain-overlay--light'
      : variant === 'heavy'
        ? 'grain-overlay--heavy'
        : '';
  return <div aria-hidden className={`grain-overlay ${modifier} ${className}`} />;
}

/** Long-fibre flecks, for the handmade-paper scenes. */
export function Fibre({ className = '' }: { className?: string }) {
  return <div aria-hidden className={`fibre-overlay ${className}`} />;
}

interface WatercolourProps {
  /** Tailwind colour utility, e.g. `bg-terracotta`. */
  tone?: string;
  className?: string;
}

/**
 * Soft irregular bloom, like a watercolour wash that soaked into the sheet.
 * Positioned by the caller.
 */
export function WatercolourStain({
  tone = 'bg-terracotta',
  className = '',
}: WatercolourProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-[46%_54%_38%_62%/58%_42%_58%_42%] blur-2xl mix-blend-multiply ${tone} ${className}`}
    />
  );
}

/** Corner-to-centre darkening used on the cinematic scenes. */
export function Vignette({
  strength = 0.55,
  className = '',
}: {
  strength?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 50% 45%, transparent 38%, rgba(12,9,6,${strength}) 100%)`,
      }}
    />
  );
}
