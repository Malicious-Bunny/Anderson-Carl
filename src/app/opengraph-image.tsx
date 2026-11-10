import { ImageResponse } from 'next/og';

// The share card shown on X and other sites: the hero's forest panel and headline
export const alt = 'Anderson Carl, immigration solicitors in London: straight answers on UK immigration.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#1C362D', color: '#F4F4EC', padding: 80 }}>
        <div style={{ fontSize: 34, letterSpacing: 6 }}>ANDERSON CARL</div>
        <div style={{ fontSize: 92, lineHeight: 1, letterSpacing: -3, maxWidth: 900 }}>Straight answers on UK immigration.</div>
        <div style={{ display: 'flex', fontSize: 30, color: '#E7D4B6' }}>Visas, settlement and appeals · London solicitors</div>
      </div>
    ),
    size,
  );
}
