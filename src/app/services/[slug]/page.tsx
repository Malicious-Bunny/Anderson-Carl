import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

import { getAllServices, getServiceBySlug } from '~/lib/services';
import BookButton from '~/components/BookButton';
import PageHeader from '~/components/PageHeader';
import ServiceIcon from '~/components/ServiceIcon';

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  const others = getAllServices().filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader
        title={service.title}
        intro={service.summary}
        above={
          <Link href="/services" className="-my-3 inline-flex items-center gap-2 py-3 text-[0.9375rem] text-cream/75 underline-offset-[6px] hover:text-cream hover:underline">
            <ArrowLeft size={16} aria-hidden />
            All services
          </Link>
        }
      />

      <div className="container-page grid gap-14 py-16 md:grid-cols-12 md:py-24">
        <article
          className="prose prose-lg max-w-prose md:col-span-7 md:pl-14 prose-headings:font-medium prose-headings:tracking-[-0.02em] prose-headings:text-ink-900 prose-h2:text-[1.75rem] prose-p:text-ink-900 prose-li:text-ink-900 prose-li:marker:text-forest-800 prose-a:text-forest-800 prose-strong:text-ink-900"
          dangerouslySetInnerHTML={{ __html: service.html }}
        />

        <aside className="md:col-span-5 md:col-start-8">
          <div className="rounded-panel bg-sand-100 p-6 md:sticky md:top-6 md:p-8">
            <span className="icon-circle">
              <ServiceIcon name={service.icon} />
            </span>
            <p className="mt-6 text-2xl tracking-[-0.02em] text-ink-900">Ready to talk it through?</p>
            <p className="mt-3 text-[0.9375rem] text-ink-600">
              Message us and we&apos;ll give you an honest view of your options, including how long it&apos;s realistically going to take.
            </p>
            <BookButton className="btn btn-forest mt-6 w-full">
              Message us on WhatsApp
              <ArrowUpRight size={18} aria-hidden />
            </BookButton>

            <p className="mt-10 border-t border-line pt-6 text-sm font-medium text-ink-900">Other services</p>
            <ul className="mt-2">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="block py-2.5 text-[0.9375rem] text-ink-900 underline-offset-4 hover:text-forest-800 hover:underline">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
