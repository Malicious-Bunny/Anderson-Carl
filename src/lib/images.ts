// Stock imagery only.
//
// The photographs previously in /public (passport-*.jpg, driverlicense-*.jpg,
// pte-*.jpg and similar) are scans of real people's identity documents —
// passports, driving licences with home addresses, and language test score
// reports — and must never be used as site imagery.

export function unsplash(id: string, width = 1200, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?w=${width}&q=${quality}&auto=format&fit=crop`;
}

const FALLBACK = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&auto=format&fit=crop';

// Image paths may be absolute (stock/CDN) or site-relative (CMS uploads).
// Social metadata needs an absolute URL either way.
export function absoluteImage(image: string | null | undefined, siteUrl = ''): string {
  if (!image) return FALLBACK;
  if (/^https?:\/\//.test(image)) return image;
  return `${siteUrl}${image}`;
}

export const IMAGES = {
  hero: unsplash('1450101499163-c8848c66ca85', 1600),
  approach: unsplash('1497366216548-37526070297c', 1600),
  about: unsplash('1454165804606-c3d57bc86b40', 1200),
  consultation: unsplash('1560250097-0b93528c311a', 1200),
  documents: unsplash('1568992687947-868a62a9f521', 1200),
};

// Per-theme sets used for service hero images and the scrolling gallery.
export const SERVICE_IMAGES: Record<string, string[]> = {
  passport: [
    unsplash('1488085061387-422e29b40080', 1200),
    unsplash('1450101499163-c8848c66ca85', 1200),
    unsplash('1569154941061-e231b4725ef1', 1200),
  ],
  driving: [
    unsplash('1449824913935-59a10b8d2000', 1200),
    unsplash('1502877338535-766e1452684a', 1200),
    unsplash('1511919884226-fd3cad34687c', 1200),
    unsplash('1471479917193-f00955256257', 1200),
    unsplash('1503376780353-7e6692767b70', 1200),
  ],
  immigration: [
    unsplash('1521587760476-6c12a4b040da', 1200),
    unsplash('1454165804606-c3d57bc86b40', 1200),
    unsplash('1497366216548-37526070297c', 1200),
  ],
  language: [
    unsplash('1503676260728-1c00da094a0b', 1200),
    unsplash('1513475382585-d06e58bcb0e0', 1200),
    unsplash('1456513080510-7bf3a84b82f8', 1200),
  ],
  civil: [
    unsplash('1568992687947-868a62a9f521', 1200),
    unsplash('1554224155-6726b3ff858f', 1200),
    unsplash('1589829085413-56de8ae18c73', 1200),
  ],
};
