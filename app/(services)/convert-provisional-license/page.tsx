import Link from 'next/link';
import { ScrollGallery } from '~/components/ui/image-auto-slider';
import { ImageServiceCard } from '~/components/ui/image-service-card';

export const metadata = {
  title: 'Convert Provisional License to Full UK License - Anderson Carl',
  description: 'Convert your provisional driving license to a full UK license. Professional assistance with DVLA applications and driving test arrangements.',
};

export default function ConvertProvisionalLicenseService() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-primary-600 mb-4">
              <Link href="/" className="hover:text-primary-800">Home</Link> /
              <Link href="/#services" className="hover:text-primary-800"> Services</Link> /
              <span className="text-primary-900 font-semibold"> Convert Provisional License</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900">
              Convert Provisional to Full UK License
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Convert your provisional driving license to a full UK license with professional assistance.
              We handle all DVLA paperwork and provide guidance through the entire process.
            </p>
            <div className="bg-primary-900 text-white rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold text-white mb-2">Service Fee: £75</p>
              <p className="text-primary-200">Complete conversion assistance and guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Image Slider */}
      <ScrollGallery
      images={[
        '/provisional-license.jpg',
        '/provi-license.jpg',
        '/full-license.jpg',
        '/driverlicense-3.jpg',
        '/driverlicense-5.jpg'
      ]}
      />

      {/* Service Details */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Service Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-900">
                Professional License Conversion
              </h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">Our Service Includes</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Complete DVLA application processing</li>
                    <li>• Driving test booking assistance</li>
                    <li>• Theory test arrangement (if required)</li>
                    <li>• Document verification and submission</li>
                    <li>• Progress tracking and updates</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">License Categories</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Category B (Cars and light vehicles)</li>
                    <li>• Category A (Motorcycles)</li>
                    <li>• Category C (Large vehicles/Trucks)</li>
                    <li>• Category D (Buses and coaches)</li>
                    <li>• Additional entitlements available</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-amber-800">Processing Time</h3>
                  <p className="text-amber-700">
                    Application processing: 1-2 weeks after test completion.
                    We can arrange expedited test dates and fast-track the entire process.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">Test Assistance</h3>
                  <ul className="text-purple-700 space-y-2">
                    <li>• Theory test booking and preparation</li>
                    <li>• Practical test scheduling</li>
                    <li>• Test center recommendations</li>
                    <li>• Instructor recommendations available</li>
                  </ul>
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
                    <span>Valid provisional driving license</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <span>Valid passport or national ID</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <span>Proof of UK residence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <span>Theory test pass certificate (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    <span>Medical declaration (if required)</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-3 text-primary-900">Service Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ Expert DVLA knowledge</li>
                    <li>✓ Fast test booking</li>
                    <li>✓ Complete paperwork handling</li>
                    <li>✓ Test preparation guidance</li>
                    <li>✓ 24/7 customer support</li>
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-3 text-primary-900">Next Steps</h4>
                  <ol className="text-sm text-gray-600 space-y-2">
                    <li>1. Contact us for consultation</li>
                    <li>2. Document verification</li>
                    <li>3. Test arrangement</li>
                    <li>4. Application processing</li>
                    <li>5. Full license delivery</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-900">Simple 5-Step Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We make converting your provisional license to a full license as simple as possible
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-primary-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Consultation</h3>
              <p className="text-sm text-gray-600">Free consultation to assess your requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Document Check</h3>
              <p className="text-sm text-gray-600">Verification of your provisional license and documents</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Test Booking</h3>
              <p className="text-sm text-gray-600">Theory and practical test arrangement</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Application</h3>
              <p className="text-sm text-gray-600">DVLA application processing and submission</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
              <h3 className="font-semibold mb-2">Full License</h3>
              <p className="text-sm text-gray-600">Receive your full UK driving license</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Your Full License?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Convert your provisional license to a full UK license with professional assistance.
            Contact us today for a free consultation and let us guide you through the entire process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <a
              href="https://wa.me/447469515438"
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
