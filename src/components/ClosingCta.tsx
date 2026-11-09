import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { IMAGES } from '~/lib/images';
import BookButton from '~/components/BookButton';

export default function ClosingCta() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid overflow-hidden rounded-panel bg-sand-100 md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[28rem]">
          <Image src={IMAGES.phone} alt="A woman reading a message on her phone by a window" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="panel-pad flex flex-col justify-center py-12 md:py-16">
          <h2 className="max-w-md">Talk to a solicitor before you apply.</h2>
          <p className="mt-5 max-w-md text-ink-600">
            Send us a message on WhatsApp with a little about your situation. A short consultation can save months of
            delay, and we&apos;ll tell you honestly where you stand.
          </p>
          <BookButton className="btn btn-forest mt-8 w-full sm:w-auto sm:self-start">
            Message us on WhatsApp
            <ArrowUpRight size={18} aria-hidden />
          </BookButton>
        </div>
      </div>
    </section>
  );
}
