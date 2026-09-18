import type { Metadata } from 'next';
import Link from 'next/link';
import { IconPlus } from '@tabler/icons-react';

import { FAQ_GROUPS } from '~/content/faqs';
import { getContactInfo } from '~/lib/contact';
import BookButton from '~/components/BookButton';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Answers to common questions about UK document services, processing times, fees and how Anderson Carl handles applications.',
};

export default async function FaqsPage() {
  const contact = await getContactInfo();
  const total = FAQ_GROUPS.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <>
      <section className="border-b border-ink-200 pt-32 pb-16 md:pt-40">
        <div className="container-page">
          <p className="eyebrow mb-6">UK Documents FAQs</p>
          <h1 className="max-w-3xl">Questions we get asked most</h1>
          <p className="mt-6 max-w-prose text-lg">
            {total} answers covering how our services work, what they cost, how long they take,
            and what we need from you. If yours is not here, message us and we will answer it
            directly.
          </p>
        </div>
      </section>

      {FAQ_GROUPS.map((group) => (
        <section key={group.label} className="border-b border-ink-200 py-14 md:py-16">
          <div className="container-page">
            <h2 className="mb-8">{group.label}</h2>

            <div className="grid gap-px overflow-hidden border border-ink-200 bg-ink-200">
              {group.items.map((item) => (
                <details key={item.q} className="group bg-paper">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-6 md:p-7">
                    <h3 className="text-base font-semibold text-ink-800 md:text-lg">{item.q}</h3>
                    <IconPlus
                      size={20}
                      stroke={1.75}
                      className="mt-0.5 flex-shrink-0 text-clay-500 transition-transform duration-150 group-open:rotate-45"
                    />
                  </summary>
                  <div className="px-6 pb-7 md:px-7">
                    <p className="max-w-prose">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="border border-ink-200 bg-ink-50 p-8 md:p-10">
            <h2 className="text-2xl">Still have questions?</h2>
            <p className="mt-3 max-w-prose">
              Message us on WhatsApp and we will answer directly — including telling you if what
              you need is something you can do yourself without paying anyone.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <BookButton whatsapp={contact.whatsapp} className="btn btn-primary">
                Ask on WhatsApp
              </BookButton>
              <Link href="/contact" className="btn btn-outline">
                Contact page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
