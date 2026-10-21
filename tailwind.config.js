/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Antique palette — everything on the site draws from here.
        ivory: '#FBF7EE',
        cream: '#F3E8D5',
        parchment: '#E4D2B0',
        sand: '#D6BE95',
        gold: {
          DEFAULT: '#B4893C',
          light: '#D2AC63',
          deep: '#8A6526',
        },
        ochre: '#C57B22',
        terracotta: '#A5452A',
        sepia: '#6B4A2F',
        bark: '#3E2A1B',
        forest: {
          DEFAULT: '#22402F',
          deep: '#132419',
          light: '#3C6046',
        },
        charcoal: '#1A1613',
        rose: {
          DEFAULT: '#C4767C',
          deep: '#9E4A52',
          pale: '#E2AFB2',
        },
        sky: {
          DEFAULT: '#6FA9A2',
          deep: '#3E7E7C',
          haze: '#CBB48B',
        },
        slatepaper: '#8D8A84',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Lora', 'system-ui', 'sans-serif'], // Forcing sans to lora for a purely serif aesthetic 
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
