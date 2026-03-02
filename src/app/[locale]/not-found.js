import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-6 py-20 text-center">
      <div className="text-3xl font-semibold">404</div>
      <div className="mt-3 text-white/70">Page not found</div>
      <div className="mt-6">
        <Link
          href="/ru"
          className="inline-flex rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white transition hover:bg-white/10"
        >
          Go to home
        </Link>
      </div>
    </div>
  )
}
