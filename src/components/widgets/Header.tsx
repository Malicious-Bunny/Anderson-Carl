'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Logo from '~/components/atoms/Logo';
import ToggleMenu from '../atoms/ToggleMenu';
import { headerData } from '~/shared/data/global.data';
import { CHAT_URL } from '~/lib/constants';

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
    />
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
            {/* Chat CTA - desktop */}
            <a
              href={CHAT_URL}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-forest-500 hover:bg-forest-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              <ChatIcon />
              Chat With Us
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

            {/* Mobile chat CTA */}
            <div className="pt-4 pb-2">
              <a
                href={CHAT_URL}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-forest-500 hover:bg-forest-600 text-white font-semibold rounded-xl transition-colors duration-200 cursor-pointer"
                onClick={closeMobileMenu}
              >
                <ChatIcon />
                Chat With Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
