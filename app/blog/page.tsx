'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WidgetWrapper from '~/components/common/WidgetWrapper';
import Headline from '~/components/common/Headline';

interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  featured?: boolean;
  content: string;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  const readingTime = calculateReadingTime(post.content);

  return (
    <article className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
      {post.image && (
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-900 text-white shadow-lg">
              {post.category}
            </span>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <time dateTime={post.date} className="font-medium">{formatDate(post.date)}</time>
          <span>•</span>
          <span>{readingTime} min read</span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="block">
            {post.title}
          </Link>
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-blue-900 hover:text-blue-700 font-semibold text-sm transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blog/public');
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts || []);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const featuredPosts = posts.filter(post => post.featured).slice(0, 1);
  const regularPosts = posts.filter(post => !post.featured);
  const categories = [...new Set(posts.map(post => post.category))].sort();

  return (
    <>
      <WidgetWrapper
        id="blog-hero"
        hasBackground={true}
        containerClass="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12 py-8">
          <Headline
            header={{
              title: "UK Document Insights & Expert Guidance",
              subtitle: "Stay informed with the latest updates on UK document requirements, immigration policies, and professional insights from our expert consultants.",
              tagline: "Our Blog",
              position: "center"
            }}
            containerClass="text-center"
            titleClass="text-4xl md:text-5xl font-bold text-gray-900"
            subtitleClass="text-xl text-gray-600 mt-4 max-w-3xl mx-auto"
          />
        </div>
      </WidgetWrapper>

      <WidgetWrapper
        containerClass="max-w-7xl mx-auto"
      >
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-900"></div>
            <p className="mt-4 text-gray-600">Loading articles...</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPosts.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="text-yellow-500">⭐</span> Featured Article
                </h2>
                <div className="grid gap-8">
                  {featuredPosts.map((post) => (
                    <article key={post.slug} className="relative bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-100 lg:grid lg:grid-cols-2 lg:gap-0">
                      {post.image && (
                        <div className="relative h-72 lg:h-full bg-gray-100">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="p-8 lg:p-12 lg:flex lg:flex-col lg:justify-center">
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-yellow-400 text-gray-900 shadow-sm">
                            ⭐ FEATURED
                          </span>
                          <time dateTime={post.date} className="font-medium">{formatDate(post.date)}</time>
                          <span>•</span>
                          <span>{calculateReadingTime(post.content)} min read</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                          <Link href={`/blog/${post.slug}`} className="hover:text-blue-900 transition-colors">
                            {post.title}
                          </Link>
                        </h2>

                        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                          {post.description}
                        </p>

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center px-8 py-3.5 rounded-lg bg-blue-900 text-white hover:bg-blue-800 font-semibold transition-colors shadow-lg hover:shadow-xl"
                        >
                          Read Full Article →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* Categories Filter */}
            {categories.length > 0 && (
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h3>
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-blue-900 text-white shadow-md hover:bg-blue-800 transition-colors">
                    All Posts ({posts.length})
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-900 hover:text-blue-900 transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Blog Posts Grid */}
            {regularPosts.length > 0 ? (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {regularPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 rounded-2xl">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No blog posts yet
                </h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">
                  Check back soon for expert insights and updates on UK document services.
                </p>
              </div>
            ) : null}
          </>
        )}
      </WidgetWrapper>
    </>
  );
}
