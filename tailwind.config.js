module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)', 'var(--font-sans)'],
      },
      colors: {
        ink: {
          950: '#05060a',
          900: '#0b0d14',
          800: '#0f1220',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(168,85,247,0.25)',
        glow2: '0 0 60px rgba(236,72,153,0.18)',
      },
    },
  },
  plugins: [],
}
