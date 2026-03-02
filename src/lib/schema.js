import { getSiteUrl } from '@/lib/site'

export function buildReviewsJsonLd({ name, locale, testimonials }) {
  const siteUrl = getSiteUrl()
  const reviews = testimonials.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    datePublished: t.date,
    reviewBody: t.text[locale],
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(t.rating),
      bestRating: '5',
      worstRating: '1',
    },
  }))

  const ratingValue =
    testimonials.reduce((acc, t) => acc + Number(t.rating || 0), 0) /
    Math.max(testimonials.length, 1)

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url: siteUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue.toFixed(2),
      reviewCount: String(testimonials.length),
    },
    review: reviews,
  }
}
