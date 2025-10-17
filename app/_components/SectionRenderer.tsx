import FeatureGrid from "@/components/feature-grid"
import Stats from "@/components/stats"
import Testimonial from "@/components/testimonial"
import Rich from "@/components/rich"

type Section =
  | { layout: "featureGrid"; items?: any[] }
  | { layout: "stats"; items?: any[] }
  | { layout: "testimonial"; items?: any[] }
  | { layout: "rich"; content?: string; value?: string }
  | { layout: string; [k: string]: any }

export default function SectionRenderer({ sections }: { sections: Section[] }) {
  const list = Array.isArray(sections) ? sections : []
  return (
    <>
      {list.map((s, i) => {
        if (s.layout === "featureGrid") return <FeatureGrid key={i} items={s.items || []} />
        if (s.layout === "stats") return <Stats key={i} items={s.items || []} />
        if (s.layout === "testimonial") return <Testimonial key={i} items={s.items || []} />
        if (s.layout === "rich") return <Rich key={i} value={(s as any).content || (s as any).value || ""} />
        return null
      })}
    </>
  )
}
