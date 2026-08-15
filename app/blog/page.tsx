import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, getAllCategories, formatDate } from '~/utils/blog';
import { SITE } from '~/config.js';
import WidgetWrapper from '~/components/common/WidgetWrapper';
import Headline from '~/components/common/Headline';

export const metadata: Metadata = {
  title: `Blog | ${SITE.name} - UK Document Insights & Updates`,
  description: 'Stay updated with the latest UK document requirements, immigration news, and expert insights from Anderson Carl Consultancy. Professional guidance for passport, visa, and certificate applications.',
  openGraph: {
    title: `Blog | ${SITE.name} - UK Document Insights & Updates`,
    description: 'Stay updated with the latest UK document requirements, immigration news, and expert insights from Anderson Carl Consultancy.',
    url: `${SITE.author.website}/blog`,
    siteName: SITE.name,
    images: [
      {
        url: '/lawyer-consultation.jpg',
        width: 1200,
        height: 630,
        alt: 'Anderson Carl Blog - UK Document Insights',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog | ${SITE.name} - UK Document Insights & Updates`,
    description: 'Stay updated with the latest UK document requirements, immigration news, and expert insights.',
    images: ['/lawyer-consultation.jpg'],
  },
  alternates: {
    canonical: `${SITE.author.website}/blog`,
  },
};

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
    image?: string;
    readingTime: number;
    excerpt: string;
  };
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      {post.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500 text-white">
              {post.category}
            </span>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.readingTime} min read</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          <Link href={`/blog/${post.slug}`} className="block">
            {post.title}
          </Link>
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featuredPosts = posts.filter(post => post.featured).slice(0, 1);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <>
      <WidgetWrapper
        id="blog-hero"
        hasBackground={true}
        containerClass="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
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
        containerClass="max-w-6xl mx-auto"
      >
        {/* Featured Post */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
            <div className="grid gap-8">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 lg:grid lg:grid-cols-2 lg:gap-8">
                  {post.image && (
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8 lg:py-12">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500 text-white">
                        Featured
                      </span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>•</span>
                      <span>{post.readingTime} min read</span>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 mb-6 text-lg">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 font-medium transition-colors"
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
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 hover:bg-primary-200 transition-colors"
              >
                All Posts
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/blog?category=${encodeURIComponent(category)}`}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        {regularPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No blog posts yet
            </h3>
            <p className="text-gray-600">
              Check back soon for expert insights and updates on UK document services.
            </p>
          </div>
        )}
      </WidgetWrapper>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": `${SITE.name} Blog`,
            "description": "Expert insights and updates on UK document services, immigration, and legal requirements.",
            "url": `${SITE.author.website}/blog`,
            "publisher": {
              "@type": "Organization",
              "name": SITE.name,
              "url": SITE.author.website,
            },
            "blogPost": posts.slice(0, 10).map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.description,
              "url": `${SITE.author.website}/blog/${post.slug}`,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": post.author,
              },
              "publisher": {
                "@type": "Organization",
                "name": SITE.name,
              },
            })),
          }),
        }}
      />
    </>
  );
}
