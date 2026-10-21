import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BrideGroom } from './art/BrideGroom';
import { wedding } from '../config/wedding';

/**
 * Section 8 — the storybook closes and the page turns to plain paper.
 * A structured editorial footer: wordmark, index, and the one commercial
 * card on the site.
 */
export function Footer() {
  const f = wedding.footer;

  return (
    <footer className="relative w-full bg-[#FBF9F4] px-6 pb-10 pt-24 text-charcoal sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.7fr_1.2fr] lg:gap-12">
        {/* ------------------------------- left ------------------------------- */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[11vw] font-light leading-[0.98] text-charcoal sm:text-[44px]"
          >
            {f.wordmark.map((line, i) => (
              <span key={i} className="block">
                {i === f.wordmark.length - 1 ? <em className="italic">{line}</em> : line}
              </span>
            ))}
          </motion.h2>

          <p className="mt-10 max-w-[18rem] font-serif text-[17px] leading-relaxed text-charcoal/70">
            {f.helpLine}
          </p>

          <a
            href={`mailto:${f.email}`}
            className="mt-3 inline-block border-b border-charcoal/25 pb-0.5 font-serif text-[17px]
                       text-charcoal transition-colors duration-500 hover:border-charcoal"
          >
            {f.email}
          </a>

          <div className="mt-8 flex items-center gap-3">
            <SocialIcon href={f.social.instagram} label="Instagram">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
            </SocialIcon>
            <SocialIcon href={f.social.youtube} label="YouTube">
              <rect x="2.5" y="5" width="19" height="14" rx="4.4" />
              <path d="M10.4 9.2v5.6l4.8-2.8z" fill="currentColor" stroke="none" />
            </SocialIcon>
          </div>
        </div>

        {/* ------------------------------ middle ------------------------------ */}
        <nav aria-label="Footer">
          <h3 className="font-sans text-[10px] uppercase tracking-widest2 text-charcoal/45">
            {f.pagesHeading}
          </h3>
          <ul className="mt-6 space-y-3">
            {f.pages.map((p) => (
              <li key={p.label}>
                <a
                  href={p.href}
                  className="group inline-flex items-center gap-2 font-serif text-[17px] text-charcoal/80
                             transition-colors duration-300 hover:text-charcoal"
                >
                  <span className="h-px w-0 bg-charcoal transition-all duration-500 group-hover:w-4" />
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ------------------------------- right ------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[26px] border border-charcoal/20 px-8 pb-8 pt-10 sm:px-10"
        >
          <h3 className="max-w-[12ch] font-display text-[9vw] font-light leading-[1.02] text-charcoal sm:text-[40px]">
            {f.cta.heading}
          </h3>
          <p className="mt-4 font-sans text-[11px] uppercase tracking-widest2 text-charcoal/50">
            {f.cta.sub}
          </p>

          <a
            href={f.cta.href}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-charcoal px-7 py-3
                       font-sans text-[12px] tracking-[0.1em] text-ivory
                       transition-all duration-500 ease-cinematic hover:bg-gold-deep"
          >
            {f.cta.button}
            <svg
              aria-hidden
              viewBox="0 0 24 12"
              className="h-2.5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            >
              <path d="M0 6h21M16 1l5 5-5 5" />
            </svg>
          </a>

          <BrideGroom className="pointer-events-none absolute -bottom-2 right-0 h-40 w-auto opacity-95 sm:h-52" />
        </motion.div>
      </div>

      {/* ------------------------------- bottom ------------------------------- */}
      <div className="mx-auto mt-20 flex max-w-6xl flex-col items-start justify-between gap-4 border-t border-charcoal/12 pt-7 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <svg aria-hidden viewBox="0 0 28 28" className="h-6 w-6 text-charcoal">
            <path
              d="M4 24V8l10 9 10-9v16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <circle cx="14" cy="21" r="2.4" fill="currentColor" />
          </svg>
          <span className="font-display text-[19px] italic tracking-wide">
            {f.brand}
          </span>
        </div>
        <p className="font-sans text-[11px] tracking-wide text-charcoal/45">{f.legal}</p>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20
                 text-charcoal/70 transition-all duration-500 hover:border-charcoal hover:text-charcoal"
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        {children}
      </svg>
    </a>
  );
}
