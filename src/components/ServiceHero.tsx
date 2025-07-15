import Link from 'next/link';
import { ImageSlideshow } from '@/components/ui/image-slideshow';

interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

interface ServiceHeroProps {
  title: string;
  description: string;
  breadcrumbService: string;
  images: string[];
  price: string;
  features: ServiceFeature[];
  whatsappMessage: string;
  floatingIcon: string;
  floatingTitle: string;
  floatingDescription: string;
}

function ServiceHero({
  title,
  description,
  breadcrumbService,
  images,
  price,
  features,
  whatsappMessage,
  floatingIcon,
  floatingTitle,
  floatingDescription
}: ServiceHeroProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <nav className="text-blue-600 mb-4 text-sm">
                <Link href="/" className="hover:text-blue-800">Home</Link> /
                <Link href="/#services" className="hover:text-blue-800"> Services</Link> /
                <span className="text-gray-600"> {breadcrumbService}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                {description}
              </p>
            </div>

            {/* Service Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={`feature-${index}-${feature.icon}`} className="flex items-center space-x-4">
                  <div className={`${feature.bgColor} p-3 rounded-full`}>
                    <span className={`${feature.iconColor} text-xl`}>{feature.icon}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{feature.title}</div>
                    <div className="text-gray-600 text-sm">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing and Features */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-blue-900">{price}</div>
                  <div className="text-blue-700">Service Fee</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-blue-600 font-medium">Complete service includes:</div>
                  <div className="text-xs text-blue-600">Application assistance + Follow-up</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
              >
                Start Your Application
              </Link>
              <a
                href={`https://wa.me/447000000000?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-900 hover:text-blue-900 transition-colors text-center"
              >
                WhatsApp Consultation
              </a>
            </div>
          </div>

          {/* Right Slideshow Section */}
          <div className="relative">
            <ImageSlideshow
              images={images}
              alt={title}
              autoSlide={true}
              slideDuration={5000}
              className="rounded-xl shadow-xl"
            />
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xl">{floatingIcon}</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-sm font-semibold text-gray-900">{floatingTitle}</div>
              <div className="text-xs text-gray-600">{floatingDescription}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceHero;
