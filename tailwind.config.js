/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        purple: '#9222DC',
        'secondary-dark-purple': '#560789',
        'secondary-yellow': '#F2ED3B',
        'secondary-orange': '#FF570D',
        'secondary-ocean-blue': '#66D1E3',
        'background-beauty-week': '#191919',
        black01: '#1D1D1F',
        black02: '#313033',
        black03: '#3A393D',
        black04: '#4E4D51',
        black05: '#8C8996',
        'light-gray': '#F5F5F5',
        'PRO-dark-purple': '#2F1642',
        'PRO-light-gray': '#D4CFD4',
      },
      backgroundColor: {
        purple: '#9222DC',
        'secondary-dark-purple': '#560789',
        'secondary-yellow': '#F2ED3B',
        'secondary-orange': '#FF570D',
        'secondary-ocean-blue': '#66D1E3',
        'background-beauty-week': '#191919',
        black01: '#1D1D1F',
        black02: '#313033',
        black03: '#3A393D',
        black04: '#4E4D51',
        black05: '#8C8996',
        'light-gray': '#F5F5F5',
        'PRO-dark-purple': '#2F1642',
        'PRO-light-gray': '#D4CFD4',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
