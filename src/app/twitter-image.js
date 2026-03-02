import { ImageResponse } from 'next/og'

export const alt = 'Serendale — AI Learning Platform'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '64px',
        background:
          'radial-gradient(900px 450px at 50% 15%, rgba(168,85,247,0.35), transparent 60%), radial-gradient(700px 380px at 20% 50%, rgba(236,72,153,0.28), transparent 60%), radial-gradient(700px 380px at 80% 55%, rgba(59,130,246,0.22), transparent 60%), #000',
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
    </div>,
    size,
  )
}
