import { StatsProps } from '~/shared/types';

const Stats = ({ items, id }: StatsProps) => (
  <section id={id} className="bg-white border-b border-neutral-warm-100">
    <div className="container-custom">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-warm-100">
        {items.map(({ title, description }, index) => (
          <div key={index} className="py-10 px-6 text-center">
            <div className="font-display text-4xl lg:text-5xl font-bold text-primary-900 mb-2">
              {title}
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-warm-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
