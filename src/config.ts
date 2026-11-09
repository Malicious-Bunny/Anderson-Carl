export const SITE = {
  name: 'Anderson Carl',
  legalName: 'Anderson Carl Immigration Solicitors',
  title: 'Anderson Carl | UK Immigration Solicitors',
  description:
    'Anderson Carl is a London immigration law practice. We advise on visas, settlement, appeals and exam preparation, and we tell clients the truth about their chances before they pay us a penny.',
  url: 'https://andersoncarlconsultancy.uk',
  email: 'support@andersoncarlconsultancy.uk',
  phone: '+44 7469 515438',
  whatsapp: 'https://wa.me/447469515438',
  whatsappMessage: "Hello, I'd like to book a consultation with Anderson Carl.",
  address: '86 Chancery Lane, London, WC2A 1EU',
  sraNote:
    'Anderson Carl Immigration Solicitors is a placeholder practice profile for site design purposes. Replace with your actual SRA/OISC registration details before publishing.',
};

export const WHATSAPP_LINK = `${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

export const NAV = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'About', path: '/about' },
  { title: 'FAQs', path: '/faqs' },
  { title: 'Contact', path: '/contact' },
];
