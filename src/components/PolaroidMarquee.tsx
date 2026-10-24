import { motion } from 'framer-motion';
import type { PolaroidPhoto } from '../config/wedding';

interface PolaroidMarqueeProps {
  items?: PolaroidPhoto[];
  className?: string;
}

const defaultPolaroids: PolaroidPhoto[] = [
  {
    id: 'p1',
    image: '/couple.png',
    rotation: -2.5,
    tape: true,
  },
  {
    id: 'p2',
    image: '/couple-2.png',
    rotation: 3,
    tape: false,
  },
  {
    id: 'p3',
    image: '/couple.png',
    rotation: -1.5,
    crop: 'object-top',
    tape: true,
  },
  {
    id: 'p4',
    image: '/couple-2.png',
    rotation: 2.5,
    tape: false,
  },
  {
    id: 'p5',
    image: '/couple.png',
    rotation: -3,
    tape: true,
  },
  {
    id: 'p6',
    image: '/couple-2.png',
    rotation: 1.8,
    tape: false,
  },
];

export function PolaroidMarquee({
  items = defaultPolaroids,
  className = '',
}: PolaroidMarqueeProps) {
  const photoList = items.length > 0 ? items : defaultPolaroids;

  // Duplicate for seamless 0 -> -50% infinite marquee
  const marqueeItems = [...photoList, ...photoList];

  return (
    <div className={`relative w-full overflow-hidden py-6 select-none ${className}`}>
      {/* Infinite scrolling marquee track powered by Framer Motion (proven on iOS Safari) */}
      <motion.div
        className="flex items-center py-6 px-4 will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 32,
        }}
        style={{
          width: 'max-content',
        }}
      >
        {marqueeItems.map((photo, index) => {
          const rotationAngle = photo.rotation ?? (index % 2 === 0 ? -2.2 : 2.5);
          const zIndex = (index % 3) + 10;

          return (
            <div
              key={`${photo.id || index}-${index}`}
              className="group relative shrink-0 mx-2 sm:mx-3 cursor-pointer will-change-transform"
              style={{
                zIndex,
              }}
            >
              {/* Polaroid Frame Card */}
              <div
                className="relative w-[210px] sm:w-[245px] md:w-[265px] bg-[#FFFDF9] p-3 pb-6 sm:p-3.5 sm:pb-8 rounded-[2px] border border-[#EADBCA] transition-all duration-300 ease-out shadow-[0_12px_28px_rgba(47,22,7,0.13),0_2px_6px_rgba(47,22,7,0.06)] group-hover:scale-105 group-hover:!rotate-0 group-hover:z-50 group-hover:shadow-[0_22px_44px_rgba(47,22,7,0.22),0_4px_12px_rgba(47,22,7,0.1)]"
                style={{
                  transform: `rotate(${rotationAngle}deg)`,
                }}
              >
                {/* Vintage Washi Tape Accent */}
                {photo.tape && (
                  <div
                    aria-hidden="true"
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-[#EBDDBE]/85 backdrop-blur-[1.5px] border-y border-[#D6C5A2]/60 shadow-[0_1px_3px_rgba(47,22,7,0.12)] -rotate-1 z-30 pointer-events-none"
                    style={{
                      clipPath:
                        'polygon(0% 10%, 4% 0%, 96% 0%, 100% 10%, 100% 90%, 96% 100%, 4% 100%, 0% 90%)',
                    }}
                  />
                )}

                {/* Photo aperture (Square 1:1 format) */}
                <div className="relative w-full aspect-square overflow-hidden rounded-[2px] bg-[#EDE4D5]">
                  <img
                    src={photo.image}
                    alt={photo.caption || 'Wedding celebration moment'}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${photo.crop || 'object-center'}`}
                  />

                  {/* Soft photographic warm light wash */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-tr from-[#8B4E18]/10 via-transparent to-white/20 pointer-events-none"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
