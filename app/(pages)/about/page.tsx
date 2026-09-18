import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { IconCircleCheck } from '@tabler/icons-react';

import { getContactInfo } from '~/lib/contact';
import { IMAGES } from '~/lib/images';
import BookButton from '~/components/BookButton';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Anderson Carl is a UK documents consultancy handling passport, driver licence, immigration and civil document applications from start to finish.',
};

const CREDENTIALS = [
  '8+ years experience in UK documentation processes',
  '99% success rate across more than 5,000 applications',
  'Specialists in passport, driver licence and civil documents',
  'Available 24/7 for consultation and support',
  'Experienced with language certificates and immigration documents',
  'Central London office, serving clients across the UK',
];

const VALUES = [
  {
    title: 'Expert guidance',
    body: 'Our team provides step-by-step guidance, clarifies requirements, and assists with completing the necessary forms, checking everything against what the issuing body actually requires.',
  },
  {
    title: 'Personalised support',
    body: 'Every client’s situation is different. You get support shaped around your circumstances, with questions answered properly rather than passed around.',
  },
  {
    title: 'Time saved',
    body: 'We streamline the process from initial form-filling through to submission and follow-up, so you are not spending your evenings deciphering government guidance.',
  },
  {
    title: 'Reliable and confidential',
    body: 'We prioritise accuracy, timeliness and confidentiality. Your documents and personal details are handled carefully at every stage.',
  },
];

const PROCESS = [
  {
    step: '01',
    title: 'Initial consultation',
    body: 'As soon as we receive your enquiry we begin with a detailed consultation to understand your specific requirements and give you tailored guidance.',
  },
  {
    step: '02',
    title: 'Document review',
    body: 'Our team carefully reviews the details and documents you provide, contacting you if anything further is required to ensure accuracy.',
  },
  {
    step: '03',
    title: 'Application submission',
    body: 'After a thorough review we handle the submission and track progress closely to make sure everything keeps moving.',
  },
  {
    step: '04',
    title: 'Ongoing updates',
    body: 'We keep you updated throughout until your documents are successfully processed and delivered to you.',
  },
];

export default async function AboutPage() {
  const contact = await getContactInfo();

  return (
    <>
      <section className="border-b border-ink-200 pt-32 pb-16 md:pt-40 md:pb-0">
        <div className="container-page grid items-center gap-12 md:grid-cols-2 md:pb-16">
          <div>
            <p className="eyebrow mb-6">About us</p>
            <h1 className="max-w-xl text-balance">
              UK documents, handled by people who do this every day.
            </h1>
            <p className="mt-6 max-w-prose text-lg">
              Anderson Carl helps clients through UK documentation processes — passports,
              driver licences, visa renewals, residence permits and civil documents. We handle
              the paperwork and the follow-ups so you are not chasing anyone for updates.
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
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:h-[30rem]">
            <Image
              src={IMAGES.about}
              alt="Anderson Carl consultation"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-ink-200 py-16 md:py-20">
        <div className="container-page grid gap-12 md:grid-cols-[1fr,1.2fr]">
          <div>
            <p className="eyebrow mb-3">Credentials</p>
            <h2>Life in the UK documents specialist</h2>
          </div>
          <ul className="grid gap-4">
            {CREDENTIALS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconCircleCheck
                  size={20}
                  stroke={1.75}
                  className="mt-0.5 flex-shrink-0 text-forest-600"
                />
                <span className="text-ink-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-ink-200 py-16 md:py-20">
        <div className="container-page">
          <p className="eyebrow mb-3">Why Anderson Carl</p>
          <h2 className="max-w-xl">Professional excellence in UK documentation</h2>

          <div className="mt-10 grid gap-px overflow-hidden border border-ink-200 bg-ink-200 md:grid-cols-2">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-paper p-8">
                <h3 className="text-lg">{value.title}</h3>
                <p className="mt-2 text-[0.95rem]">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink-200 py-16 md:py-20">
        <div className="container-page">
          <p className="eyebrow mb-3">How we work</p>
          <h2 className="max-w-xl">Seamless and efficient service delivery</h2>

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

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="border border-ink-200 bg-ink-50 p-8 md:p-10">
            <h2 className="text-2xl">Get professional UK document assistance</h2>
            <p className="mt-3 max-w-prose">
              Tell us what you need and we will explain the route, the cost and the realistic
              timeline before you commit to anything.
            </p>
            <BookButton whatsapp={contact.whatsapp} className="btn btn-primary mt-7">
              Contact Anderson Carl
            </BookButton>
          </div>
        </div>
      </section>
    </>
  );
}
