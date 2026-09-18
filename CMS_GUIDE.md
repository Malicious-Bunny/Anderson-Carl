# Full CMS Setup Guide

## 🎉 What You Got

A complete, database-backed CMS for your Anderson Carl website! Edit everything from one admin panel - changes go live instantly.

### ✨ Features

**Manage Everything:**
- ✅ Blog posts (create, edit, delete)
- ✅ Services & pricing
- ✅ Contact information
- ✅ Homepage sections (hero, stats, features, testimonials)
- ✅ Navigation links
- ✅ Images & media
- ✅ Announcement bar

**Benefits:**
- 🚀 **Instant updates** - no rebuild required
- 🔒 **Secure** - password-protected admin
- 📱 **Mobile-friendly** admin panel
- 💾 **Database-backed** with Supabase
- 🌍 **Edit from anywhere** - just need internet

---

## 🚀 Setup Instructions

### Step 1: Set Up Supabase (5 minutes)

1. **Create Supabase Account**
   - Go to [supabase.com](https://supabase.com)
   - Sign up/login
   - Create new project: "anderson-carl-cms"
   - Save your database password!

2. **Run Database Schema**
   - In Supabase dashboard → "SQL Editor"
   - Click "New query"
   - Copy ALL content from `supabase-schema.sql`
   - Paste and click "Run"
   - Should see "Success"

3. **Get API Keys**
   - Supabase dashboard → "Project Settings" → "API"
   - Copy:
     - `Project URL`
     - `anon/public key`

4. **Add Keys to Project**
   - Open `.env.local`
   - Replace these lines:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
     ```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

### Step 4: Access Admin Panel

1. Go to `http://localhost:3000/admin`
2. Login with password from `.env.local` (default: `changeme123`)
3. Start managing content!

---

## 📊 Admin Panel Sections

### 1. Blog Posts (`/admin/blog`)
- Create blog posts with markdown
- Add images, categories, tags
- Mark as featured or draft
- Changes appear at `/blog` instantly

### 2. Services (`/admin/services`)
- Manage all service offerings
- Update prices & processing times
- Add/edit sub-services
- Control what appears on homepage

### 3. Contact Info (`/admin/contact`)
- Update email, phone, WhatsApp
- Changes apply site-wide instantly
- No rebuild needed!

### 4. Homepage (`/admin/homepage`)
- Edit hero section
- Update stats (99%, 5000+, etc.)
- Manage features grid
- Edit testimonials
- Control all homepage content

### 5. Navigation (`/admin/navigation`)
- Header links & dropdowns
- Footer columns
- Service menu items

### 6. Images (`/admin/images`)
- Upload images
- Get URLs for blog posts
- Delete unused images

---

## 🗄️ Database Tables

Your Supabase database has these tables:

| Table | What It Stores |
|-------|----------------|
| `blog_posts` | All blog articles |
| `services` | Main services list |
| `sub_services` | Services under each main service |
| `contact_info` | Email, phone, WhatsApp |
| `hero_section` | Homepage hero area |
| `stats` | Homepage stats (99%, 5000+) |
| `features` | Feature boxes |
| `process_steps` | "How It Works" steps |
| `testimonials` | Client reviews |
| `navigation_links` | Header/footer navigation |
| `announcement` | Top announcement bar |
| `cta_sections` | Call-to-action sections |
| `media` | Uploaded images |

---

## 🔄 How to Update Your Site

### Old Way (File-Based):
1. Edit code files
2. Run `npm run build`
3. Deploy to hosting
4. Wait 2-5 minutes

### New Way (CMS):
1. Login to `/admin`
2. Click → Edit → Save
3. **Done!** Live instantly 🎉

---

## 🛠️ Common Tasks

### Add a Blog Post
1. `/admin/blog` → "Create New Post"
2. Fill in title, content (markdown)
3. Click "Create Post"
4. View at `/blog/your-slug`

### Update Contact Number
1. `/admin/contact`
2. Change phone number
3. Click "Save"
4. Updated everywhere instantly!

### Change Homepage Stats
1. `/admin/homepage`
2. Click "Stats" tab
3. Edit the 4 stat boxes
4. Save - updates live!

### Upload Images for Blog
1. `/admin/images` → "Upload Images"
2. Select files
3. Click "Copy Path"
4. Use in blog post markdown:
   ```markdown
   ![Alt text](/images/uploads/filename.jpg)
   ```

---

## 🔐 Security

**Admin Password:**
- Change in `.env.local`:
  ```env
  ADMIN_PASSWORD=your-secure-password-here
  ```
- Use a strong password for production!

**Supabase Security:**
- Row Level Security (RLS) enabled
- Public can READ data (for website)
- Only admin can WRITE data (via password)

**Production:**
- Add env vars to Vercel/Netlify
- Never commit `.env.local` to git
- Consider 2FA via Supabase Auth

---

## 🚀 Deployment

### Vercel/Netlify
1. Push code to GitHub
2. Connect repo to Vercel/Netlify
3. Add environment variables:
   - `ADMIN_PASSWORD`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

Your admin panel will be at:
```
https://yourdomain.com/admin
```

---

## 📱 Managing Content in Production

1. Go to `https://yourdomain.com/admin`
2. Login with your password
3. Edit content
4. Changes go live instantly!

No need to redeploy or rebuild - that's the beauty of database-backed CMS!

---

## 🔧 Extending the CMS

### Add New Content Type

1. **Add table to Supabase** (SQL Editor)
2. **Create API route** (`app/api/admin/yourtype/route.ts`)
3. **Create admin page** (`app/admin/yourtype/page.tsx`)
4. **Update dashboard** (add link in `app/admin/page.tsx`)

Examples in codebase:
- Blog posts → `/admin/blog`
- Contact → `/admin/contact`
- Follow same pattern!

---

## 🆘 Troubleshooting

**"Failed to fetch" errors:**
- Check Supabase project is active (not paused)
- Verify `.env.local` has correct URL & key
- Restart dev server after changing `.env`

**Changes not appearing:**
- Check item is set to `published: true`
- View in Supabase Table Editor to verify data
- Clear browser cache

**Can't login:**
- Verify password in `.env.local`
- Try clearing session: `sessionStorage.clear()` in browser console

**Database errors:**
- Check Supabase dashboard → Database → Logs
- Verify schema was run successfully
- Check Table Editor for data

---

## 📚 Next Steps

1. ✅ Set up Supabase
2. 📝 Populate initial content via `/admin`
3. 🎨 Customize admin panel styling (optional)
4. 🚀 Deploy to production
5. 📱 Share admin URL with team members

---

## 🎓 Learn More

- [Supabase Docs](https://supabase.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Markdown Guide](https://www.markdownguide.org/)

---

## 💡 Tips

- **Test locally first** before production changes
- **Backup database** regularly (Supabase dashboard → Database → Backups)
- **Use meaningful slugs** for blog posts (SEO friendly)
- **Optimize images** before uploading (use TinyPNG)
- **Preview posts** as draft before publishing

---

**You're all set!** 🎉

Your CMS is ready to use. Start by setting up Supabase, then login to `/admin` and start creating content!

Questions? Check `SUPABASE_SETUP.md` for detailed Supabase instructions.
