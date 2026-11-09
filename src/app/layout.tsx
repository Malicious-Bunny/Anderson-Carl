import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { SITE } from '~/config';

import './globals.css';

// DM Sans, as in the reference, for everything people read
const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  axes: ['opsz'],
  display: 'swap',
});

// A serif for the wordmark only, like the reference's logo
const mark = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-mark',
  weight: ['500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${sans.variable} ${mark.variable}`}>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
