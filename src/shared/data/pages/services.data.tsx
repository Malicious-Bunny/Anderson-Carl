import {
  IconScale,
  IconUsers,
  IconShield,
  IconHeartbeat,
  IconHome,
  IconLock,
  IconChevronsRight,
  IconFileText,
  IconCertificate,
  IconAward,
  IconClock,
  IconClipboardCheck,
  IconMessageCircle,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'Comprehensive UK Document Services',
  subtitle:
    'Anderson Carl provides expert UK document assistance with 99% success rate. Professional consultation for passport applications, driver licences, civil documents, IELTS certificates, and immigration services. We handle the entire process from start to finish.',
  callToAction: {
    text: 'Get Free Consultation',
    href: '/contact',
    icon: IconMessageCircle,
  },
  callToAction2: {
    text: 'View All Services',
    href: '#services',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    alt: 'Anderson Carl UK Document Services',
  },
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'Our UK Document Services',
    subtitle: 'Professional assistance for all your UK documentation needs',
    highlight: 'Comprehensive UK Document Assistance',
  },
  items: [
    {
      title: 'UK Passport Services',
      description: 'Complete assistance with UK passport applications, renewals, and replacements. Processing time: 4 days. Expert guidance through every step.',
      icon: IconFileText,
      href: '/us-passport',
    },
    {
      title: 'Driver Licence Services',
      description: 'Professional help with driver licence applications, renewals, and replacements. All services completed without taking any tests.',
      icon: IconCertificate,
      href: '/drivers-license',
    },
    {
      title: 'Immigration Documents',
      description: 'Expert assistance with residence permits, visa renewals, and other immigration-related documentation.',
      icon: IconUsers,
      href: '/adjustment-of-status',
    },
    {
      title: 'Civil Documents',
      description: 'Official UK civil documents including birth certificates, marriage certificates, and death certificates. Processing time: 1-2 days.',
      icon: IconFileText,
      href: '/birth-certificate',
    },
    {
      title: 'Language Certificates',
      description: 'Professional support with IELTS, PTE, and other English language certification processes. No test required.',
      icon: IconAward,
      href: '/certificate-of-citizenship',
    },
    {
      title: 'UK Death Certificate',
      description: 'Expedited official UK death certificate applications for urgent legal and probate requirements.',
      icon: IconClipboardCheck,
      href: '/certificate-of-naturalization',
    },
    {
      title: 'Marriage Certificate',
      description: 'UK marriage certificate requests and applications with professional assistance.',
      icon: IconFileText,
      href: '/marriage-certificate',
    },
    {
      title: 'Complete Document Package',
      description: 'Comprehensive document package services for multiple UK documentation needs.',
      icon: IconFileText,
      href: '/complete-document-package',
    },
  ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
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

// Features data on Services page *******************
export const featuresServices: FeaturesProps = {
  id: 'features-on-services',
  hasBackground: true,
  columns: 4,
  header: {
    title: 'Why Choose Anderson Carl',
    subtitle: 'Professional Excellence in UK Documentation',
    highlight: 'Our Expertise',
  },
  items: [
    {
      title: 'Expert Guidance',
      description: 'Our knowledgeable team provides step-by-step guidance, clarifies requirements, and assists with completing necessary forms.',
      icon: IconClipboardCheck,
    },
    {
      title: 'Personalized Support',
      description: 'Each client\'s requirements are unique. We offer personalized support, addressing individual concerns and queries promptly.',
      icon: IconUsers,
    },
    {
      title: 'Time-Saving Process',
      description: 'We streamline the application process, saving you valuable time and effort. We handle everything from initial form-filling to submission.',
      icon: IconClock,
    },
    {
      title: 'Reliable & Confidential',
      description: 'With Anderson Carl, rest assured that your application is in capable hands. We prioritize accuracy, timeliness, and confidentiality.',
      icon: IconShield,
    },
  ],
};

// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-services',
  hasBackground: false,
  header: {
    title: 'Client Success Stories',
    subtitle: 'What our clients say about our UK document services',
    highlight: 'TESTIMONIALS',
  },
  testimonials: [
    {
      testimonial: `Anderson Carl made the entire process smooth and hassle-free. His professional consultation was excellent and very thorough!`,
      name: 'Sarah Williams',
      job: 'UK Resident',
      image: {
        src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
        alt: 'Sarah Williams',
      },
    },
    {
      testimonial: `I was skeptical at first, but Anderson Carl delivered as promised. Highly recommended for UK document assistance!`,
      name: 'Michael Johnson',
      job: 'Immigration Client',
      image: {
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
        alt: 'Michael Johnson',
      },
    },
    {
      testimonial: `Professional service with clear guidance. Anderson Carl helped me get my documents without any issues or delays.`,
      name: 'Emma Thompson',
      job: 'Professional Client',
      image: {
        src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
        alt: 'Emma Thompson',
      },
    },
  ],
};

// Call to action data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: true,
  title: 'Ready to Get Your UK Documents?',
  subtitle: 'Get professional consultation for your UK document needs today.',
  callToAction: {
    text: 'Get Free Consultation',
    href: '/contact',
    icon: IconMessageCircle,
  },
  items: [
    {
      title: 'We handle the entire application process and follow-ups for you, so you don\'t have to chase updates or deal with complicated paperwork.',
    },
    {
      title: 'Available 24/7 for professional consultation and support.',
    },
  ],
};
