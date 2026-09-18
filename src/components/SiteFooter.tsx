import Link from 'next/link';

import { NAV, LEGAL_NAV } from '~/site';
import { getAllServices } from '~/lib/serviceContent';
import { getContactInfo } from '~/lib/contact';

export default async function SiteFooter() {
  const services = getAllServices().slice(0, 7);
  const contact = await getContactInfo();

  return (
    <footer className="border-t border-ink-200 bg-ink-800 text-ink-100">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-paper">Anderson Carl</p>
          <p className="mt-3 max-w-xs text-sm text-ink-300">
            UK document specialists. We handle passport, licence, immigration and civil
            document applications from start to finish.
          </p>
          <p className="mt-4 text-sm text-ink-300">{contact.office_location}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
            Navigate
          </p>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="text-sm text-ink-200 hover:text-paper">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
            Services
          </p>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`} className="text-sm text-ink-200 hover:text-paper">
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-sm font-semibold text-clay-300 hover:text-clay-200">
                All services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-200">
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-paper">
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper"
              >
                {contact.phone} (WhatsApp)
              </a>
            </li>
            <li className="text-ink-300">{contact.availability}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-700">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-ink-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Anderson Carl. All rights reserved.</p>
          <p className="flex gap-5">
            {LEGAL_NAV.map((item) => (
              <Link key={item.path} href={item.path} className="hover:text-ink-200">
                {item.title}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
