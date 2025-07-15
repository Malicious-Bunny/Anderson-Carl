import Link from 'next/link';
import { ScrollGallery } from '@/components/ui/image-auto-slider';
import FAQ from '@/components/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UK Passport Application Service - Fast 4-Day Processing | Anderson Carl',
  description: 'Professional UK passport application assistance with 4-day processing. Expert consultation for new passports, renewals, and replacements. No appointment stress - we handle everything for £1,500. 99% success rate.',
  keywords: [
    'UK passport application service',
    'passport application assistance UK',
    'UK passport renewal service',
    'fast passport processing UK',
    'passport application help',
    'UK passport consultant',
    'Anderson Carl passport',
    'British passport service',
    'passport application expert',
    'UK passport replacement',
    'emergency passport UK',
    'passport consultation UK'
  ],
  openGraph: {
    title: 'UK Passport Application Service - Fast 4-Day Processing | Anderson Carl',
    description: 'Professional UK passport application assistance with 4-day processing. Expert consultation for new passports, renewals, and replacements.',
    images: ['/passport-1.jpg'],
  },
  alternates: {
    canonical: '/services/passport',
  },
};

const passportFAQs = [
  {
    question: "How long does the UK passport application process take with your service?",
    answer: "With our service, we provide comprehensive assistance and ensure your application is processed within 4 days. This includes document review, application preparation, and submission support. Standard government processing times apply, but our expertise minimizes delays and rejections."
  },
  {
    question: "What's included in your £1,500 passport service fee?",
    answer: "Our comprehensive service includes: complete application form assistance, document review and verification, photo compliance check, submission support, progress tracking, and follow-up until completion. Government fees are separate and paid directly to HM Passport Office."
  },
  {
    question: "Can you help with urgent or emergency passport applications?",
    answer: "Yes, we specialize in urgent passport applications including Fast Track (1 week) and Premium (same day) services. We'll guide you through the requirements and help secure appointments at passport offices for emergency travel needs."
  },
  {
    question: "What documents do I need for a UK passport application?",
    answer: "Required documents include: completed application form, two identical passport photos, current passport (for renewals), proof of identity, birth certificate or naturalization documents, and supporting documents for name changes. We'll provide a complete checklist based on your specific situation."
  },
  {
    question: "What if my passport application gets rejected?",
    answer: "Our 99% success rate means rejections are rare. We thoroughly review all documents beforehand to prevent issues. If problems occur, we provide continued support to resolve them and resubmit your application at no additional service charge."
  },
  {
    question: "Do you handle passport renewals and replacements?",
    answer: "Yes, we assist with all types of passport services: new applications (£1,500), renewals (£500), and lost/stolen replacements (£1,500). Each service includes complete assistance from start to finish with our 4-day processing commitment."
  },
  {
    question: "Can you help if I need to change details on my passport?",
    answer: "Absolutely. We assist with passport applications involving name changes due to marriage, divorce, or deed poll. We'll ensure all supporting documentation is properly prepared and submitted according to HM Passport Office requirements."
  },
  {
    question: "Is your service available for British citizens living abroad?",
    answer: "Yes, we can assist British citizens worldwide with passport applications through UK consulates and embassies. Contact us to discuss the specific requirements for your location and situation."
  }
];

export default function PassportService() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "UK Passport Application Service",
    "description": "Professional UK passport application assistance with 4-day processing for new passports, renewals, and replacements",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Anderson Carl UK Documents Consultancy",
      "telephone": "+44 7940 233536",
      "email": "support@andersoncarlconsultancy.uk"
    },
    "serviceType": "Passport Application Service",
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Passport Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "New Passport Application"
          },
          "price": "1500",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Passport Renewal Service"
          },
          "price": "500",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lost/Stolen Passport Replacement"
          },
          "price": "1500",
          "priceCurrency": "GBP"
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "500",
      "highPrice": "1500",
      "priceCurrency": "GBP"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="container">
          <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex space-x-2">
              <li><Link href="/" className="hover:text-blue-900">Home</Link></li>
              <li className="before:content-['/'] before:mx-2">
                <Link href="/#services" className="hover:text-blue-900">Services</Link>
              </li>
              <li className="before:content-['/'] before:mx-2">
                <span className="text-blue-900 font-semibold">UK Passport Application</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              UK Passport Application Service - Fast 4-Day Processing
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Professional UK passport assistance with 99% success rate. We handle new applications, renewals, and replacements with expert guidance from start to finish. No appointment stress - we do it all for you.
            </p>
            <div className="bg-blue-900 text-white rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold text-white mb-2">Service Fee: £1,500</p>
              <p className="text-blue-200 mb-2">⚡ Processing Time: 4 days</p>
              <p className="text-blue-200">✅ Complete passport application assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Image Slider */}
      <ScrollGallery
        images={[
          '/passport-1.jpg',
          '/passport-2.jpg',
          '/passport-3.jpg'
        ]}
      />

      {/* Service Details */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Comprehensive UK Passport Services</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📋</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Expert Application Guidance</h3>
                    <p className="text-gray-700">
                      Complete step-by-step guidance through the UK passport application process with HM Passport Office requirements.
                      We ensure all forms are correctly completed and all criteria met for fast approval.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📄</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Document Review & Verification</h3>
                    <p className="text-gray-700">
                      Comprehensive review of all supporting documents including identity verification, photo compliance check,
                      and birth certificate validation to prevent application delays and rejections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🔄</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Renewal & Replacement Services</h3>
                    <p className="text-gray-700">
                      Expert assistance with passport renewals, lost/stolen replacements, and emergency travel documents.
                      We handle expedited processing options for urgent travel needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📞</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">24/7 Follow-up Support</h3>
                    <p className="text-gray-700">
                      Continuous support throughout the 4-day processing period with progress tracking,
                      status updates, and direct communication with HM Passport Office when needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Required Documents Checklist</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Completed passport application form (APS)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Two identical passport photos (regulation size)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Current/expired passport (for renewals)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Full UK birth certificate or naturalization certificate</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Proof of identity documents (driving licence, etc.)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Marriage/divorce certificates (if applicable)</span>
                </li>
              </ul>

              <div className="bg-blue-900 text-white rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-3">Service Investment:</h4>
                <div className="mb-3">
                  <p className="text-blue-200">• New Application: £1,500</p>
                  <p className="text-blue-200">• Renewal Service: £500</p>
                  <p className="text-blue-200">• Lost/Stolen Replacement: £1,500</p>
                  <p className="text-blue-200 mt-2"><strong>⚡ Processing: 4 days guaranteed</strong></p>
                </div>
                <p className="text-blue-200 mb-4">
                  Includes complete application assistance, document review, submission support,
                  and follow-up until passport delivery.
                </p>
                <p className="text-sm text-blue-300">
                  * UK Government passport fees are additional and paid directly to HM Passport Office
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition-colors w-full text-center block text-lg py-3 rounded-lg font-semibold"
                >
                  Start Your Application
                </Link>
                <a
                  href="https://wa.me/447940233536?text=Hello Anderson Carl, I need assistance with UK passport application service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white hover:bg-green-700 transition-colors w-full text-center block text-lg py-3 rounded-lg font-semibold"
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
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our 4-Day Passport Application Process</h2>
            <p className="text-xl text-gray-600">Streamlined steps for fast UK passport processing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Initial Consultation</h3>
              <p className="text-gray-700">
                We assess your passport requirements, review eligibility, and provide personalized guidance based on your specific situation and travel needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Document Preparation</h3>
              <p className="text-gray-700">
                We help gather and verify all required documents, ensuring they meet HM Passport Office standards and photo specifications for approval.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Application Submission</h3>
              <p className="text-gray-700">
                We complete and submit your application to HM Passport Office with all supporting documents, ensuring fast-track processing where possible.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Follow-up & Delivery</h3>
              <p className="text-gray-700">
                We track your application progress, provide regular updates, and ensure your new passport is delivered securely within 4 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="UK Passport Application FAQs"
        items={passportFAQs}
        serviceType="UK passport application"
      />

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your UK Passport Application?</h2>
            <p className="text-xl text-blue-200 mb-8">
              Get professional assistance with your UK passport application today.
              Contact Anderson Carl for expert consultation and guaranteed 4-day processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 transition-colors text-lg px-8 py-4 rounded-lg font-semibold">
                Get Started Now
              </Link>
              <a
                href="mailto:support@andersoncarlconsultancy.uk?subject=UK Passport Application Consultation Request"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors text-lg px-8 py-4 rounded-lg font-semibold"
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
