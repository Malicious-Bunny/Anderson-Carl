import Image from 'next/image';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  intro?: string;
  /** Above the title instead of the label: a back link */
  above?: ReactNode;
  image?: { src: string; alt: string };
}

/** Every inner page opens on the reference's forest panel, with a photo beside it when there is one. */
export default function PageHeader({ title, intro, above, image }: PageHeaderProps) {
  return (
    <section className="container-page">
      <div className={`on-dark grid overflow-hidden rounded-panel bg-forest-800 text-cream ${image ? 'md:grid-cols-[1.25fr_1fr]' : ''}`}>
        <div className="panel-pad py-12 md:py-20">
          {above && <div className="mb-8">{above}</div>}
          <h1 className="max-w-3xl text-cream">{title}</h1>
          {intro && <p className="mt-6 max-w-xl text-lg text-cream/75">{intro}</p>}
        </div>
        {image && (
          <div className="relative hidden min-h-[22rem] md:block">
            <Image src={image.src} alt={image.alt} fill sizes="40vw" className="object-cover" priority />
          </div>
        )}
      </div>
    </section>
  );
}
