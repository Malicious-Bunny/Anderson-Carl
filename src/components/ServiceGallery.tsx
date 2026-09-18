import type React from 'react';

// The site's existing infinite-scroll gallery, restyled for the editorial
// palette: paper ground, square corners, hairline frame instead of a drop
// shadow. Kept deliberately — it is the one piece of the old site carried over.
type ServiceGalleryProps = {
  images: string[];
  label?: string;
};

export const ServiceGallery: React.FC<ServiceGalleryProps> = ({ images, label }) => {
  if (!images || images.length === 0) return null;

  // Duplicated so the marquee can loop seamlessly at -50%.
  const track = [...images, ...images];

  return (
    <section className="border-y border-ink-200 bg-ink-25 py-12 md:py-16">
      {label && (
        <div className="container-page mb-8">
          <p className="eyebrow">{label}</p>
        </div>
      )}

      <style>{`
        @keyframes service-gallery-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .service-gallery-track {
          animation: service-gallery-scroll 60s linear infinite;
        }
        .service-gallery-mask {
          mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .service-gallery-item {
          transition: filter 0.3s cubic-bezier(0.2, 0, 0, 1);
        }
        .service-gallery-item:hover {
          filter: brightness(1.04);
        }
        @media (prefers-reduced-motion: reduce) {
          .service-gallery-track { animation: none; }
        }
      `}</style>

      <div className="service-gallery-mask w-full overflow-hidden">
        <div className="service-gallery-track flex w-max gap-px bg-ink-200">
          {track.map((image, index) => (
            <div
              key={`${index}-${image}`}
              className="service-gallery-item h-64 w-80 flex-shrink-0 overflow-hidden bg-paper md:h-80 md:w-[26rem] lg:h-96 lg:w-[32rem]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={`${label || 'Service'} image ${(index % images.length) + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGallery;
