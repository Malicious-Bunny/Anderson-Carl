import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import type { ServiceMeta } from '~/lib/services';
import ServiceIcon from '~/components/ServiceIcon';

/**
 * Each service as a row: the reference's tinted icon circle, a title, one line
 * and an arrow. The whole row is the link.
 */
export default function ServiceRows({ services }: { services: ServiceMeta[] }) {
  return (
    <ul className="border-t border-line">
      {services.map((service) => (
        <li key={service.slug} className="border-b border-line">
          <Link
            href={`/services/${service.slug}`}
            className="group -mx-3 flex items-start gap-5 rounded-panel px-3 py-6 transition-colors duration-150 hover:bg-sand-100 md:items-center md:gap-6 md:px-5 md:-mx-5"
          >
            <span className="icon-circle group-hover:bg-forest-800 group-hover:text-cream">
              <ServiceIcon name={service.icon} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xl font-medium tracking-[-0.01em] text-ink-900 md:text-[1.375rem]">{service.title}</span>
              <span className="mt-1 block text-[0.9375rem] text-ink-600">{service.summary}</span>
            </span>
            <ArrowUpRight size={22} aria-hidden className="mt-3 shrink-0 text-ink-600 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-forest-800 md:mt-0" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
