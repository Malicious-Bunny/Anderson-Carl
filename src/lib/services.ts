import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

import { unsplash } from '~/lib/images';

const SERVICES_DIR = path.join(process.cwd(), 'src/content/services');
const md = new MarkdownIt({ html: false, linkify: true, typographer: true });

const DEFAULT_IMAGE = unsplash('1450101499163-c8848c66ca85', 1200);

export interface ServiceFrontmatter {
  title: string;
  category: string;
  summary: string;
  icon: string;
  image?: string;
  order?: number;
  draft?: boolean;
}

export interface ServiceMeta extends ServiceFrontmatter {
  slug: string;
}

export interface Service extends ServiceMeta {
  html: string;
}

function readSlugs(): string[] {
  if (!fs.existsSync(SERVICES_DIR)) return [];
  return fs
    .readdirSync(SERVICES_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getAllServices(): ServiceMeta[] {
  return readSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(SERVICES_DIR, `${slug}.md`), 'utf8');
      const { data } = matter(raw);
      const frontmatter = data as ServiceFrontmatter;
      return { ...frontmatter, image: frontmatter.image ?? DEFAULT_IMAGE, slug };
    })
    .filter((service) => !service.draft)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.title.localeCompare(b.title));
}

export function getServicesByCategory(): { category: string; services: ServiceMeta[] }[] {
  const services = getAllServices();
  const categories = Array.from(new Set(services.map((s) => s.category)));
  return categories.map((category) => ({
    category,
    services: services.filter((s) => s.category === category),
  }));
}

export function getServiceBySlug(slug: string): Service | null {
  const filePath = path.join(SERVICES_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const frontmatter = data as ServiceFrontmatter;
  return {
    ...frontmatter,
    image: frontmatter.image ?? DEFAULT_IMAGE,
    slug,
    html: md.render(content),
  };
}
