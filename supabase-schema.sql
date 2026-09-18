-- Anderson Carl CMS Schema for Supabase
-- Run this in your Supabase SQL Editor

-- 1. Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  content TEXT NOT NULL,
  author TEXT DEFAULT 'Anderson Carl',
  category TEXT DEFAULT 'General',
  tags TEXT[] DEFAULT '{}',
  image TEXT,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Services Table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_id TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price TEXT NOT NULL,
  processing_time TEXT,
  badge TEXT,
  image TEXT,
  link TEXT NOT NULL,
  icon TEXT,
  display_order INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Sub-Services Table
CREATE TABLE IF NOT EXISTS sub_services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  sub_service_id TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price TEXT,
  processing_time TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Contact Information Table
CREATE TABLE IF NOT EXISTS contact_info (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  office_location TEXT DEFAULT 'Central London, UK',
  availability TEXT DEFAULT '24/7 Support',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default contact info
INSERT INTO contact_info (email, phone, whatsapp)
VALUES ('support@andersoncarlconsultancy.uk', '+44 7529 418057', '447529418057')
ON CONFLICT DO NOTHING;

-- 5. Hero Section Table
CREATE TABLE IF NOT EXISTS hero_section (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  cta_text TEXT DEFAULT 'WhatsApp Us Now',
  cta_link TEXT,
  cta2_text TEXT DEFAULT 'View Services',
  cta2_link TEXT DEFAULT '#services',
  image_url TEXT,
  page TEXT DEFAULT 'home',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Stats Table
CREATE TABLE IF NOT EXISTS stats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  page TEXT DEFAULT 'home',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default stats
INSERT INTO stats (title, description, display_order) VALUES
('99%', 'Success rate', 1),
('5000+', 'Applications processed', 2),
('4.9', 'Average client rating', 3),
('24/7', 'Expert assistance', 4)
ON CONFLICT DO NOTHING;

-- 7. Features Table
CREATE TABLE IF NOT EXISTS features (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  display_order INTEGER DEFAULT 0,
  page TEXT DEFAULT 'home',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Steps/Process Table
CREATE TABLE IF NOT EXISTS process_steps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  display_order INTEGER DEFAULT 0,
  page TEXT DEFAULT 'home',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  testimonial TEXT NOT NULL,
  name TEXT NOT NULL,
  job TEXT,
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. Navigation Links Table
CREATE TABLE IF NOT EXISTS navigation_links (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  label TEXT NOT NULL,
  href TEXT,
  parent_id UUID REFERENCES navigation_links(id) ON DELETE CASCADE,
  display_order INTEGER DEFAULT 0,
  is_dropdown BOOLEAN DEFAULT false,
  location TEXT DEFAULT 'header',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 11. Announcement Bar Table
CREATE TABLE IF NOT EXISTS announcement (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  cta_text TEXT,
  cta_link TEXT,
  cta2_text TEXT,
  cta2_link TEXT,
  active BOOLEAN DEFAULT true,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default announcement
INSERT INTO announcement (title, cta_text, cta_link, cta2_text, cta2_link)
VALUES (
  '24 HOUR SERVICE AVAILABLE',
  'Email Us: support@andersoncarlconsultancy.uk »',
  'mailto:support@andersoncarlconsultancy.uk',
  'WhatsApp: +44 7529 418057',
  'https://wa.me/447529418057'
)
ON CONFLICT DO NOTHING;

-- 12. Call to Action Table
CREATE TABLE IF NOT EXISTS cta_sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  cta_text TEXT,
  cta_link TEXT,
  page TEXT DEFAULT 'home',
  section TEXT DEFAULT 'bottom',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 13. Media/Images Table
CREATE TABLE IF NOT EXISTS media (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  filename TEXT NOT NULL,
  url TEXT NOT NULL,
  alt_text TEXT,
  file_size INTEGER,
  mime_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_services_service_id ON services(service_id);
CREATE INDEX IF NOT EXISTS idx_navigation_links_location ON navigation_links(location);
CREATE INDEX IF NOT EXISTS idx_navigation_links_parent ON navigation_links(parent_id);

-- Enable Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE sub_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_section ENABLE ROW LEVEL SECURITY;
ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE features ENABLE ROW LEVEL SECURITY;
ALTER TABLE process_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE navigation_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcement ENABLE ROW LEVEL SECURITY;
ALTER TABLE cta_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access
CREATE POLICY "Public read access" ON blog_posts FOR SELECT USING (true);
CREATE POLICY "Public read access" ON services FOR SELECT USING (true);
CREATE POLICY "Public read access" ON sub_services FOR SELECT USING (true);
CREATE POLICY "Public read access" ON contact_info FOR SELECT USING (true);
CREATE POLICY "Public read access" ON hero_section FOR SELECT USING (true);
CREATE POLICY "Public read access" ON stats FOR SELECT USING (true);
CREATE POLICY "Public read access" ON features FOR SELECT USING (true);
CREATE POLICY "Public read access" ON process_steps FOR SELECT USING (true);
CREATE POLICY "Public read access" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public read access" ON navigation_links FOR SELECT USING (true);
CREATE POLICY "Public read access" ON announcement FOR SELECT USING (true);
CREATE POLICY "Public read access" ON cta_sections FOR SELECT USING (true);
CREATE POLICY "Public read access" ON media FOR SELECT USING (true);

-- Create policies for admin access (will be authenticated via API)
-- For now, allow all operations - you can restrict this later with proper auth
CREATE POLICY "Admin full access" ON blog_posts FOR ALL USING (true);
CREATE POLICY "Admin full access" ON services FOR ALL USING (true);
CREATE POLICY "Admin full access" ON sub_services FOR ALL USING (true);
CREATE POLICY "Admin full access" ON contact_info FOR ALL USING (true);
CREATE POLICY "Admin full access" ON hero_section FOR ALL USING (true);
CREATE POLICY "Admin full access" ON stats FOR ALL USING (true);
CREATE POLICY "Admin full access" ON features FOR ALL USING (true);
CREATE POLICY "Admin full access" ON process_steps FOR ALL USING (true);
CREATE POLICY "Admin full access" ON testimonials FOR ALL USING (true);
CREATE POLICY "Admin full access" ON navigation_links FOR ALL USING (true);
CREATE POLICY "Admin full access" ON announcement FOR ALL USING (true);
CREATE POLICY "Admin full access" ON cta_sections FOR ALL USING (true);
CREATE POLICY "Admin full access" ON media FOR ALL USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_sub_services_updated_at BEFORE UPDATE ON sub_services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contact_info_updated_at BEFORE UPDATE ON contact_info FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_hero_section_updated_at BEFORE UPDATE ON hero_section FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_stats_updated_at BEFORE UPDATE ON stats FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_features_updated_at BEFORE UPDATE ON features FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_process_steps_updated_at BEFORE UPDATE ON process_steps FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_navigation_links_updated_at BEFORE UPDATE ON navigation_links FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_announcement_updated_at BEFORE UPDATE ON announcement FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_cta_sections_updated_at BEFORE UPDATE ON cta_sections FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
