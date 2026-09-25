import Image from 'next/image';
import Link from 'next/link';
import { FeaturesProps } from '~/shared/types';
import { CHAT_URL } from '~/lib/constants';

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4  flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Services = ({ id, header, items, hasBackground = false }: FeaturesProps) => (
  <section
    id={id || 'services'}
    className={`section ${hasBackground ? 'bg-neutral-warm-50' : 'bg-white'}`}
  >
    <div className="container-custom">
      {header && (
        <div className="text-center max-w-3xl mx-auto mb-14">
          {header.tagline && (
            <span className="badge-gold mb-4 inline-block">{header.tagline}</span>
          )}
          {header.title && (
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-warm-900 mb-4">
              {header.title}
            </h2>
          )}
          {header.subtitle && (
            <p className="text-lg text-neutral-warm-600">{header.subtitle}</p>
          )}
          {(header as any).highlight && (
            <p className="mt-3 text-sm text-neutral-warm-500">{(header as any).highlight}</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {items?.map((service, index) => {
          const img = (service as any).image;
          const badges = (service as any).badges;
          const subItems = (service as any).items as string[] | undefined;
          const Icon = service.icon;

          return (
            <div key={index} className="group card card-hover flex flex-col overflow-hidden">
              {/* Image */}
              {img?.src && (
                <div className="relative h-48 overflow-hidden bg-neutral-warm-100">
                  <Image
                    src={img.src}
                    alt={img.alt || (service.title as string)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Badge overlay */}
                  {badges?.[0] && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 bg-gold-500 text-white text-xs font-bold rounded-lg shadow-md">
                        {badges[0].title}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                {/* Icon + Title */}
                <div className="flex items-start gap-3">
                  {Icon && (
                    <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-900" />
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold text-neutral-warm-900 leading-tight">
                    {service.title as string}
                  </h3>
                </div>

                {/* Description */}
                {service.description && (
                  <p className="text-sm text-neutral-warm-600 leading-relaxed">
                    {service.description as string}
                  </p>
                )}

                {/* Sub-items */}
                {subItems && subItems.length > 0 && (
                  <ul className="space-y-2">
                    {subItems.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-warm-700">
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <div className="mt-auto pt-4 flex gap-3">
                  <a
                    href={CHAT_URL}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-forest-500 hover:bg-forest-600 text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <ChatIcon />
                    Enquire Now
                  </a>
                  {service.callToAction?.href && (
                    <Link
                      href={service.callToAction.href}
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-neutral-warm-100 hover:bg-neutral-warm-200 text-neutral-warm-800 text-sm font-semibold rounded-xl transition-colors duration-200"
                    >
                      Details
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
