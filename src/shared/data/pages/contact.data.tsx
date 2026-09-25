import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall, IconMessageCircle, IconMail } from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: 'Get Your Free Consultation',
  subtitle: (
    <>
      <span className="hidden md:inline">{`Professional UK document assistance with 99% success rate. Expert consultation available 24/7 for passport applications, driver licences, civil documents, IELTS certificates, and immigration services.`}</span>{' '}
      {`Contact Anderson Carl today for expert UK document consultation and let us handle the entire process for you.`}
    </>
  ),
  tagline: 'Contact Anderson Carl',
  image: {
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
    alt: 'Contact Anderson Carl - UK Documents Specialist',
  },
};

// Contact data on Contact page *******************
export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Professional UK Document Assistance',
    subtitle: (
      <>
        Get expert consultation for your UK document needs.{' '}
        <span className="hidden md:inline">{`We handle the entire application process and follow-ups for you, so you don&apos;t have to chase updates or deal with complicated paperwork.`}</span>
      </>
    ),
  },
  items: [
    {
      title: 'Email us',
      description: 'support@andersoncarlconsultancy.uk',
      icon: IconMail,
      href: 'mailto:support@andersoncarlconsultancy.uk',
    },
    {
      title: 'Live chat',
      description: 'chat.andersoncarlconsultancy.uk',
      icon: IconMessageCircle,
      href: 'https://chat.andersoncarlconsultancy.uk',
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
          label: 'Convert International License (No Test)',
        },
        {
          label: 'PTE & IELTS Certificate (No Exam)',
        },
        {
          label: 'Life in the UK Test Pass (No Exam)',
        },
        {
          label: 'Convert Provisional to Full License',
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

// Features data on Contact page *******************
export const featuresContact: FeaturesProps = {
  id: 'features-on-contact',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'Why Choose Anderson Carl',
    subtitle: 'Professional Excellence in UK Documentation',
    highlight: 'Our Services',
  },
  items: [
    {
      title: '99% Success Rate',
      description: 'Exceptional track record with over 5,000 successful applications across all UK document types including passports, licences, and certificates.',
      icon: IconHeadset,
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock professional support available via email and WhatsApp. We&apos;re here to answer your questions whenever you need assistance.',
      icon: IconClock,
    },
    {
      title: 'Expert Guidance',
      description: 'Step-by-step guidance through the entire process. We handle all paperwork, follow-ups, and ensure your applications meet UK government standards.',
      icon: IconHelp,
    },
  ],
};
