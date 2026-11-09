'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';

import { NAV } from '~/config';
import BookButton from '~/components/BookButton';
import Wordmark from '~/components/Wordmark';

// The reference's header: on cream, wordmark left, plain links in the middle,
// and a forest pill on the right.
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const current = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path));

  return (
    <header className="relative z-50 bg-cream">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-btn focus:bg-forest-800 focus:px-4 focus:py-3 focus:text-cream">
        Skip to content
      </a>
      <div className="container-page">
        <div className="flex h-20 items-center justify-between gap-8 md:h-24 md:px-8">
          <Link href="/" aria-label="Anderson Carl, home">
            <Wordmark />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
            {NAV.filter((item) => item.path !== '/').map((item) => (
              <Link
                key={item.path}
                href={item.path}
                aria-current={current(item.path) ? 'page' : undefined}
                className="py-3 text-[0.9375rem] text-ink-900 underline-offset-[6px] hover:underline aria-[current=page]:underline"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <BookButton className="btn-pill hidden lg:inline-flex">
            WhatsApp us
            <ArrowUpRight size={18} aria-hidden />
          </BookButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="icon-circle lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-20 bg-cream pb-6 shadow-[0_24px_40px_-24px_rgba(26,37,38,0.25)] md:top-24 lg:hidden">
          <nav aria-label="Main" className="container-page flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                aria-current={current(item.path) ? 'page' : undefined}
                className="border-b border-line py-4 text-2xl tracking-[-0.02em] text-ink-900 aria-[current=page]:text-forest-800 aria-[current=page]:underline"
              >
                {item.title}
              </Link>
            ))}
            <BookButton onClick={() => setOpen(false)} className="btn btn-forest mt-6 w-full">
              Message us on WhatsApp
              <ArrowUpRight size={18} aria-hidden />
            </BookButton>
          </nav>
        </div>
      )}
    </header>
  );
}
