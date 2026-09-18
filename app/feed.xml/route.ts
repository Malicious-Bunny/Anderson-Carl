import { getPublishedPosts } from '~/lib/posts';
import { SITE } from '~/config.js';

// The feed must reflect what the CMS currently holds, not a build-time snapshot.
export const dynamic = 'force-dynamic';

const escape = (value: string) => String(value ?? '').replace(/]]>/g, ']]&gt;');

export async function GET() {
  const posts = (await getPublishedPosts()).slice(0, 20);
  const siteUrl = SITE.author.website || 'https://andersoncarlconsultancy.uk';

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE.name} Blog</title>
    <description>Expert insights and updates on UK document services, immigration, and legal requirements from ${SITE.name}</description>
    <link>${siteUrl}/blog</link>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <language>en-GB</language>
    <copyright>Copyright ${new Date().getFullYear()} ${SITE.name}</copyright>
    <managingEditor>${SITE.author.email} (${SITE.author.name})</managingEditor>
    <webMaster>${SITE.author.email} (${SITE.author.name})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Next.js Custom RSS Generator</generator>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${escape(post.title)}]]></title>
      <description><![CDATA[${escape(post.description)}]]></description>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${SITE.author.email} (${escape(post.author)})</author>
      <category><![CDATA[${escape(post.category)}]]></category>
      ${(post.tags || []).map((tag) => `<category><![CDATA[${escape(tag)}]]></category>`).join('')}
      ${post.image ? `<enclosure url="${siteUrl}${post.image}" type="image/jpeg" />` : ''}
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=600, s-maxage=600',
    },
  });
}
