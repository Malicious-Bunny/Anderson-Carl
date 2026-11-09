import type { Config } from 'tailwindcss';

// Tokens from docs/design.md, taken from the Alden & Vale reference. Use only these values.
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          600: '#3A5A4C', // hover on dark surfaces, rules on forest
          800: '#1C362D', // brand panels, primary buttons, links
          900: '#132620', // footer, pressed
        },
        sand: {
          100: '#EAE4D8', // quiet panels and strips
          200: '#E3DACD', // icon circles, hover tints
          300: '#E7D4B6', // the button on forest
          400: '#DCC29C', // hover on the sand button
        },
        bronze: '#C19864', // the small dot only. Never text on cream.
        cream: '#F4F4EC', // page ground, text on forest
        card: '#FBFBF7', // raised cards on cream
        ink: {
          900: '#1A2526', // headings and body
          600: '#4E5856', // secondary text (6.7:1 on cream)
        },
        line: '#DAD8CC', // hairlines on cream
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mark: ['var(--font-mark)', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 6vw, 5.25rem)', { lineHeight: '1', letterSpacing: '-0.035em' }],
        title: ['clamp(2.375rem, 4.6vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.035em' }],
      },
      borderRadius: {
        panel: '0.75rem',
        btn: '0.375rem',
      },
      maxWidth: {
        prose: '68ch',
        page: '82rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
