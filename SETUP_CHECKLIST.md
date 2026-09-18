# ✅ CMS Setup Checklist

## Quick Setup (15 minutes)

### 1. Create Supabase Project ⏱️ 5 min

- [ ] Go to [supabase.com](https://supabase.com)
- [ ] Create account / Sign in
- [ ] Click "New Project"
- [ ] Name: `anderson-carl-cms`
- [ ] Set database password (save it!)
- [ ] Choose region
- [ ] Click "Create"
- [ ] Wait ~2 minutes

### 2. Run Database Schema ⏱️ 2 min

- [ ] Open Supabase dashboard
- [ ] Click "SQL Editor" (left sidebar)
- [ ] Click "New query"
- [ ] Open `supabase-schema.sql` in your project
- [ ] Copy ALL contents
- [ ] Paste in SQL Editor
- [ ] Click "Run" (or Cmd/Ctrl + Enter)
- [ ] Should see "Success. No rows returned"

### 3. Get API Credentials ⏱️ 1 min

- [ ] In Supabase: "Project Settings" → "API"
- [ ] Copy `Project URL`
- [ ] Copy `anon public` key

### 4. Configure Local Environment ⏱️ 2 min

- [ ] Open `.env.local` in your project
- [ ] Paste Project URL:
  ```
  NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
  ```
- [ ] Paste anon key:
  ```
  NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
  ```
- [ ] Change admin password (optional):
  ```
  ADMIN_PASSWORD=your-secure-password
  ```
- [ ] Save file

### 5. Start Development Server ⏱️ 1 min

```bash
npm install  # if not done yet
npm run dev
```

### 6. Test Admin Panel ⏱️ 4 min

- [ ] Open `http://localhost:3000/admin`
- [ ] Login with password from `.env.local`
- [ ] Click "Blog Posts" - should load (empty list is OK)
- [ ] Try creating a test blog post
- [ ] If successful, you're done! 🎉

---

## Verification Tests

### Test 1: Blog Post CRUD
- [ ] Create a blog post
- [ ] Edit the blog post
- [ ] View it on `/blog`
- [ ] Delete it

### Test 2: Contact Info
- [ ] Update phone number
- [ ] Save changes
- [ ] Check Supabase Table Editor - should see change

### Test 3: Images
- [ ] Upload an image
- [ ] Copy the path
- [ ] Use in blog post

---

## Production Deployment

### Vercel/Netlify Setup

- [ ] Push code to GitHub
- [ ] Connect repository to hosting
- [ ] Add environment variables:
  - [ ] `ADMIN_PASSWORD`
  - [ ] `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Deploy
- [ ] Test admin at `https://yourdomain.com/admin`

---

## Post-Setup Tasks

### Initial Content Population

- [ ] Create 3-5 initial blog posts
- [ ] Verify all services are listed correctly
- [ ] Update contact information
- [ ] Add testimonials
- [ ] Upload necessary images

### Security Hardening

- [ ] Change default admin password
- [ ] Enable Supabase email auth (optional)
- [ ] Set up database backups
- [ ] Configure CORS if needed

### Optional Enhancements

- [ ] Add more admin users
- [ ] Set up analytics
- [ ] Configure email notifications
- [ ] Add content scheduling
- [ ] Implement image optimization

---

## Common Issues & Solutions

### ❌ "Failed to fetch posts"
**Solution:**
- Check Supabase project is active (not paused)
- Verify env vars in `.env.local`
- Restart dev server

### ❌ "Invalid password"
**Solution:**
- Check `ADMIN_PASSWORD` in `.env.local`
- Clear browser cache
- Try incognito mode

### ❌ "Database error"
**Solution:**
- Verify `supabase-schema.sql` ran successfully
- Check Supabase dashboard → Database → Logs
- Re-run schema if needed

### ❌ Changes not appearing
**Solution:**
- Check `published: true` in admin
- View data in Supabase Table Editor
- Clear browser cache

---

## 📚 Documentation

- **CMS_GUIDE.md** - Complete CMS usage guide
- **SUPABASE_SETUP.md** - Detailed Supabase setup
- **ADMIN_README.md** - Original admin panel docs

---

## Need Help?

1. Check the guides above
2. View Supabase docs: https://supabase.com/docs
3. Check browser console for errors
4. View Supabase logs in dashboard

---

**Ready to go?** Start with Step 1 above! 🚀
