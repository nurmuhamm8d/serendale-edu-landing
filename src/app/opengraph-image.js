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
        <div style={{ fontSize: 28, opacity: 0.85 }}>SERENDALE</div>
        <div style={{ fontSize: 88, fontWeight: 800 }}>Scalable Learning.</div>
        <div style={{ fontSize: 28, opacity: 0.86, maxWidth: 860 }}>
          AI-personalized education paths, fast onboarding, measurable outcomes.
        </div>
      </div>
    ),
    size
  )
}
