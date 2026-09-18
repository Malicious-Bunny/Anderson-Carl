'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactAdminPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [officeLocation, setOfficeLocation] = useState('');
  const [availability, setAvailability] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_auth');
    if (auth !== 'true') {
      router.push('/admin');
      return;
    }
    fetchContactInfo();
  }, [router]);

  const fetchContactInfo = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/contact');
    const data = await res.json();
    setEmail(data.email || '');
    setPhone(data.phone || '');
    setWhatsapp(data.whatsapp || '');
    setOfficeLocation(data.office_location || '');
    setAvailability(data.availability || '');
    setLoading(false);
  };

  const handleSave = async () => {
    const res = await fetch('/api/admin/contact', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        phone,
        whatsapp,
        office_location: officeLocation,
        availability
      }),
    });

    if (res.ok) {
      alert('Contact info updated successfully! Changes are live immediately.');
    } else {
      alert('Failed to update contact info');
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            placeholder="support@andersoncarlconsultancy.uk"
          />
          <p className="text-sm text-gray-500 mt-1">
            This email will appear in the contact section and footer
          </p>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            placeholder="+44 7529 418057"
          />
          <p className="text-sm text-gray-500 mt-1">
            Include country code (e.g., +44 for UK)
          </p>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">WhatsApp Number</label>
          <input
            type="tel"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            placeholder="447529418057"
          />
          <p className="text-sm text-gray-500 mt-1">
            Without + or spaces (e.g., 447529418057)
          </p>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Office Location</label>
          <input
            type="text"
            value={officeLocation}
            onChange={(e) => setOfficeLocation(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            placeholder="Central London, UK"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Availability</label>
          <input
            type="text"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            placeholder="24/7 Support"
          />
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-800">
            <strong>✨ Live Updates!</strong> Changes take effect immediately on your website - no rebuild needed.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition font-medium"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
