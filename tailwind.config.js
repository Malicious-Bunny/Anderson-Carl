const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F6F6F7',
          100: '#EBEBEC',
          200: '#D3D3D7',
          300: '#B0B1B8',
          400: '#84858F',
          500: '#5F606A',
          600: '#454650',
          700: '#33333C',
          800: '#232329',
          900: '#18181C',
          950: '#0C0C0E',
        },
        gold: {
          300: '#DDA3A8',
          400: '#C06672',
          500: '#8C2A36',
          600: '#6E1F29',
          700: '#521720',
        },
        'neutral-warm': {
          25: '#FCFBFA',
          50: '#FAF8F6',
          100: '#F3F0EC',
          200: '#E6E1DA',
          300: '#D3CBC0',
          400: '#B0A695',
          500: '#8A7F6D',
          600: '#635B4E',
          700: '#453F37',
          800: '#292520',
          900: '#181613',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"EB Garamond"', 'Georgia', 'Cambria', 'serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        card: '0 2px 6px rgba(24,24,28,0.06), 0 12px 24px rgba(24,24,28,0.08)',
        header: '0 1px 0 rgba(0,0,0,0.06)',
        medium: '0 4px 25px -5px rgba(0,0,0,0.12), 0 10px 10px -5px rgba(0,0,0,0.06)',
        large: '0 20px 40px -12px rgba(0,0,0,0.15), 0 10px 20px -8px rgba(0,0,0,0.08)',
        'glow-gold': '0 0 30px rgba(140,42,54,0.25)',
        'glow-green': '0 0 30px rgba(37,211,102,0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
