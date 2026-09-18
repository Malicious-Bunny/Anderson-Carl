import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { IconArrowUpRight } from '@tabler/icons-react';

import { getServicesByCategory } from '~/lib/serviceContent';
import { getContactInfo } from '~/lib/contact';
import BookButton from '~/components/BookButton';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'UK passport applications, driver licence services, visa renewals, residence permits, language certificates and civil documents — handled end to end.',
};

export default async function ServicesPage() {
  const groups = getServicesByCategory();
  const contact = await getContactInfo();
  const total = groups.reduce((sum, group) => sum + group.services.length, 0);

  return (
    <>
      <section className="border-b border-ink-200 pt-32 pb-16 md:pt-40">
        <div className="container-page">
          <p className="eyebrow mb-6">Services</p>
          <h1 className="max-w-3xl">
            Everything we handle, from first form to finished document.
          </h1>
          <p className="mt-6 max-w-prose text-lg">
            {total} services across passports, driver licences, immigration, language
            certificates and civil documents. We deal with the paperwork, the submission and
            the follow-ups, so you are not chasing anyone for updates.
          </p>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.category} className="border-b border-ink-200 py-14 md:py-16">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2>{group.category}</h2>
              <p className="text-sm font-semibold text-ink-400">
                {group.services.length} {group.services.length === 1 ? 'service' : 'services'}
              </p>
            </div>

            <div className="mt-8 grid gap-px overflow-hidden border border-ink-200 bg-ink-200 md:grid-cols-2 lg:grid-cols-3">
              {group.services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="group flex flex-col bg-paper transition-colors duration-150 hover:bg-ink-50"
                >
                  {service.images[0] && (
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={service.images[0]}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col justify-between gap-6 p-7">
                    <div>
                      <h3 className="text-lg">{service.title}</h3>
                      <p className="mt-2 text-[0.95rem] line-clamp-3">{service.summary}</p>
                    </div>
                    <div className="flex items-end justify-between gap-4">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700">
                        Learn more
                        <IconArrowUpRight
                          size={16}
                          className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                      {service.price && (
                        <span className="font-display text-lg font-medium text-ink-700">
                          {service.price}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="border border-ink-200 bg-ink-50 p-8 md:p-10">
            <h2 className="text-2xl">Not sure which one you need?</h2>
            <p className="mt-3 max-w-prose">
              Tell us what you are trying to achieve and we will point you at the right route —
              including if that route is one you can do yourself without paying us.
            </p>
            <BookButton whatsapp={contact.whatsapp} className="btn btn-primary mt-7">
              Ask on WhatsApp
            </BookButton>
          </div>
        </div>
      </section>
    </>
  );
}
