import { supabase } from './supabase';
import { CONTACT_FALLBACK } from '~/site';

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  office_location: string;
  availability: string;
}

// Contact details are CMS-managed. If Supabase is unreachable the site still
// renders with the last-known good values rather than showing nothing.
export async function getContactInfo(): Promise<ContactInfo> {
  const { data, error } = await supabase
    .from('contact_info')
    .select('email, phone, whatsapp, office_location, availability')
    .maybeSingle();

  if (error || !data) return CONTACT_FALLBACK;

  return {
    email: data.email || CONTACT_FALLBACK.email,
    phone: data.phone || CONTACT_FALLBACK.phone,
    whatsapp: data.whatsapp || CONTACT_FALLBACK.whatsapp,
    office_location: data.office_location || CONTACT_FALLBACK.office_location,
    availability: data.availability || CONTACT_FALLBACK.availability,
  };
}
