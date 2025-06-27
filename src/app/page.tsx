import Link from 'next/link';
import ServiceShowcase from '@/components/ServiceShowcase';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Professional UK Document Assistance
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                  Fast, user-friendly and engaging - turn document stress into
                  people-first solutions and streamline your UK applications
                  with our expert consultation service.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="#services"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-900 hover:text-blue-900 transition-colors text-center"
                >
                  View Services
                </Link>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99%</div>
                  <div className="text-gray-600">Success rate</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">5000+</div>
                  <div className="text-gray-600">Applications processed</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 pt-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="text-gray-600 font-medium">4.9</span>
                <span className="text-gray-500">Average client rating</span>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 lg:p-12">
                <img
                  src="/headshot.jpg"
                  alt="Professional UK Document Consultation"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-sm font-semibold text-gray-900">24/7 Support</div>
                <div className="text-xs text-gray-600">Expert assistance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-900 text-lg font-semibold mb-4">Anderson Carl - Document Specialist</p>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Professional and stress-free document assistance
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Ever find yourself overwhelmed by UK documentation processes? Navigate with confidence using Anderson Carl's expertise!
              We're not just about services – we handle the entire application process and follow-ups for you, so you don't have to
              chase updates or deal with complicated paperwork. Let us take the stress out of the system, leaving uncertainty behind.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-md inline-block">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl">📧</span>
              </div>
              <p className="text-blue-900 font-semibold text-lg">24 HOUR SERVICE AVAILABLE</p>
              <p className="text-gray-600">
                Email Us: <a href="mailto:anderson.carl@email.com" className="text-blue-900 hover:underline">anderson.carl@email.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceShowcase />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-900 text-lg font-semibold mb-4">Anderson Carl - Document Specialist</p>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Why Choose Anderson Carl
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">✅</span>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-900 mb-2">Expert Guidance</h4>
                    <p className="text-gray-700">
                      Our knowledgeable team provides step-by-step guidance, clarifies requirements,
                      and assists with completing necessary forms. We ensure all documentation is accurate
                      and in line with UK government standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🎯</span>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-900 mb-2">Personalized Support</h4>
                    <p className="text-gray-700">
                      Each client's requirements are unique. We offer personalized support,
                      addressing individual concerns and queries promptly with dedicated consultation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">⚡</span>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-900 mb-2">Time-Saving Process</h4>
                    <p className="text-gray-700">
                      We streamline the application process, saving you valuable time and effort.
                      We handle everything from initial form-filling to submission and follow-up.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🛡️</span>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-900 mb-2">Reliable & Confidential</h4>
                    <p className="text-gray-700">
                      With Anderson Carl, rest assured that your application is in capable hands.
                      We prioritize accuracy, timeliness, and confidentiality to ensure a stress-free experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  THE PROFESSIONAL CONSULTATION
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  You deserve a smooth UK document application process.
                </p>
                <p className="text-gray-600 mb-8">
                  Let us handle the hard part for you! Our expert consultation service provides
                  full support for your UK document applications – from start to finish.
                  We go the extra mile by managing all follow-ups on your behalf.
                </p>
                <div className="text-center mb-6">
                  <p className="text-blue-900 font-semibold">We are here to answer your questions 24/7</p>
                </div>
                <Link href="/contact" className="btn-primary text-lg px-8 py-3">
                  Get A Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Work Process</h2>
            <p className="text-xl text-gray-600">Seamless and Efficient</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Initial Consultation</h3>
              <p className="text-gray-700">
                As soon as we receive your inquiry, we begin with a detailed consultation
                to understand your specific document requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Document Review</h3>
              <p className="text-gray-700">
                Our team carefully reviews all the details and documents you provide,
                contacting you if additional information is required.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Application Submission</h3>
              <p className="text-gray-700">
                After thorough review, we handle the submission process and closely
                track progress to ensure everything moves forward smoothly.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Ongoing Updates</h3>
              <p className="text-gray-700">
                We constantly provide you with updates throughout the process
                until your documents are successfully processed and delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">CLIENT TESTIMONIALS</h2>
            <p className="text-xl text-gray-600">CUSTOMERS FEEDBACK</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-700 mb-4">
                "Anderson Carl made the entire process smooth and hassle-free.
                His professional consultation was excellent and very thorough!"
              </p>
              <div className="font-semibold text-blue-900">Sarah Williams</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-700 mb-4">
                "I was skeptical at first, but Anderson Carl delivered as promised.
                Highly recommended for UK document assistance!"
              </p>
              <div className="font-semibold text-blue-900">Michael Johnson</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-700 mb-4">
                "Professional service with clear guidance. Anderson Carl helped me
                get my documents without any issues or delays."
              </p>
              <div className="font-semibold text-blue-900">Emma Thompson</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
