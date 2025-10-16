export default function Stats({ items }: { items: { label?: string; value?: string }[] }) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-4">
        {items?.map((it, i) => (
          <div key={i} className="rounded-2xl border border-white/10 p-6 text-center bg-white/5">
            <div className="text-2xl font-bold">{it.value}</div>
            <div className="text-xs opacity-80 mt-1">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
