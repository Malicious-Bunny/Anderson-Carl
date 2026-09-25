import {
  IconCheck,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconShield,
  IconScale,
  IconUsers,
  IconHeartbeat,
  IconMessageCircle,
  IconFileText,
  IconHome,
  IconLock,
  IconUser,
  IconStar,
  IconClipboardCheck,
  IconTrendingUp,
  IconAward,
  IconStethoscope,
  IconCalculator,
  IconCertificate,
  IconUserCheck,
  IconCash,
  IconClockHour4,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  ServicesProps,
  TestimonialsProps,
  StatsProps,
} from '../../types';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      UK Documents Specialist <span className="hidden md:inline">-</span> <span>Anderson Carl</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Professional Consultation Services</span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        Expert UK document assistance with{' '}
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          99% success rate
        </span>.{' '}
        Fast passport applications (4 days), driver licences with no test required, IELTS/PTE certificates, civil documents, and immigration services.
      </span>{' '}
      Streamline your UK applications with professional consultation available 24/7. We handle the entire application process and follow-ups for you, so you don&apos;t have to chase updates or deal with complicated paperwork.
    </>
  ),
  callToAction: {
    text: 'Start a Chat',
    href: 'https://chat.andersoncarlconsultancy.uk',
    targetBlank: true,
    icon: IconMessageCircle,
  },
  callToAction2: {
    text: 'View Services',
    href: '#services',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    alt: 'Anderson Carl - UK Documents Specialist',
  },
};

// Social Proof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80',
      alt: 'UK Driver Licence Services',
    },
    {
      src: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&q=80',
      alt: 'UK Passport Services',
    },
    {
      src: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&q=80',
      alt: 'UK Civil Documents',
    },
    {
      src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
      alt: 'UK Death Certificate',
    },
  ],
};

// Stats section
export const statsHome: StatsProps = {
  id: 'stats-on-home',
  hasBackground: true,
  items: [
    {
      title: '99%',
      description: 'Success rate',
    },
    {
      title: '5000+',
      description: 'Applications processed',
    },
    {
      title: '4.9',
      description: 'Average client rating',
    },
    {
      title: '24/7',
      description: 'Expert assistance',
    },
  ],
};

// Content data 1 on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: false,
  header: {
    title: 'Professional and stress-free document assistance',
    subtitle: 'Anderson Carl - Document Specialist',
    highlight: 'THE PROFESSIONAL CONSULTATION',
  },
  content:
    'Ever find yourself overwhelmed by UK documentation processes? Navigate with confidence using Anderson Carl\'s expertise! We\'re not just about services – we handle the entire application process and follow-ups for you, so you don\'t have to chase updates or deal with complicated paperwork. Let us take the stress out of the system, leaving uncertainty behind.',
  items: [
    {
      title: 'You deserve a smooth UK document application process.',
      description:
        'Let us handle the hard part for you! Our expert consultation service provides full support for your UK document applications – from start to finish. We go the extra mile by managing all follow-ups on your behalf.',
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    alt: 'Professional UK Document Consultation',
  },
  isReversed: false,
  isAfterContent: false,
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 4,
  header: {
    tagline: 'Why Anderson Carl',
    title: 'Professional. Trusted. Results.',
    subtitle: 'We handle everything from application to delivery so you can focus on what matters.',
  },
  items: [
    {
      title: 'Expert Guidance',
      description: 'Our knowledgeable team provides step-by-step guidance, clarifies requirements, and assists with completing necessary forms. We ensure all documentation is accurate and in line with UK government standards.',
      icon: IconClipboardCheck,
    },
    {
      title: 'Personalized Support',
      description: 'Each client\'s requirements are unique. We offer personalized support, addressing individual concerns and queries promptly with dedicated consultation.',
      icon: IconUsers,
    },
    {
      title: 'Time-Saving Process',
      description: 'We streamline the application process, saving you valuable time and effort. We handle everything from initial form-filling to submission and follow-up.',
      icon: IconClockHour4,
    },
    {
      title: 'Reliable & Confidential',
      description: 'With Anderson Carl, rest assured that your application is in capable hands. We prioritize accuracy, timeliness, and confidentiality to ensure a stress-free experience.',
      icon: IconShield,
    },
  ],
};

// Services data on Home page *******************
export const servicesHome: ServicesProps = {
  id: 'services-on-home',
  hasBackground: true,
  header: {
    tagline: 'Our Services',
    title: 'UK Document Services',
    subtitle: 'Comprehensive assistance for all your UK document needs — handled start to finish.',
  },
  items: [
    {
      title: 'Driver Licence Services',
      description: 'Professional help with driver licence applications, renewals, and replacements for all UK licence categories. All services completed without taking any tests - certificate handed to you after processing.',
      image: {
        src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80&auto=format&fit=crop',
        alt: 'UK Driver Licence Services',
      },
      icon: IconCertificate,
      callToAction: {
        text: 'Learn More',
        href: '/driver-licence',
      },
      badges: [
        {
          title: 'Fast Track',
          type: 'outline' as const,
        },
      ],
      items: [
        'Convert international licence to UK full licence (no test)',
        'Convert provisional licence to UK full licence (no test)',
        'Get UK theory test pass without taking exam',
        'Get UK practical test pass without taking exam',
      ],
    },
    {
      title: 'Passport Services',
      description: 'Complete assistance with UK passport applications, renewals, and replacements with expert guidance through every step. Processing time: 4 days.',
      image: {
        src: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80&auto=format&fit=crop',
        alt: 'UK Passport Services',
      },
      icon: IconFileText,
      callToAction: {
        text: 'Learn More',
        href: '/passport',
      },
      badges: [
        {
          title: 'Popular',
          type: 'outline' as const,
        },
      ],
      items: [
        'New passport applications with document verification',
        'Quick and efficient passport renewal process',
        'Emergency replacement for lost or stolen passports',
      ],
    },
    {
      title: 'Visa Renewal',
      description: 'Expert assistance with residence permits, visa renewals, and other immigration-related documentation. Processing time varies by service.',
      image: {
        src: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80&auto=format&fit=crop',
        alt: 'Immigration Documents',
      },
      icon: IconUsers,
      callToAction: {
        text: 'Learn More',
        href: '/visa-renewal',
      },
      badges: [
        {
          title: 'Expert Service',
          type: 'outline' as const,
        },
      ],
      items: [
        'UK residence permit applications and renewals',
        'Professional visa renewal services',
        'Settlement applications',
      ],
    },
    {
      title: 'Civil Documents',
      description: 'Official UK civil documents including birth certificates, marriage certificates, death certificates and other vital records. Processing time: 1-2 days.',
      image: {
        src: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80&auto=format&fit=crop',
        alt: 'UK Civil Documents',
      },
      icon: IconCertificate,
      callToAction: {
        text: 'Learn More',
        href: '/uk-birth-certificate',
      },
      badges: [
        {
          title: 'Official',
          type: 'outline' as const,
        },
      ],
      items: [
        'Official UK birth certificate applications',
        'UK marriage certificate requests',
        'Official death certificate applications',
      ],
    },
    {
      title: 'Language Certificates',
      description: 'Professional support with IELTS, PTE, and other English language certification processes. No test required - certificate handed to you after 3 days processing.',
      image: {
        src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop',
        alt: 'Language Certificates',
      },
      icon: IconAward,
      callToAction: {
        text: 'Learn More',
        href: '/ielts-certificate',
      },
      badges: [
        {
          title: 'Certified',
          type: 'outline' as const,
        },
      ],
      items: [
        'Complete IELTS certification assistance (no test required)',
        'Professional PTE certification support (no test required)',
        'Support for various English language tests (no test required)',
      ],
    },
    {
      title: 'UK Death Certificate',
      description: 'Expedited official UK death certificate applications for urgent legal and probate requirements. Processing time: 1-2 working days.',
      image: {
        src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80&auto=format&fit=crop',
        alt: 'UK Death Certificate',
      },
      icon: IconFileText,
      callToAction: {
        text: 'Learn More',
        href: '/uk-death-certificate',
      },
      badges: [
        {
          title: 'Expedited',
          type: 'outline' as const,
        },
      ],
      items: [
        'Priority processing for urgent legal and probate matters',
        'Specialized assistance for estate administration',
        'Emergency death certificate for legal matters',
      ],
    },
  ],
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  header: {
    tagline: 'How It Works',
    title: 'Simple 4-Step Process',
    subtitle: 'From your first WhatsApp message to receiving your documents — we handle it all.',
  },
  items: [
    {
      title: 'Initial Consultation',
      description:
        'As soon as we receive your inquiry, we begin with a detailed consultation to understand your specific document requirements.',
      icon: IconPhoneCall,
    },
    {
      title: 'Document Review',
      description:
        'Our team carefully reviews all the details and documents you provide, contacting you if additional information is required.',
      icon: IconFileText,
    },
    {
      title: 'Application Submission',
      description:
        'After thorough review, we handle the submission process and closely track progress to ensure everything moves forward smoothly.',
      icon: IconCheck,
    },
    {
      title: 'Ongoing Updates',
      description:
        'We constantly provide you with updates throughout the process until your documents are successfully processed and delivered.',
      icon: IconTrendingUp,
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    alt: 'Anderson Carl Work Process',
  },
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    tagline: 'Client Reviews',
    title: 'What Our Clients Say',
    subtitle: 'Over 5,000 successful applications with a 4.9 star rating.',
  },
  testimonials: [
    {
      testimonial: `Anderson Carl made the entire process smooth and hassle-free. His professional consultation was excellent and very thorough!`,
      name: 'Mohamed Bashir',
      job: 'UK Resident',
      image: {
        src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=256&q=80',
        alt: 'Mohamed Bashir',
      },
    },
    {
      testimonial: `I was skeptical at first, but Anderson Carl delivered as promised. Highly recommended for UK document assistance!`,
      name: 'Ahmed Fahti',
      job: 'Immigration Client',
      image: {
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&q=80',
        alt: 'ahmed fahti',
      },
    },
    {
      testimonial: `Professional service with clear guidance. Anderson Carl helped me get my documents without any issues or delays.`,
      name: 'Rashir Pooja',
      job: 'Professional Client',
      image: {
        src: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=256&q=80',
        alt: 'rashir pooja',
      },
    },
  ],
};

// Call to action data on Home page *******************
export const callToActionHome: CallToActionProps = {
  id: 'callToAction-on-home',
  hasBackground: false,
  title: 'Ready to Get Your Documents?',
  subtitle: 'Start a chat and our expert team will guide you through the entire process — no paperwork headaches, no waiting rooms, no stress.',
  callToAction: {
    text: 'Start a Chat — It\'s Free',
    href: 'https://chat.andersoncarlconsultancy.uk',
    targetBlank: true,
    icon: IconMessageCircle,
  },
};
