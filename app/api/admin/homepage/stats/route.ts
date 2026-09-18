import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '~/lib/supabase';
import { isAuthenticated, unauthorized } from '~/lib/auth';

// GET all stats
export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) return unauthorized();

  try {
    const { data: stats, error } = await supabase
      .from('stats')
      .select('*')
      .eq('page', 'home')
      .order('display_order', { ascending: true });

    if (error) throw error;

    return NextResponse.json({ stats: stats || [] });
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }
}

// PUT update stat
export async function PUT(request: NextRequest) {
  if (!isAuthenticated(request)) return unauthorized();

  try {
    const body = await request.json();
    const { id, title, description, display_order } = body;

    const { data, error } = await supabase
      .from('stats')
      .update({
        title,
        description,
        display_order,
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, stat: data });
  } catch (error) {
    console.error('Error updating stat:', error);
    return NextResponse.json({ error: 'Failed to update stat' }, { status: 500 });
  }
}

// POST create new stat
export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) return unauthorized();

  try {
    const body = await request.json();
    const { title, description, display_order } = body;

    const { data, error } = await supabase
      .from('stats')
      .insert([{
        title,
        description,
        display_order,
        page: 'home',
      }])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, stat: data });
  } catch (error) {
    console.error('Error creating stat:', error);
    return NextResponse.json({ error: 'Failed to create stat' }, { status: 500 });
  }
}

// DELETE stat
export async function DELETE(request: NextRequest) {
  if (!isAuthenticated(request)) return unauthorized();

  try {
    const { id } = await request.json();

    const { error } = await supabase
      .from('stats')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting stat:', error);
    return NextResponse.json({ error: 'Failed to delete stat' }, { status: 500 });
  }
}
