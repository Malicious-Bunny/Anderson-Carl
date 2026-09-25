'use client';

import { useState } from 'react';
import {
  IconMapPin,
  IconPhoneCall,
  IconMail,
  IconClock,
  IconBrandWhatsapp,
  IconCheck,
  IconArrowRight,
  IconShield,
  IconScale,
  IconUsers,
  IconStar,
  IconGavel,
  IconCertificate
} from '@tabler/icons-react';

const ProfessionalContact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
    consent: false,
    confidential: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white">
      {/* Hero Section - LawTrades Inspired */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-warm-900 mb-6">
              Immigration case spinning out of control? We&apos;ve got you.
            </h1>
            <p className="text-lg md:text-xl text-neutral-warm-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              DACA renewal urgent? Deportation notice stressing you out? Complex status adjustment?
              Morgan Dauterive instantly connects you with expert immigration attorneys who understand your situation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn-lawtrades btn-lawtrades-primary px-8 py-4 text-lg">
                <span>Get started</span>
                <IconArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Indicators Row */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-warm-500">
              <div className="flex items-center gap-2">
                <IconShield className="w-4 h-4" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCertificate className="w-4 h-4" />
                <span>Licensed attorneys</span>
              </div>
              <div className="flex items-center gap-2">
                <IconUsers className="w-4 h-4" />
                <span>Thousands helped</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form Section */}
      <section className="py-16 lg:py-20 bg-neutral-warm-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-warm-900 mb-4">
              Submit your request
            </h2>
            <p className="text-lg text-neutral-warm-600 max-w-2xl mx-auto">
              Tell us about your immigration needs and we&apos;ll connect you with the right expert attorney
              who can guide you through the process efficiently.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-large border border-neutral-warm-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-warm-900 mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-neutral-warm-900 mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-warm-900 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-neutral-warm-900 mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="(000) 000-0000"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-neutral-warm-900 mb-3">
                    Type of Immigration Assistance Needed
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select a service...</option>
                    <option value="daca">DACA Application/Renewal</option>
                    <option value="asylum">Asylum Case</option>
                    <option value="adjustment">Adjustment of Status (Green Card)</option>
                    <option value="deportation">Deportation Defense</option>
                    <option value="u-visa">U-Visa or T-Visa</option>
                    <option value="vawa">VAWA Self-Petition</option>
                    <option value="tps">TPS Application</option>
                    <option value="passport">US Passport Services</option>
                    <option value="birth-cert">Birth Certificate</option>
                    <option value="citizenship">Certificate of Citizenship</option>
                    <option value="naturalization">Certificate of Naturalization</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-warm-900 mb-3">
                    Tell Us About Your Situation
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Please provide details about your immigration situation, including timeline, current status, and any deadlines you may be facing..."
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 text-primary-600 border-neutral-warm-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="consent" className="text-sm text-neutral-warm-600 leading-relaxed">
                      I understand that this form does not create an attorney-client relationship and that no confidential information should be included.
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="confidential"
                      name="confidential"
                      checked={formData.confidential}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 text-primary-600 border-neutral-warm-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="confidential" className="text-sm text-neutral-warm-600 leading-relaxed">
                      I consent to receive communications from Morgan Dauterive LLP regarding my immigration matter.
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full btn-lawtrades btn-lawtrades-primary py-4 text-lg group"
                  >
                    <span>Request Free Consultation</span>
                    <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <p className="text-xs text-neutral-warm-500 mt-3 text-center">
                    We&apos;ll respond within 24 hours to schedule your consultation
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Match with Top Legal Talent Section - LawTrades Style */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-warm-900 mb-6">
                Match with expert immigration attorneys, fast
              </h2>
              <p className="text-lg text-neutral-warm-600 mb-8 leading-relaxed">
                Our platform instantly connects you with specialized immigration attorneys
                who understand your specific case type. Licensed professionals with proven
                track records in DACA, asylum, deportation defense, and status adjustment.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <IconCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-neutral-warm-700">Licensed immigration specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <IconCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-neutral-warm-700">Proven track record with successful cases</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <IconCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-neutral-warm-700">Experience with complex immigration cases</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card p-6 text-center">
                <div className="w-12 h-12  rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconGavel className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-semibold text-neutral-warm-900 mb-2">Expert Attorneys</h3>
                <p className="text-sm text-neutral-warm-600">Specialized in immigration law</p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12  rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconStar className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-semibold text-neutral-warm-900 mb-2">Proven Results</h3>
                <p className="text-sm text-neutral-warm-600">Thousands of successful cases</p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconShield className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-semibold text-neutral-warm-900 mb-2">Confidential</h3>
                <p className="text-sm text-neutral-warm-600">Attorney-client privilege</p>
              </div>

              <div className="card p-6 text-center">
                <div className="w-12 h-12  rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconClock className="w-6 h-6 text-orange-700" />
                </div>
                <h3 className="font-semibold text-neutral-warm-900 mb-2">Fast Response</h3>
                <p className="text-sm text-neutral-warm-600">24-hour consultation scheduling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Morgan Dauterive frees you section - LawTrades inspired */}
      <section className="py-20 lg:py-24 section-teal">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Morgan Dauterive frees you from these immigration bottlenecks.
              Get expert legal guidance exactly when you need it—no more, no less.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Expert case evaluation</h3>
              <p className="text-white/90 leading-relaxed">
                Get matched with the right immigration attorney for your specific case type using our expert network.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Transparent pricing</h3>
              <p className="text-white/90 leading-relaxed">
                Know exactly what your case will cost upfront. No hidden fees, no surprise retainers.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Fast response time</h3>
              <p className="text-white/90 leading-relaxed">
                Emergency deportation defense available 24/7. Most consultations scheduled within 24 hours.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">End-to-end support</h3>
              <p className="text-white/90 leading-relaxed">
                From initial consultation to case resolution, our attorneys guide you through every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 lg:py-20 bg-neutral-warm-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-warm-900 mb-4">
              Get in touch today
            </h2>
            <p className="text-lg text-neutral-warm-600 max-w-3xl mx-auto">
              Need immediate assistance or have questions about your immigration case?
              Our team is here to help through multiple channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconMapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-warm-900 mb-4">Houston Office</h3>
              <p className="text-neutral-warm-600 mb-6 leading-relaxed">
                123 Main Street, Suite 400<br />
                Houston, TX 77002<br />
                Free parking available
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconPhoneCall className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-warm-900 mb-4">Phone Support</h3>
              <p className="text-neutral-warm-600 mb-6 leading-relaxed">
                Office: (713) 555-0123<br />
                Emergency: (713) 555-0124<br />
                Available 24/7 for urgent cases
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconMail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-warm-900 mb-4">Email Us</h3>
              <p className="text-neutral-warm-600 mb-6 leading-relaxed">
                info@morgandauterrivellp.com<br />
                We respond within 24 hours<br />
                Secure communication
              </p>
            </div>

            <div className="card p-8 text-center bg-green-50 border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconBrandWhatsapp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-4">WhatsApp</h3>
              <p className="text-green-700 mb-6 leading-relaxed">
                Instant legal guidance<br />
                24/7 emergency support<br />
                Fast and convenient
              </p>
              <a
                href="https://chat.andersoncarlconsultancy.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lawtrades btn-lawtrades-primary bg-green-600 hover:bg-green-700"
              >
                <IconBrandWhatsapp className="w-4 h-4" />
                <span>Start Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalContact;
