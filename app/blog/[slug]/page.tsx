'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import WidgetWrapper from '~/components/common/WidgetWrapper';

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

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-gray-900 mt-10 mb-5">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-gray-900 mt-12 mb-6">$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-bold text-gray-900">$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="text-blue-900 hover:text-blue-700 underline font-medium">$1</a>');

  // Lists
  html = html.replace(/^\* (.*$)/gim, '<li class="ml-6 mb-2">$1</li>');
  html = html.replace(/^- (.*$)/gim, '<li class="ml-6 mb-2">$1</li>');
  html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc my-6 space-y-2">$1</ul>');

  // Numbered lists
  html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2">$1</li>');

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-blue-900 pl-6 py-2 my-6 italic text-gray-700 bg-blue-50 rounded-r-lg">$1</blockquote>');

  // Code blocks
  html = html.replace(/```([^`]+)```/gim, '<pre class="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-6"><code>$1</code></pre>');
  html = html.replace(/`([^`]+)`/gim, '<code class="bg-gray-100 text-gray-900 px-2 py-1 rounded text-sm font-mono">$1</code>');

  // Paragraphs
  html = html.replace(/\n\n/g, '</p><p class="text-gray-700 leading-relaxed mb-6">');
  html = '<p class="text-gray-700 leading-relaxed mb-6">' + html + '</p>';

  // Line breaks
  html = html.replace(/\n/g, '<br>');

  return html;
}

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.slug) {
      fetchPost(params.slug as string);
    }
  }, [params.slug]);

  const fetchPost = async (slug: string) => {
    try {
      // Fetch the specific post
      const res = await fetch(`/api/blog/public/${slug}`);
      if (res.ok) {
        const data = await res.json();
        setPost(data.post);

        // Fetch related posts
        if (data.post) {
          fetchRelatedPosts(data.post.category, slug);
        }
      } else {
        router.push('/blog');
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      router.push('/blog');
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedPosts = async (category: string, currentSlug: string) => {
    try {
      const res = await fetch('/api/blog/public');
      if (res.ok) {
        const data = await res.json();
        const related = (data.posts || [])
          .filter((p: BlogPost) => p.category === category && p.slug !== currentSlug)
          .slice(0, 3);
        setRelatedPosts(related);
      }
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  if (loading) {
    return (
      <WidgetWrapper containerClass="max-w-4xl mx-auto">
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-900"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
      </WidgetWrapper>
    );
  }

  if (!post) {
    return (
      <WidgetWrapper containerClass="max-w-4xl mx-auto">
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-900 hover:text-blue-700 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </WidgetWrapper>
    );
  }

  const readingTime = calculateReadingTime(post.content);

  return (
    <>
      <WidgetWrapper containerClass="max-w-5xl mx-auto">
        <article>
          {/* Breadcrumb */}
          <nav className="mb-6 py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-blue-900 transition-colors">
                  Home
                </Link>
              </li>
              <li><span className="mx-2 text-gray-400">/</span></li>
              <li>
                <Link href="/blog" className="hover:text-blue-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li><span className="mx-2 text-gray-400">/</span></li>
              <li className="text-gray-900 font-medium truncate max-w-xs" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            {/* Category badge */}
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-900 text-white">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 pb-6 border-b-2 border-gray-100">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime={post.date} className="font-medium">{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">{readingTime} min read</span>
              </div>
            </div>

            {/* Featured image */}
            {post.image && (
              <div className="relative h-72 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-10 shadow-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Description */}
            <div className="text-xl text-gray-700 leading-relaxed mb-8 p-6 bg-blue-50 border-l-4 border-blue-900 rounded-r-xl">
              {post.description}
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-lg leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(post.content),
              }}
            />
          </div>

          {/* Author bio */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-white rounded-2xl border-2 border-blue-100 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  About {post.author}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Expert UK document consultant with over 10 years of experience helping clients navigate complex immigration and civil document requirements. Specializing in fast-track processing and ensuring 99% success rates.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-12 border-t-2 border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.slug} className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
                    {relatedPost.image && (
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <time dateTime={relatedPost.date}>{formatDate(relatedPost.date)}</time>
                        <span>•</span>
                        <span>{calculateReadingTime(relatedPost.content)} min</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {relatedPost.description}
                      </p>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="inline-flex items-center text-blue-900 hover:text-blue-700 font-semibold text-sm transition-colors"
                      >
                        Read more →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-semibold transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All Articles
            </Link>
          </div>
        </article>
      </WidgetWrapper>
    </>
  );
}
