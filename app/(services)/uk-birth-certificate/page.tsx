import Link from 'next/link';

export const metadata = {
  title: 'UK Birth Certificate Service - Anderson Carl',
  description: 'Professional assistance with UK birth certificate applications. Expert consultation and document handling services.',
};

export default function UKBirthCertificateService() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 overflow-hidden"
        style={{
          backgroundImage: 'url(https://ugc.same-assets.com/uwjA882xxDNA8JizXVDa__U4qHUovJh9.jpeg)',
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
              <span className="text-white"> UK Birth Certificate</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              UK Birth Certificate Service
            </h1>
            <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
              Professional assistance with obtaining official UK birth certificates.
              We help with applications, replacements, and document verification.
            </p>
            <div className="bg-white/10 rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold text-white mb-2">Service Fee: £550</p>
              <p className="text-primary-200 mb-2">Processing Time: 2 days</p>
              <p className="text-primary-200">Comprehensive birth certificate assistance</p>
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
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Application Guidance</h3>
                    <p className="text-gray-700">
                      Complete assistance with UK birth certificate applications,
                      ensuring all forms are correctly completed and requirements met.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🔍</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Record Search</h3>
                    <p className="text-gray-700">
                      Expert assistance with locating birth records in the General Register Office
                      and other official UK registration systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📄</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Document Verification</h3>
                    <p className="text-gray-700">
                      Verification of existing birth certificates and assistance with
                      obtaining certified copies for official purposes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Follow-up Support</h3>
                    <p className="text-gray-700">
                      Continuous support throughout the application process, including
                      status tracking and communication with the General Register Office.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Required Information</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Full name at birth</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Date of birth (exact or approximate)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Place of birth (town/city and county)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Mother&apos;s full name (including maiden name)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Father&apos;s full name (if known)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Proof of identity and relationship</span>
                </li>
              </ul>

              <div className="bg-primary-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-3">Service Fee: £550</h4>
                <p className="text-primary-200 mb-2"><strong>Processing Time: 2 days</strong></p>
                <p className="text-primary-200 mb-4">
                  Includes complete application assistance, record search,
                  and follow-up support until completion.
                </p>
                <p className="text-sm text-primary-300">
                  * General Register Office fees are additional and paid directly to GRO
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
                  href="https://wa.me/447469515438?text=Hello Anderson Carl, I need assistance with obtaining a UK birth certificate."
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
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Birth Certificate Process</h2>
            <p className="text-xl text-gray-600">Simple steps to obtain your UK birth certificate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Information Gathering</h3>
              <p className="text-gray-700">
                We collect all necessary information about the birth registration you&apos;re seeking.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Record Search</h3>
              <p className="text-gray-700">
                We search the official records to locate the correct birth registration entry.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Application Submission</h3>
              <p className="text-gray-700">
                We complete and submit your application to the General Register Office.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Certificate Delivery</h3>
              <p className="text-gray-700">
                We track the application and ensure your birth certificate is delivered safely.
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
                <h3 className="text-lg font-semibold text-primary-900 mb-3">How long does it take to get a UK birth certificate?</h3>
                <p className="text-gray-700">
                  Standard applications take 15 working days. Priority services (48 hours) and
                  Premium services (24 hours) are available for urgent requests.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">What are the current birth certificate fees?</h3>
                <p className="text-gray-700">
                  Standard certificate: £15. Priority service: £35. Premium service: £45.
                  These fees are paid directly to the General Register Office.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Can I get a birth certificate for someone else?</h3>
                <p className="text-gray-700">
                  You can apply for certificates of your children, spouse, or if you have legal authority.
                  Proof of relationship or legal authority is required.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">What if the birth wasn&apos;t registered in England or Wales?</h3>
                <p className="text-gray-700">
                  We can assist with births registered in Scotland (NRS) or Northern Ireland (GRONI),
                  each with different procedures and requirements.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Obtain Your UK Birth Certificate?</h2>
            <p className="text-xl text-primary-200 mb-8">
              Get professional assistance with your UK birth certificate application today.
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
