import type { Metadata } from 'next';

import { FAQS } from '~/content/faqs';
import PageHeader from '~/components/PageHeader';
import ClosingCta from '~/components/ClosingCta';
import Faq from '~/components/Faq';

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Common questions about working with Anderson Carl.',
};

export default function FAQsPage() {
  return (
    <>
      <PageHeader eyebrow="FAQs" title="Common questions" intro="The things people most often ask us before they get in touch." />

      <section className="container-page pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl">
          <Faq items={FAQS} />
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
