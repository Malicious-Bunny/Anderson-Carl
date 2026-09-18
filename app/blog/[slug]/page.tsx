import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '~/config.js';
import WidgetWrapper from '~/components/common/WidgetWrapper';
import {
  formatDate,
  getPostBySlug,
  getPublishedPosts,
  getRelatedPosts,
  readingTime,
  renderMarkdown,
  type Post,
} from '~/lib/posts';

// Posts are edited through the CMS, so pages must reflect the database on
// every request rather than a build-time snapshot.
export const dynamic = 'force-dynamic';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  const url = `${SITE.author.website}/blog/${post.slug}`;
  const imageUrl = post.image
    ? `${SITE.author.website}${post.image}`
    : `${SITE.author.website}/passport-1.jpg`;

  return {
    title: `${post.title} | ${SITE.name} Blog`,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: (post.tags || []).join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: SITE.name,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
      locale: 'en_GB',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags || [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
    alternates: { canonical: url },
  };
}

function RelatedPostCard({ post }: { post: Post }) {
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
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{readingTime(post.content)} min</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.description}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-900 hover:text-blue-700 font-semibold text-sm transition-colors"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const related = await getRelatedPosts(post, 3);
  const html = renderMarkdown(post.content);
  const minutes = readingTime(post.content);

  return (
    <>
      <WidgetWrapper containerClass="max-w-5xl mx-auto">
        <article>
          <nav className="mb-6 py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-blue-900 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true"><span className="mx-2 text-gray-400">/</span></li>
              <li>
                <Link href="/blog" className="hover:text-blue-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true"><span className="mx-2 text-gray-400">/</span></li>
              <li className="text-gray-900 font-medium truncate max-w-xs" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <header className="mb-10">
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-900 text-white">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 pb-6 border-b-2 border-gray-100">
              <span className="font-medium text-gray-900">{post.author}</span>
              <time dateTime={post.date} className="font-medium">{formatDate(post.date)}</time>
              <span className="font-medium">{minutes} min read</span>
            </div>

            {post.image && (
              <div className="relative h-72 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-10 shadow-2xl">
                <Image src={post.image} alt={post.title} fill className="object-cover" priority />
              </div>
            )}

            {post.description && (
              <p className="text-xl text-gray-700 leading-relaxed mb-8 p-6 bg-blue-50 border-l-4 border-blue-900 rounded-r-xl">
                {post.description}
              </p>
            )}

            {(post.tags || []).length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Rendered by markdown-it; styled by @tailwindcss/typography.
              Tables scroll horizontally rather than breaking narrow screens. */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-p:text-gray-700 prose-li:text-gray-700
              prose-a:text-blue-900 prose-a:font-medium hover:prose-a:text-blue-700
              prose-strong:text-gray-900
              prose-blockquote:border-l-blue-900 prose-blockquote:bg-blue-50
              prose-blockquote:py-1 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
              prose-code:text-blue-900 prose-code:bg-gray-100 prose-code:px-1.5
              prose-code:py-0.5 prose-code:rounded prose-code:before:content-none
              prose-code:after:content-none
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-table:w-full prose-th:bg-gray-100 prose-th:text-gray-900
              prose-td:align-top
              prose-img:rounded-xl prose-hr:border-gray-200
              [&_table]:block [&_table]:overflow-x-auto [&_table]:whitespace-nowrap
              md:[&_table]:table md:[&_table]:whitespace-normal"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-white rounded-2xl border-2 border-blue-100 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">About {post.author}</h2>
                <p className="text-gray-700 leading-relaxed">
                  UK document consultant helping clients navigate passport, visa and civil
                  document applications — from assembling the right paperwork to tracking an
                  application through to completion.
                </p>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-16 pt-12 border-t-2 border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <RelatedPostCard key={item.slug} post={item} />
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-semibold transition-colors shadow-lg"
            >
              ← Back to All Articles
            </Link>
          </div>
        </article>
      </WidgetWrapper>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            image: post.image ? `${SITE.author.website}${post.image}` : undefined,
            url: `${SITE.author.website}/blog/${post.slug}`,
            datePublished: post.date,
            dateModified: post.date,
            author: { '@type': 'Person', name: post.author },
            publisher: { '@type': 'Organization', name: SITE.name, url: SITE.author.website },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${SITE.author.website}/blog/${post.slug}`,
            },
            keywords: (post.tags || []).join(', '),
            articleSection: post.category,
            wordCount: post.content.split(/\s+/).length,
            timeRequired: `PT${minutes}M`,
          }),
        }}
      />
    </>
  );
}
