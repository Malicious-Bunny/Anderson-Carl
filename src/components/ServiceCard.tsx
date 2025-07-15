import Link from 'next/link';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  icon?: string;
  image?: string;
  link: string;
  variant?: 'default' | 'compact';
}

export default function ServiceCard({
  id,
  title,
  description,
  price,
  icon,
  image,
  link,
  variant = 'default'
}: ServiceCardProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
        {icon && <span className="text-4xl mb-4 block">{icon}</span>}
        <h3 className="text-lg font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-2xl font-bold text-blue-900 mb-4">{price}</p>
        <Link href={link} className="btn-primary text-sm px-4 py-2 inline-block">
          Learn More
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 min-h-[400px] md:min-h-[450px] flex flex-col">
      <div className="relative h-3/4 overflow-hidden flex-grow">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : icon ? (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
            <span className="text-8xl">{icon}</span>
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-2xl font-bold mb-2">{price}</p>
        </div>
      </div>
      <div className="p-6 flex flex-col justify-between min-h-[25%]">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-blue-900 mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        </div>
        <Link
          href={link}
          className="btn-primary w-full text-center block text-sm py-2 mt-auto"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
