import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const SERVICES_DIR = path.join(process.cwd(), 'src/content/services');
const md = new MarkdownIt({ html: false, linkify: true, typographer: true });

export interface ServiceMeta {
  slug: string;
  title: string;
  category: string;
  summary: string;
  price?: string;
  processingTime?: string;
  images: string[];
  order: number;
}

export interface Service extends ServiceMeta {
  html: string;
}

function read(slug: string) {
  const file = path.join(SERVICES_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, 'utf8'));
  return { data: data as Omit<ServiceMeta, 'slug'>, content };
}

function slugs(): string[] {
  if (!fs.existsSync(SERVICES_DIR)) return [];
  return fs
    .readdirSync(SERVICES_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getAllServices(): ServiceMeta[] {
  return slugs()
    .map((slug) => {
      const entry = read(slug);
      if (!entry) return null;
      return { ...entry.data, images: entry.data.images || [], slug };
    })
    .filter((s): s is ServiceMeta => s !== null)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.title.localeCompare(b.title));
}

export function getServiceBySlug(slug: string): Service | null {
  const entry = read(slug);
  if (!entry) return null;
  return {
    ...entry.data,
    images: entry.data.images || [],
    slug,
    html: md.render(entry.content),
  };
}

export function getServicesByCategory(): { category: string; services: ServiceMeta[] }[] {
  const all = getAllServices();
  const categories = Array.from(new Set(all.map((s) => s.category)));
  return categories.map((category) => ({
    category,
    services: all.filter((s) => s.category === category),
  }));
}
