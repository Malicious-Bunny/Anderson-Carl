import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { IconArrowLeft, IconArrowUpRight } from '@tabler/icons-react';

import { SITE } from '~/config.js';
import {
  formatDate,
  getPostBySlug,
  getRelatedPosts,
  readingTime,
  renderMarkdown,
  type Post,
} from '~/lib/posts';
import { absoluteImage } from '~/lib/images';

// Posts are edited through the CMS, so pages must reflect the database on every
// request rather than a build-time snapshot.
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
  // Post images may be absolute (stock) or site-relative (uploads).
  const imageUrl = absoluteImage(post.image, SITE.author.website);

  return {
    title: post.title,
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

function RelatedCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-paper transition-colors duration-150 hover:bg-ink-50"
    >
      {post.image && (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between gap-5 p-7">
        <div>
          <p className="eyebrow mb-2 text-ink-400">{post.category}</p>
          <h3 className="text-lg">{post.title}</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700">
          Read
          <IconArrowUpRight
            size={16}
            className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post, 3);
  const html = renderMarkdown(post.content);
  const minutes = readingTime(post.content);

  return (
    <article className="pb-20">
      {post.image ? (
        <div className="relative mt-20 h-72 w-full md:h-[26rem]">
          <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-ink-900/70" />
          <div className="container-page relative flex h-full flex-col justify-end pb-10">
            <p className="eyebrow mb-3 text-clay-300">{post.category}</p>
            <h1 className="max-w-3xl text-balance text-paper">{post.title}</h1>
            <p className="mt-4 text-sm text-ink-200">
              {post.author} · {formatDate(post.date)} · {minutes} min read
            </p>
          </div>
        </div>
      ) : (
        <section className="border-b border-ink-200 pt-32 pb-12 md:pt-40">
          <div className="container-page">
            <p className="eyebrow mb-4">{post.category}</p>
            <h1 className="max-w-3xl text-balance">{post.title}</h1>
            <p className="mt-4 text-sm text-ink-400">
              {post.author} · {formatDate(post.date)} · {minutes} min read
            </p>
          </div>
        </section>
      )}

      <div className="container-page">
        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-800"
        >
          <IconArrowLeft size={16} />
          All articles
        </Link>

        {post.description && (
          <p className="mt-6 max-w-prose border-l-2 border-clay-400 pl-6 text-lg text-ink-600">
            {post.description}
          </p>
        )}

        {/* markdown-it output, styled by @tailwindcss/typography. Tables scroll
            rather than breaking narrow screens. */}
        <div
          className="prose prose-lg mt-12 max-w-prose
            prose-headings:font-display prose-headings:font-medium prose-headings:text-ink-800
            prose-h2:text-2xl prose-h3:text-xl
            prose-p:text-ink-500 prose-li:text-ink-500
            prose-a:text-forest-700 prose-a:font-medium
            prose-strong:text-ink-700
            prose-blockquote:border-l-clay-400 prose-blockquote:bg-ink-25
            prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-ink-600
            prose-code:text-clay-600 prose-code:bg-ink-50 prose-code:px-1.5 prose-code:py-0.5
            prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-ink-900 prose-pre:text-ink-100
            prose-th:bg-ink-50 prose-th:text-ink-800 prose-td:align-top
            prose-img:border prose-img:border-ink-200
            prose-hr:border-ink-200
            [&_table]:block [&_table]:overflow-x-auto [&_table]:whitespace-nowrap
            md:[&_table]:table md:[&_table]:whitespace-normal"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {(post.tags || []).length > 0 && (
          <div className="mt-12 flex flex-wrap gap-2 border-t border-ink-200 pt-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-ink-200 px-3 py-1.5 text-sm font-medium text-ink-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-12 border border-ink-200 bg-ink-25 p-8">
          <p className="eyebrow mb-3">About the author</p>
          <h2 className="text-xl">{post.author}</h2>
          <p className="mt-3 max-w-prose">
            UK document consultant helping clients through passport, visa and civil document
            applications — from assembling the right paperwork to tracking an application
            through to completion.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-ink-200 pt-16">
          <div className="container-page">
            <h2 className="mb-8">Related articles</h2>
            <div className="grid gap-px overflow-hidden border border-ink-200 bg-ink-200 md:grid-cols-3">
              {related.map((item) => (
                <RelatedCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            image: absoluteImage(post.image, SITE.author.website),
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
    </article>
  );
}
