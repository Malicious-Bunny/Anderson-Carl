import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials not found. Please add them to .env.local');
}

// Next.js patches the global fetch and caches GET responses in its Data Cache.
// That would serve stale content after a CMS edit — the whole point of this
// setup is that edits appear immediately — so opt every Supabase request out.
export const supabase = createClient(supabaseUrl, supabaseKey, {
  global: {
    fetch: (input: RequestInfo | URL, init?: RequestInit) =>
      fetch(input, { ...init, cache: 'no-store' }),
  },
});

// Types for our database tables
export interface BlogPost {
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
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  service_id: string;
  title: string;
  description: string;
  price: string;
  processing_time: string | null;
  badge: string | null;
  image: string | null;
  link: string;
  icon: string | null;
  display_order: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface SubService {
  id: string;
  service_id: string;
  sub_service_id: string;
  title: string;
  description: string;
  price: string | null;
  processing_time: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface ContactInfo {
  id: string;
  email: string;
  phone: string;
  whatsapp: string;
  office_location: string;
  availability: string;
  updated_at: string;
}

export interface Stat {
  id: string;
  title: string;
  description: string;
  display_order: number;
  page: string;
  created_at: string;
  updated_at: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string | null;
  display_order: number;
  page: string;
  created_at: string;
  updated_at: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string | null;
  display_order: number;
  page: string;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  testimonial: string;
  name: string;
  job: string | null;
  image_url: string | null;
  display_order: number;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface HeroSection {
  id: string;
  title: string;
  subtitle: string;
  cta_text: string;
  cta_link: string | null;
  cta2_text: string;
  cta2_link: string;
  image_url: string | null;
  page: string;
  updated_at: string;
}

export interface Announcement {
  id: string;
  title: string;
  cta_text: string | null;
  cta_link: string | null;
  cta2_text: string | null;
  cta2_link: string | null;
  active: boolean;
  updated_at: string;
}
