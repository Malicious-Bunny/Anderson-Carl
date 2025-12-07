import Link from 'next/link';
import { ScrollGallery } from '~/components/ui/image-auto-slider';
import Reviews from '~/components/widgets/Reviews';

export const metadata = {
  title: 'UK Passport Application Service - Anderson Carl',
  description: 'Professional assistance with UK passport applications and renewals. Expert consultation and document handling services.',
};

export default function PassportService() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-blue-600 mb-4">
              <Link href="/" className="hover:text-primary-800">Home</Link> /
              <Link href="/#services" className="hover:text-primary-800"> Services</Link> /
              <span className="text-blue-900 font-semibold"> Passport Application</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              UK Passport Application Service
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Fast, comprehensive assistance - streamline your UK passport application with expert guidance from start to finish. We handle the paperwork so you don&apos;t have to.
            </p>
            <div className="bg-primary-900 text-white rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold text-white mb-2">Service Fee: From £500</p>
              <p className="text-blue-200 mb-2">Processing Time: 4 days</p>
              <p className="text-blue-200">Complete passport application assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Image Slider */}
      <ScrollGallery
      images={
        [
          '/passport-1.jpg',
          '/passport-2.jpg',
          '/passport-3.jpg'
        ]
      }

      />

      {/* Service Details */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">What We Offer</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📋</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Application Guidance</h3>
                    <p className="text-gray-700">
                      Complete step-by-step guidance through the UK passport application process,
                      ensuring all forms are correctly filled and requirements met.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📄</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Document Review</h3>
                    <p className="text-gray-700">
                      Thorough review of all supporting documents to ensure they meet
                      HM Passport Office requirements and prevent application delays.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🔄</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Renewal Assistance</h3>
                    <p className="text-gray-700">
                      Expert help with passport renewals, including expedited processing
                      options and guidance on renewal timelines.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Follow-up Support</h3>
                    <p className="text-gray-700">
                      Continuous support throughout the application process, including
                      status tracking and communication with HM Passport Office.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Required Documents</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Completed passport application form</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Two identical passport photos</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Current passport (for renewals)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Proof of identity documents</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Birth certificate or naturalization documents</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Supporting documents for name changes</span>
                </li>
              </ul>

              <div className="bg-primary-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-3">Service Fees:</h4>
                <div className="mb-3">
                  <p className="text-blue-200">• New Application: £1,500</p>
                  <p className="text-blue-200">• Renewal Service: £500</p>
                  <p className="text-blue-200">• Lost/Stolen Replacement: £1,500</p>
                  <p className="text-blue-200 mt-2"><strong>Processing Time: 4 days</strong></p>
                </div>
                <p className="text-blue-200 mb-4">
                  Includes complete application assistance, document review,
                  and follow-up support until completion.
                </p>
                <p className="text-sm text-primary-300">
                  * UK Government passport fees are additional and paid directly to HM Passport Office
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
                  href="https://wa.me/447469515438?text=Hello Anderson Carl, I need assistance with UK passport application."
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Passport Application Process</h2>
            <p className="text-xl text-gray-600">Simple steps to get your UK passport</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Initial Consultation</h3>
              <p className="text-gray-700">
                We discuss your passport requirements and review your eligibility and documentation needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Document Preparation</h3>
              <p className="text-gray-700">
                We help you gather and prepare all required documents, ensuring they meet official standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Application Submission</h3>
              <p className="text-gray-700">
                We complete and submit your application to HM Passport Office with all supporting documents.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Follow-up & Delivery</h3>
              <p className="text-gray-700">
                We track your application progress and provide updates until your passport is delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">How long does the passport application process take?</h3>
                <p className="text-gray-700">
                  Standard UK passport applications typically take 3-6 weeks to process. Fast Track services can
                  reduce this to 1 week, and Premium services to 4 hours (appointment required).
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">What are the current UK passport fees?</h3>
                <p className="text-gray-700">
                  Adult passport (32 pages): £88.50 online, £100 by post. Adult passport (48 pages): £96.50 online,
                  £108 by post. These fees are paid directly to HM Passport Office and are separate from our service fee.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Can you help with urgent passport applications?</h3>
                <p className="text-gray-700">
                  Yes, we can assist with Fast Track and Premium passport services for urgent travel needs.
                  Contact us to discuss availability and additional requirements.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">What if my application is rejected?</h3>
                <p className="text-gray-700">
                  We provide comprehensive document review to minimize rejection risks. If issues arise,
                  we offer continued support to resolve them and resubmit your application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews
        serviceName="passport"
        header={{
          title: "Customer Reviews",
          subtitle: "See what our clients say about our passport services"
        }}
        hasBackground={false}
      />

      {/* Contact CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Passport Application?</h2>
            <p className="text-xl text-blue-200 mb-8">
              Get professional assistance with your UK passport application today.
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
