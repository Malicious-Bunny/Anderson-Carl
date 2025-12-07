import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
} from '~/shared/types';
import {
  IconAdjustments,
  IconAward,
  IconBook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconBulb,
  IconCirclesRelation,
  IconClock,
  IconFlame,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconMapPin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconPalette,
  IconPhoneCall,
  IconPuzzle2,
  IconScale,
  IconThumbUp,
  IconUser,
  IconUserCheck,
  IconClipboardCheck,
  IconShield,
  IconUsers,
  IconClockHour4,
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: 'Meet Anderson Carl: Your Trusted UK Documents Expert',
  subtitle:
    'Professional assistance with UK documentation processes. We simplify your Life in the UK document applications and handle all the paperwork for you, ensuring a stress-free experience. With 8+ years of experience and over 5,000 successful applications, Anderson Carl has established himself as the leading UK documents specialist.',
  tagline: 'About Anderson Carl',
  callToAction: {
    text: 'Get Free Consultation',
    href: '/contact',
    icon: IconBrandWhatsapp,
  },
  callToAction2: {
    text: 'Email Anderson',
    href: 'mailto:support@andersoncarlconsultancy.uk',
  },
  image: {
    src: 'https://ext.same-assets.com/542609343/2010756552.jpeg',
    alt: 'Anderson Carl - UK Documents Specialist',
  },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: true,
  items: [
    {
      title: '8+',
      description: 'Years of Experience',
    },
    {
      title: '5000+',
      description: 'Applications Processed',
    },
    {
      title: '99%',
      description: 'Success Rate',
    },
    {
      title: '4.9',
      description: 'Client Rating',
    },
  ],
};

// Features data on About page *******************
export const featuresAbout: FeaturesProps = {
  id: 'features-on-about',
  hasBackground: false,
  columns: 4,
  header: {
    title: 'Why Choose Anderson Carl',
    subtitle: 'Professional Excellence in UK Documentation',
    highlight: 'Our Expertise',
  },
  items: [
    {
      title: 'Expert Guidance',
      description:
        'Our knowledgeable team provides step-by-step guidance, clarifies requirements, and assists with completing necessary forms. We ensure all documentation is accurate and in line with UK government standards.',
      icon: IconClipboardCheck,
    },
    {
      title: 'Personalized Support',
      description:
        'Each client\'s requirements are unique. We offer personalized support, addressing individual concerns and queries promptly with dedicated consultation.',
      icon: IconUsers,
    },
    {
      title: 'Time-Saving Process',
      description:
        'We streamline the application process, saving you valuable time and effort. We handle everything from initial form-filling to submission and follow-up.',
      icon: IconClockHour4,
    },
    {
      title: 'Reliable & Confidential',
      description:
        'With Anderson Carl, rest assured that your application is in capable hands. We prioritize accuracy, timeliness, and confidentiality to ensure a stress-free experience.',
      icon: IconShield,
    },
  ],
};

// Team data on About page *******************
export const teamAbout: TeamProps = {
  id: 'team-on-about',
  hasBackground: false,
  header: {
    title: 'Meet Anderson Carl',
    subtitle: 'Life in the UK Documents Specialist',
    highlight: 'Professional Team',
  },
  teams: [
    {
      name: 'Anderson Carl',
      occupation: 'UK Documents Specialist & Founder',
      image: {
        src: 'https://ext.same-assets.com/542609343/2010756552.jpeg',
        alt: 'Anderson Carl',
      },
      items: [
        {
          title: '8+ years expertise in UK documentation processes',
        },
        {
          title: '99% success rate with over 5,000 applications processed',
        },
        {
          title: 'Specializes in passport, driver licence, and civil documents',
        },
        {
          title: 'Available 24/7 for professional consultation and support',
        },
        {
          title: 'Expert in IELTS/PTE certificates and immigration documents',
        },
        {
          title: 'Central London office with nationwide UK service coverage',
        },
      ],
      social: [
        {
          icon: IconBrandWhatsapp,
          href: 'https://wa.me/44746951543',
        },
        {
          icon: IconMail,
          href: 'mailto:support@andersoncarlconsultancy.uk',
        },
      ],
    },
  ],
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: true,
  header: {
    title: 'Our Work Process',
    subtitle: 'Seamless and Efficient Service Delivery',
    highlight: 'How We Work',
  },
  items: [
    {
      title: 'Initial Consultation',
      description:
        'As soon as we receive your inquiry, we begin with a detailed consultation to understand your specific document requirements and provide tailored guidance.',
      icon: IconNumber1,
    },
    {
      title: 'Document Review',
      description:
        'Our team carefully reviews all the details and documents you provide, contacting you if additional information is required to ensure accuracy.',
      icon: IconNumber2,
    },
    {
      title: 'Application Submission',
      description:
        'After thorough review, we handle the submission process and closely track progress to ensure everything moves forward smoothly and efficiently.',
      icon: IconNumber3,
    },
    {
      title: 'Ongoing Updates',
      description:
        'We constantly provide you with updates throughout the process until your documents are successfully processed and delivered to you.',
      icon: IconNumber4,
    },
  ],
  image: {
    src: 'https://ext.same-assets.com/542609343/2010756552.jpeg',
    alt: 'Anderson Carl Work Process',
  },
  callToAction: {
    text: 'Start Your Application',
    href: '/contact',
    icon: IconBrandWhatsapp,
  },
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
  id: 'contact-on-about',
  hasBackground: false,
  header: {
    title: 'Get Professional UK Document Assistance',
    subtitle: 'Contact Anderson Carl Today',
    highlight: '24/7 Support Available',
  },
  content:
    'Ready to streamline your UK document applications? Contact Anderson Carl for professional consultation and let us handle the entire process for you. We\'re available 24/7 to answer your questions and provide expert guidance.',
  items: [
    {
      title: 'Email us',
      description: 'support@andersoncarlconsultancy.uk',
      icon: IconMail,
      href: 'mailto:support@andersoncarlconsultancy.uk',
    },
    {
      title: 'WhatsApp',
      description: '+44 7940 233536',
      icon: IconBrandWhatsapp,
      href: 'https://wa.me/4479402335368',
    },
    {
      title: 'Office Location',
      description: 'Central London, UK',
      icon: IconMapPin,
    },
    {
      title: 'Available',
      description: '24/7 Professional Support',
      icon: IconClock,
    },
  ],
  form: {
    inputs: [
      {
        type: 'text',
        name: 'name',
        label: 'Full Name',
        placeholder: 'Enter your full name',
        autocomplete: 'given-name',
      },
      {
        type: 'email',
        name: 'email',
        label: 'Email Address',
        placeholder: 'Enter your email address',
        autocomplete: 'email',
      },
      {
        type: 'tel',
        name: 'phone',
        label: 'Phone Number',
        placeholder: 'Enter your phone number',
        autocomplete: 'tel',
      },
    ],
    radioBtns: {
      label: 'What service do you need?',
      radios: [
        {
          label: 'UK Passport Application',
        },
        {
          label: 'Driver Licence Services',
        },
        {
          label: 'Civil Documents (Birth/Marriage/Death Certificate)',
        },
        {
          label: 'IELTS/PTE Certificate',
        },
        {
          label: 'Immigration Documents',
        },
        {
          label: 'Other (please specify)',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      name: 'message',
      label: 'Message',
      placeholder: 'Tell us about your document requirements and any specific questions...',
    },
    checkboxes: [
      {
        label: 'I agree to receive consultation emails and service updates from Anderson Carl',
        value: 'agreement',
      },
    ],
    btn: {
      title: 'Send Consultation Request',
      type: 'submit',
    },
  },
};
