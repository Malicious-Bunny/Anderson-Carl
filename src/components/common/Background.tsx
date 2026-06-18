import { BackgroundProps } from '~/shared/types';

const Background = ({ children, hasBackground }: BackgroundProps) => (
  <div className={`absolute inset-0 ${hasBackground ? 'bg-neutral-warm-50' : 'bg-transparent'}`}>
    {children}
  </div>
);

export default Background;
