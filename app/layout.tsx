import { Metadata } from 'next';
import { Archivo, Inter } from 'next/font/google';

import { SITE } from '~/config.js';

import SiteHeader from '~/components/SiteHeader';
import SiteFooter from '~/components/SiteFooter';
import WhatsAppFloat from '~/components/atoms/WhatsAppFloat';
import { getContactInfo } from '~/lib/contact';

import '~/assets/styles/base.css';

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default async function RootLayout({ children }: LayoutProps) {
  const contact = await getContactInfo();

  return (
    <html lang="en" className={`scroll-smooth ${archivo.variable} ${inter.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-paper font-sans text-ink-700 antialiased">
        <SiteHeader whatsapp={contact.whatsapp} />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
