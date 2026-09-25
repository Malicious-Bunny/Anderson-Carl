import Link from 'next/link';
import { footerData } from '~/shared/data/global.data';
import Logo from '../atoms/Logo';
import { CHAT_URL, EMAIL } from '~/lib/constants';

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
    />
  </svg>
);

const Footer = () => {
  const { description, columns, footNote, links } = footerData;

  return (
    <footer className="bg-primary-950 text-white">
      {/* Chat banner */}
      <div className="bg-forest-600 py-4">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white font-semibold text-sm">
            Need help? We reply within minutes.
          </p>
          <a
            href={CHAT_URL}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white text-forest-600 font-bold text-sm transition-all duration-200 hover:bg-ink-50 cursor-pointer flex-shrink-0"
          >
            <ChatIcon />
            Chat Now
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo light />
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
              {description}
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href={CHAT_URL}
                className="flex items-center gap-2 text-sm text-forest-300 hover:text-forest-200 transition-colors duration-200 cursor-pointer"
              >
                <ChatIcon />
                Chat with us
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-primary-200 hover:text-white transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Service columns */}
          {columns.map(({ title, links: colLinks }, index) => (
            <div key={index}>
              <h4 className="font-display font-bold text-white mb-5 text-lg">{title}</h4>
              <ul className="space-y-3">
                {colLinks?.map(({ label, href }, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={href}
                      className="text-sm text-primary-200 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-300 text-sm">{footNote}</p>
          <div className="flex items-center gap-6">
            {links?.map(({ label, href }, index) => (
              <Link
                key={index}
                href={href}
                className="text-sm text-primary-400 hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
            <a
              href="#header"
              className="text-sm text-primary-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
            >
              Back to top
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
