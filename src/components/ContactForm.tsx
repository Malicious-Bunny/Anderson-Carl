'use client';

import { useState } from 'react';

// Opens the visitor's mail client with the message pre-filled. The address
// comes from the CMS rather than being hardcoded, so changing it in /admin
// changes it here too.
export default function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [message, setMessage] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name || 'website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${from}\n\n${message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const field =
    'w-full border border-ink-200 bg-paper px-4 py-3 text-ink-700 placeholder:text-ink-300 focus:border-forest-600 focus:outline-none';

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink-600">
            Your name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={field}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink-600">
            Your email
          </label>
          <input
            id="email"
            type="email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
            className={field}
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink-600">
          What do you need help with?
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          className={field}
          placeholder="Tell us which document you need and any deadline you are working to."
        />
      </div>

      <button type="submit" className="btn btn-primary justify-self-start">
        Send enquiry
      </button>

      <p className="text-sm text-ink-400">
        This opens your email app with the message ready to send. If it does not open, email us
        directly at{' '}
        <a href={`mailto:${email}`} className="font-medium text-forest-700">
          {email}
        </a>
        .
      </p>
    </form>
  );
}
