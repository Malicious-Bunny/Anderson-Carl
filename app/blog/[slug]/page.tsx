import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getAllPosts, getRelatedPosts, markdownToHtml, formatDate } from '~/utils/blog';
import { SITE } from '~/config.js';
import WidgetWrapper from '~/components/common/WidgetWrapper';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  const url = `${SITE.author.website}/blog/${post.slug}`;
  const imageUrl = post.image ? `${SITE.author.website}${post.image}` : `${SITE.author.website}/lawyer-consultation.jpg`;

  return {
    title: `${post.title} | ${SITE.name} Blog`,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: SITE.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_GB',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
    other: {
      'article:author': post.author,
      'article:published_time': post.date,
      'article:section': post.category,
      'article:tag': post.tags.join(','),
    },
  };
}

function BlogPostHeader({ post }: { post: any }) {
  return (
    <header className="mb-8">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link href="/blog" className="hover:text-gray-700">
              Blog
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-900" aria-current="page">
            {post.title}
          </li>
        </ol>
      </nav>

      {/* Category badge */}
      <div className="mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        {post.title}
      </h1>

      {/* Meta information */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
        <div className="flex items-center gap-2">
          <span>By</span>
          <span className="font-medium text-gray-900">{post.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <div className="flex items-center gap-2">
          <span>{post.readingTime} min read</span>
        </div>
      </div>

      {/* Featured image */}
      {post.image && (
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}

function BlogPostContent({ content }: { content: string }) {
  return (
    <div className="prose prose-lg max-w-none">
      <div
        dangerouslySetInnerHTML={{
          __html: markdownToHtml(content),
        }}
      />
    </div>
  );
}

function RelatedPosts({ posts }: { posts: any[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
            {post.image && (
              <div className="relative h-48 overflow-hidden">
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
                <span>{post.readingTime} min read</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);

  return (
    <>
      <WidgetWrapper
        containerClass="max-w-4xl mx-auto"
      >
        <article>
          <BlogPostHeader post={post} />
          <BlogPostContent content={post.content} />

          {/* Author bio */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {post.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  About {post.author}
                </h3>
                <p className="text-gray-600">
                  Expert UK document consultant with over 10 years of experience helping clients navigate complex immigration and civil document requirements. Specializing in fast-track processing and ensuring 99% success rates.
                </p>
              </div>
            </div>
          </div>

          <RelatedPosts posts={relatedPosts} />
        </article>
      </WidgetWrapper>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.description,
            "image": post.image ? `${SITE.author.website}${post.image}` : `${SITE.author.website}/lawyer-consultation.jpg`,
            "url": `${SITE.author.website}/blog/${post.slug}`,
            "datePublished": post.date,
            "dateModified": post.date,
            "author": {
              "@type": "Person",
              "name": post.author,
            },
            "publisher": {
              "@type": "Organization",
              "name": SITE.name,
              "url": SITE.author.website,
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${SITE.author.website}/blog/${post.slug}`,
            },
            "keywords": post.tags.join(", "),
            "articleSection": post.category,
            "wordCount": post.content.split(/\s+/).length,
            "timeRequired": `PT${post.readingTime}M`,
          }),
        }}
      />
    </>
  );
}
