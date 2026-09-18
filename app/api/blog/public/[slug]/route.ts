import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '~/lib/supabase';

// GET single published post by slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { data: post, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', params.slug)
      .eq('published', true)
      .single();

    if (error) throw error;

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}
