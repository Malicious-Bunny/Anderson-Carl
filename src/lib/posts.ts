import MarkdownIt from 'markdown-it';
import { supabase } from './supabase';

// markdown-it's default preset covers tables, fenced code, blockquotes and
// lists. `html: true` permits raw HTML in post bodies — acceptable because
// posts are authored only through the password-protected admin.
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  image: string | null;
  featured: boolean;
  published: boolean;
  date: string;
}

export function renderMarkdown(markdown: string): string {
  return md.render(markdown || '');
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function readingTime(content: string): number {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200));
}

export async function getPublishedPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error.message);
    return [];
  }
  return data || [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching post:', error.message);
    return null;
  }
  return data;
}

export async function getRelatedPosts(post: Post, limit = 3): Promise<Post[]> {
  const all = await getPublishedPosts();

  // Same category first, then shared tags, then anything else recent.
  return all
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const sharedTags = (candidate.tags || []).filter((tag) => (post.tags || []).includes(tag));
      const score = (candidate.category === post.category ? 10 : 0) + sharedTags.length * 5;
      return { candidate, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.candidate);
}
