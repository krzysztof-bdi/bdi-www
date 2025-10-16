import fs from "node:fs"
import path from "node:path"
import FeatureGrid from "@/components/FeatureGrid"
import Stats from "@/components/Stats"
import Testimonial from "@/components/Testimonial"

type Section =
  | { layout: "featureGrid"; items: { title?: string; desc?: string }[] }
  | { layout: "stats"; items: { label?: string; value?: string }[] }
  | { layout: "testimonial"; items: { author?: string; role?: string; desc?: string }[] }

function getHomeData(): { sections: Section[] } {
  const file = path.join(process.cwd(), "content", "dla-ciebie.json")
  const raw = fs.readFileSync(file, "utf-8")
  return JSON.parse(raw)
}

export default function HomePage() {
  const data = getHomeData()
  return (
    <div className="min-h-screen bg-[#0A192F] text-white">
      <div className="mx-auto max-w-5xl px-4 py-14">
        <h1 className="text-3xl font-bold tracking-tight">Baltic Digital Institute</h1>
        <p className="opacity-80 mt-2">Strategia, badania, wdrożenia cyfrowe — WCAG 2.2 AA, Core Web Vitals.</p>
      </div>
      {data.sections.map((s, i) => {
        if (s.layout === "featureGrid") return <FeatureGrid key={i} items={s.items} />
        if (s.layout === "stats") return <Stats key={i} items={s.items} />
        if (s.layout === "testimonial") return <Testimonial key={i} items={s.items} />
        return null
      })}
      <footer className="py-10 text-center opacity-70 text-sm">© {new Date().getFullYear()} Baltic Digital Institute</footer>
    </div>
  )
}
