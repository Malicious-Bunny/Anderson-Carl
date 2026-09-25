import type { Metadata } from 'next';
import { CHAT_URL } from '~/site';
import { IconMessageCircle, IconMail, IconMapPin, IconClock } from '@tabler/icons-react';

import { getContactInfo } from '~/lib/contact';
import BookButton from '~/components/BookButton';
import ContactForm from '~/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Anderson Carl for UK passport, driver licence, immigration and civil document assistance. Available 24/7 on WhatsApp.',
};

export default async function ContactPage() {
  const contact = await getContactInfo();

  const channels = [
    {
      icon: IconMessageCircle,
      label: 'Live chat',
      value: 'chat.andersoncarlconsultancy.uk',
      href: CHAT_URL,
      note: 'Fastest way to reach us',
    },
    {
      icon: IconMail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      note: 'For documents and detailed enquiries',
    },
    {
      icon: IconMapPin,
      label: 'Office',
      value: contact.office_location,
      note: 'Serving clients across the UK',
    },
    {
      icon: IconClock,
      label: 'Availability',
      value: contact.availability,
      note: 'Consultation available around the clock',
    },
  ];

  return (
    <>
      <section className="border-b border-ink-200 pt-32 pb-16 md:pt-40">
        <div className="container-page">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="max-w-3xl text-balance">Tell us what you need and we will be straight with you.</h1>
          <p className="mt-6 max-w-prose text-lg">
            Message us on WhatsApp for the quickest answer. We will explain the route, what it
            costs and how long it realistically takes — including if it turns out you do not
            need us at all.
          </p>
          <BookButton whatsapp={contact.whatsapp} className="btn btn-primary mt-10">
            WhatsApp Us
          </BookButton>
        </div>
      </section>

      <section className="border-b border-ink-200">
        <div className="container-page">
          <div className="grid gap-px bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => {
              const inner = (
                <>
                  <channel.icon size={22} stroke={1.75} className="text-clay-500" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                    {channel.label}
                  </p>
                  <p className="mt-2 font-display text-lg font-medium text-ink-800">
                    {channel.value}
                  </p>
                  <p className="mt-1 text-sm text-ink-400">{channel.note}</p>
                </>
              );

              return channel.href ? (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-paper p-8 transition-colors duration-150 hover:bg-ink-50"
                >
                  {inner}
                </a>
              ) : (
                <div key={channel.label} className="bg-paper p-8">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-12 md:grid-cols-[1fr,1.3fr]">
          <div>
            <p className="eyebrow mb-3">Send a message</p>
            <h2>Prefer to write it out?</h2>
            <p className="mt-4 max-w-prose">
              Give us the essentials — which document you need, your situation, and any deadline
              you are working to — and we will come back to you with a clear answer.
            </p>
          </div>
          <div className="border border-ink-200 bg-ink-25 p-8">
            <ContactForm email={contact.email} />
          </div>
        </div>
      </section>
    </>
  );
}
