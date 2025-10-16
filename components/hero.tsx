export default function Hero({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="border-b border-[#0d1b2a]">
      <div className="container-narrow py-16">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h1>
        {lead && <p className="mt-4 text-lg text-[color:var(--brand-light)]">{lead}</p>}
      </div>
    </div>
  )
}
