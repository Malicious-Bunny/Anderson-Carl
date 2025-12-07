import Link from 'next/link';
import { ScrollGallery } from '~/components/ui/image-auto-slider';
import { ImageServiceCard } from '~/components/ui/image-service-card';

export const metadata = {
  title: 'Convert International License to UK License - No Test Required - Anderson Carl',
  description: 'Convert your international driving license to a UK license without taking a test. Professional assistance with DVLA applications and document handling.',
};

export default function ConvertInternationalLicenseService() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-primary-600 mb-4">
              <Link href="/" className="hover:text-primary-800">Home</Link> /
              <Link href="/#services" className="hover:text-primary-800"> Services</Link> /
              <span className="text-primary-900 font-semibold"> Convert International License</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900">
              Convert International License to UK License
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Convert your international driving license to a full UK license without taking a driving test.
              We handle all DVLA paperwork and ensure your application meets UK requirements.
            </p>
            <div className="bg-primary-900 text-white rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold text-white mb-2">Service Fee: £85</p>
              <p className="text-primary-200">No test required - Complete conversion service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Image Slider */}
      <ScrollGallery
      images={[
        '/convert-international-license.jpg',
        '/driverlicense-1.jpg',
        '/driverlicense-2.jpg',
        '/full-license.jpg',
        '/driverlicense-4.jpg'
      ]}
      />

      {/* Service Details */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Service Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-900">
                No Test Required Conversion
              </h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">Eligible Countries</h3>
                  <p className="text-green-700">
                    Valid for licenses from EU countries, Australia, New Zealand, Canada, USA, Japan,
                    South Korea, and other designated countries. Contact us to verify your eligibility.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">What&apos;s Included</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Complete DVLA application processing</li>
                    <li>• Document verification and translation services</li>
                    <li>• Medical form completion assistance</li>
                    <li>• Progress tracking and updates</li>
                    <li>• Full customer support throughout the process</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-amber-800">Processing Time</h3>
                  <p className="text-amber-700">
                    Standard processing: 2-3 weeks. Express service available for urgent applications.
                    We&apos;ll keep you updated every step of the way.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Requirements */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary-900">Required Documents</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <span>Original international driving license (valid for at least 12 months)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <span>Valid passport or national ID</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <span>Proof of UK residence (utility bill, bank statement)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <span>Recent passport-style photograph</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    <span>Medical questionnaire (if required)</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-3 text-primary-900">Why Choose Our Service?</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ 99% success rate</li>
                    <li>✓ Expert DVLA knowledge</li>
                    <li>✓ Fast processing times</li>
                    <li>✓ 24/7 customer support</li>
                    <li>✓ Money-back guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Convert Your License?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Get your UK driving license without taking a test. Contact us today for a free consultation
            and let us handle the entire conversion process for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <a
              href="https://wa.me/44746951543"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
