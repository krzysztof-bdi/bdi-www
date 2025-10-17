export default function PageShell({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white">
      <div className="mx-auto max-w-5xl px-4 py-14">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      </div>
      <div className="mx-auto max-w-5xl px-4">{children}</div>
    </div>
  )
}
