import type { Metadata } from 'next';
import { Landmark, MessagesSquare, Route } from 'lucide-react';

import { SITE } from '~/config';
import { IMAGES } from '~/lib/images';
import PageHeader from '~/components/PageHeader';
import ClosingCta from '~/components/ClosingCta';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Anderson Carl and how we work with clients.',
};

const VALUES = [
  {
    icon: MessagesSquare,
    title: 'We tell you the truth, even when it’s not what you want to hear',
    body: 'If an application is unlikely to succeed, or a shortcut is being offered elsewhere, we say so directly.',
  },
  {
    icon: Landmark,
    title: 'We work through official channels only',
    body: 'Every document, exam result, and application we help with is issued by the relevant UK authority, in your name.',
  },
  {
    icon: Route,
    title: 'We explain, we don’t just process',
    body: 'You should understand why an application is built the way it is, not just sign where indicated.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader

        title="Advice you can trust"
        intro={`${SITE.legalName} gives clients honest, competent guidance through the UK immigration system. No shortcuts, no guarantees we can’t back up, and no vague promises.`}
        image={{ src: IMAGES.london, alt: 'People crossing the Millennium Bridge towards St Paul’s Cathedral' }}
      />

      <section className="container-page py-16 md:py-28">
        <h2 className="md:px-8">How we work</h2>
        <ul className="mt-10 border-t border-line md:mt-14">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <li key={title} className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:items-center md:gap-10 md:px-8 md:py-10">
              <div className="flex items-start gap-5 md:col-span-7 md:items-center">
                <span className="icon-circle">
                  <Icon size={20} strokeWidth={1.6} aria-hidden />
                </span>
                <h3 className="text-xl md:text-[1.5rem] md:font-normal md:tracking-[-0.02em]">{title}</h3>
              </div>
              <p className="text-ink-600 md:col-span-5">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page">
        <div className="grid gap-4 rounded-panel bg-sand-100 px-6 py-10 md:grid-cols-12 md:gap-10 md:px-14 md:py-14">
          <h2 className="text-[clamp(1.625rem,2.4vw,2rem)] md:col-span-4">Regulation</h2>
          <p className="max-w-prose text-ink-900 md:col-span-8">{SITE.sraNote}</p>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
