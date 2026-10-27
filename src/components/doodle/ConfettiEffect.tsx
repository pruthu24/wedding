import { useEffect, useRef, useCallback } from 'react';

/**
 * Royal South Indian Celebration Confetti Palette
 * Glistening golds, festive silk pinks, auspicious marigolds, and emerald greens.
 */
const PALETTE = [
  // Metallic Royal Golds
  { front: '#F5B738', back: '#C48A18' },
  { front: '#E9B949', back: '#B8861C' },
  { front: '#FFD700', back: '#C79D00' },
  { front: '#FFE57F', back: '#D4AF37' },
  // Silk Dupatta Festive Pinks & Corals
  { front: '#E8769D', back: '#B8456D' },
  { front: '#EF476F', back: '#B51F43' },
  { front: '#FF6B8B', back: '#C73859' },
  // Auspicious Marigold & Saffron
  { front: '#FF8A00', back: '#C45E00' },
  { front: '#FF9F1C', back: '#C97300' },
  // Auspicious Garden Emerald & Mint
  { front: '#2A9D8F', back: '#1A675E' },
  { front: '#06D6A0', back: '#038E6A' },
  { front: '#487A38', back: '#2C5020' },
  // Jasmine White & Pearl
  { front: '#FFFDF5', back: '#DFD9C3' },
];

type ShapeType = 'ribbon' | 'circle' | 'petal' | 'star' | 'heart';

interface ParticleOptions {
  x: number;
  y: number;
  angleDeg: number;
  spreadDeg: number;
  velocity: number;
  gravity?: number;
  drag?: number;
  shape?: ShapeType;
}

class ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  color: { front: string; back: string };
  shape: ShapeType;
  tiltAngle: number;
  tiltSpeed: number;
  rotation: number;
  rotationSpeed: number;
  wobble: number;
  wobbleSpeed: number;
  gravity: number;
  drag: number;
  opacity: number;
  life: number;
  maxLife: number;

  constructor(opt: ParticleOptions) {
    this.x = opt.x;
    this.y = opt.y;

    // Angle and speed
    const rad = (opt.angleDeg + (Math.random() - 0.5) * opt.spreadDeg) * (Math.PI / 180);
    const speed = opt.velocity * (0.75 + Math.random() * 0.5);
    this.vx = Math.cos(rad) * speed;
    this.vy = -Math.sin(rad) * speed;

    this.gravity = opt.gravity ?? 0.36;
    this.drag = opt.drag ?? 0.982;

    // Pick shape
    const shapes: ShapeType[] = ['ribbon', 'ribbon', 'petal', 'circle', 'star', 'heart'];
    this.shape = opt.shape ?? shapes[Math.floor(Math.random() * shapes.length)];

    // Dimensions based on shape
    if (this.shape === 'ribbon') {
      this.w = 10 + Math.random() * 7;
      this.h = 5 + Math.random() * 3.5;
    } else if (this.shape === 'petal') {
      this.w = 7 + Math.random() * 5;
      this.h = 10 + Math.random() * 6;
    } else if (this.shape === 'circle') {
      this.w = 6 + Math.random() * 4;
      this.h = this.w;
    } else {
      this.w = 9 + Math.random() * 5;
      this.h = this.w;
    }

    this.color = PALETTE[Math.floor(Math.random() * PALETTE.length)];

    // 3D Tilt & rotation
    this.tiltAngle = Math.random() * Math.PI * 2;
    this.tiltSpeed = 0.08 + Math.random() * 0.12;

    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.15;

    this.wobble = Math.random() * Math.PI * 2;
    this.wobbleSpeed = 0.04 + Math.random() * 0.06;

    this.opacity = 1;
    this.life = 0;
    this.maxLife = 190 + Math.floor(Math.random() * 110); // ~3.5 to 5 seconds at 60fps
  }

  update(): boolean {
    this.vx *= this.drag;
    this.vy = this.vy * this.drag + this.gravity;

    // Flutter / wobble
    this.x += this.vx + Math.sin(this.wobble) * 1.35;
    this.y += this.vy;

    this.wobble += this.wobbleSpeed;
    this.tiltAngle += this.tiltSpeed;
    this.rotation += this.rotationSpeed;

    this.life++;

    // Smooth fade-out in last 25% of life
    const fadeStart = this.maxLife * 0.75;
    if (this.life > fadeStart) {
      this.opacity = Math.max(0, 1 - (this.life - fadeStart) / (this.maxLife - fadeStart));
    }

    // Terminate if dead or off-screen bottom
    return this.opacity > 0 && this.y < (typeof window !== 'undefined' ? window.innerHeight + 80 : 1000);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    // 3D flipping projection
    const cosTilt = Math.cos(this.tiltAngle);
    ctx.scale(cosTilt, 1);
    ctx.globalAlpha = this.opacity;

    // Dual-face color (shading when flipped to the reverse side)
    const fillColor = cosTilt > 0 ? this.color.front : this.color.back;
    ctx.fillStyle = fillColor;

    if (this.shape === 'ribbon') {
      ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
    } else if (this.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(0, 0, this.w / 2, 0, Math.PI * 2);
      ctx.fill();
    } else if (this.shape === 'petal') {
      // Natural South Indian Jasmine / Rose petal teardrop
      ctx.beginPath();
      ctx.moveTo(0, -this.h / 2);
      ctx.bezierCurveTo(this.w / 2, -this.h * 0.2, this.w / 2, this.h * 0.4, 0, this.h / 2);
      ctx.bezierCurveTo(-this.w / 2, this.h * 0.4, -this.w / 2, -this.h * 0.2, 0, -this.h / 2);
      ctx.fill();
    } else if (this.shape === 'star') {
      // 4-pointed sparkle star
      ctx.beginPath();
      const rOuter = this.w / 2;
      const rInner = rOuter * 0.35;
      for (let i = 0; i < 8; i++) {
        const rad = (i * Math.PI) / 4;
        const r = i % 2 === 0 ? rOuter : rInner;
        const px = Math.cos(rad) * r;
        const py = Math.sin(rad) * r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();
    } else if (this.shape === 'heart') {
      // Cute wedding heart
      ctx.beginPath();
      const s = this.w * 0.08;
      ctx.moveTo(0, s * 3);
      ctx.bezierCurveTo(-s * 5, -s * 3, -s * 10, s * 2, 0, s * 10);
      ctx.bezierCurveTo(s * 10, s * 2, s * 5, -s * 3, 0, s * 3);
      ctx.fill();
    }

    ctx.restore();
  }
}

// Global particle pool managed by single active canvas
let globalParticles: ConfettiParticle[] = [];
let animFrameId: number | null = null;
let activeCanvas: HTMLCanvasElement | null = null;

function renderLoop() {
  if (!activeCanvas) return;
  const ctx = activeCanvas.getContext('2d');
  if (!ctx) return;

  ctx.clearRect(0, 0, activeCanvas.width, activeCanvas.height);

  // Update & draw particles in reverse for safe splicing
  for (let i = globalParticles.length - 1; i >= 0; i--) {
    const p = globalParticles[i];
    const alive = p.update();
    if (alive) {
      p.draw(ctx);
    } else {
      globalParticles.splice(i, 1);
    }
  }

  if (globalParticles.length > 0) {
    animFrameId = requestAnimationFrame(renderLoop);
  } else {
    animFrameId = null;
    ctx.clearRect(0, 0, activeCanvas.width, activeCanvas.height);
  }
}

function playCelebrationChime() {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const now = ctx.currentTime;

    // Pop sound (subtle soft party popper thud)
    const oscPop = ctx.createOscillator();
    const gainPop = ctx.createGain();
    oscPop.type = 'triangle';
    oscPop.frequency.setValueAtTime(140, now);
    oscPop.frequency.exponentialRampToValueAtTime(35, now + 0.14);
    gainPop.gain.setValueAtTime(0.22, now);
    gainPop.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
    oscPop.connect(gainPop);
    gainPop.connect(ctx.destination);
    oscPop.start(now);
    oscPop.stop(now + 0.14);

    // Auspicious celebratory chime notes (G major pentatonic arpeggio)
    const freqs = [587.33, 783.99, 880, 1174.66];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      const startTime = now + idx * 0.045;
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.06, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.55);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.55);
    });
  } catch {
    // Ignore if audio permissions are blocked
  }
}

function startRenderLoop() {
  if (!animFrameId) {
    animFrameId = requestAnimationFrame(renderLoop);
  }
}

/**
 * Fires a synchronized, multi-cannon full-screen burst of confetti
 * across the overall page.
 */
export function fireGrandConfettiBurst(originX?: number, originY?: number) {
  if (typeof window === 'undefined') return;

  // Play subtle celebratory audio pop & chime
  playCelebrationChime();

  const w = window.innerWidth;
  const h = window.innerHeight;

  const newParticles: ConfettiParticle[] = [];

  // 1. Bottom-Left Cannon (Shooting upwards & rightwards across the page)
  const leftCount = 85;
  for (let i = 0; i < leftCount; i++) {
    newParticles.push(
      new ConfettiParticle({
        x: w * 0.06,
        y: h * 0.94,
        angleDeg: 60,
        spreadDeg: 55,
        velocity: 28 + Math.random() * 18,
      })
    );
  }

  // 2. Bottom-Right Cannon (Shooting upwards & leftwards across the page)
  const rightCount = 85;
  for (let i = 0; i < rightCount; i++) {
    newParticles.push(
      new ConfettiParticle({
        x: w * 0.94,
        y: h * 0.94,
        angleDeg: 120,
        spreadDeg: 55,
        velocity: 28 + Math.random() * 18,
      })
    );
  }

  // 3. Central Starburst (Omnidirectional explosion in the upper-mid screen)
  const centerX = originX ?? w * 0.5;
  const centerY = originY ?? h * 0.35;
  const centerCount = 80;
  for (let i = 0; i < centerCount; i++) {
    newParticles.push(
      new ConfettiParticle({
        x: centerX,
        y: centerY,
        angleDeg: Math.random() * 360,
        spreadDeg: 360,
        velocity: 14 + Math.random() * 22,
        gravity: 0.28,
      })
    );
  }

  // 4. Secondary Delayed Wave (+180ms) for layered cascade depth
  setTimeout(() => {
    const secondaryParticles: ConfettiParticle[] = [];
    // Left high booster
    for (let i = 0; i < 45; i++) {
      secondaryParticles.push(
        new ConfettiParticle({
          x: w * 0.15,
          y: h * 0.9,
          angleDeg: 65,
          spreadDeg: 45,
          velocity: 32 + Math.random() * 16,
        })
      );
    }
    // Right high booster
    for (let i = 0; i < 45; i++) {
      secondaryParticles.push(
        new ConfettiParticle({
          x: w * 0.85,
          y: h * 0.9,
          angleDeg: 115,
          spreadDeg: 45,
          velocity: 32 + Math.random() * 16,
        })
      );
    }
    // Top floating golden star shower
    for (let i = 0; i < 35; i++) {
      secondaryParticles.push(
        new ConfettiParticle({
          x: w * (0.2 + Math.random() * 0.6),
          y: h * 0.05,
          angleDeg: 270,
          spreadDeg: 80,
          velocity: 6 + Math.random() * 12,
          shape: 'star',
          gravity: 0.2,
        })
      );
    }

    globalParticles.push(...secondaryParticles);
    startRenderLoop();
  }, 180);

  globalParticles.push(...newParticles);
  startRenderLoop();
}

/**
 * React Hook to trigger full-screen wedding confetti from any component.
 */
export function useConfetti() {
  const triggerConfetti = useCallback((originX?: number, originY?: number) => {
    fireGrandConfettiBurst(originX, originY);
  }, []);

  return {
    particles: [], // Maintained for backwards-compatibility with existing props
    triggerConfetti,
  };
}

/**
 * Full-screen Confetti Canvas Overlay.
 * Stays mounted fixed over the whole page (pointer-events: none, z-index 99999).
 */
export function ConfettiCanvas({ particles: _ }: { particles?: unknown[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    activeCanvas = canvas;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Global custom event listener so any button can dispatch 'wedding-throw-joy'
    const handleCustomEvent = (e: Event) => {
      const ce = e as CustomEvent<{ x?: number; y?: number }>;
      fireGrandConfettiBurst(ce.detail?.x, ce.detail?.y);
    };
    window.addEventListener('wedding-throw-joy', handleCustomEvent);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wedding-throw-joy', handleCustomEvent);
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
      activeCanvas = null;
      globalParticles = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[99999] w-full h-full"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}
    />
  );
}
