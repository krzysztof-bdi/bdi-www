import FeatureGrid from "@/components/feature-grid"
import Stats from "@/components/stats"
import Testimonial from "@/components/testimonial"
import Rich from "@/components/rich"

type Section = {
  layout: string
  props?: { items?: any[] }
  content?: any
}

export default function SectionResolver({ section }: { section: Section }) {
  switch (section.layout) {
    case "featureGrid":
      return (
        <FeatureGrid
          items={(section.props?.items || []).map(({ title, desc }) => ({ title, desc }))}
        />
      )
    case "stats":
      return (
        <Stats
          items={(section.props?.items || []).map(({ label, value }) => ({ label, value }))}
        />
      )
    case "testimonial":
      return <Testimonial items={section.props?.items || []} />
    default:
      return <Rich value={section.content} />
  }
}
