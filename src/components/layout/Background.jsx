export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black" />
      <div className="absolute -top-48 left-1/2 h-[780px] w-[780px] -translate-x-1/2 rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div className="bg-sky-500/18 absolute left-[-18vw] top-[10vh] h-[720px] w-[720px] rounded-full blur-3xl" />
      <div className="bg-violet-500/18 absolute right-[-18vw] top-[22vh] h-[760px] w-[760px] rounded-full blur-3xl" />
      <div className="bg-fuchsia-500/14 absolute left-[6vw] top-[68vh] h-[760px] w-[760px] rounded-full blur-3xl" />
      <div className="bg-sky-500/12 absolute right-[6vw] top-[110vh] h-[760px] w-[760px] rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-60 [background:linear-gradient(120deg,rgba(236,72,153,0.12),transparent_35%,rgba(59,130,246,0.10))]" />
      <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="absolute inset-0 [background:linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.88))]" />
    </div>
  )
}
