'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IconArrowUpRight } from '@tabler/icons-react';

import { checkSession, logout } from '~/lib/adminSession';

const SECTIONS = [
  {
    title: 'Blog posts',
    description: 'Write, edit and publish articles. Changes appear on the site immediately.',
    href: '/admin/blog',
  },
  {
    title: 'Contact details',
    description: 'Email, phone, WhatsApp number, office location and availability.',
    href: '/admin/contact',
  },
  {
    title: 'Images',
    description: 'Upload and manage media, and copy paths for use in articles.',
    href: '/admin/images',
  },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    checkSession().then((valid) => {
      setIsAuthenticated(valid);
      setChecking(false);
    });
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'Invalid password');
    }
  };

  const handleLogout = async () => {
    await logout();
    setIsAuthenticated(false);
    setPassword('');
  };

  if (checking) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-sm text-ink-400">Checking session…</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="w-full max-w-md border border-ink-200 bg-paper p-8">
          <p className="eyebrow mb-4">Restricted</p>
          <h1 className="text-2xl">Sign in</h1>
          <p className="mt-2 text-sm">Enter the admin password to manage site content.</p>

          <form onSubmit={handleLogin} className="mt-8">
            <label htmlFor="password" className="mb-2 block text-sm font-semibold text-ink-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-ink-200 bg-paper px-4 py-3 text-ink-700 focus:border-forest-600 focus:outline-none"
              placeholder="••••••••"
              autoFocus
            />
            {error && <p className="mt-3 text-sm font-medium text-clay-600">{error}</p>}
            <button type="submit" className="btn btn-primary mt-6 w-full">
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-3">Content manager</p>
          <h1 className="text-3xl md:text-4xl">Manage your site</h1>
          <p className="mt-3 max-w-prose">
            Everything here is live. Saving a change updates the public site straight away —
            there is no rebuild or redeploy step.
          </p>
        </div>
        <button onClick={handleLogout} className="btn btn-outline">
          Sign out
        </button>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden border border-ink-200 bg-ink-200 md:grid-cols-3">
        {SECTIONS.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group flex flex-col justify-between gap-8 bg-paper p-8 transition-colors duration-150 hover:bg-ink-50"
          >
            <div>
              <h2 className="text-xl">{section.title}</h2>
              <p className="mt-2 text-[0.95rem]">{section.description}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700">
              Open
              <IconArrowUpRight
                size={16}
                className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
