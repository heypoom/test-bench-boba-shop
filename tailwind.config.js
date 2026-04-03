/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        boba: {
          base:     '#0B0907',
          surface:  '#151109',
          elevated: '#1E1710',
          border:   '#2C2317',
          gold:     '#C9943A',
          amber:    '#E07B35',
          cream:    '#EDE0C4',
          muted:    '#8A7558',
          subtle:   '#4A3E2C',
          teal:     '#4BB8AC',
          green:    '#5CB87A',
          rose:     '#D95252',
        },
      },
      fontFamily: {
        display:  ['Fraunces', 'Georgia', 'serif'],
        heading:  ['Syne', 'sans-serif'],
        body:     ['Manrope', 'sans-serif'],
        mono:     ['DM Mono', 'monospace'],
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, rgba(201,148,58,0.15) 1px, transparent 1px)',
        'line-grid': 'linear-gradient(rgba(201,148,58,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,148,58,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-sm':  '20px 20px',
        'line-sm': '24px 24px',
      },
      animation: {
        'shimmer':    'shimmer 2.5s ease-in-out infinite',
        'fade-up':    'fadeUp 0.5s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.8' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%':      { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-gold':  '0 0 24px rgba(201,148,58,0.15)',
        'glow-teal':  '0 0 24px rgba(75,184,172,0.15)',
        'card':       '0 1px 3px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)',
        'card-hover': '0 2px 8px rgba(0,0,0,0.5), 0 16px 40px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
