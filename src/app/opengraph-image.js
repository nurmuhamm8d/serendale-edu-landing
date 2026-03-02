import { ImageResponse } from 'next/og'

export const alt = 'Serendale — AI Learning Platform'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 64,
          background: 'black', 
          color: 'white',
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.85, letterSpacing: '0.06em' }}>
          SERENDALE
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
          }}
        >
          Scalable Learning.
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 28,
            opacity: 0.86,
            maxWidth: 860,
            lineHeight: 1.4,
          }}
        >
          AI-personalized education paths, fast onboarding, measurable outcomes.
        </div>
        <div style={{ marginTop: 34, display: 'flex', gap: 14 }}>
          <div
            style={{
              padding: '14px 20px',
              borderRadius: 999,
              background: 'rgba(168,85,247,0.18)',
              border: '1px solid rgba(168,85,247,0.6)',
              fontSize: 22,
            }}
          >
            Courses
          </div>
          <div
            style={{
              padding: '14px 20px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.25)',
              fontSize: 22,
            }}
          >
            Reviews
          </div>
        </div>
      </div>
    ),
    size
  )
}
