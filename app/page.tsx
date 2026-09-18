import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  IconArrowUpRight,
  IconCircleCheck,
  IconClipboardCheck,
  IconUsers,
  IconClockHour4,
  IconShieldCheck,
} from '@tabler/icons-react';

import { SITE } from '~/config.js';
import { getAllServices } from '~/lib/serviceContent';
import { getContactInfo } from '~/lib/contact';
import { IMAGES } from '~/lib/images';
import BookButton from '~/components/BookButton';
import ServiceGallery from '~/components/ServiceGallery';

export const metadata: Metadata = {
  title: SITE.title,
};

const STATS = [
  { value: '99%', label: 'Success rate' },
  { value: '5,000+', label: 'Applications processed' },
  { value: '4.9', label: 'Average client rating' },
  { value: '24/7', label: 'Expert assistance' },
];

const APPROACH = [
  {
    title: 'Expert guidance',
    body: 'Step-by-step guidance through the requirements, with every form checked against what the issuing body actually asks for before anything is submitted.',
    icon: IconClipboardCheck,
  },
  {
    title: 'Personal support',
    body: 'No two applications are the same. You deal with someone who knows your case and answers your questions properly, not a ticket number.',
    icon: IconUsers,
  },
  {
    title: 'Time saved',
    body: 'We handle the form-filling, the submission and the chasing. You get your time back and the process keeps moving without you managing it.',
    icon: IconClockHour4,
  },
  {
    title: 'Handled carefully',
    body: 'Your documents and personal details are treated as confidential throughout, and we are straight with you about timelines rather than optimistic.',
    icon: IconShieldCheck,
  },
];

const PROCESS = [
  {
    step: '01',
    title: 'Consultation',
    body: 'We start by understanding exactly what you need, what you already have, and what the realistic route looks like for your situation.',
  },
  {
    step: '02',
    title: 'Document review',
    body: 'We go through everything you provide, flag anything missing or likely to cause a delay, and tell you what to get before we proceed.',
  },
  {
    step: '03',
    title: 'Submission',
    body: 'We prepare and submit the application through the correct official channel, and keep a record of exactly what went where.',
  },
  {
    step: '04',
    title: 'Follow-up',
    body: 'We track progress and keep you updated until the document is actually in your hands — you are not left chasing anyone.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Anderson Carl made the entire process smooth and hassle-free. The consultation was thorough and everything was explained clearly.',
    name: 'Mohamed Bashir',
    role: 'UK Resident',
  },
  {
    quote:
      'I was sceptical at first, but they delivered exactly what was promised and kept me updated the whole way through.',
    name: 'Ahmed Fahti',
    role: 'Immigration Client',
  },
  {
    quote:
      'Professional service with clear guidance. They helped me get my documents without any issues or delays.',
    name: 'Rashir Pooja',
    role: 'Professional Client',
  },
];

export default async function HomePage() {
  const services = getAllServices().slice(0, 6);
  const contact = await getContactInfo();
  const galleryImages = getAllServices()
    .flatMap((service) => service.images.slice(0, 1))
    .slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-ink-200 pt-32 pb-16 md:pt-40 md:pb-0">
        <div className="container-page grid items-center gap-12 md:grid-cols-2 md:pb-16">
          <div>
            <p className="eyebrow mb-6">UK Document Specialists</p>
            <h1 className="max-w-xl text-balance">
              The paperwork handled properly, the first time.
            </h1>
            <p className="mt-6 max-w-prose text-lg">
              Passports, driver licences, visa renewals, residence permits and civil documents.
              We prepare the application, submit it through the right channel, and chase it
              until it is done — so you are not deciphering government forms on a Sunday night.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <BookButton whatsapp={contact.whatsapp} className="btn btn-primary">
                WhatsApp Us
              </BookButton>
              <Link href="/services" className="btn btn-outline">
                View services
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:h-[32rem]">
            <Image
              src={IMAGES.hero}
              alt="UK document consultation"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-ink-200">
        <div className="container-page">
          <dl className="grid gap-px bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-paper px-6 py-10 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-4xl font-medium text-ink-800 md:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm font-medium text-ink-400">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-ink-200 py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3">Services</p>
              <h2>Where we help</h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-800"
            >
              All services <IconArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-ink-200 bg-ink-200 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
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
                <div className="flex flex-1 flex-col justify-between gap-6 p-8">
                  <div>
                    <p className="eyebrow mb-2 text-ink-400">{service.category}</p>
                    <h3 className="text-lg">{service.title}</h3>
                    <p className="mt-2 text-[0.95rem] line-clamp-3">{service.summary}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700">
                    Learn more
                    <IconArrowUpRight
                      size={16}
                      className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approach — dark band */}
      <section className="relative border-b border-ink-200 py-20 md:py-24">
        <div className="absolute inset-0">
          <Image src={IMAGES.approach} alt="" fill sizes="100vw" className="object-cover" />
          {/* Explicit stacking so the scrim always paints over the photo. */}
          <div className="absolute inset-0 z-10 bg-ink-900/90" />
        </div>
        <div className="container-page relative">
          <p className="eyebrow mb-3 text-clay-300">Our approach</p>
          <h2 className="max-w-xl text-paper">Straightforward help with complicated forms</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((item) => (
              <div key={item.title}>
                <item.icon className="text-clay-300" size={22} stroke={1.75} />
                <h3 className="mt-4 text-lg text-paper">{item.title}</h3>
                <p className="mt-2 text-ink-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — carried over from the previous site */}
      <ServiceGallery images={galleryImages} label="Documents we work with" />

      {/* Process */}
      <section className="border-b border-ink-200 py-16 md:py-20">
        <div className="container-page">
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="max-w-xl">Four steps, and we do most of them</h2>

          <div className="mt-10 grid gap-px overflow-hidden border border-ink-200 bg-ink-200 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item) => (
              <div key={item.step} className="bg-paper p-8">
                <span className="font-display text-sm font-semibold tracking-[0.16em] text-clay-500">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg">{item.title}</h3>
                <p className="mt-2 text-[0.95rem]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-ink-200 py-16 md:py-20">
        <div className="container-page">
          <p className="eyebrow mb-3">Client reviews</p>
          <h2 className="max-w-xl">What clients say</h2>

          <div className="mt-10 grid gap-px overflow-hidden border border-ink-200 bg-ink-200 md:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <figure key={item.name} className="flex flex-col justify-between gap-6 bg-paper p-8">
                <blockquote className="text-ink-600">
                  <IconCircleCheck size={20} className="mb-4 text-forest-600" stroke={1.75} />
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption>
                  <p className="font-display font-medium text-ink-800">{item.name}</p>
                  <p className="text-sm text-ink-400">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="border border-ink-200 bg-ink-50 p-8 md:p-12">
            <h2 className="max-w-xl text-3xl">Ready to get your documents sorted?</h2>
            <p className="mt-4 max-w-prose text-lg">
              Message us on WhatsApp and we will tell you what is involved, what it costs, and
              how long it realistically takes. No obligation, and no pressure if it turns out
              you do not need us.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <BookButton whatsapp={contact.whatsapp} className="btn btn-primary">
                Start on WhatsApp
              </BookButton>
              <Link href="/contact" className="btn btn-outline">
                Other ways to reach us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
