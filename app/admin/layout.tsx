import { ReactNode } from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen pt-20">
      <div className="border-b border-ink-200 bg-ink-800">
        <div className="container-page flex h-14 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="font-display text-sm font-semibold tracking-tight text-paper"
            >
              Content Manager
            </Link>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-clay-300">
              Admin
            </span>
          </div>
          <Link
            href="/"
            target="_blank"
            className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-300 transition-colors duration-150 hover:text-paper"
          >
            View site ↗
          </Link>
        </div>
      </div>

      <main className="container-page py-12">{children}</main>
    </div>
  );
}
