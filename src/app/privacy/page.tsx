import type { Metadata } from 'next';

import PageHeader from '~/components/PageHeader';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy policy" />
      <section className="container-page py-16 md:py-24">
        <div className="panel-pad"><div className="prose prose-lg max-w-prose prose-p:text-ink-900">
          <p>
            This is placeholder privacy policy content for design purposes. Replace with a policy reviewed by a
            qualified professional covering how client data is collected, stored, and used, in line with UK GDPR.
          </p>
        </div></div>
      </section>
    </>
  );
}
