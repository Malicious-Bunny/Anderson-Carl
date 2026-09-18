const { fontFamily } = require('tailwindcss/defaultTheme');

// Warm editorial palette, shared with Anderson Carl Legal and the client chat
// so the three properties read as one brand.
const ink = {
  25: '#F9F8F5',
  50: '#F4F2EC',
  100: '#E9E5D9',
  200: '#D2CCB8',
  300: '#A9A085',
  400: '#726A54',
  500: '#4A4436',
  600: '#332F26',
  700: '#25221C',
  800: '#1A1814',
  900: '#100F0C',
  950: '#0A0907',
};

const forest = {
  50: '#EEF2ED',
  100: '#D6E0D3',
  200: '#AEC1A7',
  300: '#84A278',
  400: '#5D8250',
  500: '#3F6534',
  600: '#2E4E27',
  700: '#233C1F',
  800: '#1B2E18',
  900: '#12200F',
};

const clay = {
  50: '#FBF1EB',
  100: '#F4DCCC',
  200: '#E8B695',
  300: '#D98F5E',
  400: '#C36F3B',
  500: '#A85529',
  600: '#87421F',
  700: '#67331A',
  800: '#4E2613',
  900: '#351A0D',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink,
        forest,
        clay,
        paper: '#F7F4EC',

        // Legacy token names kept as aliases onto the new palette so existing
        // markup re-colours without touching several hundred class names.
        primary: ink,
        'neutral-warm': ink,
        gold: clay,
      },
      fontFamily: {
        sans: ['var(--font-body)', ...fontFamily.sans],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      // Square corners are core to this design. Everything is flattened except
      // `rounded-full`, which still needs to produce circles (avatars, the
      // floating WhatsApp button, status dots).
      borderRadius: {
        none: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '9999px',
      },
      boxShadow: {
        edge: '0 1px 0 rgba(16,15,12,0.08)',
        panel: '0 1px 2px rgba(16,15,12,0.04), 0 8px 24px rgba(16,15,12,0.06)',
        // Legacy names remapped to the restrained editorial shadows.
        card: '0 1px 0 rgba(16,15,12,0.08)',
        header: '0 1px 0 rgba(16,15,12,0.08)',
        medium: '0 1px 2px rgba(16,15,12,0.04), 0 8px 24px rgba(16,15,12,0.06)',
        large: '0 1px 2px rgba(16,15,12,0.04), 0 12px 32px rgba(16,15,12,0.08)',
        'glow-gold': '0 1px 2px rgba(16,15,12,0.04), 0 8px 24px rgba(16,15,12,0.06)',
        // WhatsApp keeps its green glow — it is a recognised brand affordance.
        'glow-green': '0 0 30px rgba(37,211,102,0.3)',
      },
      transitionTimingFunction: {
        'out-quint': 'cubic-bezier(0.2, 0, 0, 1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
