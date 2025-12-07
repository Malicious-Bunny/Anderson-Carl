import Link from 'next/link';

export const metadata = {
  title: 'UK Resident Permit Service - Anderson Carl',
  description: 'Professional assistance with UK residence permit applications. Expert consultation and document handling services.',
};

export default function ResidentPermitService() {
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
            <nav className="text-blue-200 mb-4">
              <Link href="/" className="hover:text-white">Home</Link> /
              <Link href="/#services" className="hover:text-white"> Services</Link> /
              <span className="text-white"> Resident Permit</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              UK Resident Permit Service
            </h1>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Professional assistance with UK residence permit applications and documentation.
              We handle the complex process from start to finish.
            </p>
            <div className="bg-white/10 rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold text-white mb-2">Service Fee: £85</p>
              <p className="text-blue-200">Comprehensive residence permit assistance</p>
            </div>
          </div>
        </div>
      </section>

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
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Application Guidance</h3>
                    <p className="text-gray-700">
                      Complete step-by-step guidance through the UK residence permit application process,
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
                      Home Office requirements and prevent application delays.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🏡</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Residency Proof</h3>
                    <p className="text-gray-700">
                      Expert help with compiling evidence of residence, including utilities,
                      council tax, and other supporting documentation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Follow-up Support</h3>
                    <p className="text-gray-700">
                      Continuous support throughout the application process, including
                      status tracking and communication with the Home Office.
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
                  <span>Completed application form</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Passport and current visa</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Proof of residence (5 years)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Employment history and payslips</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Council tax and utility bills</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Life in the UK test certificate</span>
                </li>
              </ul>

              <div className="bg-primary-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-3">Service Fee: £85</h4>
                <p className="text-blue-200 mb-4">
                  Includes complete application assistance, document review,
                  and follow-up support until completion.
                </p>
                <p className="text-sm text-primary-300">
                  * Home Office application fees are additional and paid directly to UKVI
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
                  href="https://wa.me/44746951543?text=Hello Anderson Carl, I need assistance with UK residence permit application."
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
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Residence Permit Process</h2>
            <p className="text-xl text-gray-600">Simple steps to get your UK residence permit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Eligibility Assessment</h3>
              <p className="text-gray-700">
                We assess your eligibility for residence permit and review your existing documentation.
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
                We complete and submit your application to UKVI with all supporting documents.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Follow-up & Delivery</h3>
              <p className="text-gray-700">
                We track your application progress and provide updates until your permit is approved.
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
                <h3 className="text-lg font-semibold text-blue-900 mb-3">How long does the residence permit process take?</h3>
                <p className="text-gray-700">
                  UK residence permit applications typically take 4-6 months to process. Premium services
                  can reduce this timeline to 2-6 weeks depending on the application type.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">What are the current residence permit fees?</h3>
                <p className="text-gray-700">
                  Indefinite Leave to Remain: £2,885. Settlement as partner: £1,048. These fees are paid
                  directly to UKVI and are separate from our service fee.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Do I need to take the Life in the UK test?</h3>
                <p className="text-gray-700">
                  Yes, most residence permit applications require passing the Life in the UK test and
                  meeting English language requirements. We can guide you through this process.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">What if my application is refused?</h3>
                <p className="text-gray-700">
                  We provide comprehensive document review to minimize refusal risks. If issues arise,
                  we offer continued support to address them and can assist with appeals if necessary.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Residence Permit Application?</h2>
            <p className="text-xl text-blue-200 mb-8">
              Get professional assistance with your UK residence permit application today.
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
