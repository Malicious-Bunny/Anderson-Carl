import Link from 'next/link';

import { NAV, SITE } from '~/config';
import { getAllServices } from '~/lib/services';
import Wordmark from '~/components/Wordmark';

export default function Footer() {
  const services = getAllServices();
  const link = 'inline-block py-2.5 text-cream/75 hover:text-cream hover:underline underline-offset-4';

  return (
    <footer className="container-page pb-4">
      <div className="on-dark rounded-panel bg-forest-900 text-[0.9375rem] text-cream/75">
        <div className="panel-pad grid gap-12 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-3">
            <Wordmark tone="cream" />
            <p className="mt-6 max-w-xs">{SITE.address}</p>
          </div>

          <nav aria-label="Footer" className="md:col-span-2">
            <p className="mb-2 text-cream">The firm</p>
            <ul>
              {NAV.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className={link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="mb-2 text-cream">Services</p>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className={link}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-2 text-cream">Get in touch</p>
            <ul>
              <li>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className={link}>
                  WhatsApp {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className={`${link} break-words`}>
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="panel-pad flex flex-col gap-2 border-t border-cream/15 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}
          </p>
          <p className="flex gap-6">
            <Link href="/privacy" className={link}>
              Privacy
            </Link>
            <Link href="/terms" className={link}>
              Terms
            </Link>
          </p>
        </div>
        <p className="panel-pad pb-8 text-sm text-cream/70">{SITE.sraNote}</p>
      </div>
    </footer>
  );
}
