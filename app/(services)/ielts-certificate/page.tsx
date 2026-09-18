import type { Metadata } from 'next';

import ServiceDetail from '~/components/ServiceDetail';
import { getServiceBySlug } from '~/lib/serviceContent';

const SLUG = 'ielts-certificate';

export function generateMetadata(): Metadata {
  const service = getServiceBySlug(SLUG);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default function Page() {
  return <ServiceDetail slug={SLUG} />;
}
