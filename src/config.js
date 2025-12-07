export const SITE = {
  name: 'Anderson Carl',
  title: 'Anderson Carl - UK Documents Specialist | Passport, Driver Licence & Certificate Services',
  description: 'Professional UK document consultation services with 99% success rate. Fast passport applications (4 days), driver licences (no test), IELTS/PTE certificates, civil documents & immigration services. Expert consultation available 24/7.',
  defaultImage: '/default.jpg',
  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  author: {
    name: 'Anderson Carl',
    website: 'https://andersoncarlconsultancy.uk',
    email: 'support@andersoncarlconsultancy.uk',
    twitter: '',
    mastodon: '',
    linkedin: '',
    github: '',
  },

  buildTime: new Date(),

  basePathname: '/',
  trailingSlash: false,

  title2: ' | Anderson Carl UK Documents',
  titleSeparator: '·',
  titleTemplate: '%s %t %s',

  description2: 'Professional UK document assistance with 99% success rate.',

  metaTags: {
    charset: 'UTF-8',
    viewport: 'width=device-width, initial-scale=1.0',
    theme: '#ffffff',
  },

  manifest: {
    name: 'Anderson Carl - UK Documents Specialist',
    short_name: 'Anderson Carl',
    theme_color: '#3b82f6',
    background_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/?utm_source=homescreen',
  },

  analytics: {
    vendors: {
      googleAnalytics: {
        id: undefined, // or "G-XXXXXXXXXX"
      },
    },
  },

  blog: {
    disabled: false,
    postsPerPage: 6,

    blog: {
      disabled: false,
      pathname: 'blog',
    },

    post: {
      disabled: false,
      pathname: '',
    },

    category: {
      disabled: false,
      pathname: 'category',
    },

    tag: {
      disabled: false,
      pathname: 'tag',
    },
  },
};

export const BLOG = SITE.blog;

export const I18N = {
  language: 'en',
  textDirection: 'ltr',
};

export const MENU = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Services',
    children: [
      { title: 'UK Passport', path: '/uk-passport' },
      { title: 'Driver Licence', path: '/drivers-license' },
      { title: 'Resident Permit', path: '/resident-permit' },
      { title: 'Visa Renewal', path: '/visa-renewal' },
      { title: 'UK Birth Certificate', path: '/birth-certificate' },
      { title: 'UK Marriage Certificate', path: '/marriage-certificate' },
      { title: 'IELTS Certificate', path: '/ielts-certificate' },
      { title: 'PTE Certificate', path: '/pte-certificate' },
      { title: 'UK Death Certificate', path: '/uk-death-certificate' },
    ],
  },
  {
    title: 'About Us',
    path: '/about',
  },
  {
    title: 'FAQs',
    path: '/faqs',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

export const LINKS = {
  whatsapp: 'https://wa.me/447469515438',
  email: 'support@andersoncarlconsultancy.uk',
  github: '',
  twitter: '',
  facebook: '',
  instagram: '',
  linkedin: '',
};
