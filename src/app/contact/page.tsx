import Link from 'next/link';
import ServiceShowcase from '@/components/ServiceShowcase';

export const metadata = {
  title: 'Contact Anderson Carl - Life in the UK Documents Specialist',
  description: 'Get in touch with Anderson Carl for professional assistance with UK documents. Email, WhatsApp, and consultation services available 24/7.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <nav className="text-blue-600 mb-4 text-sm">
                  <Link href="/" className="hover:text-blue-800">Home</Link> /
                  <span className="text-gray-600"> Contact</span>
                </nav>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Get Your Free Consultation
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                  Fast, personalized assistance - get professional help with
                  your UK documentation needs. Available 24/7 to support
                  your application journey from start to finish.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-blue-600 text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Response</div>
                    <div className="text-gray-600 text-sm">Within 2 hours</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <span className="text-green-600 text-xl">📱</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp Support</div>
                    <div className="text-gray-600 text-sm">Instant messaging</div>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-gray-600">Available support</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Free</div>
                  <div className="text-gray-600">Initial consultation</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/447940233536?text=Hello Anderson Carl, I need assistance with Life in the UK documents."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                >
                  Start WhatsApp Chat
                </a>
                <a
                  href="mailto:andersoncarlconsultancy@gmail.com"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-900 hover:text-blue-900 transition-colors text-center"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 lg:p-12">
                <img
                  src="/headshot.jpg"
                  alt="Professional Customer Support Representative"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">📞</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-sm font-semibold text-gray-900">Professional</div>
                <div className="text-xs text-gray-600">Expert consultation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Get Your Free Consultation</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="passport">UK Passport Application (From £500)</option>
                    <option value="driver-licence">Driver Licence Services (£65)</option>
                    <option value="resident-permit">Resident Permit (£85)</option>
                    <option value="visa-renewal">Visa Renewal (£95)</option>
                    <option value="uk-birth-certificate">UK Birth Certificate (£550)</option>
                    <option value="uk-marriage-certificate">UK Marriage Certificate (£700)</option>
                    <option value="uk-death-certificate">UK Death Certificate (£1,000)</option>
                    <option value="ielts-certificate">IELTS Certificate (£600)</option>
                    <option value="pte-certificate">PTE Certificate (£620)</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your requirements and any specific questions you have..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to be contacted by Anderson Carl regarding my inquiry and consent to the processing
                    of my personal data in accordance with the privacy policy. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-lg py-3"
                >
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📧</span>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Email</h4>
                      <p className="text-gray-700">
                        <a href="mailto:anderson.carl@email.com" className="hover:text-blue-900">
                          anderson.carl@email.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-600">Response within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📱</span>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">WhatsApp</h4>
                      <p className="text-gray-700">
                        <a
                          href="https://wa.me/447469515438"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-900"
                        >
                          +44 7000 000 000
                        </a>
                      </p>
                      <p className="text-sm text-gray-600">Instant messaging support</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-2xl mr-4">📍</span>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Office Location</h4>
                      <p className="text-gray-700">Central London, UK</p>
                      <p className="text-sm text-gray-600">Consultations by appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-2xl mr-4">🕒</span>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Availability</h4>
                      <p className="text-gray-700">24/7 Support</p>
                      <p className="text-sm text-gray-600">Emergency consultations available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Quick WhatsApp Contact</h3>
                <p className="text-blue-200 mb-6">
                  Get instant assistance through WhatsApp. Click below to start a conversation
                  with Anderson Carl directly.
                </p>
                <a
                  href="https://wa.me/447940233536?text=Hello Anderson Carl, I need assistance with Life in the UK documents."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-lg px-6 py-3 inline-block"
                >
                  Start WhatsApp Chat
                </a>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Free Initial Consultation</h3>
                <p className="text-green-700">
                  All first-time consultations are completely free. We'll assess your requirements
                  and provide you with a clear plan and pricing before you commit to any service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ServiceShowcase />

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">How quickly can you respond to my inquiry?</h3>
                <p className="text-gray-700">
                  We typically respond to email inquiries within 2 hours during business hours.
                  WhatsApp messages receive immediate attention for urgent matters.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Is the initial consultation really free?</h3>
                <p className="text-gray-700">
                  Yes, absolutely. We offer a completely free initial consultation to understand your needs
                  and provide you with a clear service plan and pricing.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Do you provide services outside London?</h3>
                <p className="text-gray-700">
                  Yes, we provide our document assistance services to clients throughout the UK.
                  Most consultations can be conducted remotely via email, phone, or video call.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-700">
                  We accept bank transfers, PayPal, and major credit/debit cards.
                  Payment is typically required 50% upfront and 50% upon completion of service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
