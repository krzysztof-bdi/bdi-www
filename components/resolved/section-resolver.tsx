import FeatureGrid from "@/components/feature-grid"
import Stats from "@/components/stats"
import Testimonial from "@/components/testimonial"
import Rich from "@/components/rich"

type SectionDoc = {
  _id: string
  layout: "featureGrid" | "stats" | "testimonial" | "rich"
  title?: string
  subtitle?: string
  content?: any
  props?: { items?: any[] }
}

export default function SectionResolver({ section }: { section: SectionDoc }) {
  switch (section.layout) {
    case "featureGrid":
      return <FeatureGrid items={(section.props?.items || []).map(({title, desc}) => ({title, desc}))} />
    case "stats":
      return <Stats items={(section.props?.items || []).map(({label, value, note}) => ({label, value, note}))} />
    case "testimonial":
      return <Testimonial quote={section.props?.items?.[0]?.desc || ""} author={section.props?.items?.[0]?.author || "Anon"} role={section.props?.items?.[0]?.role} />
    case "rich":
    default:
      return <Rich value={section.content} />
  }
}
