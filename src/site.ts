// Site-level constants for the rebuilt front end. The legacy `~/config.js` is
// left untouched because ~25 existing files import it.

export const CONTACT_FALLBACK = {
  email: 'support@andersoncarlconsultancy.uk',
  phone: '+44 7529 418057',
  whatsapp: '447529418057',
  office_location: 'Central London, UK',
  availability: '24/7 Support',
};

export const WHATSAPP_MESSAGE =
  'Hello Anderson Carl, I would like to enquire about your UK document services.';

export function whatsappLink(number: string = CONTACT_FALLBACK.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

export const NAV = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'Blog', path: '/blog' },
  { title: 'About', path: '/about' },
  { title: 'FAQs', path: '/faqs' },
  { title: 'Contact', path: '/contact' },
];

export const LEGAL_NAV = [
  { title: 'Privacy Policy', path: '/privacy' },
  { title: 'Terms & Conditions', path: '/terms' },
];
