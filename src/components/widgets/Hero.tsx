import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import { WA_URL } from '~/lib/constants';

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg className={`w-4 h-4 ${filled ? 'text-gold-400 fill-gold-400' : 'text-gold-400'}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TRUST_CHIPS = [
  '5,000+ Applications',
  '99% Success Rate',
  '24/7 Support',
  '4.9★ Rating',
];

const Hero = ({ image }: HeroProps) => {
  return (
    <section className="relative bg-primary-950 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary-800/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gold-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-900/40 rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                UK Documents Specialist
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              Get Your UK
              <br />
              Documents{' '}
              <span className="text-gold-400 italic">Fast</span>
              <br />
              & Hassle-Free
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-primary-200 leading-relaxed mb-8">
              Expert UK document assistance with a 99% success rate. Passports in 4 days, driver licences without tests, IELTS/PTE certificates, and immigration services — all handled for you.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {TRUST_CHIPS.map((chip) => (
                <span key={chip} className="trust-chip">
                  <CheckIcon />
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold text-base rounded-xl shadow-glow-green transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <WhatsAppIcon />
                WhatsApp Us Now
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-base rounded-xl border border-white/20 transition-all duration-200 cursor-pointer"
              >
                View Our Services
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Image + floating cards */}
          {image && (
            <div className="relative hidden lg:block">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={680}
                  className="w-full h-[580px] object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
              </div>

              {/* Floating card: WhatsApp response */}
              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-large p-4 flex items-center gap-3 border border-neutral-warm-100">
                <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-warm-900">Instant Response</p>
                  <p className="text-xs text-neutral-warm-500">Available 24/7</p>
                </div>
              </div>

              {/* Floating card: Rating */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-large p-4 border border-neutral-warm-100">
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-sm font-bold text-neutral-warm-900">4.9 / 5.0</p>
                <p className="text-xs text-neutral-warm-500">5,000+ happy clients</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
