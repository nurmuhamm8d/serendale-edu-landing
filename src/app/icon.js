import { ImageResponse } from 'next/og'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '64px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '16px',
        background:
          'radial-gradient(circle at 30% 30%, rgba(236,72,153,1) 0%, rgba(168,85,247,1) 45%, rgba(59,130,246,1) 100%)',
        color: 'white',
        fontWeight: 800,
        fontSize: 28,
        letterSpacing: '-0.02em',
      }}
    >
      S
    </div>,
    size,
  )
}
