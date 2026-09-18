import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '~/config.js';
import WidgetWrapper from '~/components/common/WidgetWrapper';
import Headline from '~/components/common/Headline';
import { formatDate, getPublishedPosts, readingTime, type Post } from '~/lib/posts';

// Posts are edited through the CMS, so this must reflect the database on every
// request rather than a build-time snapshot.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `Blog | ${SITE.name} - UK Document Insights & Updates`,
  description:
    'Stay updated with the latest UK document requirements, immigration news, and expert insights from Anderson Carl Consultancy. Professional guidance for passport, visa, and certificate applications.',
  openGraph: {
    title: `Blog | ${SITE.name} - UK Document Insights & Updates`,
    description:
      'Stay updated with the latest UK document requirements, immigration news, and expert insights from Anderson Carl Consultancy.',
    url: `${SITE.author.website}/blog`,
    siteName: SITE.name,
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog | ${SITE.name} - UK Document Insights & Updates`,
    description: 'Stay updated with the latest UK document requirements and expert insights.',
  },
  alternates: { canonical: `${SITE.author.website}/blog` },
};

function BlogCard({ post }: { post: Post }) {
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
          <span>{readingTime(post.content)} min read</span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {(post.tags || []).slice(0, 2).map((tag) => (
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

interface BlogPageProps {
  searchParams: { category?: string };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const allPosts = await getPublishedPosts();
  const categories = Array.from(new Set(allPosts.map((post) => post.category))).sort();

  const activeCategory =
    searchParams.category && categories.includes(searchParams.category)
      ? searchParams.category
      : null;

  const posts = activeCategory
    ? allPosts.filter((post) => post.category === activeCategory)
    : allPosts;

  // Only show the featured hero when viewing everything, so a filtered view
  // never hides a matching post.
  const featured = activeCategory ? [] : posts.filter((post) => post.featured).slice(0, 1);
  const featuredSlugs = new Set(featured.map((post) => post.slug));
  const rest = posts.filter((post) => !featuredSlugs.has(post.slug));

  return (
    <>
      <WidgetWrapper id="blog-hero" hasBackground={true} containerClass="max-w-7xl mx-auto">
        <div className="text-center mb-12 py-8">
          <Headline
            header={{
              title: 'UK Document Insights & Expert Guidance',
              subtitle:
                'Stay informed with the latest updates on UK document requirements, immigration policies, and professional insights from our expert consultants.',
              tagline: 'Our Blog',
              position: 'center',
            }}
            containerClass="text-center"
            titleClass="text-4xl md:text-5xl font-bold text-gray-900"
            subtitleClass="text-xl text-gray-600 mt-4 max-w-3xl mx-auto"
          />
        </div>
      </WidgetWrapper>

      <WidgetWrapper containerClass="max-w-7xl mx-auto">
        {featured.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
            {featured.map((post) => (
              <article
                key={post.slug}
                className="relative bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-100 lg:grid lg:grid-cols-2"
              >
                {post.image && (
                  <div className="relative h-72 lg:h-full bg-gray-100">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                )}
                <div className="p-8 lg:p-12 lg:flex lg:flex-col lg:justify-center">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-yellow-400 text-gray-900 shadow-sm">
                      FEATURED
                    </span>
                    <time dateTime={post.date} className="font-medium">{formatDate(post.date)}</time>
                    <span>•</span>
                    <span>{readingTime(post.content)} min read</span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-900 transition-colors">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{post.description}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex self-start items-center px-8 py-3.5 rounded-lg bg-blue-900 text-white hover:bg-blue-800 font-semibold transition-colors shadow-lg hover:shadow-xl"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {categories.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className={`inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory
                    ? 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-900 hover:text-blue-900'
                    : 'bg-blue-900 text-white shadow-md hover:bg-blue-800'
                }`}
              >
                All Posts ({allPosts.length})
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/blog?category=${encodeURIComponent(category)}`}
                  className={`inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-900 text-white shadow-md hover:bg-blue-800'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-900 hover:text-blue-900'
                  }`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}

        {rest.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {activeCategory ? `${activeCategory} (${rest.length})` : 'Latest Articles'}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {activeCategory ? `No posts in ${activeCategory}` : 'No blog posts yet'}
            </h2>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              {activeCategory
                ? 'Try another category, or browse all posts.'
                : 'Check back soon for expert insights and updates on UK document services.'}
            </p>
          </div>
        )}
      </WidgetWrapper>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: `${SITE.name} Blog`,
            description:
              'Expert insights and updates on UK document services, immigration, and legal requirements.',
            url: `${SITE.author.website}/blog`,
            publisher: {
              '@type': 'Organization',
              name: SITE.name,
              url: SITE.author.website,
            },
            blogPost: allPosts.slice(0, 10).map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.description,
              url: `${SITE.author.website}/blog/${post.slug}`,
              datePublished: post.date,
              author: { '@type': 'Person', name: post.author },
            })),
          }),
        }}
      />
    </>
  );
}
