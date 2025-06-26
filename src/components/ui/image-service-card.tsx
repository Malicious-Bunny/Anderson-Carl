import React from 'react';
import Image from 'next/image';

interface ImageServiceCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  price: string;
  className?: string;
}

export function ImageServiceCard({
  image,
  imageAlt,
  title,
  description,
  price,
  className = ""
}: ImageServiceCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden h-96 ${className}`}>
      {/* Image takes up 3/4 of the component (288px out of 384px total height) */}
      <div className="h-72 relative">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content takes up 1/4 of the component (96px) */}
      <div className="h-24 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-bold text-blue-900 mb-1 line-clamp-2">{title}</h3>
          <p className="text-xs text-gray-700 line-clamp-2">{description}</p>
        </div>
        <p className="text-sm font-semibold text-blue-900 mt-auto">{price}</p>
      </div>
    </div>
  );
}
