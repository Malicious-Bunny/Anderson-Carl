import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { MainService } from "@/lib/services";

interface ServiceFeatureProps {
  service: MainService;
  imageOnRight?: boolean;
}

function ServiceFeature({ service, imageOnRight = false }: ServiceFeatureProps) {
  return (
    <div className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid bg-white rounded-xl shadow-lg p-6 md:p-8 grid-cols-1 gap-8 md:gap-12 items-center lg:grid-cols-2">
          {/* Content Section */}
          <div className={`flex gap-6 md:gap-10 flex-col ${imageOnRight ? 'lg:order-1' : 'lg:order-1'}`}>
            <div className="flex gap-4 md:gap-6 flex-col">
              <div>
                <Badge variant="outline" className="mb-2">{service.badge}</Badge>
              </div>
              <div className="flex gap-3 md:gap-4 flex-col">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  {service.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
                <span className="text-xl md:text-2xl font-bold text-blue-900">{service.price}</span>
                <Link
                  href={service.link}
                  className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Sub-services */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 md:gap-6 mt-4 md:mt-6">
              {service.subServices.map((subService, index) => (
                <div key={subService.id} className="flex flex-row gap-4 md:gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-green-600 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-sm md:text-base">{subService.title}</p>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {subService.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className={`${imageOnRight ? 'lg:order-2' : 'lg:order-2'} mt-6 lg:mt-0`}>
            <div className="bg-muted rounded-xl aspect-square overflow-hidden shadow-md">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ServiceFeature };
