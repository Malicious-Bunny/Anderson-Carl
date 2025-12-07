import Link from 'next/link';
import { ScrollGallery } from '~/components/ui/image-auto-slider';
import { ImageServiceCard } from '~/components/ui/image-service-card';
import Reviews from '~/components/widgets/Reviews';

export const metadata = {
  title: 'UK Driver Licence Services - Anderson Carl',
  description: 'Professional assistance with UK driver licence applications, renewals, and replacements. Expert consultation and document handling services.',
};

export default function DriverLicenceService() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-primary-600 mb-4">
              <Link href="/" className="hover:text-primary-800">Home</Link> /
              <Link href="/#services" className="hover:text-primary-800"> Services</Link> /
              <span className="text-primary-900 font-semibold"> Driver Licence</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900">
              UK Driver Licence Services
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Professional assistance with UK driving licence applications, renewals, replacements, and address changes.
              We handle all DVLA processes from start to finish.
            </p>
            <div className="bg-primary-900 text-white rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold text-white mb-2">Service Fee: £65</p>
              <p className="text-primary-200">Complete driving licence assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Image Slider */}
      <ScrollGallery
      images={[
        '/driverlicense-1.jpg',
        '/driverlicense-2.jpg',
        '/driverlicense-3.jpg',
        '/driverlicense-4.jpg',
        '/driverlicense-5.jpg'
      ]}
      />

      {/* Service Details */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">What We Offer</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📝</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Provisional Licence Applications</h3>
                    <p className="text-gray-700">
                      Complete assistance with first-time provisional driving licence applications,
                      ensuring all forms are correctly completed and requirements met.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🔄</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Licence Renewals</h3>
                    <p className="text-gray-700">
                      Expert help with driving licence renewals, including special procedures
                      for drivers over 70 and medical licence renewals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🔍</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Lost Licence Replacement</h3>
                    <p className="text-gray-700">
                      Fast replacement services for lost, stolen, or damaged driving licences,
                      with expedited processing options available.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🏠</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Address Changes</h3>
                    <p className="text-gray-700">
                      Simple and quick address updates on your driving licence,
                      ensuring your records remain current with DVLA.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Required Documents</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Completed DVLA application form</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Passport-style photograph</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Proof of identity documents</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Proof of current address</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Current licence (for renewals/changes)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Medical reports (if applicable)</span>
                </li>
              </ul>

              <div className="bg-primary-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-3">Service Fee: £65</h4>
                <p className="text-primary-200 mb-4">
                  Includes complete application assistance, document review,
                  and follow-up support until completion.
                </p>
                <p className="text-sm text-primary-300">
                  * DVLA fees are additional and paid directly to DVLA
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center block text-lg py-3"
                >
                  Start Your Application
                </Link>
                <a
                  href="https://wa.me/44746951543?text=Hello Anderson Carl, I need assistance with UK driving licence services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center block text-lg py-3"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Driver Licence Services</h2>
            <p className="text-xl text-gray-600">Complete assistance for all your driving licence needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ImageServiceCard
              image="/provisional-license.jpg"
              imageAlt="UK Provisional Licence Service"
              title="UK PROVISIONAL LICENCE SERVICE"
              description="Complete assistance with UK provisional driving licence applications and processing"
              price="From £65"
            />
            <ImageServiceCard
              image="/driverlicense-2.jpg"
              imageAlt="UK Theory Test Service"
              title="UK THEORY TEST SERVICE"
              description="Expert assistance with UK theory test preparation and certification"
              price="From £65"
            />
            <ImageServiceCard
              image="/convert-international-license.jpg"
              imageAlt="UK Practical Test Service"
              title="UK PRACTICAL TEST SERVICE"
              description="Submit your documents and we complete the tests"
              price="From £65"
            />
            <ImageServiceCard
              image="/full-license.jpg"
              imageAlt="UK Full Licence Service"
              title="UK FULL LICENCE SERVICE"
              description="Complete UK full driving license no test"
              price="From £65"
            />
            <ImageServiceCard
              image="/provi-license.jpg"
              imageAlt="International Licence Conversion Service"
              title="CONVERT INTERNATIONAL LICENCE TO UK FULL LICENCE"
              description="Convert your international licence to UK full licence no test"
              price="From £65"
              className="md:col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Driver Licence Process</h2>
            <p className="text-xl text-gray-600">Simple steps to get your driving licence sorted</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Initial Assessment</h3>
              <p className="text-gray-700">
                We assess your specific requirements and review what type of licence service you need.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Document Collection</h3>
              <p className="text-gray-700">
                We help you gather all required documents and ensure they meet DVLA standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Application Processing</h3>
              <p className="text-gray-700">
                We complete and submit your application to DVLA with all supporting documentation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Delivery Support</h3>
              <p className="text-gray-700">
                We track progress and provide updates until your licence is successfully delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">How long does a driving licence application take?</h3>
                <p className="text-gray-700">
                  Standard driving licence applications typically take 2-3 weeks to process.
                  Urgent applications can be processed in 2-3 working days for an additional fee.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">What are the current DVLA fees?</h3>
                <p className="text-gray-700">
                  Provisional licence: £34 online, £43 by post. Full licence renewal: £14 online, £17 by post.
                  These fees are paid directly to DVLA and are separate from our service fee.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Can you help with medical licence renewals?</h3>
                <p className="text-gray-700">
                  Yes, we assist with medical licence renewals for drivers with medical conditions,
                  including guidance on required medical reports and forms.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Do you handle licence applications for all ages?</h3>
                <p className="text-gray-700">
                  Yes, we assist with licence applications for all eligible ages, including special procedures
                  for drivers over 70 and young drivers applying for their first licence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews
        serviceName="driver-licence"
        header={{
          title: "Customer Reviews",
          subtitle: "See what our clients say about our driving licence services"
        }}
        hasBackground={false}
      />

      {/* Contact CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Your Driving Licence Sorted?</h2>
            <p className="text-xl text-primary-200 mb-8">
              Get professional assistance with your UK driving licence needs today.
              Contact Anderson Carl for expert consultation and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Get Started Now
              </Link>
              <a
                href="mailto:anderson.carl@email.com"
                className="btn-secondary text-lg px-8 py-4"
              >
                Email Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
