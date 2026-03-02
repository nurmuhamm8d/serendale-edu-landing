import { cn } from '@/lib/cn'

export default function Logo({ className }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="shadow-glow h-7 w-7 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500" />
      <div className="text-sm font-semibold tracking-wide">Serendale</div>
    </div>
  )
}
