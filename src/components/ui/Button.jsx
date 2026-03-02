import Link from 'next/link'
import { cn } from '@/lib/cn'

const CTA_BORDER_GRADIENT =
  'bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_35%,#5C24FF_70%,#D94FD5_100%)]'

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}) {
  const isLink = typeof href === 'string' && href.length > 0
  const Component = isLink ? Link : 'button'
  const componentProps = isLink ? { href } : { type: 'button', onClick }

  const focus =
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40'

  const baseMd =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition'

  const baseCta =
    'inline-flex h-[70px] items-center justify-center rounded-[100px] px-[32px] text-[20px] font-normal leading-none transition [font-family:var(--font-space)]'

  const variantsMd = {
    primary:
      'border border-fuchsia-400/60 bg-fuchsia-500/10 text-white shadow-glow hover:bg-fuchsia-500/15',
    secondary: 'border border-white/25 bg-white/5 text-white hover:bg-white/10',
    ghost: 'text-white/80 hover:text-white',
  }

  if (size === 'cta') {
    if (variant === 'primary') {
      return (
        <span
          className={cn(
            'inline-flex rounded-[100px] p-[2px]',
            CTA_BORDER_GRADIENT,
            className,
          )}
        >
          <Component
            {...componentProps}
            {...rest}
            className={cn(
              baseCta,
              focus,
              'w-full bg-black text-white hover:bg-white/5',
            )}
          >
            {children}
          </Component>
        </span>
      )
    }

    if (variant === 'secondary') {
      return (
        <Component
          {...componentProps}
          {...rest}
          className={cn(
            baseCta,
            focus,
            'border-2 border-white bg-black text-white hover:bg-white/5',
            className,
          )}
        >
          {children}
        </Component>
      )
    }

    return (
      <Component
        {...componentProps}
        {...rest}
        className={cn(
          baseCta,
          focus,
          'bg-black text-white/80 hover:text-white',
          className,
        )}
      >
        {children}
      </Component>
    )
  }

  return (
    <Component
      {...componentProps}
      {...rest}
      className={cn(
        baseMd,
        focus,
        variantsMd[variant] || variantsMd.primary,
        className,
      )}
    >
      {children}
    </Component>
  )
}
