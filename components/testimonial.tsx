export default function Testimonial({ items }: { items: { author?: string; role?: string; desc?: string }[] }) {
  const t = items?.[0] || {}
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl text-center rounded-2xl border border-white/10 p-8 bg-white/5">
        <blockquote className="text-lg italic leading-relaxed">“{t.desc}”</blockquote>
        <div className="mt-4 text-sm opacity-80">— {t.author}{t.role ? `, ${t.role}` : ""}</div>
      </div>
    </section>
  )
}
