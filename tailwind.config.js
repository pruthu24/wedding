/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Bespoke Illustrated Indian Wedding Stationery Palette
        stationery: {
          ivory: '#FAF7F0',
          cream: '#F5EBDD',
          sage: '#A6B49A',
          marigold: '#E9B949',
          terracotta: '#C87558',
          blush: '#D8A6A0',
          gold: '#B69A62',
          'gold-light': '#D4AF37',
          'green-deep': '#475747',
          'ink-brown': '#49372B',
          'ink-muted': '#725E50',
          'card-bg': '#FFFDF9',
        },

        // Ceramic / Soft Clay Premium Palette (Matching Reference Website)
        clay: {
          sage: '#8F9F86',
          'sage-light': '#DCE4D8',
          'sage-dark': '#3A4C37',
          cream: '#FAF4E8',
          'cream-card': '#FFFBF3',
          wine: '#6B2634',
          'wine-dark': '#521B26',
          terracotta: '#D45D52',
          mustard: '#EDB355',
          blush: '#F1D6CC',
          charcoal: '#2A1F1E',
        },

        // Doodle & Scrapbook Palette
        sketch: '#FAF4E8',
        pencil: '#2A1F1E',
        marigold: '#EDB355',
        coral: '#D45D52',
        mint: '#8F9F86',
        skyblue: '#6B9080',
        'terracotta-warm': '#D45D52',
        'lavender-soft': '#F1D6CC',
        'paper-white': '#FFFBF3',

        // Antique palette — retained for compatibility
        ivory: '#FAF4E8',
        cream: '#FFFBF3',
        parchment: '#F1D6CC',
        sand: '#DFD1B5',
        gold: {
          DEFAULT: '#EDB355',
          light: '#F5C87E',
          deep: '#A36818',
        },
        ochre: '#C57B22',
        terracotta: '#D45D52',
        sepia: '#6B4A2F',
        bark: '#2A1F1E',
        forest: {
          DEFAULT: '#3A4C37',
          deep: '#233221',
          light: '#8F9F86',
        },
        charcoal: '#2A1F1E',
        rose: {
          DEFAULT: '#D45D52',
          deep: '#6B2634',
          pale: '#F1D6CC',
        },
        sky: {
          DEFAULT: '#8F9F86',
          deep: '#3A4C37',
          haze: '#DCE4D8',
        },
        slatepaper: '#8D8A84',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
        kalam: ['"Kalam"', '"Caveat"', 'cursive'],
        script: ['"Alex Brush"', '"Great Vibes"', 'cursive'],
        editorial: ['"Cormorant Garamond"', '"Fraunces"', 'Georgia', 'serif'],
        marcellus: ['"Marcellus"', '"Fraunces"', 'serif'],
        serif: ['"Fraunces"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        comic: ['"Kalam"', '"Caveat"', 'cursive'],
        doodle: ['"Kalam"', '"Fraunces"', 'cursive'],
      },
      letterSpacing: {
        widest2: '0.28em',
        widest3: '0.42em',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
