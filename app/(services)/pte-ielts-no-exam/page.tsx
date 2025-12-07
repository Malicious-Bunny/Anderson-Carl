import Link from 'next/link';
import { ScrollGallery } from '~/components/ui/image-auto-slider';
import { ImageServiceCard } from '~/components/ui/image-service-card';

export const metadata = {
  title: 'Get Registered PTE and IELTS Certificate - No Exam Required - Anderson Carl',
  description: 'Get genuine registered PTE and IELTS certificates without taking exams. Professional assistance with language certification for UK immigration and education.',
};

export default function PTEIELTSNoExamService() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-primary-600 mb-4">
              <Link href="/" className="hover:text-primary-800">Home</Link> /
              <Link href="/#services" className="hover:text-primary-800"> Services</Link> /
              <span className="text-primary-900 font-semibold"> PTE & IELTS No Exam</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900">
              Get Registered PTE & IELTS Certificate
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Obtain genuine registered PTE and IELTS certificates without taking exams.
              Perfect for UK immigration, university applications, and professional requirements.
            </p>
            <div className="bg-primary-900 text-white rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold text-white mb-2">Service Fee: £125</p>
              <p className="text-primary-200">No exam required - Genuine registered certificates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Image Slider */}
      <ScrollGallery
      images={[
        '/pte-1.jpg',
        '/pte-2.jpg',
        '/headshot.jpg',
        '/passport-1.jpg',
        '/passport-2.jpg'
      ]}
      />

      {/* Service Details */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Service Details */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-900">
                No Exam Required Certificates
              </h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-800">Available Certificates</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• IELTS Academic & General Training</li>
                    <li>• PTE Academic & General</li>
                    <li>• Both certificates registered in official databases</li>
                    <li>• Verifiable through official channels</li>
                    <li>• Accepted by UK universities and UKVI</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">Score Options</h3>
                  <ul className="text-blue-700 space-y-2">
                    <li>• IELTS: Band 6.0 to 9.0 available</li>
                    <li>• PTE: Score 50 to 90 available</li>
                    <li>• Customized scores based on your requirements</li>
                    <li>• Balanced scores across all sections</li>
                    <li>• Meets UK visa and university requirements</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-amber-800">Processing Time</h3>
                  <p className="text-amber-700">
                    Standard processing: 5-7 working days. Express service available for urgent applications.
                    All certificates are registered and verifiable immediately upon completion.
                  </p>
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
                    <span>Full name (as on passport/ID)</span>
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
                    <span>Desired test scores (IELTS band or PTE score)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    <span>Purpose (visa application, university, etc.)</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-3 text-primary-900">Certificate Features</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ Registered in official databases</li>
                    <li>✓ Verifiable online</li>
                    <li>✓ Accepted by UKVI</li>
                    <li>✓ University approved</li>
                    <li>✓ Professional delivery</li>
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-3 text-primary-900">Common Uses</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• UK visa applications</li>
                    <li>• University admissions</li>
                    <li>• Professional registration</li>
                    <li>• Immigration requirements</li>
                    <li>• Job applications</li>
                  </ul>
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
            Need Your Certificate Fast?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Get your registered PTE or IELTS certificate without the stress of exams.
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
              href="https://wa.me/44746951543"
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
