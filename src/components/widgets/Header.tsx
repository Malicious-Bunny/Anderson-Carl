'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Logo from '~/components/atoms/Logo';
import ToggleMenu from '../atoms/ToggleMenu';
import { headerData } from '~/shared/data/global.data';
import { WA_URL } from '~/lib/constants';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const Header = () => {
  const { links, isSticky } = headerData;
  const desktopRef = useRef<HTMLUListElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const initialState = links?.map(() => false) || [];

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(initialState);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<boolean[]>(initialState);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDesktopDropdown = (index: number) => {
    setIsDropdownOpen((prev) => prev.map((v, i) => (i === index ? !v : false)));
  };

  const closeDesktopDropdown = (index: number) => {
    setIsDropdownOpen((prev) => prev.map((v, i) => (i === index ? false : v)));
  };

  const toggleMobileDropdown = (index: number) => {
    setIsMobileDropdownOpen((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileDropdownOpen(initialState);
  };

  return (
    <header
      className={`top-0 z-40 w-full bg-white border-b border-neutral-warm-100 shadow-header ${
        isSticky ? 'sticky' : 'relative'
      }`}
      id="header"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" onClick={() => setIsDropdownOpen(initialState)} className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            <ul ref={desktopRef} className="flex items-center space-x-1">
              {links?.map(({ label, href, icon: Icon, links: subLinks }, index) => (
                <li key={index} className="relative">
                  {subLinks?.length ? (
                    <>
                      <button
                        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-warm-700 hover:text-primary-900 hover:bg-neutral-warm-100 rounded-lg transition-all duration-150 cursor-pointer"
                        onClick={() => toggleDesktopDropdown(index)}
                      >
                        {label}
                        <span className={`transition-transform duration-200 ${isDropdownOpen[index] ? 'rotate-180' : ''}`}>
                          <ChevronDown />
                        </span>
                      </button>
                      {isDropdownOpen[index] && (
                        <ul className="absolute top-full left-0 mt-1 min-w-[260px] bg-white border border-neutral-warm-200 rounded-2xl shadow-large py-2 z-50">
                          {subLinks.map(({ label: l2, href: h2 }, i2) => (
                            <li key={i2}>
                              <Link
                                href={h2 as string}
                                className="block px-5 py-2.5 text-sm text-neutral-warm-700 hover:text-primary-900 hover:bg-neutral-warm-50 transition-colors duration-150"
                                onClick={() => closeDesktopDropdown(index)}
                              >
                                {l2}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={href as string}
                      className="block px-4 py-2 text-sm font-medium text-neutral-warm-700 hover:text-primary-900 hover:bg-neutral-warm-100 rounded-lg transition-all duration-150"
                      onClick={() => setIsDropdownOpen(initialState)}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* WhatsApp CTA - desktop */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1da851] text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>

            {/* Mobile hamburger */}
            <div className="lg:hidden">
              <ToggleMenu handleToggleMenuOnClick={() => setIsMenuOpen(!isMenuOpen)} isToggleMenuOpen={isMenuOpen} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={mobileRef} className="lg:hidden bg-white border-t border-neutral-warm-100 shadow-large">
          <nav className="container-custom py-4" aria-label="Mobile navigation">
            <ul className="flex flex-col divide-y divide-neutral-warm-100">
              {links?.map(({ label, href, links: subLinks }, index) => (
                <li key={index}>
                  {subLinks?.length ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full py-3.5 text-base font-medium text-neutral-warm-800 hover:text-primary-900 cursor-pointer"
                        onClick={() => toggleMobileDropdown(index)}
                      >
                        {label}
                        <span className={`transition-transform duration-200 ${isMobileDropdownOpen[index] ? 'rotate-180' : ''}`}>
                          <ChevronDown />
                        </span>
                      </button>
                      {isMobileDropdownOpen[index] && (
                        <ul className="pb-3 pl-4 space-y-1">
                          {subLinks.map(({ label: l2, href: h2 }, i2) => (
                            <li key={i2}>
                              <Link
                                href={h2 as string}
                                className="block py-2 text-sm text-neutral-warm-600 hover:text-primary-900 border-l-2 border-primary-200 pl-3 transition-colors duration-150"
                                onClick={closeMobileMenu}
                              >
                                {l2}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={href as string}
                      className="block py-3.5 text-base font-medium text-neutral-warm-800 hover:text-primary-900 transition-colors duration-150"
                      onClick={closeMobileMenu}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile WhatsApp CTA */}
            <div className="pt-4 pb-2">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold rounded-xl transition-colors duration-200 cursor-pointer"
                onClick={closeMobileMenu}
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
