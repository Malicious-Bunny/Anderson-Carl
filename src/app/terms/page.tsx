import type { Metadata } from 'next';

import PageHeader from '~/components/PageHeader';

export const metadata: Metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of service" />
      <section className="container-page py-16 md:py-24">
        <div className="panel-pad"><div className="prose prose-lg max-w-prose prose-p:text-ink-900">
          <p>
            This is placeholder terms-of-service content for design purposes. Replace with terms drafted by a
            qualified professional, including your engagement letter, fee structure, and complaints procedure.
          </p>
        </div></div>
      </section>
    </>
  );
}
