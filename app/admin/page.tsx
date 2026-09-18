'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
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
      sessionStorage.setItem('admin_auth', 'true');
      setIsAuthenticated(true);
    } else {
      setError('Invalid password');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    setIsAuthenticated(false);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                placeholder="Enter admin password"
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const sections = [
    {
      title: 'Blog Posts',
      description: 'Create, edit, and manage blog posts',
      href: '/admin/blog',
      icon: '📝',
      color: 'blue',
    },
    {
      title: 'Services',
      description: 'Manage services, prices, and descriptions',
      href: '/admin/services',
      icon: '🔧',
      color: 'purple',
    },
    {
      title: 'Contact Info',
      description: 'Update phone, email, WhatsApp',
      href: '/admin/contact',
      icon: '📧',
      color: 'green',
    },
    {
      title: 'Homepage',
      description: 'Edit hero, stats, features, testimonials',
      href: '/admin/homepage',
      icon: '🏠',
      color: 'yellow',
    },
    {
      title: 'Navigation',
      description: 'Manage header and footer links',
      href: '/admin/navigation',
      icon: '🧭',
      color: 'indigo',
    },
    {
      title: 'Images',
      description: 'Upload and manage media files',
      href: '/admin/images',
      icon: '🖼️',
      color: 'pink',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">CMS Dashboard</h2>
          <p className="text-gray-600 mt-1">Manage all your site content in one place</p>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
        >
          Logout
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-900">
          <strong>✨ Powered by Supabase</strong> - All changes apply instantly to your live site!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <a
            key={section.href}
            href={section.href}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer border-l-4"
            style={{ borderColor: `var(--color-${section.color}-500, #3b82f6)` }}
          >
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-3">{section.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
              </div>
            </div>
            <p className="text-gray-600">{section.description}</p>
          </a>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 text-sm">Total Blog Posts</p>
            <p className="text-2xl font-bold text-gray-900">-</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 text-sm">Services</p>
            <p className="text-2xl font-bold text-gray-900">-</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 text-sm">Testimonials</p>
            <p className="text-2xl font-bold text-gray-900">-</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600 text-sm">Images</p>
            <p className="text-2xl font-bold text-gray-900">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}
