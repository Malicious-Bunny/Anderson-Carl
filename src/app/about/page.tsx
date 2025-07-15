import Link from 'next/link';

export const metadata = {
  title: 'About Anderson Carl - UK Documents Specialist',
  description: 'Learn about Anderson Carl, your trusted UK documents specialist. Professional consultation services for Life in the UK documentation needs.',
};

export default function AboutPage() {
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
                  <span className="text-gray-600"> About</span>
                </nav>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Meet Anderson Carl
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                  Certified Immigration Advisor with 8+ years transforming complex UK
                  documentation challenges into seamless success stories. Trusted by over
                  5,000 clients worldwide for expertise that delivers results.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
                >
                  Get Consultation
                </Link>
                <a
                  href="mailto:anderson.carl@email.com"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-900 hover:text-blue-900 transition-colors text-center"
                >
                  Email Anderson
                </a>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">8+</div>
                  <div className="text-gray-600">Years experience</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99%</div>
                  <div className="text-gray-600">Success rate</div>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex items-center space-x-4 pt-4">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Certified Immigration Advisor
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Legal Practice Certificate
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 lg:p-12">
                <img
                  src="/headshot.jpg"
                  alt="Anderson Carl - Professional Document Specialist"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl">🎓</span>
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

      {/* About Anderson */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Meet Anderson Carl: Your Trusted UK Documents Expert
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Anderson Carl began his journey in UK documentation consultancy over 8 years ago, after experiencing
                firsthand the complexities and frustrations of navigating British bureaucracy. What started as helping
                family and friends with their documentation needs has evolved into a thriving consultancy practice that
                has successfully assisted over 5,000 individuals and families from around the world.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Holding a Level 3 qualification in Immigration Law and Practice and a UK Legal Practice Certificate,
                Anderson specializes in the full spectrum of UK documentation services. His expertise spans from
                provisional driving licenses and passport applications to complex visa renewals and residence permits.
                He has developed particular expertise in helping international professionals convert their foreign
                qualifications and licenses to UK equivalents, making him a go-to consultant for skilled migrants.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What sets Anderson apart is his client-first approach and deep understanding of the emotional stress
                that documentation processes can cause. He has personally guided families through emergency passport
                applications for medical emergencies abroad, helped international students secure their academic
                credentials, and assisted countless professionals in obtaining the documentation needed to advance
                their careers in the UK.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Anderson's 99% success rate isn't just a statistic—it represents years of staying current with
                ever-changing UK regulations, building strong relationships with government departments, and developing
                systematic processes that minimize errors and delays. He regularly attends professional development
                seminars and maintains active memberships with leading immigration law associations to ensure his
                clients benefit from the most current expertise available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-lg px-6 py-3">
                  Get Consultation
                </Link>
                <a
                  href="mailto:anderson.carl@email.com"
                  className="btn-secondary text-lg px-6 py-3"
                >
                  Email Anderson
                </a>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Professional Credentials</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🎓</span>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">Certified Immigration Advisor</h4>
                    <p className="text-gray-700">Level 3 qualification in Immigration Law and Practice</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📜</span>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">UK Legal Practice Certificate</h4>
                    <p className="text-gray-700">Authorized to provide immigration consultation services</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🏆</span>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">8+ Years Experience</h4>
                    <p className="text-gray-700">Successfully handled over 5,000 documentation cases</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">⭐</span>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">99% Success Rate</h4>
                    <p className="text-gray-700">Exceptional track record in application approvals across all services</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🌍</span>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">International Expertise</h4>
                    <p className="text-gray-700">Specialist in helping migrants from 40+ countries navigate UK systems</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">⚡</span>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">Emergency Processing</h4>
                    <p className="text-gray-700">Expert in urgent applications with same-day emergency consultation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to providing exceptional service and making UK documentation accessible to everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To simplify the UK documentation process for individuals and families,
                providing expert guidance that transforms complex bureaucracy into
                straightforward, manageable steps.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Our Promise</h3>
              <p className="text-gray-700">
                Every client receives personalized attention, transparent communication,
                and dedicated support throughout their documentation journey. Your success
                is our commitment.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Our Values</h3>
              <p className="text-gray-700">
                Integrity, professionalism, and client-first approach guide everything we do.
                We believe in honest advice, fair pricing, and delivering results that
                exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Anderson */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose Anderson Carl?</h2>
              <p className="text-xl text-gray-600">
                Experience the difference that professional expertise makes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📋</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Comprehensive Service</h3>
                    <p className="text-gray-700">
                      From initial consultation to final document delivery, we handle every
                      aspect of your application process with meticulous attention to detail.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">⚡</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Fast Processing</h3>
                    <p className="text-gray-700">
                      Our efficient processes and government contacts help expedite your
                      applications, often reducing processing times significantly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🛡️</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Risk Mitigation</h3>
                    <p className="text-gray-700">
                      Avoid costly mistakes and delays. Our expertise ensures your applications
                      are error-free and compliant with current regulations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">💬</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-700">
                      Questions don't wait for business hours. Our support team is available
                      around the clock to address your concerns and provide updates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">💰</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-700">
                      No hidden fees or surprise charges. Our upfront pricing structure
                      ensures you know exactly what you're paying for from the start.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4">🔄</span>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Follow-up Guarantee</h3>
                    <p className="text-gray-700">
                      We don't disappear after submission. Our service includes full follow-up
                      until your documents are successfully processed and delivered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">Real experiences from satisfied clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-700 mb-4">
                "Anderson saved me months of frustration with my passport renewal.
                What seemed impossible became straightforward with his expert guidance."
              </p>
              <div className="font-semibold text-blue-900">Sarah M.</div>
              <div className="text-sm text-gray-600">Passport Renewal</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-700 mb-4">
                "Professional, efficient, and incredibly knowledgeable. Anderson handled
                my visa renewal perfectly and kept me informed throughout the process."
              </p>
              <div className="font-semibold text-blue-900">James R.</div>
              <div className="text-sm text-gray-600">Visa Renewal</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                ⭐⭐⭐⭐⭐
              </div>
              <p className="text-gray-700 mb-4">
                "I was struggling with my residence permit application for months.
                Anderson sorted everything out in weeks. Absolutely recommended!"
              </p>
              <div className="font-semibold text-blue-900">Maria L.</div>
              <div className="text-sm text-gray-600">Residence Permit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Documentation Journey?</h2>
            <p className="text-xl text-blue-200 mb-8">
              Get in touch with Anderson Carl today for a free consultation.
              Let's discuss how we can help you achieve your UK documentation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Free Consultation
              </Link>
              <a
                href="https://wa.me/447000000000?text=Hello Anderson Carl, I would like to learn more about your services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
