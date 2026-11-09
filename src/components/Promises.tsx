import { MessagesSquare, Landmark, Route } from 'lucide-react';

// The reference's strip under the hero: three short points, each with a tinted
// icon circle. Taken from how the firm already describes its work on About.
const POINTS = [
  { icon: MessagesSquare, title: 'Honest from the first message.', body: 'Your real chances, before you pay us anything.' },
  { icon: Landmark, title: 'Official channels only.', body: 'Every application in your name, with the right UK authority.' },
  { icon: Route, title: 'Every step explained.', body: 'You’ll know why your case is built the way it is.' },
];

export default function Promises() {
  return (
    <ul className="grid gap-6 rounded-panel bg-sand-100 px-6 py-7 md:grid-cols-3 md:gap-8 md:px-10 md:py-8">
      {POINTS.map(({ icon: Icon, title, body }) => (
        <li key={title} className="flex items-start gap-5">
          <span className="icon-circle">
            <Icon size={20} strokeWidth={1.6} aria-hidden />
          </span>
          <span>
            <span className="block text-[1.0625rem] font-medium text-ink-900">{title}</span>
            <span className="mt-1 block text-[0.9375rem] text-ink-600">{body}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
