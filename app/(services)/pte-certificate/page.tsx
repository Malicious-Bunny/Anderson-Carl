import Link from 'next/link';
import { ScrollGallery } from '~/components/ui/image-auto-slider';

export const metadata = {
  title: 'PTE Certificate Service - Anderson Carl',
  description: 'Professional assistance with PTE certification processes. Expert consultation and document handling services.',
};

export default function PTECertificateService() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-blue-600 mb-4">
              <Link href="/" className="hover:text-blue-800">Home</Link> /
              <Link href="/#services" className="hover:text-blue-800"> Services</Link> /
              <span className="text-blue-900 font-semibold"> PTE Certificate</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              PTE Certificate Service
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Professional assistance with PTE (Pearson Test of English) certification.
              We guide you through the entire process from registration to results.
            </p>
            <div className="bg-primary-900 text-white rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold text-white mb-2">Service Fee: £620</p>
              <p className="text-purple-200 mb-2">Processing Time: 3 days</p>
              <p className="text-blue-200">Comprehensive PTE certification assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Image Slider */}
      <ScrollGallery
      images={[
        '/pte-1.jpg',
        '/pte-2.jpg'
      ]}

      />

      {/* Service Details */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">What We Offer</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📋</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Test Registration</h3>
                    <p className="text-gray-700">
                      Complete assistance with PTE Academic test registration, including
                      choosing test centers and booking your preferred test date.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🎓</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Preparation Guidance</h3>
                    <p className="text-gray-700">
                      Expert advice on PTE preparation strategies, practice materials,
                      and computer-based test techniques to achieve your target score.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📄</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Score Verification</h3>
                    <p className="text-gray-700">
                      Assistance with obtaining and verifying PTE Academic scores
                      for immigration, university, and professional requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Follow-up Support</h3>
                    <p className="text-gray-700">
                      Continuous support throughout your PTE journey, including
                      retake guidance and score improvement strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">PTE Test Features</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Computer-based testing</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Quick results (typically within 2 business days)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>AI-powered scoring system</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Accepted by UKVI for visa applications</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Integrated skills assessment</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Flexible test scheduling</span>
                </li>
              </ul>

              <div className="bg-primary-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-3">Service Fee: £620</h4>
                <p className="text-purple-200 mb-2"><strong>Processing Time: 3 days</strong></p>
                <p className="text-blue-200 mb-4">
                  Includes test registration assistance, preparation guidance,
                  and score verification support.
                </p>
                <p className="text-sm text-primary-300">
                  * PTE Academic test fees are additional and paid directly to Pearson
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center block text-lg py-3"
                >
                  Start Your PTE Journey
                </Link>
                <a
                  href="https://wa.me/44746951543?text=Hello Anderson Carl, I need assistance with PTE certification."
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
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our PTE Support Process</h2>
            <p className="text-xl text-gray-600">Simple steps to achieve your PTE certification</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Assessment & Planning</h3>
              <p className="text-gray-700">
                We assess your current English level and create a personalized PTE study plan.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Test Registration</h3>
              <p className="text-gray-700">
                We help you register for PTE Academic at your preferred test center and date.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Preparation Support</h3>
              <p className="text-gray-700">
                We provide preparation materials and computer-based test strategies.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Score Assistance</h3>
              <p className="text-gray-700">
                We help you understand your results and send scores to required institutions.
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
                <h3 className="text-lg font-semibold text-blue-900 mb-3">What PTE score do I need for UK immigration?</h3>
                <p className="text-gray-700">
                  For UK visa applications, you typically need an overall score of 59 with no individual
                  skill below 59. Specific requirements may vary by visa type and should be verified.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">How much does the PTE Academic test cost?</h3>
                <p className="text-gray-700">
                  PTE Academic test fees in the UK are approximately £195. The test is entirely
                  computer-based and results are available much faster than other tests.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">How long are PTE Academic scores valid?</h3>
                <p className="text-gray-700">
                  PTE Academic scores are valid for 2 years from the test date. Immigration
                  authorities and institutions typically accept scores within this period.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Can I retake PTE Academic if needed?</h3>
                <p className="text-gray-700">
                  Yes, you can retake PTE Academic as many times as needed. There&apos;s no limit,
                  but we recommend adequate preparation between attempts for score improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your PTE Journey?</h2>
            <p className="text-xl text-blue-200 mb-8">
              Get professional assistance with your PTE Academic certification today.
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
