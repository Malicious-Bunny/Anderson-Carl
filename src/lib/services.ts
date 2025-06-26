export interface SubService {
  id: string;
  title: string;
  description: string;
}

export interface MainService {
  id: string;
  title: string;
  description: string;
  price: string;
  badge: string;
  image: string;
  link: string;
  subServices: SubService[];
}

export const mainServices: MainService[] = [
  {
    id: 'driver-licence-services',
    title: 'Driver Licence Services',
    description: 'Professional help with driver licence applications, renewals, and replacements for all UK licence categories.',
    price: 'From £65',
    badge: 'Fast Track',
    image: 'https://ugc.same-assets.com/8DxIBz0vlVvFE96HMx65ojUGsxiKgkLa.jpeg',
    link: '/services/driver-licence',
    subServices: [
      {
        id: 'international-conversion',
        title: 'Convert your international licence to UK full licence NoTest',
        description: 'Convert your international driving licence to UK full licence without taking a test'
      },
      {
        id: 'provisional-conversion',
        title: 'Convert your Provisional licence to UK full licence no Test',
        description: 'Convert your provisional licence to UK full licence without taking a test'
      },
      {
        id: 'theory-test-pass',
        title: 'Get a UK theory test pass without taking the exam',
        description: 'Get your UK theory test pass certificate without taking the exam'
      },
      {
        id: 'practical-test-pass',
        title: 'get a UK practical test pass Without taking the exam',
        description: 'Get your UK practical test pass certificate without taking the exam'
      }
    ]
  },
  {
    id: 'passport-services',
    title: 'Passport Services',
    description: 'Complete assistance with UK passport applications, renewals, and replacements with expert guidance through every step.',
    price: 'From £75',
    badge: 'Popular',
    image: 'https://ugc.same-assets.com/773kpLSzfrmzjHfe5FAd8Mmd7P8OdG5a.jpeg',
    link: '/services/passport',
    subServices: [
      {
        id: 'new-passport',
        title: 'New Application',
        description: 'First-time passport applications with document verification'
      },
      {
        id: 'passport-renewal',
        title: 'Renewal Service',
        description: 'Quick and efficient passport renewal process'
      },
      {
        id: 'passport-replacement',
        title: 'Lost/Stolen Replacement',
        description: 'Emergency replacement for lost or stolen passports'
      }
    ]
  },
  {
    id: 'immigration-services',
    title: 'Immigration Documents',
    description: 'Expert assistance with residence permits, visa renewals, and other immigration-related documentation.',
    price: 'From £85',
    badge: 'Expert Service',
    image: 'https://ugc.same-assets.com/65sRigiYWGYbjTKWWvPsVQh9Yk8giTxw.jpeg',
    link: '/services/resident-permit',
    subServices: [
      {
        id: 'resident-permit',
        title: 'Resident Permit',
        description: 'UK residence permit applications and renewals'
      },
      {
        id: 'visa-renewal',
        title: 'Visa Renewal',
        description: 'Professional visa renewal services'
      },
      {
        id: 'settlement-visa',
        title: 'Settlement Applications',
        description: 'Indefinite leave to remain applications'
      }
    ]
  },
  {
    id: 'civil-documents',
    title: 'Civil Documents',
    description: 'Official UK civil documents including birth certificates, marriage certificates, and other vital records.',
    price: 'From £55',
    badge: 'Official',
    image: 'https://ugc.same-assets.com/uwjA882xxDNA8JizXVDa__U4qHUovJh9.jpeg',
    link: '/services/uk-birth-certificate',
    subServices: [
      {
        id: 'birth-certificate',
        title: 'Birth Certificate',
        description: 'Official UK birth certificate applications'
      },
      {
        id: 'marriage-certificate',
        title: 'Marriage Certificate',
        description: 'UK marriage certificate requests'
      },
      {
        id: 'death-certificate',
        title: 'Death Certificate',
        description: 'Official death certificate applications'
      }
    ]
  },
  {
    id: 'language-certificates',
    title: 'Language Certificates',
    description: 'Professional support with IELTS, PTE, and other English language certification processes.',
    price: 'From £45',
    badge: 'Certified',
    image: 'https://ugc.same-assets.com/65sRigiYWGYbjTKWWvPsVQh9Yk8giTxw.jpeg',
    link: '/services/ielts-certificate',
    subServices: [
      {
        id: 'ielts-support',
        title: 'IELTS Certificate',
        description: 'Complete IELTS certification assistance'
      },
      {
        id: 'pte-support',
        title: 'PTE Certificate',
        description: 'Professional PTE certification support'
      },
      {
        id: 'other-tests',
        title: 'Other Language Tests',
        description: 'Support for various English language tests'
      }
    ]
  }
];

// Keep the original services for backward compatibility
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
  image: string;
  link: string;
}

export const services: Service[] = [
  {
    id: 'passport',
    title: 'UK Passport Application',
    description: 'Complete assistance with UK passport applications and renewals',
    price: '£75',
    icon: '🛂',
    image: 'https://ugc.same-assets.com/773kpLSzfrmzjHfe5FAd8Mmd7P8OdG5a.jpeg',
    link: '/services/passport'
  },
  {
    id: 'driver-licence',
    title: 'Driver Licence Services',
    description: 'Help with driver licence applications, renewals, and replacements',
    price: '£65',
    icon: '🚗',
    image: 'https://ugc.same-assets.com/8DxIBz0vlVvFE96HMx65ojUGsxiKgkLa.jpeg',
    link: '/services/driver-licence'
  },
  {
    id: 'resident-permit',
    title: 'Resident Permit',
    description: 'Assistance with UK residence permit applications',
    price: '£85',
    icon: '🏠',
    image: 'https://ugc.same-assets.com/65sRigiYWGYbjTKWWvPsVQh9Yk8giTxw.jpeg',
    link: '/services/resident-permit'
  },
  {
    id: 'visa-renewal',
    title: 'Visa Renewal',
    description: 'Professional support for UK visa renewal processes',
    price: '£95',
    icon: '📋',
    image: 'https://ugc.same-assets.com/65sRigiYWGYbjTKWWvPsVQh9Yk8giTxw.jpeg',
    link: '/services/visa-renewal'
  },
  {
    id: 'uk-birth-certificate',
    title: 'UK Birth Certificate',
    description: 'Help obtaining official UK birth certificates',
    price: '£55',
    icon: '📜',
    image: 'https://ugc.same-assets.com/uwjA882xxDNA8JizXVDa__U4qHUovJh9.jpeg',
    link: '/services/uk-birth-certificate'
  },
  {
    id: 'uk-marriage-certificate',
    title: 'UK Marriage Certificate',
    description: 'Assistance with UK marriage certificate applications',
    price: '£55',
    icon: '💍',
    image: 'https://ugc.same-assets.com/C26WX87D1q5SnKvn0IvW2Zx8t4yVoUn5.jpeg',
    link: '/services/uk-marriage-certificate'
  },
  {
    id: 'ielts-certificate',
    title: 'IELTS Certificate',
    description: 'Support with IELTS certification processes',
    price: '£45',
    icon: '📚',
    image: 'https://ugc.same-assets.com/65sRigiYWGYbjTKWWvPsVQh9Yk8giTxw.jpeg',
    link: '/services/ielts-certificate'
  },
  {
    id: 'pte-certificate',
    title: 'PTE Certificate',
    description: 'Professional assistance with PTE certification',
    price: '£45',
    icon: '🎓',
    image: 'https://ugc.same-assets.com/65sRigiYWGYbjTKWWvPsVQh9Yk8giTxw.jpeg',
    link: '/services/pte-certificate'
  }
];
