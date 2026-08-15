import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import ImageAutoSlider from '../ui/image-auto-slider';

const HeroWithSlider = ({ title, subtitle, tagline, callToAction, callToAction2 }: Omit<HeroProps, 'image'>) => {
  return (
    <section id="heroOne" className="professional-section gradient-bg">
      <div className="container-custom">
        <div className="relative">
          {/* Hero Content */}
          <div className="text-center max-w-5xl mx-auto">
            {tagline && (
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-primary-50 text-primary-800 border border-primary-200">
                  {tagline}
                </span>
              </div>
            )}

            {title && (
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-warm-900 mb-10 leading-tight">
                {title}
              </h1>
            )}

            <div className="max-w-4xl mx-auto mb-12">
              {subtitle && (
                <p className="text-xl md:text-2xl leading-relaxed text-neutral-warm-600 font-normal">
                  {subtitle}
                </p>
              )}
            </div>

            {/* CTA Buttons - LawTrades Style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              {callToAction && (
                <CTA
                  callToAction={callToAction}
                  linkClass="btn-lawtrades btn-lawtrades-primary px-8 py-4 text-base shadow-medium hover:shadow-large"
                />
              )}
              {callToAction2 && (
                <CTA
                  callToAction={callToAction2}
                  linkClass="btn-lawtrades btn-lawtrades-secondary px-8 py-4 text-base"
                />
              )}
            </div>
          </div>

          {/* Image Auto Slider */}
          <ImageAutoSlider />

          {/* Background decorative elements */}
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-3/4 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithSlider;
