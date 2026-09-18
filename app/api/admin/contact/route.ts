import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '~/lib/supabase';
import { isAuthenticated, unauthorized } from '~/lib/auth';

// GET contact info
export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) return unauthorized();

  try {
    const { data, error } = await supabase
      .from('contact_info')
      .select('*')
      .single();

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return NextResponse.json({ error: 'Failed to fetch contact info' }, { status: 500 });
  }
}

// PUT update contact info
export async function PUT(request: NextRequest) {
  if (!isAuthenticated(request)) return unauthorized();

  try {
    const body = await request.json();
    const { email, phone, whatsapp, office_location, availability } = body;

    // Get the first (and should be only) contact info record
    const { data: existing } = await supabase
      .from('contact_info')
      .select('id')
      .single();

    if (existing) {
      // Update existing record
      const { error } = await supabase
        .from('contact_info')
        .update({
          email,
          phone,
          whatsapp,
          office_location,
          availability,
        })
        .eq('id', existing.id);

      if (error) throw error;
    } else {
      // Create new record if none exists
      const { error } = await supabase
        .from('contact_info')
        .insert([{
          email,
          phone,
          whatsapp,
          office_location,
          availability,
        }]);

      if (error) throw error;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating contact info:', error);
    return NextResponse.json({ error: 'Failed to update contact info' }, { status: 500 });
  }
}
