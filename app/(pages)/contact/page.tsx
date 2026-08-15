import type { Metadata } from 'next';
import { WA_URL, EMAIL } from '~/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Anderson Carl — UK Documents Specialist',
  description: 'Get in touch with Anderson Carl for expert UK document consultation. WhatsApp us for an instant response — available 24/7.',
};

const WhatsAppIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`fill-current ${className}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const contactItems = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Office Location',
    value: 'Central London, UK',
    href: undefined,
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Availability',
    value: '24/7 Professional Support',
    href: undefined,
  },
];

const services = [
  'Passport Applications',
  'Driver Licence Services',
  'IELTS / PTE Certificates',
  'Visa & Immigration',
  'Civil Documents',
  'Resident Permits',
  'Life in UK Test Pass',
  'Convert International Licence',
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-950 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-800/30 rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-sm font-semibold mb-6">
            Get In Touch
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            We&apos;re Here to{' '}
            <span className="text-gold-400 italic">Help You</span>
          </h1>
          <p className="text-lg text-primary-200 leading-relaxed mb-10">
            Skip the forms. Chat with us directly on WhatsApp and get an expert response within minutes. We handle your UK document needs from start to finish.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-xl rounded-2xl shadow-glow-green transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <WhatsAppIcon className="w-7 h-7" />
            Open WhatsApp Chat
          </a>
          <p className="mt-5 text-primary-300 text-sm">Average response time: under 5 minutes</p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
            {contactItems.map((item, index) => (
              <div key={index} className="card p-6 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-900">
                  {item.icon}
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-warm-400">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm font-medium text-primary-900 hover:text-primary-700 transition-colors duration-200 break-all">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-neutral-warm-700">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Services we handle */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-warm-900 mb-3">
                What Can We Help With?
              </h2>
              <p className="text-neutral-warm-600">
                Message us on WhatsApp and mention which service you need.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {services.map((service) => (
                <a
                  key={service}
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-4 bg-neutral-warm-50 hover:bg-primary-50 border border-neutral-warm-200 hover:border-primary-200 rounded-xl text-sm font-medium text-neutral-warm-700 hover:text-primary-900 transition-all duration-200 cursor-pointer group"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                  {service}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-neutral-warm-50 py-16">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <div className="card p-10">
            <div className="w-16 h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <WhatsAppIcon className="w-8 h-8 text-[#25D366]" />
            </div>
            <h2 className="font-display text-3xl font-bold text-neutral-warm-900 mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-neutral-warm-600 mb-8">
              No complicated forms. No waiting. Just send us a WhatsApp message and we&apos;ll handle everything else.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-base rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer shadow-glow-green"
            >
              <WhatsAppIcon />
              Start Your WhatsApp Consultation
            </a>
            <p className="mt-4 text-xs text-neutral-warm-400">
              +44 7529 418057 · Available 24 hours, 7 days
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
