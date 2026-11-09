import { BookOpen, FileText, Flag, Home, Plane, Scale, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  plane: Plane,
  home: Home,
  scale: Scale,
  'file-text': FileText,
  'book-open': BookOpen,
  flag: Flag,
};

export default function ServiceIcon({ name, size = 20 }: { name: string; size?: number }) {
  const Icon = ICONS[name] ?? FileText;
  return <Icon size={size} strokeWidth={1.6} aria-hidden />;
}
