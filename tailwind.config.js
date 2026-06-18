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
          50: '#EBF2FF',
          100: '#DAEAFF',
          200: '#B5D4FF',
          300: '#8DBFFF',
          400: '#5CA4FF',
          500: '#2E88F5',
          600: '#1E6CD4',
          700: '#1754A8',
          800: '#134080',
          900: '#1B3A6B',
          950: '#0F2347',
        },
        gold: {
          300: '#EDD98A',
          400: '#DFC268',
          500: '#C9A84C',
          600: '#A88A3A',
          700: '#866E2E',
        },
        'neutral-warm': {
          25: '#f9fafb',
          50: '#F8F9FC',
          100: '#F0F2F7',
          200: '#E4E7EE',
          300: '#D0D5E1',
          400: '#B4BBCC',
          500: '#8891A8',
          600: '#5D6680',
          700: '#3D455E',
          800: '#1E2438',
          900: '#0F1320',
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
        card: '0 2px 6px rgba(27,58,107,0.06), 0 12px 24px rgba(27,58,107,0.08)',
        header: '0 1px 0 rgba(0,0,0,0.06)',
        medium: '0 4px 25px -5px rgba(0,0,0,0.12), 0 10px 10px -5px rgba(0,0,0,0.06)',
        large: '0 20px 40px -12px rgba(0,0,0,0.15), 0 10px 20px -8px rgba(0,0,0,0.08)',
        'glow-gold': '0 0 30px rgba(201,168,76,0.25)',
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
