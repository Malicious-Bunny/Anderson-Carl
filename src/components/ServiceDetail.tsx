import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { IconArrowLeft, IconClock, IconTag } from '@tabler/icons-react';

import { getServiceBySlug } from '~/lib/serviceContent';
import { getContactInfo } from '~/lib/contact';
import ServiceGallery from '~/components/ServiceGallery';
import BookButton from '~/components/BookButton';

export default async function ServiceDetail({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const contact = await getContactInfo();
  const hero = service.images[0];

  return (
    <article className="pb-24">
      <div className="relative mt-20 h-64 w-full md:h-80">
        {hero && (
          <Image src={hero} alt={service.title} fill priority sizes="100vw" className="object-cover" />
        )}
        <div className="absolute inset-0 bg-ink-900/70" />
        <div className="container-page relative flex h-full flex-col justify-end pb-8">
          <p className="eyebrow mb-3 text-clay-300">{service.category}</p>
          <h1 className="max-w-2xl text-paper">{service.title}</h1>
        </div>
      </div>

      <div className="container-page">
        <Link
          href="/services"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-800"
        >
          <IconArrowLeft size={16} />
          All services
        </Link>

        <p className="mt-6 max-w-prose text-lg">{service.summary}</p>

        {(service.price || service.processingTime) && (
          <dl className="mt-8 grid max-w-xl gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2">
            {service.price && (
              <div className="bg-paper px-6 py-5">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                  <IconTag size={14} /> Service fee
                </dt>
                <dd className="mt-2 font-display text-2xl font-medium text-ink-800">
                  {service.price}
                </dd>
              </div>
            )}
            {service.processingTime && (
              <div className="bg-paper px-6 py-5">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                  <IconClock size={14} /> Processing time
                </dt>
                <dd className="mt-2 font-display text-2xl font-medium text-ink-800">
                  {service.processingTime}
                </dd>
              </div>
            )}
          </dl>
        )}

        <div
          className="prose prose-lg mt-12 max-w-prose prose-headings:font-display prose-headings:font-medium prose-headings:text-ink-800 prose-h2:text-xl prose-h2:md:text-2xl prose-p:text-ink-500 prose-li:text-ink-500 prose-a:text-forest-700 prose-strong:text-ink-700"
          dangerouslySetInnerHTML={{ __html: service.html }}
        />
      </div>

      <div className="mt-16">
        <ServiceGallery images={service.images} label={service.title} />
      </div>

      <div className="container-page">
        <div className="mt-16 border border-ink-200 bg-ink-50 p-8 md:p-10">
          <h2 className="text-2xl">Ready to get started?</h2>
          <p className="mt-3 max-w-prose">
            Start a chat and we&apos;ll talk through your situation, what documents
            you&apos;ll need, and how long it&apos;s realistically going to take.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <BookButton whatsapp={contact.whatsapp} className="btn btn-primary">
              Chat With Us
            </BookButton>
            <Link href="/contact" className="btn btn-outline">
              Other ways to reach us
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
