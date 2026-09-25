import { CallToActionProps } from '~/shared/types';
import { CHAT_URL } from '~/lib/constants';

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6  flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" xmlns="http://www.w3.org/2000/svg">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
    />
  </svg>
);

const CallToAction = ({ title, subtitle, id }: CallToActionProps) => {
  return (
    <section id={id} className="relative overflow-hidden bg-primary-950">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-700/30 rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-sm font-semibold">
              Professional UK Document Services
            </span>
          </div>

          {title && (
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-200 mb-10 leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Chat CTA */}
          <a
            href={CHAT_URL}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-forest-500 hover:bg-forest-600 text-white font-bold text-lg shadow-panel transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <ChatIcon />
            Start a Chat — It&apos;s Free
          </a>

          <p className="mt-6 text-sm text-primary-300">
            No forms. No waiting. Instant response 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
