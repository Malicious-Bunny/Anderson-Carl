// Site-level constants for the rebuilt front end. The legacy `~/config.js` is
// left untouched because ~25 existing files import it.

// The client chat replaced WhatsApp and the published mobile number as the way
// in. Everything that used to open wa.me or dial the phone now opens a thread.
export const CHAT_URL = 'https://chat.andersoncarlconsultancy.uk';

// phone/whatsapp stay in the shape because lib/contact.ts and the admin
// contact record still carry them. They are no longer rendered as links —
// the chat is the only published way in.
export const CONTACT_FALLBACK = {
  email: 'support@andersoncarlconsultancy.uk',
  phone: '+44 7529 418057',
  whatsapp: '447529418057',
  office_location: 'Central London, UK',
  availability: '24/7 Support',
};

/** Canonical entry point into the client chat. */
export function chatLink() {
  return CHAT_URL;
}

/**
 * @deprecated WhatsApp is no longer an enquiry channel. Kept so that any
 * straggling caller redirects to the chat instead of a dead wa.me link.
 */
export function whatsappLink() {
  return CHAT_URL;
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
