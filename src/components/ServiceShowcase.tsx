import { ServiceFeature } from "@/components/ui/service-feature";
import { mainServices } from "@/lib/services";

function ServiceShowcase() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">OUR DOCUMENT SERVICES</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            COMPREHENSIVE UK DOCUMENT ASSISTANCE
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Choose Anderson Carl for hassle-free UK document assistance – we manage your applications
            and follow-ups from start to finish with professional expertise.
          </p>
        </div>

        <div className="space-y-8">
          {mainServices.map((service, index) => (
            <ServiceFeature
              key={service.id}
              service={service}
              imageOnRight={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceShowcase;
