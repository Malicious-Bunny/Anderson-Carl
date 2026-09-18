'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { checkSession } from '~/lib/adminSession';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  featured: boolean;
  published: boolean;
  content: string;
}

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [imageOk, setImageOk] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    checkSession().then((valid) => {
      if (!valid) {
        router.push('/admin');
        return;
      }
      fetchPosts();
    });
  }, [router]);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/blog');
    const data = await res.json();
    setPosts(data.posts || []);
    setLoading(false);
  };

  const handleCreateNew = () => {
    setEditingPost({
      id: '',
      slug: '',
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      author: 'Anderson Carl',
      category: 'General',
      tags: [],
      image: '',
      featured: false,
      published: true,
      content: '',
    });
    setIsCreating(true);
  };

  const handleSave = async () => {
    if (!editingPost) return;

    const method = isCreating ? 'POST' : 'PUT';
    const res = await fetch('/api/admin/blog', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editingPost),
    });

    if (res.ok) {
      alert(isCreating ? 'Post created!' : 'Post updated!');
      setEditingPost(null);
      setIsCreating(false);
      fetchPosts();
    } else {
      const data = await res.json();
      alert(data.error || 'Failed to save post');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    const res = await fetch('/api/admin/blog', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      alert('Post deleted!');
      fetchPosts();
    }
  };

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (editingPost) {
    return (
      <div className="bg-paper rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-ink-900">
            {isCreating ? 'Create New Post' : 'Edit Post'}
          </h2>
          <button
            onClick={() => {
              setEditingPost(null);
              setIsCreating(false);
            }}
            className="text-ink-500 hover:text-ink-800"
          >
            Cancel
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-ink-600 font-medium mb-2">Slug (URL)</label>
            <input
              type="text"
              value={editingPost.slug}
              onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 text-ink-900"
              placeholder="my-blog-post"
              disabled={!isCreating}
            />
            {!isCreating && <p className="text-sm text-ink-400 mt-1">Slug cannot be changed after creation</p>}
          </div>

          <div>
            <label className="block text-ink-600 font-medium mb-2">Title</label>
            <input
              type="text"
              value={editingPost.title}
              onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 text-ink-900"
            />
          </div>

          <div>
            <label className="block text-ink-600 font-medium mb-2">Description</label>
            <textarea
              value={editingPost.description}
              onChange={(e) => setEditingPost({ ...editingPost, description: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 text-ink-900"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-ink-600 font-medium mb-2">Date</label>
              <input
                type="date"
                value={editingPost.date}
                onChange={(e) => setEditingPost({ ...editingPost, date: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 text-ink-900"
              />
            </div>
            <div>
              <label className="block text-ink-600 font-medium mb-2">Author</label>
              <input
                type="text"
                value={editingPost.author}
                onChange={(e) => setEditingPost({ ...editingPost, author: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 text-ink-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-ink-600 font-medium mb-2">Category</label>
              <input
                type="text"
                value={editingPost.category}
                onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 text-ink-900"
              />
            </div>
            <div>
              <label className="block text-ink-600 font-medium mb-2">Tags (comma-separated)</label>
              <input
                type="text"
                value={editingPost.tags.join(', ')}
                onChange={(e) => setEditingPost({ ...editingPost, tags: e.target.value.split(',').map(t => t.trim()).filter(t => t) })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 text-ink-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-ink-600 font-medium mb-2">Image URL</label>
            <input
              type="text"
              value={editingPost.image || ''}
              onChange={(e) => {
                setEditingPost({ ...editingPost, image: e.target.value });
                setImageOk(null);
              }}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 text-ink-900"
              placeholder="/passport-1.jpg"
            />

            {/* A typo here silently ships a broken image, so show it immediately. */}
            {editingPost.image ? (
              <div className="mt-3 flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={editingPost.image}
                  alt=""
                  className="h-24 w-32 flex-shrink-0 border border-ink-200 object-cover"
                  onLoad={() => setImageOk(true)}
                  onError={() => setImageOk(false)}
                />
                <p
                  className={`text-sm ${
                    imageOk === false ? 'font-medium text-clay-600' : 'text-ink-400'
                  }`}
                >
                  {imageOk === false
                    ? 'This image could not be loaded — check the path. Upload files under Images and copy the path from there.'
                    : imageOk
                      ? 'Image loads correctly.'
                      : 'Checking image…'}
                </p>
              </div>
            ) : (
              <p className="mt-2 text-sm text-ink-400">
                Optional. Upload under Images and copy the path from there.
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={editingPost.featured}
                onChange={(e) => setEditingPost({ ...editingPost, featured: e.target.checked })}
                className="mr-2"
              />
              <span className="text-ink-600">Featured</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={editingPost.published}
                onChange={(e) => setEditingPost({ ...editingPost, published: e.target.checked })}
                className="mr-2"
              />
              <span className="text-ink-600">Published</span>
            </label>
          </div>

          <div>
            <label className="block text-ink-600 font-medium mb-2">Content (Markdown)</label>
            <textarea
              value={editingPost.content}
              onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-500 font-mono text-sm text-ink-900"
              rows={15}
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-ink-800 text-paper py-3 rounded-lg hover:bg-ink-700 transition font-medium"
          >
            {isCreating ? 'Create Post' : 'Save Changes'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-ink-900">Blog Posts</h2>
        <button
          onClick={handleCreateNew}
          className="px-4 py-2 bg-ink-800 text-paper rounded-lg hover:bg-ink-700 transition"
        >
          + Create New Post
        </button>
      </div>

      <div className="bg-paper rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-ink-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-ink-400 uppercase">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-ink-400 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-ink-400 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-ink-400 uppercase">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-ink-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-200">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 text-ink-900">{post.title}</td>
                <td className="px-6 py-4 text-ink-500">{post.category}</td>
                <td className="px-6 py-4 text-ink-500">{post.date}</td>
                <td className="px-6 py-4">
                  {post.published ? (
                    <span className="px-2 py-1 bg-forest-100 text-forest-800 rounded text-xs">Published</span>
                  ) : (
                    <span className="px-2 py-1 bg-ink-100 text-ink-800 rounded text-xs">Draft</span>
                  )}
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button
                    onClick={() => setEditingPost(post)}
                    className="text-forest-600 hover:text-ink-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {posts.length === 0 && (
          <div className="text-center py-12 text-ink-400">
            No posts yet. Create your first one!
          </div>
        )}
      </div>
    </div>
  );
}
