type Props = { title?: string; subtitle?: string; children?: React.ReactNode }
export default function Section({ title, subtitle, children }: Props) {
  return (
    <section className="py-14">
      <div className="container-narrow">
        {title && <h2 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h2>}
        {subtitle && <p className="text-[color:var(--brand-light)] mb-8">{subtitle}</p>}
        <div className="grid gap-6">{children}</div>
      </div>
    </section>
  )
}
