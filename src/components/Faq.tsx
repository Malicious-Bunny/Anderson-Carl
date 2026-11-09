import { Plus } from 'lucide-react';

/** Native details and summary, so it works without JavaScript. */
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-b border-line">
      {items.map((item) => (
        <details key={item.q} className="group border-t border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <span className="text-lg font-medium leading-snug tracking-[-0.01em] text-ink-900 md:text-xl">{item.q}</span>
            <span aria-hidden className="icon-circle group-open:bg-forest-800 group-open:text-cream">
              <Plus size={18} className="transition-transform duration-200 group-open:rotate-45" />
            </span>
          </summary>
          <p className="max-w-prose pb-7 pr-16 text-ink-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
