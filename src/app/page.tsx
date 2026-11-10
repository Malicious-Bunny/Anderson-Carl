import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ClipboardCheck, FileSignature, MessageCircle, Send } from 'lucide-react';

import { getAllServices } from '~/lib/services';
import { IMAGES } from '~/lib/images';
import { FAQS } from '~/content/faqs';
import BookButton from '~/components/BookButton';
import ClosingCta from '~/components/ClosingCta';
import Faq from '~/components/Faq';
import Promises from '~/components/Promises';
import ServiceRows from '~/components/ServiceRows';

const PROCESS = [
  { icon: MessageCircle, title: 'Consultation', body: 'We sit down or video call and go through your situation, your paperwork, and what you’re trying to achieve.' },
  { icon: ClipboardCheck, title: 'Assessment', body: 'You get an honest written view of where you stand, what the risks are, and how long it’s realistically going to take.' },
  { icon: FileSignature, title: 'Preparation', body: 'We build your application or study plan with you, one step at a time, so nothing gets rushed.' },
  { icon: Send, title: 'Submission', body: 'We submit through the correct official channel and stay with your case until it’s actually resolved.' },
];

export default function HomePage() {
  const services = getAllServices();

  return (
    <>
      {/* Hero: one full-width London photo in a rounded frame, words over a soft forest shade */}
      <section className="container-page">
        <div className="on-dark relative isolate overflow-hidden rounded-panel bg-forest-800 text-cream">
          <Image
            src={IMAGES.london}
            alt="People crossing the Millennium Bridge towards St Paul’s Cathedral"
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-[70%_center]"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-900/95 via-forest-900/70 to-forest-900/10 md:bg-gradient-to-r md:from-forest-900/90 md:via-forest-900/55 md:to-transparent" />
          <div className="panel-pad flex min-h-[36rem] flex-col justify-end pb-12 pt-40 md:min-h-[min(calc(100svh-8rem),40rem)] md:pb-20">
            <h1 className="max-w-[14ch] text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.035em] text-cream">Straight answers on UK immigration.</h1>
            <p className="mt-6 max-w-md text-lg text-cream/85">
              London solicitors for visas, settlement and appeals. We tell you your real chances before you pay us
              anything.
            </p>
            <BookButton className="btn btn-sand mt-9 w-full sm:w-auto sm:self-start">
              Message us on WhatsApp
              <ArrowUpRight size={18} aria-hidden />
            </BookButton>
          </div>
        </div>

        <div className="mt-4">
          <Promises />
        </div>
      </section>

      {/* Services: a photo and a short intro beside the list */}
      <section id="services" className="container-page scroll-mt-4 py-20 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5 md:px-8">
            <h2>What we help with</h2>
            <p className="mt-5 max-w-sm text-ink-600">Choose an area to see what&apos;s included and what you&apos;ll need.</p>
            <div className="relative mt-10 hidden aspect-[4/5] overflow-hidden rounded-panel md:block">
              <Image src={IMAGES.conversation} alt="Two women talking across a small table by a window" fill sizes="35vw" className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-7 md:pt-2">
            <ServiceRows services={services} />
          </div>
        </div>
      </section>

      {/* How it works: a forest panel with the steps as a connected timeline (vertical on phones) */}
      <section className="container-page">
        <div className="on-dark rounded-panel bg-forest-800 px-6 py-14 text-cream md:px-14 md:py-20">
          <div className="grid gap-5 md:grid-cols-12 md:items-end md:gap-10">
            <h2 className="text-cream md:col-span-6">How it works</h2>
            <p className="max-w-sm text-cream/75 md:col-span-5 md:col-start-8">Most cases start with a WhatsApp message. This is what happens after that.</p>
          </div>
          <ol className="mt-12 grid md:mt-16 md:grid-cols-4 md:gap-8">
            {PROCESS.map(({ icon: Icon, title, body }, i) => (
              <li key={title} className="relative flex gap-6 pb-10 last:pb-0 md:block md:pb-0">
                {i < PROCESS.length - 1 && (
                  <span aria-hidden className="absolute bottom-0 left-6 top-12 w-px bg-cream/20 md:bottom-auto md:left-14 md:right-[-2rem] md:top-6 md:h-px md:w-auto" />
                )}
                <span className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-sand-300 text-forest-800">
                  <Icon size={20} strokeWidth={1.6} aria-hidden />
                </span>
                <div className="pt-2.5 md:pt-6">
                  <h3 className="text-cream">
                    <span className="sr-only">Step {i + 1}: </span>
                    {title}
                  </h3>
                  <p className="mt-2 max-w-md text-[0.9375rem] text-cream/75">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The questions people ask before getting in touch */}
      <section className="container-page pt-20 md:pt-32">
        <div className="grid gap-10 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <h2>Before you get in touch</h2>
            <p className="mt-5 max-w-sm text-ink-600">The questions people most often ask us first.</p>
            <Link href="/faqs" className="mt-6 inline-flex items-center gap-2 py-3 font-medium text-forest-800 underline-offset-4 hover:underline">
              All questions
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
          <div className="md:col-span-7">
            <Faq items={FAQS.slice(0, 3)} />
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
