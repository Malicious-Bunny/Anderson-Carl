# Supabase CMS Setup Guide

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign in with GitHub
4. Click "New Project"
5. Fill in:
   - **Name**: anderson-carl-cms
   - **Database Password**: (save this somewhere secure!)
   - **Region**: Choose closest to your users
6. Click "Create new project"
7. Wait ~2 minutes for setup

## Step 2: Run the Database Schema

1. In your Supabase dashboard, click "SQL Editor" (left sidebar)
2. Click "New query"
3. Copy ALL contents from `supabase-schema.sql`
4. Paste into the SQL editor
5. Click "Run" (or press Cmd/Ctrl + Enter)
6. You should see "Success. No rows returned"

## Step 3: Get Your API Keys

1. In Supabase dashboard, click "Project Settings" (gear icon, bottom left)
2. Click "API" in the left menu
3. Find these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon/public key** (long string starting with `eyJ...`)

## Step 4: Add Keys to Your Project

1. Open `.env.local` in your project
2. Replace the placeholder values:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...your-actual-key-here
\`\`\`

3. Save the file
4. Restart your dev server:
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev
   ```

## Step 5: Test the Connection

1. Go to `http://localhost:3000/admin`
2. Login with your admin password
3. Click "Blog Posts" - you should see an empty list (no errors!)
4. Try creating a test blog post
5. If it works, you're all set! 🎉

## What Got Created in Supabase

Your database now has these tables:

| Table | Purpose |
|-------|---------|
| `blog_posts` | Blog articles |
| `services` | Main services |
| `sub_services` | Sub-services under each main service |
| `contact_info` | Email, phone, WhatsApp |
| `hero_section` | Home page hero |
| `stats` | Homepage stats (99%, 5000+, etc.) |
| `features` | Feature boxes |
| `process_steps` | How it works steps |
| `testimonials` | Client reviews |
| `navigation_links` | Header/footer links |
| `announcement` | Top announcement bar |
| `cta_sections` | Call-to-action sections |
| `media` | Uploaded images |

## Viewing Your Data

1. In Supabase dashboard, click "Table Editor"
2. Select any table from the left sidebar
3. You'll see all rows in a spreadsheet view
4. You can manually edit here too!

## Security Notes

✅ **Row Level Security (RLS) is enabled** - This means:
- Anyone can READ your data (public website)
- Only YOUR admin panel can WRITE data (protected by password)

⚠️ **For production:**
- Use a strong admin password
- Consider adding Supabase Auth for better security
- Enable email verification

## Troubleshooting

**Error: "supabaseUrl is required"**
- Check `.env.local` has the correct values
- Restart dev server after changing `.env.local`

**Error: "Failed to fetch"**
- Check your Supabase project is running (not paused)
- Verify the URL and key are correct
- Check browser console for details

**Can't see data on the website**
- Make sure `published: true` for content
- Check Supabase Table Editor to verify data exists
- Clear browser cache

## Next Steps

1. ✅ Set up Supabase
2. 🎨 Populate your content via `/admin`
3. 🚀 Deploy to production (Vercel/Netlify)
4. 🔒 Add Supabase env vars to hosting platform

Need help? Check the [Supabase docs](https://supabase.com/docs) or ask!
