import type { Metadata } from 'next';

import { getServicesByCategory } from '~/lib/services';
import { IMAGES } from '~/lib/images';
import PageHeader from '~/components/PageHeader';
import ServiceRows from '~/components/ServiceRows';
import ClosingCta from '~/components/ClosingCta';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Immigration law and application support services offered by Anderson Carl.',
};

export default function ServicesPage() {
  const grouped = getServicesByCategory();

  return (
    <>
      <PageHeader

        title="Honest preparation for the real process"
        intro="We won’t offer a shortcut around an official exam or a government procedure, and we’d turn away work that asked us to."
        image={{ src: IMAGES.conversation, alt: 'Two women talking across a small table by a window' }}
      />

      <div className="container-page py-16 md:py-28">
        {grouped.map(({ category, services }) => (
          <section key={category} className="mb-16 grid gap-6 last:mb-0 md:mb-24 md:grid-cols-12 md:gap-10 md:px-8">
            <h2 className="text-[clamp(1.625rem,2.4vw,2rem)] md:col-span-4 md:pt-6">{category}</h2>
            <div className="md:col-span-8">
              <ServiceRows services={services} />
            </div>
          </section>
        ))}
      </div>

      <ClosingCta />
    </>
  );
}
