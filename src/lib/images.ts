export function unsplash(id: string, width = 1200, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?w=${width}&q=${quality}&auto=format&fit=crop`;
}

// All from Unsplash, under the Unsplash licence. These are not clients or staff,
// so captions and alt text never say they are.
export const IMAGES = {
  // Two women talking across a small table by a window
  conversation: unsplash('1573497620053-ea5300f94f21', 1400),
  // A woman reading her phone by a window
  phone: unsplash('1785053370851-e64cbb6343bc', 1200),
  // People crossing the Millennium Bridge towards St Paul's
  london: unsplash('1647298542230-9219ab484bbe', 2000),
};
