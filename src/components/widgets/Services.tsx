import Image from 'next/image';
import Link from 'next/link';
import { FeaturesProps } from '~/shared/types';
import { WA_URL } from '~/lib/constants';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer"
                  >
                    <WhatsAppIcon />
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
