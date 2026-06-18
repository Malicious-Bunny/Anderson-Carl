import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';

const Features = ({ id, header, items, columns = 3, hasBackground = false }: FeaturesProps) => (
  <WidgetWrapper id={id || ''} hasBackground={hasBackground} containerClass="section container-custom">
    {header && (
      <div className="text-center max-w-3xl mx-auto mb-14">
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

    {items && (
      <div className={`grid gap-6 ${
        columns === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
        columns === 2 ? 'grid-cols-1 md:grid-cols-2' :
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {items.map(({ title, description, icon: Icon }, index) => (
          <div
            key={index}
            className="group card card-hover p-7 flex flex-col gap-4"
          >
            {Icon && (
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-900 transition-colors duration-300 flex-shrink-0">
                <Icon className="w-6 h-6 text-primary-900 group-hover:text-white transition-colors duration-300" />
              </div>
            )}
            {title && (
              <h3 className="text-lg font-bold text-neutral-warm-900 font-display">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm text-neutral-warm-600 leading-relaxed">
                {description as string}
              </p>
            )}
          </div>
        ))}
      </div>
    )}
  </WidgetWrapper>
);

export default Features;
