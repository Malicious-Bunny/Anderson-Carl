import type React from 'react';

type ScrollGalleryProps = {
  images: string[];
};

export const ScrollGallery: React.FC<ScrollGalleryProps> = ({ images }) => {
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 60s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>

      <div className="w-full bg-gradient-to-b from-gray-50 via-gray-100 to-white relative overflow-hidden py-8">
        <div className="relative w-full flex items-center justify-center">
          <div className="scroll-container w-full">
            <div className="infinite-scroll flex gap-8 w-max">
              {duplicatedImages.map((image, index) => (
                <div
                  key={`image-${index}-${image.slice(-10)}`}
                  className="image-item flex-shrink-0 w-96 h-[30rem] md:w-[30rem] md:h-[36rem] lg:w-[40rem] lg:h-[40rem] xl:w-[40rem] xl:h-[48rem] rounded-xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
