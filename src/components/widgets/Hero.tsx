import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import { CHAT_URL } from '~/lib/constants';

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

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5  flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
    />
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
                href={CHAT_URL}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-forest-500 hover:bg-forest-600 text-white font-semibold text-base shadow-panel transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <ChatIcon />
                Start a Chat
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

              {/* Floating card: chat response */}
              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-large p-4 flex items-center gap-3 border border-neutral-warm-100">
                <div className="w-11 h-11 bg-forest-100 text-forest-600 flex items-center justify-center flex-shrink-0">
                  <ChatIcon />
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
