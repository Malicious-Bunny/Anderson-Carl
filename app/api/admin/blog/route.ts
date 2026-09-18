import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '~/lib/supabase';

// GET all posts
export async function GET() {
  try {
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('date', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ posts: posts || [] });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST create new post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, title, description, content, author, category, tags, image, featured, published, date } = body;

    const { data, error } = await supabase
      .from('blog_posts')
      .insert([{
        slug,
        title,
        description,
        content,
        author,
        category,
        tags,
        image,
        featured,
        published,
        date,
      }])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') { // Unique violation
        return NextResponse.json({ error: 'Post with this slug already exists' }, { status: 400 });
      }
      throw error;
    }

    return NextResponse.json({ success: true, post: data });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}

// PUT update existing post
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, slug, title, description, content, author, category, tags, image, featured, published, date } = body;

    const { data, error } = await supabase
      .from('blog_posts')
      .update({
        slug,
        title,
        description,
        content,
        author,
        category,
        tags,
        image,
        featured,
        published,
        date,
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    if (!data) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, post: data });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

// DELETE post
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}
