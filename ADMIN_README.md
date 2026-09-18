# Admin Panel Guide

## Getting Started

Your admin panel is now set up at `/admin`!

### 1. Set Your Admin Password

Open `.env.local` and change the password:

```env
ADMIN_PASSWORD=your-secure-password-here
```

### 2. Access the Admin Panel

1. Start the development server: `npm run dev`
2. Go to `http://localhost:3000/admin`
3. Log in with your password

## Features

### Blog Management (`/admin/blog`)
- ✅ Create new blog posts
- ✅ Edit existing posts
- ✅ Delete posts
- ✅ Mark posts as featured or published/draft
- ✅ Full markdown support

**Creating a Blog Post:**
1. Click "Create New Post"
2. Fill in the form:
   - **Slug**: URL-friendly name (e.g., `my-awesome-post`)
   - **Title**: Post title
   - **Description**: Short summary
   - **Date**: Publication date
   - **Category**: Post category
   - **Tags**: Comma-separated tags
   - **Content**: Write in Markdown
3. Click "Create Post"

### Contact Info (`/admin/contact`)
- ✅ Update email address
- ✅ Update phone number
- ✅ Update WhatsApp number

**Note:** After updating contact info, rebuild the site with `npm run build`

### Image Management (`/admin/images`)
- ✅ Upload multiple images
- ✅ View all uploaded images
- ✅ Copy image paths
- ✅ Delete images

**Using Images in Blog Posts:**
1. Upload image via `/admin/images`
2. Click "Copy Path" 
3. Use in blog post markdown: `![Alt text](/images/uploads/your-image.jpg)`

## Security Notes

- ⚠️ Change the default password in `.env.local`
- ⚠️ Never commit `.env.local` to git (already in .gitignore)
- ⚠️ For production, use a strong password
- 🔐 Authentication is session-based (stored in browser)

## File Structure

```
app/admin/
├── layout.tsx          # Admin panel layout
├── page.tsx            # Dashboard/login
├── blog/page.tsx       # Blog management
├── contact/page.tsx    # Contact info editor
└── images/page.tsx     # Image uploader

app/api/admin/
├── auth/route.ts       # Authentication
├── blog/route.ts       # Blog CRUD operations
├── contact/route.ts    # Contact info updates
└── images/route.ts     # Image uploads

src/content/blog/       # Blog posts (markdown files)
public/images/uploads/  # Uploaded images
```

## Deployment

When deploying to production:

1. Set `ADMIN_PASSWORD` as an environment variable in your hosting platform (Vercel, Netlify, etc.)
2. Make sure the password is strong and secure
3. Consider adding IP restrictions or additional authentication layers

## Troubleshooting

**Can't log in?**
- Check `.env.local` exists
- Verify password matches
- Try clearing browser cache

**Contact info not updating?**
- Run `npm run build` after saving changes
- Restart the dev server

**Images not uploading?**
- Check file size (max depends on hosting)
- Ensure `public/images/uploads/` directory exists
- Check browser console for errors

Enjoy your admin panel! 🚀
