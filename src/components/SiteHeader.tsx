'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconMenu2, IconX } from '@tabler/icons-react';

import { NAV } from '~/site';
import BookButton from '~/components/BookButton';

export default function SiteHeader({ whatsapp }: { whatsapp: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-200 bg-paper/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-ink-800"
        >
          Anderson Carl
          <span className="ml-2 hidden text-sm font-medium text-clay-500 sm:inline">
            UK Documents
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active =
              item.path === '/' ? pathname === '/' : pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-semibold transition-colors duration-150 ${
                  active ? 'text-forest-700' : 'text-ink-600 hover:text-forest-700'
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <BookButton
          whatsapp={whatsapp}
          className="btn btn-primary hidden md:inline-flex"
        >
          WhatsApp Us
        </BookButton>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-ink-800 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <IconX size={26} /> : <IconMenu2 size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-200 bg-paper md:hidden">
          <nav className="container-page flex flex-col py-2">
            {NAV.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className="border-b border-ink-100 py-3 text-base font-semibold text-ink-700"
              >
                {item.title}
              </Link>
            ))}
            <BookButton
              whatsapp={whatsapp}
              className="btn btn-primary mt-4 w-full"
              onClick={() => setOpen(false)}
            >
              WhatsApp Us
            </BookButton>
          </nav>
        </div>
      )}
    </header>
  );
}
