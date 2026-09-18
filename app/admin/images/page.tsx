'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { checkSession } from '~/lib/adminSession';

export default function ImagesAdminPage() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkSession().then((valid) => {
      if (!valid) {
        router.push('/admin');
        return;
      }
      fetchImages();
    });
  }, [router]);

  const fetchImages = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/images');
    const data = await res.json();
    setImages(data.images || []);
    setLoading(false);
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append('files', file);
    });

    const res = await fetch('/api/admin/images', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('Images uploaded!');
      fetchImages();
    } else {
      alert('Failed to upload images');
    }
  };

  const handleDelete = async (imagePath: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    const res = await fetch('/api/admin/images', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imagePath }),
    });

    if (res.ok) {
      alert('Image deleted!');
      fetchImages();
    }
  };

  const copyToClipboard = (path: string) => {
    navigator.clipboard.writeText(path);
    alert(`Copied: ${path}`);
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Image Management</h2>
        <label className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition cursor-pointer">
          + Upload Images
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />
        </label>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {images.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No images uploaded yet. Upload your first one!
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 space-y-2">
                  <button
                    onClick={() => copyToClipboard(image)}
                    className="w-full px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm"
                  >
                    Copy Path
                  </button>
                  <button
                    onClick={() => handleDelete(image)}
                    className="w-full px-3 py-1 bg-red-100 hover:bg-red-200 text-red-700 rounded text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
