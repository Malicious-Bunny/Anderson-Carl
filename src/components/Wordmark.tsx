import { SITE } from '~/config';

/** The firm's name in the serif, with a small line underneath, after the reference's logo. */
export default function Wordmark({ tone = 'ink' }: { tone?: 'ink' | 'cream' }) {
  return (
    <span className={`flex flex-col leading-none ${tone === 'cream' ? 'text-cream' : 'text-ink-900'}`}>
      <span className="font-mark text-[1.625rem] uppercase tracking-[0.08em]">{SITE.name}</span>
      <span className={`mt-1.5 text-[0.625rem] font-medium uppercase tracking-[0.22em] ${tone === 'cream' ? 'text-cream/70' : 'text-ink-600'}`}>
        Immigration solicitors
      </span>
    </span>
  );
}
