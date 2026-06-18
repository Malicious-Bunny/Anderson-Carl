import { StepsProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Steps = ({ id, header, items, hasBackground = false }: StepsProps) => (
  <WidgetWrapper id={id || ''} hasBackground={hasBackground} containerClass="section container-custom">
    {header && (
      <div className="text-center max-w-2xl mx-auto mb-14">
        {header.tagline && (
          <span className="badge-gold mb-4 inline-block">{header.tagline}</span>
        )}
        {header.title && (
          <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-warm-900 mb-4">
            {header.title}
          </h2>
        )}
        {header.subtitle && (
          <p className="text-lg text-neutral-warm-600">{header.subtitle}</p>
        )}
      </div>
    )}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
      {/* Connecting line (desktop) */}
      <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-neutral-warm-200 to-transparent" />

      {items?.map(({ title, description, icon: Icon }, index) => (
        <div key={index} className="relative flex flex-col items-center text-center">
          {/* Step number circle */}
          <div className="relative mb-5">
            <div className="w-20 h-20 rounded-full bg-primary-900 flex items-center justify-center shadow-large border-4 border-white ring-1 ring-primary-900/20">
              {Icon ? (
                <Icon className="w-8 h-8 text-white" />
              ) : (
                <span className="font-display font-bold text-2xl text-white">{index + 1}</span>
              )}
            </div>
            {/* Gold step number badge */}
            <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gold-500 flex items-center justify-center shadow-md">
              <span className="text-xs font-bold text-white">{index + 1}</span>
            </div>
          </div>

          <h3 className="font-display text-xl font-bold text-neutral-warm-900 mb-2">{title}</h3>
          <p className="text-sm text-neutral-warm-600 leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  </WidgetWrapper>
);

export default Steps;
