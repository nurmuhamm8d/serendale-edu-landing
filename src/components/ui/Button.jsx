import Link from 'next/link'
import { cn } from '@/lib/cn'

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  className,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40'

  const variants = {
    primary:
      'border border-fuchsia-400/60 bg-fuchsia-500/10 text-white shadow-glow hover:bg-fuchsia-500/15',
    secondary: 'border border-white/25 bg-white/5 text-white hover:bg-white/10',
    ghost: 'text-white/80 hover:text-white',
  }

  const cls = cn(base, variants[variant] || variants.primary, className)

  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={cls} {...rest}>
      {children}
    </button>
  )
}
