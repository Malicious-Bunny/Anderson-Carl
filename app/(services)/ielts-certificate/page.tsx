import Link from 'next/link';
import Reviews from '~/components/widgets/Reviews';

export const metadata = {
  title: 'IELTS Certificate Service - Anderson Carl',
  description: 'Professional assistance with IELTS certification processes. Expert consultation and document handling services.',
};

export default function IELTSCertificateService() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 overflow-hidden"
        style={{
          backgroundImage: 'url(https://ugc.same-assets.com/65sRigiYWGYbjTKWWvPsVQh9Yk8giTxw.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-primary-200 mb-4">
              <Link href="/" className="hover:text-white">Home</Link> /
              <Link href="/#services" className="hover:text-white"> Services</Link> /
              <span className="text-white"> IELTS Certificate</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              IELTS Certificate Service
            </h1>
            <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
              Professional support with IELTS certification processes and English language requirements.
              We guide you through preparation and application procedures.
            </p>
            <div className="bg-white/10 rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold text-white mb-2">Service Fee: £600</p>
              <p className="text-green-200 mb-2">Processing Time: 3 days</p>
              <p className="text-primary-200">Comprehensive IELTS certification assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">What We Offer</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📋</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Test Registration</h3>
                    <p className="text-gray-700">
                      Complete assistance with IELTS test registration, including choosing
                      the right test type and booking your preferred test date and location.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📚</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Preparation Guidance</h3>
                    <p className="text-gray-700">
                      Expert advice on IELTS preparation strategies, study materials,
                      and practice tests to help you achieve your target score.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📄</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Document Support</h3>
                    <p className="text-gray-700">
                      Assistance with obtaining official IELTS certificates and
                      ensuring they meet immigration and educational requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Follow-up Support</h3>
                    <p className="text-gray-700">
                      Continuous support throughout your IELTS journey, including
                      retake guidance and score improvement strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">IELTS Test Types</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>IELTS Academic (for university applications)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>IELTS General Training (for immigration)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>IELTS Life Skills (for UK visa requirements)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>IELTS for UKVI (UK Visa and Immigration)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Online IELTS (computer-based testing)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Paper-based IELTS testing</span>
                </li>
              </ul>

              <div className="bg-blue-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-3">Service Fee: £600</h4>
                <p className="text-green-200 mb-2"><strong>Processing Time: 3 days</strong></p>
                <p className="text-primary-200 mb-4">
                  Includes test registration assistance, preparation guidance,
                  and certificate support services.
                </p>
                <p className="text-sm text-primary-300">
                  * IELTS test fees are additional and paid directly to the test center
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center block text-lg py-3"
                >
                  Start Your IELTS Journey
                </Link>
                <a
                  href="https://wa.me/447469515438?text=Hello Anderson Carl, I need assistance with IELTS certification."
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
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our IELTS Support Process</h2>
            <p className="text-xl text-gray-600">Simple steps to achieve your IELTS certification</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Assessment & Planning</h3>
              <p className="text-gray-700">
                We assess your current English level and create a personalized study plan.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Test Registration</h3>
              <p className="text-gray-700">
                We help you register for the appropriate IELTS test at your preferred location.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Preparation Support</h3>
              <p className="text-gray-700">
                We provide preparation materials and strategies to help you achieve your target score.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Certificate Assistance</h3>
              <p className="text-gray-700">
                We help you obtain and verify your IELTS certificate for your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">What IELTS score do I need for UK immigration?</h3>
                <p className="text-gray-700">
                  For UK visa applications, you typically need an overall score of 6.0 with no individual
                  band below 5.5. Specific requirements vary by visa type and should be verified.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">How much does the IELTS test cost?</h3>
                <p className="text-gray-700">
                  IELTS test fees in the UK are approximately £195-£215 depending on the test center
                  and test type. IELTS for UKVI typically costs more than standard IELTS.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">How long is an IELTS certificate valid?</h3>
                <p className="text-gray-700">
                  IELTS results are valid for 2 years from the test date. Some institutions may
                  accept older certificates, but immigration authorities typically require recent scores.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Can I retake IELTS if I don&apos;t get the required score?</h3>
                <p className="text-gray-700">
                  Yes, you can retake IELTS as many times as needed. We recommend waiting to identify
                  areas for improvement and adequate preparation time between attempts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews
        serviceName="ielts-certificate"
        header={{
          title: "Customer Reviews",
          subtitle: "See what our clients say about our IELTS certification services"
        }}
        hasBackground={false}
      />

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your IELTS Journey?</h2>
            <p className="text-xl text-primary-200 mb-8">
              Get professional assistance with your IELTS certification today.
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
