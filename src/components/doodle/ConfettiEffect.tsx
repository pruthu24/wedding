import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  shape: 'heart' | 'star' | 'circle' | 'strip';
}

const COLORS = ['#FFD166', '#EF476F', '#06D6A0', '#118AB2', '#D96C4A', '#CDB4DB'];
const SHAPES: ('heart' | 'star' | 'circle' | 'strip')[] = ['heart', 'star', 'circle', 'strip'];

export function useConfetti() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const triggerConfetti = useCallback((originX?: number, originY?: number) => {
    const xBase = originX ?? (typeof window !== 'undefined' ? window.innerWidth / 2 : 200);
    const yBase = originY ?? (typeof window !== 'undefined' ? window.innerHeight / 3 : 200);

    const newParticles: Particle[] = Array.from({ length: 36 }).map((_, i) => ({
      id: Date.now() + i,
      x: xBase + (Math.random() - 0.5) * 80,
      y: yBase + (Math.random() - 0.5) * 40,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.floor(Math.random() * 12) + 10,
      rotation: Math.random() * 360,
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 2800);
  }, []);

  return { particles, triggerConfetti };
}

export function ConfettiCanvas({ particles }: { particles: Particle[] }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {particles.map((p) => {
          const xDest = (Math.random() - 0.5) * 350;
          const yDest = Math.random() * 450 + 150;

          return (
            <motion.div
              key={p.id}
              initial={{
                x: p.x,
                y: p.y,
                scale: 0.2,
                rotate: p.rotation,
                opacity: 1,
              }}
              animate={{
                x: p.x + xDest,
                y: p.y + yDest,
                scale: 1,
                rotate: p.rotation + (Math.random() > 0.5 ? 360 : -360),
                opacity: [1, 1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                position: 'absolute',
                width: p.size,
                height: p.size,
              }}
            >
              {p.shape === 'heart' && (
                <svg viewBox="0 0 24 24" fill={p.color} stroke="#262626" strokeWidth="1.5">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              )}
              {p.shape === 'star' && (
                <svg viewBox="0 0 24 24" fill={p.color} stroke="#262626" strokeWidth="1.5">
                  <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                </svg>
              )}
              {p.shape === 'strip' && (
                <div
                  style={{
                    backgroundColor: p.color,
                    width: '100%',
                    height: '40%',
                    border: '1.5px solid #262626',
                    borderRadius: '2px',
                  }}
                />
              )}
              {p.shape === 'circle' && (
                <div
                  style={{
                    backgroundColor: p.color,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '1.5px solid #262626',
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
