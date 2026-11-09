import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

import { SITE } from '~/config';
import { IMAGES } from '~/lib/images';
import BookButton from '~/components/BookButton';
import PageHeader from '~/components/PageHeader';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a consultation with Anderson Carl.',
};

// The form that was here sent nowhere, so it's gone until there's a service
// to deliver it (docs/design.md, Needs the owner).
export default function ContactPage() {
  const rows = [
    { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: Phone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a consultation"
        intro="The fastest way to reach us is WhatsApp. Send a short message about your situation and we’ll arrange a time to talk."
        image={{ src: IMAGES.london, alt: 'People crossing the Millennium Bridge towards St Paul’s Cathedral' }}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="flex flex-col justify-between gap-10 rounded-panel bg-sand-100 p-6 md:col-span-5 md:p-10">
            <div>
              <h2 className="text-[clamp(1.75rem,2.6vw,2.25rem)]">WhatsApp</h2>
              <p className="mt-3 max-w-sm text-ink-600">Opens a chat with a short message ready to send. Most people start here.</p>
            </div>
            <BookButton className="btn btn-forest w-full sm:w-auto sm:self-start">
              Message us on WhatsApp
              <ArrowUpRight size={18} aria-hidden />
            </BookButton>
          </div>

          <ul className="md:col-span-7 md:pl-8">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="border-b border-line first:border-t">
                <a href={href} className="group flex items-center gap-5 py-7">
                  <span aria-hidden className="icon-circle group-hover:bg-forest-800 group-hover:text-cream">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-ink-600">{label}</span>
                    <span className="mt-0.5 block break-all text-xl tracking-[-0.01em] text-ink-900 group-hover:underline md:text-2xl">{value}</span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-5 border-b border-line py-7">
              <span aria-hidden className="icon-circle">
                <MapPin size={20} strokeWidth={1.6} />
              </span>
              <span>
                <span className="block text-sm text-ink-600">Office</span>
                <span className="mt-0.5 block text-xl tracking-[-0.01em] text-ink-900 md:text-2xl">{SITE.address}</span>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
