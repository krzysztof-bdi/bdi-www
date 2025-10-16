export default function FeatureGrid({ items }: { items: { title?: string; desc?: string }[] }) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
        {items?.map((it, i) => (
          <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-lg font-semibold">{it.title}</h3>
            <p className="text-sm opacity-80 mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
