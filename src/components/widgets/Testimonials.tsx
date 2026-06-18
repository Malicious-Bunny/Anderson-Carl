import Image from 'next/image';
import { TestimonialsProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const StarIcon = () => (
  <svg className="w-4 h-4 text-gold-400 fill-gold-400" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-10 h-10 text-gold-500/20" fill="currentColor" viewBox="0 0 32 32">
    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
  </svg>
);

const Testimonials = ({ header, testimonials, id, hasBackground = false }: TestimonialsProps) => (
  <WidgetWrapper id={id || ''} hasBackground={hasBackground} containerClass="section container-custom">
    {header && (
      <div className="text-center max-w-2xl mx-auto mb-14">
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
      </div>
    )}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials?.map(({ name, job, testimonial, image }, index) => (
        <div key={index} className="card p-8 flex flex-col gap-5 relative">
          {/* Quote icon */}
          <div className="absolute top-6 right-6">
            <QuoteIcon />
          </div>

          {/* Stars */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>

          {/* Testimonial text */}
          <p className="text-neutral-warm-700 leading-relaxed italic flex-1">
            &ldquo;{testimonial}&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pt-4 border-t border-neutral-warm-100">
            {image?.src && (
              <Image
                src={image.src}
                alt={name}
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover flex-shrink-0"
              />
            )}
            <div>
              <p className="font-bold text-neutral-warm-900 text-sm">{name}</p>
              <p className="text-xs text-neutral-warm-500">{job}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </WidgetWrapper>
);

export default Testimonials;
