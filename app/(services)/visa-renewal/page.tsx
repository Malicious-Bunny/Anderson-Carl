import Link from 'next/link';

export const metadata = {
  title: 'UK Visa Renewal Service - Anderson Carl',
  description: 'Professional assistance with UK visa renewal applications. Expert consultation and document handling services.',
};

export default function VisaRenewalService() {
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
        <div className="absolute inset-0 bg-primary-900/80" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-primary-200 mb-4">
              <Link href="/" className="hover:text-white">Home</Link> /
              <Link href="/#services" className="hover:text-white"> Services</Link> /
              <span className="text-white"> Visa Renewal</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              UK Visa Renewal Service
            </h1>
            <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
              Professional support for UK visa renewal processes and extensions.
              We handle the complex requirements to ensure successful renewals.
            </p>
            <div className="bg-white/10 rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold text-white mb-2">Service Fee: £95</p>
              <p className="text-primary-200">Comprehensive visa renewal assistance</p>
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
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Renewal Guidance</h3>
                    <p className="text-gray-700">
                      Complete step-by-step guidance through the UK visa renewal process,
                      ensuring all requirements are met and deadlines observed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📄</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Document Review</h3>
                    <p className="text-gray-700">
                      Thorough review of all supporting documents to ensure they meet
                      UKVI requirements and prevent renewal delays or refusals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📅</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Timing Optimization</h3>
                    <p className="text-gray-700">
                      Expert advice on optimal timing for visa renewal applications
                      to avoid gaps in your legal status in the UK.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Follow-up Support</h3>
                    <p className="text-gray-700">
                      Continuous support throughout the renewal process, including
                      status tracking and communication with UKVI.
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
                  <span>Current passport and visa</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Completed renewal application form</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Financial evidence and bank statements</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Employment letter and payslips</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Accommodation evidence</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>English language certificate (if required)</span>
                </li>
              </ul>

              <div className="bg-primary-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-3">Service Fee: £95</h4>
                <p className="text-primary-200 mb-4">
                  Includes complete renewal assistance, document review,
                  and follow-up support until completion.
                </p>
                <p className="text-sm text-primary-300">
                  * UKVI visa renewal fees are additional and paid directly to the Home Office
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center block text-lg py-3"
                >
                  Start Your Renewal
                </Link>
                <a
                  href="https://wa.me/447469515438?text=Hello Anderson Carl, I need assistance with UK visa renewal."
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
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Visa Renewal Process</h2>
            <p className="text-xl text-gray-600">Simple steps to renew your UK visa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Eligibility Review</h3>
              <p className="text-gray-700">
                We review your current visa status and assess your eligibility for renewal.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Document Preparation</h3>
              <p className="text-gray-700">
                We help you gather and prepare all required documents for your specific visa type.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Application Submission</h3>
              <p className="text-gray-700">
                We complete and submit your renewal application to UKVI with all supporting documents.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Follow-up & Updates</h3>
              <p className="text-gray-700">
                We track your application progress and provide updates until your visa is renewed.
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
                <h3 className="text-lg font-semibold text-primary-900 mb-3">When should I apply for visa renewal?</h3>
                <p className="text-gray-700">
                  You should apply for visa renewal no earlier than 28 days before your current visa expires.
                  We recommend applying 6-8 weeks before expiry to allow adequate processing time.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">How long does visa renewal take?</h3>
                <p className="text-gray-700">
                  Standard visa renewal processing takes 8-12 weeks. Priority services can reduce this
                  to 5 working days, and Super Priority services to 1 working day.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Can I travel while my renewal is being processed?</h3>
                <p className="text-gray-700">
                  If you apply before your current visa expires, you have Section 3C leave which allows you
                  to stay in the UK. However, you cannot travel outside the UK during this period.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">What if my renewal application is refused?</h3>
                <p className="text-gray-700">
                  We provide comprehensive document review to minimize refusal risks. If a refusal occurs,
                  we can advise on appeals, administrative reviews, or reapplication options.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Renew Your UK Visa?</h2>
            <p className="text-xl text-primary-200 mb-8">
              Get professional assistance with your UK visa renewal today.
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
