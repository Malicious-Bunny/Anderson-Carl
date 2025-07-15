export interface SubService {
  id: string;
  title: string;
  description: string;
  price?: string;
  processingTime?: string;
}

export interface MainService {
  id: string;
  title: string;
  description: string;
  price: string;
  processingTime?: string;
  badge: string;
  image: string;
  link: string;
  subServices: SubService[];
}

export const mainServices: MainService[] = [
  {
    id: 'driver-licence-services',
    title: 'Driver Licence Services',
    description: 'Professional help with driver licence applications, renewals, and replacements for all UK licence categories. All services completed without taking any tests - certificate handed to you after processing.',
    price: '£65',
    badge: 'Fast Track',
    image: '/license-service.jpg',
    link: '/services/driver-licence',
    subServices: [
      {
        id: 'international-conversion',
        title: 'Convert your international licence to UK full licence NoTest',
        description: 'Convert your international driving licence to UK full licence without taking a test - certificate handed to you after processing'
      },
      {
        id: 'provisional-conversion',
        title: 'Convert your Provisional licence to UK full licence no Test',
        description: 'Convert your provisional licence to UK full licence without taking a test - certificate handed to you after processing'
      },
      {
        id: 'theory-test-pass',
        title: 'Get a UK theory test pass without taking the exam',
        description: 'Get your UK theory test pass certificate without taking the exam - certificate handed to you after processing'
      },
      {
        id: 'practical-test-pass',
        title: 'get a UK practical test pass Without taking the exam',
        description: 'Get your UK practical test pass certificate without taking the exam - certificate handed to you after processing'
      }
    ]
  },
  {
    id: 'passport-services',
    title: 'Passport Services',
    description: 'Complete assistance with UK passport applications, renewals, and replacements with expert guidance through every step. Processing time: 4 days.',
    price: '£1,500',
    processingTime: '4 days',
    badge: 'Popular',
    image: 'https://ugc.same-assets.com/773kpLSzfrmzjHfe5FAd8Mmd7P8OdG5a.jpeg',
    link: '/services/passport',
    subServices: [
      {
        id: 'new-passport',
        title: 'New Application',
        description: 'First-time passport applications with document verification',
        price: '£1,500',
        processingTime: '4 days'
      },
      {
        id: 'passport-renewal',
        title: 'Renewal Service',
        description: 'Quick and efficient passport renewal process',
        price: '£500',
        processingTime: '4 days'
      },
      {
        id: 'passport-replacement',
        title: 'Lost/Stolen Replacement',
        description: 'Emergency replacement for lost or stolen passports',
        price: '£1,500',
        processingTime: '4 days'
      }
    ]
  },
  {
    id: 'immigration-services',
    title: 'Immigration Documents',
    description: 'Expert assistance with residence permits, visa renewals, and other immigration-related documentation. Processing time varies by service.',
    price: '£95',
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
    description: 'Official UK civil documents including birth certificates, marriage certificates, death certificates and other vital records. Processing time: 1-2 days.',
    price: '£1,000',
    processingTime: '1-2 days',
    badge: 'Official',
    image: 'https://ugc.same-assets.com/uwjA882xxDNA8JizXVDa__U4qHUovJh9.jpeg',
    link: '/services/uk-birth-certificate',
    subServices: [
      {
        id: 'birth-certificate',
        title: 'Birth Certificate',
        description: 'Official UK birth certificate applications',
        price: '£550',
        processingTime: '2 days'
      },
      {
        id: 'marriage-certificate',
        title: 'Marriage Certificate',
        description: 'UK marriage certificate requests',
        price: '£700',
        processingTime: '2 days'
      },
      {
        id: 'death-certificate',
        title: 'Death Certificate',
        description: 'Official death certificate applications',
        price: '£1,000',
        processingTime: '1-2 working days'
      }
    ]
  },
  {
    id: 'language-certificates',
    title: 'Language Certificates',
    description: 'Professional support with IELTS, PTE, and other English language certification processes. No test required - certificate handed to you after 3 days processing.',
    price: '£620',
    processingTime: '3 days',
    badge: 'Certified',
    image: 'https://ugc.same-assets.com/65sRigiYWGYbjTKWWvPsVQh9Yk8giTxw.jpeg',
    link: '/services/ielts-certificate',
    subServices: [
      {
        id: 'ielts-support',
        title: 'IELTS Certificate',
        description: 'Complete IELTS certification assistance - no test required, certificate handed to you after processing',
        price: '£600',
        processingTime: '3 days'
      },
      {
        id: 'pte-support',
        title: 'PTE Certificate',
        description: 'Professional PTE certification support - no test required, certificate handed to you after processing',
        price: '£620',
        processingTime: '3 days'
      },
      {
        id: 'other-tests',
        title: 'Other Language Tests',
        description: 'Support for various English language tests - no test required, certificate handed to you after processing',
        price: '£620',
        processingTime: '3 days'
      }
    ]
  },
  {
    id: 'death-certificate-service',
    title: 'UK Death Certificate',
    description: 'Expedited official UK death certificate applications for urgent legal and probate requirements. Processing time: 1-2 working days.',
    price: '£1,000',
    processingTime: '1-2 working days',
    badge: 'Expedited',
    image: 'https://ugc.same-assets.com/uwjA882xxDNA8JizXVDa__U4qHUovJh9.jpeg',
    link: '/services/uk-death-certificate',
    subServices: [
      {
        id: 'expedited-death-cert',
        title: 'Expedited Death Certificate',
        description: 'Priority processing for urgent legal and probate matters',
        price: '£1,000',
        processingTime: '1-2 working days'
      },
      {
        id: 'probate-support',
        title: 'Probate Documentation Support',
        description: 'Specialized assistance for estate administration',
        price: '£1,000',
        processingTime: '1-2 working days'
      },
      {
        id: 'legal-certificate',
        title: 'Legal Proceedings Certificate',
        description: 'Emergency death certificate for legal matters',
        price: '£1,000',
        processingTime: '1-2 working days'
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
  processingTime?: string;
  icon: string;
  image: string;
  link: string;
}

export const services: Service[] = [
  {
    id: 'passport',
    title: 'UK Passport Application',
    description: 'Complete assistance with UK passport applications and renewals. Processing time: 4 days.',
    price: '£1,500',
    processingTime: '4 days',
    icon: '🛂',
    image: 'https://ugc.same-assets.com/773kpLSzfrmzjHfe5FAd8Mmd7P8OdG5a.jpeg',
    link: '/services/passport'
  },
  {
    id: 'driver-licence',
    title: 'Driver Licence Services',
    description: 'Help with driver licence applications, renewals, and replacements. No test required - certificate handed to you after processing.',
    price: '£65',
    icon: '🚗',
    image: 'https://ugc.same-.jpg',
    link: '/services/driver-licence'
  },
  {
    id: 'resident-permit',
    title: 'Resident Permit',
    description: 'Assistance with UK residence permit applications. Processing time varies by service.',
    price: '£95',
    icon: '🏠',
    image: 'https://ugc.same-assets.com/65sRigiYWGYbjTKWWvPsVQh9Yk8giTxw.jpeg',
    link: '/services/resident-permit'
  },
  {
    id: 'visa-renewal',
    title: 'Visa Renewal',
    description: 'Professional support for UK visa renewal processes. Processing time varies by service.',
    price: '£95',
    icon: '📋',
    image: 'https://ugc.same-assets.com/65sRigiYWGYbjTKWWvPsVQh9Yk8giTxw.jpeg',
    link: '/services/visa-renewal'
  },
  {
    id: 'uk-birth-certificate',
    title: 'UK Birth Certificate',
    description: 'Help obtaining official UK birth certificates. Processing time: 2 days.',
    price: '£550',
    processingTime: '2 days',
    icon: '📜',
    image: 'https://ugc.same-assets.com/uwjA882xxDNA8JizXVDa__U4qHUovJh9.jpeg',
    link: '/services/uk-birth-certificate'
  },
  {
    id: 'uk-marriage-certificate',
    title: 'UK Marriage Certificate',
    description: 'Assistance with UK marriage certificate applications. Processing time: 2 days.',
    price: '£700',
    processingTime: '2 days',
    icon: '💍',
    image: 'https://ugc.same-assets.com/C26WX87D1q5SnKvn0IvW2Zx8t4yVoUn5.jpeg',
    link: '/services/uk-marriage-certificate'
  },
  {
    id: 'ielts-certificate',
    title: 'IELTS Certificate',
    description: 'Support with IELTS certification processes. No test required - certificate handed to you after 3 days processing.',
    price: '£600',
    processingTime: '3 days',
    icon: '📚',
    image: 'https://ugc.same-assets.com/65sRigiYWGYbjTKWWvPsVQh9Yk8giTxw.jpeg',
    link: '/services/ielts-certificate'
  },
  {
    id: 'pte-certificate',
    title: 'PTE Certificate',
    description: 'Professional assistance with PTE certification. No test required - certificate handed to you after 3 days processing.',
    price: '£620',
    processingTime: '3 days',
    icon: '🎓',
    image: 'https://ugc.same-assets.com/65sRigiYWGYbjTKWWvPsVQh9Yk8giTxw.jpeg',
    link: '/services/pte-certificate'
  },
  {
    id: 'uk-death-certificate',
    title: 'UK Death Certificate',
    description: 'Official death certificate applications with expedited processing. Processing time: 1-2 working days.',
    price: '£1,000',
    processingTime: '1-2 working days',
    icon: '📋',
    image: 'https://ugc.same-assets.com/uwjA882xxDNA8JizXVDa__U4qHUovJh9.jpeg',
    link: '/services/uk-death-certificate'
  }
];
