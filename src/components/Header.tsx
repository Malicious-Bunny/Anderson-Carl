'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-blue-900 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mr-3">
              AC
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">Anderson Carl</h1>
              <p className="text-sm text-gray-600">Life in the UK Documents</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <span className="text-gray-700 hover:text-blue-900 transition-colors cursor-pointer">
                Our Services
              </span>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <Link href="/services/passport" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Passport
                  </Link>
                  <Link href="/services/driver-licence" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Driver Licence
                  </Link>
                  <Link href="/services/resident-permit" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Resident Permit
                  </Link>
                  <Link href="/services/visa-renewal" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Visa Renewal
                  </Link>
                  <Link href="/services/uk-birth-certificate" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    UK Birth Certificate
                  </Link>
                  <Link href="/services/uk-marriage-certificate" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    UK Marriage Certificate
                  </Link>
                  <Link href="/services/ielts-certificate" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    IELTS Certificate
                  </Link>
                  <Link href="/services/pte-certificate" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    PTE Certificate
                  </Link>
                  <Link href="/services/uk-death-certificate" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    UK Death Certificate
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="text-gray-700 hover:text-blue-900 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:anderson.carl@email.com" className="text-gray-600 hover:text-blue-900">
              📧 anderson.carl@email.com
            </a>
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen pb-6' : 'max-h-0'}`}>
          <nav className="space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-blue-900">
              Home
            </Link>
            <div className="space-y-2">
              <span className="block text-gray-700 font-medium">Our Services</span>
              <div className="pl-4 space-y-2">
                <Link href="/services/passport" className="block text-gray-600 hover:text-blue-900">
                  Passport
                </Link>
                <Link href="/services/driver-licence" className="block text-gray-600 hover:text-blue-900">
                  Driver Licence
                </Link>
                <Link href="/services/resident-permit" className="block text-gray-600 hover:text-blue-900">
                  Resident Permit
                </Link>
                <Link href="/services/visa-renewal" className="block text-gray-600 hover:text-blue-900">
                  Visa Renewal
                </Link>
                <Link href="/services/uk-birth-certificate" className="block text-gray-600 hover:text-blue-900">
                  UK Birth Certificate
                </Link>
                <Link href="/services/uk-marriage-certificate" className="block text-gray-600 hover:text-blue-900">
                  UK Marriage Certificate
                </Link>
                <Link href="/services/ielts-certificate" className="block text-gray-600 hover:text-blue-900">
                  IELTS Certificate
                </Link>
                <Link href="/services/pte-certificate" className="block text-gray-600 hover:text-blue-900">
                  PTE Certificate
                </Link>
                <Link href="/services/uk-death-certificate" className="block text-gray-600 hover:text-blue-900">
                  UK Death Certificate
                </Link>
              </div>
            </div>
            <Link href="/about" className="block text-gray-700 hover:text-blue-900">
              About Us
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-900">
              Contact
            </Link>
            <div className="pt-4 border-t">
              <a href="mailto:anderson.carl@email.com" className="block text-gray-600 mb-3">
                📧 anderson.carl@email.com
              </a>
              <Link href="/contact" className="btn-primary inline-block">
                Get Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
