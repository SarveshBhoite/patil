import { ImageResponse } from 'next/og';
import { BRAND_CONFIG } from '@/lib/constants';

export const alt = 'LeadSpire Digital';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050507',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.2) 0%, rgba(5, 5, 7, 1) 70%)',
          }}
        />
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
            <div style={{ width: '48px', height: '48px', background: '#7C3AED', borderRadius: '50%' }} />
            <h1 style={{ fontSize: '64px', fontWeight: 'bold', margin: 0, letterSpacing: '-0.05em' }}>
              {BRAND_CONFIG.name}
            </h1>
          </div>
          
          <p style={{ fontSize: '32px', color: '#A1A1AA', letterSpacing: '0.2em', margin: 0, textTransform: 'uppercase' }}>
            {BRAND_CONFIG.tagline}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
