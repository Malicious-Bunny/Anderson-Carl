import Link from 'next/link';

export const metadata = {
  title: 'UK Death Certificate Service - Anderson Carl',
  description: 'Professional assistance with UK death certificate applications. Expert consultation and expedited document processing services.',
};

export default function UKDeathCertificateService() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16 overflow-hidden"
        style={{
          backgroundImage: 'url(https://ugc.same-assets.com/uwjA882xxDNA8JizXVDa__U4qHUovJh9.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-gray-200 mb-4">
              <Link href="/" className="hover:text-white">Home</Link> /
              <Link href="/#services" className="hover:text-white"> Services</Link> /
              <span className="text-white"> UK Death Certificate</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              UK Death Certificate Service
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Professional assistance with obtaining official UK death certificates.
              Expedited processing for urgent legal, probate, and administrative requirements.
            </p>
            <div className="bg-white/10 rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold text-white mb-2">Service Fee: £1,000</p>
              <p className="text-gray-200 mb-2">Processing Time: 1-2 working days</p>
              <p className="text-gray-200">Expedited death certificate service</p>
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
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Expedited Processing</h3>
                    <p className="text-gray-700">
                      Priority processing of UK death certificate applications with
                      completion in 1-2 working days for urgent legal and administrative needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🔍</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Record Search & Verification</h3>
                    <p className="text-gray-700">
                      Expert assistance with locating death records in the General Register Office
                      and verification of existing death registrations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">⚖️</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Probate & Legal Support</h3>
                    <p className="text-gray-700">
                      Specialized assistance for probate proceedings, estate administration,
                      and legal matters requiring certified death certificates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Priority Support</h3>
                    <p className="text-gray-700">
                      Dedicated support throughout the expedited process with direct
                      communication channels for urgent matters and status updates.
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
                  <span>Full name of the deceased</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Date of death (exact date required)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Place of death (hospital, address, or district)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Date of birth of the deceased</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Spouse&apos;s name (if applicable)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Proof of identity and relationship/legal authority</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Reason for urgent processing</span>
                </li>
              </ul>

              <div className="bg-gray-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-3">Expedited Service: £1,000</h4>
                <p className="text-gray-200 mb-2">
                  <strong>Processing Time: 1-2 working days</strong>
                </p>
                <p className="text-gray-200 mb-4">
                  Includes expedited application processing, priority record search,
                  and dedicated support until completion.
                </p>
                <p className="text-sm text-gray-300">
                  * General Register Office fees are additional and paid directly to GRO
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center block text-lg py-3"
                >
                  Start Urgent Application
                </Link>
                <a
                  href="https://wa.me/447469515438?text=Hello Anderson Carl, I need urgent assistance with obtaining a UK death certificate."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center block text-lg py-3"
                >
                  Emergency WhatsApp Support
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
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Expedited Death Certificate Process</h2>
            <p className="text-xl text-gray-600">Fast-track steps to obtain your UK death certificate urgently</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Urgent Consultation</h3>
              <p className="text-gray-700">
                Immediate assessment of your requirements and collection of all necessary death registration information.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Priority Record Search</h3>
              <p className="text-gray-700">
                Expedited search of official death records with direct access to General Register Office systems.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Fast-Track Application</h3>
              <p className="text-gray-700">
                Priority application submission with expedited processing through our established GRO connections.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Express Delivery</h3>
              <p className="text-gray-700">
                Expedited certificate delivery within 1-2 working days with tracking and secure handling.
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
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Why does expedited death certificate processing cost £1,000?</h3>
                <p className="text-gray-700">
                  Our expedited service provides 1-2 working day processing compared to standard 15-day processing.
                  This includes priority handling, direct GRO liaison, and dedicated support for urgent legal and probate matters.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Who can apply for a death certificate?</h3>
                <p className="text-gray-700">
                  Close relatives, legal representatives, solicitors handling probate, or those with demonstrable legal interest.
                  Proof of relationship or legal authority is required for all applications.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">What are the additional GRO fees for death certificates?</h3>
                <p className="text-gray-700">
                  Standard certificate: £15. Priority service (48 hours): £35. Premium service (24 hours): £45.
                  Our expedited service ensures fastest possible processing regardless of GRO service level chosen.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">What if the death was registered outside England and Wales?</h3>
                <p className="text-gray-700">
                  We can assist with deaths registered in Scotland (NRS) or Northern Ireland (GRONI),
                  each requiring different procedures. Our expedited service applies to all UK jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need an Urgent UK Death Certificate?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Get expedited professional assistance with your UK death certificate application.
              Anderson Carl provides priority processing for urgent legal, probate, and administrative requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Start Urgent Application
              </Link>
              <a
                href="mailto:anderson.carl@email.com"
                className="btn-secondary text-lg px-8 py-4"
              >
                Emergency Email Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
