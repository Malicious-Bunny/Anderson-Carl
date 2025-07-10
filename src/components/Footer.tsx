import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white text-blue-900 w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mr-3">
                AC
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Anderson Carl</h3>
                <p className="text-blue-200">Life in the UK Documents Specialist</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              Professional assistance with UK documentation processes. We simplify your Life in the UK document applications
              and handle all the paperwork for you, ensuring a stress-free experience.
            </p>
            <div className="space-y-2">
              <p className="text-blue-200">
                📧 Email: <a href="mailto:andersoncarlconsultancy@gmail.com" className="text-white hover:text-blue-300">andersoncarlconsultancy@gmail.com</a>
              </p>
              <p className="text-blue-200">
                📱 WhatsApp: <a href="https://wa.me/447940233536" className="text-white hover:text-blue-300">+44 7940 233536</a>
              </p>
              <p className="text-blue-200">
                📍 Office: Central London, UK
              </p>
              <p className="text-blue-200">
                🕒 Available: 24/7 Support
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/passport" className="text-blue-200 hover:text-white transition-colors">
                  UK Passport Application
                </Link>
              </li>
              <li>
                <Link href="/services/driver-licence" className="text-blue-200 hover:text-white transition-colors">
                  Driver Licence Services
                </Link>
              </li>
              <li>
                <Link href="/services/resident-permit" className="text-blue-200 hover:text-white transition-colors">
                  Resident Permit
                </Link>
              </li>
              <li>
                <Link href="/services/visa-renewal" className="text-blue-200 hover:text-white transition-colors">
                  Visa Renewal
                </Link>
              </li>
              <li>
                <Link href="/services/uk-birth-certificate" className="text-blue-200 hover:text-white transition-colors">
                  UK Birth Certificate
                </Link>
              </li>
              <li>
                <Link href="/services/uk-marriage-certificate" className="text-blue-200 hover:text-white transition-colors">
                  UK Marriage Certificate
                </Link>
              </li>
              <li>
                <Link href="/services/ielts-certificate" className="text-blue-200 hover:text-white transition-colors">
                  IELTS Certificate
                </Link>
              </li>
              <li>
                <Link href="/services/pte-certificate" className="text-blue-200 hover:text-white transition-colors">
                  PTE Certificate
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-blue-200 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2025 Anderson Carl Life in the UK Documents. All rights reserved. |
            Professional documentation services for UK residents.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
