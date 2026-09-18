import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { IconArrowUpRight } from '@tabler/icons-react';

import { SITE } from '~/config.js';
import { formatDate, getPublishedPosts, readingTime, type Post } from '~/lib/posts';

// Posts are edited through the CMS, so this must reflect the database on every
// request rather than a build-time snapshot.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Updates on UK document requirements, immigration policy and practical guidance from Anderson Carl.',
  openGraph: {
    title: `Blog | ${SITE.name}`,
    description:
      'Updates on UK document requirements, immigration policy and practical guidance.',
    url: `${SITE.author.website}/blog`,
    siteName: SITE.name,
    locale: 'en_GB',
    type: 'website',
  },
  alternates: { canonical: `${SITE.author.website}/blog` },
};

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-paper transition-colors duration-150 hover:bg-ink-50"
    >
      {post.image && (
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between gap-6 p-7">
        <div>
          <p className="eyebrow mb-2 text-ink-400">{post.category}</p>
          <h3 className="text-lg">{post.title}</h3>
          <p className="mt-2 line-clamp-3 text-[0.95rem]">{post.description}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700">
            Read
            <IconArrowUpRight
              size={16}
              className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
          <span className="text-sm text-ink-400">
            {formatDate(post.date)} · {readingTime(post.content)} min
          </span>
        </div>
      </div>
    </Link>
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

  // Only show the featured hero on the unfiltered view, so a filtered view
  // never hides a matching post.
  const featured = activeCategory ? [] : posts.filter((post) => post.featured).slice(0, 1);
  const featuredSlugs = new Set(featured.map((post) => post.slug));
  const rest = posts.filter((post) => !featuredSlugs.has(post.slug));

  return (
    <>
      <section className="border-b border-ink-200 pt-32 pb-16 md:pt-40">
        <div className="container-page">
          <p className="eyebrow mb-6">Our blog</p>
          <h1 className="max-w-3xl text-balance">
            UK document insights and practical guidance
          </h1>
          <p className="mt-6 max-w-prose text-lg">
            Updates on requirements, processing realities and the mistakes that cost applicants
            time and money — written by the people who handle these applications daily.
          </p>
        </div>
      </section>

      {featured.map((post) => (
        <section key={post.slug} className="border-b border-ink-200">
          <div className="container-page">
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-px bg-ink-200 md:grid-cols-2"
            >
              {post.image && (
                <div className="relative h-64 w-full overflow-hidden md:h-[26rem]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center bg-paper p-8 md:p-12">
                <p className="eyebrow mb-4">Featured · {post.category}</p>
                <h2 className="text-balance">{post.title}</h2>
                <p className="mt-4 max-w-prose text-lg">{post.description}</p>
                <p className="mt-6 text-sm text-ink-400">
                  {formatDate(post.date)} · {readingTime(post.content)} min read
                </p>
                <span className="mt-7 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-forest-700">
                  Read full article
                  <IconArrowUpRight
                    size={16}
                    className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </Link>
          </div>
        </section>
      ))}

      {categories.length > 0 && (
        <section className="border-b border-ink-200 py-8">
          <div className="container-page flex flex-wrap items-center gap-3">
            <span className="mr-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
              Filter
            </span>
            <Link
              href="/blog"
              className={`border px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                activeCategory
                  ? 'border-ink-200 text-ink-600 hover:border-ink-800 hover:text-ink-800'
                  : 'border-ink-800 bg-ink-800 text-paper'
              }`}
            >
              All ({allPosts.length})
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className={`border px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                  activeCategory === category
                    ? 'border-ink-800 bg-ink-800 text-paper'
                    : 'border-ink-200 text-ink-600 hover:border-ink-800 hover:text-ink-800'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="py-16 md:py-20">
        <div className="container-page">
          {rest.length > 0 ? (
            <>
              <h2 className="mb-8">
                {activeCategory ? `${activeCategory} (${rest.length})` : 'Latest articles'}
              </h2>
              <div className="grid gap-px overflow-hidden border border-ink-200 bg-ink-200 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="border border-ink-200 bg-ink-25 p-12 text-center">
              <h2 className="text-2xl">
                {activeCategory ? `Nothing in ${activeCategory} yet` : 'No articles yet'}
              </h2>
              <p className="mt-3 text-ink-500">
                {activeCategory
                  ? 'Try another category, or browse everything.'
                  : 'Check back soon for guidance on UK document services.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
