import { motion } from 'framer-motion';
import { wedding } from '../config/wedding';

/**
 * The one persistent piece of chrome on the site — there is no nav bar.
 * Cream outer pill, black price pill inside it, pinned top-right.
 */
export function FloatingBuyButton() {
  const { label, price, url } = wedding.buyNow;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group fixed right-4 top-4 z-50 flex items-center gap-2 rounded-full
                 border border-white/50 bg-ivory/85 py-1.5 pl-4 pr-1.5 backdrop-blur-md
                 sm:right-7 sm:top-6 sm:gap-3 sm:pl-6 sm:pr-2"
      style={{ boxShadow: '0 10px 30px -12px rgba(26,22,19,0.55)' }}
    >
      <span className="font-sans text-[11px] font-medium tracking-[0.12em] text-charcoal sm:text-[13px]">
        {label}
      </span>
      <span
        className="rounded-full bg-charcoal px-3 py-1.5 font-sans text-[10px] font-medium
                   tracking-[0.14em] text-ivory transition-colors duration-500
                   group-hover:bg-gold-deep sm:px-4 sm:text-[12px]"
      >
        {price}
      </span>
    </motion.a>
  );
}
