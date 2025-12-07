import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconChevronDown,
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: '24 HOUR SERVICE AVAILABLE',
  callToAction: {
    text: 'Email Us: support@andersoncarlconsultancy.uk »',
    href: 'mailto:support@andersoncarlconsultancy.uk',
  },
  callToAction2: {
    text: 'WhatsApp: +44 7940 233536',
    href: 'https://wa.me/447940233536',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Services',
      icon: IconChevronDown,
      links: [
        {
          label: 'Apply for a UK Passport as a foreigner',
          href: '/passport',
        },
        {
          label: 'Driver Licence Services',
          href: '/driver-licence',
        },
        {
          label: 'Visa Renewal',
          href: '/visa-renewal',
        },
        {
          label: 'PTE Certificate',
          href: '/pte-certificate',
        },
        {
          label: 'IELTS Certificate',
          href: '/ielts-certificate',
        },
        {
          label: 'UK Death Certificate',
          href: '/uk-death-certificate',
        },
        {
          label: 'Marriage Certificate',
          href: '/uk-marriage-certificate',
        },
        {
          label: 'Birth Certificate',
          href: '/uk-birth-certificate',
        },
        {
          label: 'Resident Permit',
          href: '/resident-permit',
        },
        {
          label: 'Convert International License to UK licence No Test',
          href: '/convert-international-license',
        },
        {
          label: 'Get a Registered PTE & IELTS No Exam',
          href: '/pte-ielts-no-exam',
        },
        {
          label: 'Life in the UK Test Pass No Exam',
          href: '/life-in-uk-test',
        },
        {
          label: 'Convert Provisional License to Full Uk licence',
          href: '/convert-provisional-license',
        },
      ],
    },
    {
      label: 'About Us',
      href: '/about',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
  actions: [
    {
      text: 'support@andersoncarlconsultancy.uk',
      href: 'mailto:support@andersoncarlconsultancy.uk',
      icon: IconMail,
    },
  ],
  isSticky: true,
  showToggleTheme: false,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'Anderson Carl',
  subtitle: 'Life in the UK Documents Specialist',
  description: 'Professional assistance with UK documentation processes. We simplify your Life in the UK document applications and handle all the paperwork for you, ensuring a stress-free experience.',
  columns: [
    {
      title: 'Our Services',
      links: [
        {
          label: 'Apply for a UK Passport as a foreigner',
          href: '/passport',
        },
        {
          label: 'Driver Licence Services',
          href: '/driver-licence',
        },
        {
          label: 'Visa Renewal',
          href: '/visa-renewal',
        },
        {
          label: 'PTE Certificate',
          href: '/pte-certificate',
        },
        {
          label: 'IELTS Certificate',
          href: '/ielts-certificate',
        },
        {
          label: 'UK Death Certificate',
          href: '/uk-death-certificate',
        },
        {
          label: 'Marriage Certificate',
          href: '/uk-marriage-certificate',
        },
        {
          label: 'Birth Certificate',
          href: '/uk-birth-certificate',
        },
        {
          label: 'Resident Permit',
          href: '/resident-permit',
        },
        {
          label: 'Convert International License to UK licence No Test',
          href: '/convert-international-license',
        },
        {
          label: 'Get a Registered PTE & IELTS No Exam',
          href: '/pte-ielts-no-exam',
        },
        {
          label: 'Life in the UK Test Pass No Exam',
          href: '/life-in-uk-test',
        },
        {
          label: 'Convert Provisional License to Full Uk licence',
          href: '/convert-provisional-license',
        },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms & Conditions', href: '/terms' },
      ],
    },
  ],
  links: [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  socials: [
    { label: 'WhatsApp', icon: IconBrandWhatsapp, href: 'https://wa.me/44746951543' },
  ],
  footNote: '© 2025 Anderson Carl Life in the UK Documents. All rights reserved. | Professional documentation services for UK residents.',
  theme: 'dark',
};

// Contact information
export const contactData = {
  hasBackground: true,
  header: {
    title: 'Get A Consultation',
    subtitle: 'Professional UK Document Assistance',
    highlight: 'Contact Anderson Carl',
  },
  content: 'We are here to answer your questions 24/7. Get expert consultation for all your UK document needs.',
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
      href: 'https://wa.me/44746951543',
    },
    {
      title: 'Office Location',
      description: 'Central London, UK',
      icon: IconMapPin,
    },
    {
      title: 'Available',
      description: '24/7 Support',
      icon: IconClock,
    },
  ],
  form: {
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your name',
        autocomplete: 'given-name',
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Your email address',
        autocomplete: 'email',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Tell us about your document requirements...',
    },
    checkboxes: [
      {
        label: 'I agree to receive consultation emails and updates',
        value: '',
      },
    ],
    btn: {
      title: 'Send Consultation Request',
      type: 'submit',
    },
  },
};
