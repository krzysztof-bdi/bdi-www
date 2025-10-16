type Feature = { title: string; desc?: string }
export default function FeatureGrid({ items, columns=3 }: { items: Feature[]; columns?: 2|3|4 }) {
  const grid = columns === 4 ? "md:grid-cols-4" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
  return (
    <div className={`grid gap-6 ${grid}`}>
      {items.map((f, i) => (
        <div key={i} className="card p-6">
          <h3 className="text-lg font-medium">{f.title}</h3>
          {f.desc && <p className="text-sm text-[color:var(--brand-light)] mt-2">{f.desc}</p>}
        </div>
      ))}
    </div>
  )
}
