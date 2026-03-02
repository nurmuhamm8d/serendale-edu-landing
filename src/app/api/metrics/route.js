export async function GET() {
  return Response.json(
    {
      learners: 128400,
      courses: 42,
      satisfaction: 4.9,
      avgTime: { ru: '12 мин/день', en: '12 min/day' },
    },
    {
      headers: {
        'Cache-Control':
          'public, max-age=0, s-maxage=600, stale-while-revalidate=86400',
      },
    },
  )
}
