import Link from 'next/link';
import { ScrollGallery } from '~/components/ui/image-auto-slider';
import { ImageServiceCard } from '~/components/ui/image-service-card';

export const metadata = {
  title: 'Life in the UK Test Pass - No Exam Required - Anderson Carl',
  description: 'Pass the Life in the UK test without taking the exam. Professional assistance with UK citizenship and settlement applications.',
};

export default function LifeInUKTestService() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-primary-600 mb-4">
              <Link href="/" className="hover:text-primary-800">Home</Link> /
              <Link href="/#services" className="hover:text-primary-800"> Services</Link> /
              <span className="text-primary-900 font-semibold"> Life in the UK Test</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900">
              Life in the UK Test Pass
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Pass the Life in the UK test without taking the exam. Essential for UK citizenship,
              indefinite leave to remain, and settlement applications.
            </p>
            <div className="bg-primary-900 text-white rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold text-white mb-2">Service Fee: £95</p>
              <p className="text-primary-200">No exam required - Guaranteed pass certificate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Image Slider */}
      <ScrollGallery
      images={[
        '/headshot.jpg',
        '/passport-1.jpg',
        '/passport-2.jpg',
        '/passport-3.jpg',
        '/driverlicense-1.jpg'
      ]}
      />

      {/* Service Details */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Service Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-900">
                No Exam Required Pass
              </h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">What&apos;s Included</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Official Life in the UK test pass certificate</li>
                    <li>• Registered in Home Office database</li>
                    <li>• Verifiable test reference number</li>
                    <li>• Valid for all UK immigration applications</li>
                    <li>• Accepted by Home Office and UKVI</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">Required For</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• UK citizenship applications</li>
                    <li>• Indefinite Leave to Remain (ILR)</li>
                    <li>• Settlement applications</li>
                    <li>• Spouse visa extensions</li>
                    <li>• Long-term residency applications</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-amber-800">Processing Time</h3>
                  <p className="text-amber-700">
                    Standard processing: 3-5 working days. Express service available for urgent applications.
                    Certificate is immediately verifiable in the Home Office system.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-purple-800">Test Details</h3>
                  <ul className="text-purple-700 space-y-2">
                    <li>• Based on official Life in the UK handbook</li>
                    <li>• Covers British history, culture, and traditions</li>
                    <li>• Government and law knowledge</li>
                    <li>• Pass mark automatically achieved</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Requirements */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary-900">Required Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <span>Full name (as on passport)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <span>Date of birth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <span>Passport number</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <span>Current UK address</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    <span>Contact phone number</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-3 text-primary-900">Certificate Features</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ Home Office registered</li>
                    <li>✓ Verifiable reference number</li>
                    <li>✓ Official test center records</li>
                    <li>✓ UKVI accepted</li>
                    <li>✓ Immediate availability</li>
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-3 text-primary-900">Why This Test Matters</h4>
                  <p className="text-sm text-gray-600">
                    The Life in the UK test is a mandatory requirement for most UK immigration
                    applications. It demonstrates your knowledge of British history, culture,
                    and traditions, and is essential for citizenship and settlement.
                  </p>
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
            Ready to Pass Your Test?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Don&apos;t let the Life in the UK test delay your citizenship or settlement application.
            Contact us today for a confidential consultation about your requirements.
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
