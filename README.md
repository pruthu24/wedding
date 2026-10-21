# Prithvi weds Varshini — illustrated invitation

A cinematic, scroll-driven Indian wedding invitation. Eight full-height scenes,
multi-layer parallax, drifting petals, and artwork drawn entirely in SVG — no
image assets ship with the site.

## Run it

```bash
npm install
npm run dev
```

Vite opens `http://localhost:5173` automatically. `npm run build` produces
`dist/`, which is a plain static folder you can host anywhere.

## Changing the content

Everything — names, dates, venues, copy, links, price — lives in one place:

```
src/config/wedding.ts
```

Nothing else hard-codes wedding content, so editing that file re-skins the
whole experience. Two fields worth knowing about:

- `couple.photo` — leave it as `''` and the ornate frame shows a drawn sepia
  portrait. Put a path (e.g. `/couple.jpg`, with the file in `public/`) and it
  swaps in, graded to match the rest of the site.
- `rsvp.whatsappNumber` — international format, digits only, no `+` and no
  spaces. Currently a placeholder; change it before sharing the link.

## Structure

```
src/
  config/wedding.ts       all content
  hooks/                  Lenis smooth scroll, viewport queries
  components/
    WeddingExperience.tsx composes the eight scenes
    HeroTemple.tsx        1 · temple garden
    GaneshaInvitation.tsx 2 · invocation
    StorySection.tsx      3 · the couple's note + portrait
    EventsSection.tsx     4 · programme  (EventCard.tsx)
    RsvpSection.tsx       5 · RSVP → WhatsApp
    ShipSection.tsx       6 · travel
    ClosingSection.tsx    7 · closing frame
    Footer.tsx            8 · editorial footer
    PetalSystem.tsx       drifting petals
    FloatingBuyButton.tsx the only persistent chrome
    OrnatePhotoFrame.tsx  portrait in its moulding
    art/                  every illustration, as SVG
```

## Notes on the motion

- Scrolling is driven by **Lenis**; scene parallax by **framer-motion**'s
  `useScroll` / `useTransform`. Both read the same document scroll, so they
  stay in step.
- Petals are pure CSS: a linear fall, an eased lateral sway and a slow tumble
  nested inside each other, so they drift rather than drop and cost no JS
  frames.
- Parallax depth is scaled to about 40–50% on phones, and petal counts to a
  third. `prefers-reduced-motion` disables smooth scroll, petals and all
  ambient animation.

## Design system

Colours and fonts are defined in `tailwind.config.js` — antique cream,
parchment, muted gold, terracotta, ochre, sepia, forest green, charcoal and
muted rose. Type is Cormorant Garamond (display), EB Garamond (editorial),
Noto Serif Devanagari (the invocation) and Inter, used only for small utility
labels and buttons.
