import { NextResponse } from 'next/server';
import { supabase } from '~/lib/supabase';

// GET all published posts for public viewing
export async function GET() {
  try {
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('date', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ posts: posts || [] });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ posts: [] }); // Return empty array on error
  }
}
