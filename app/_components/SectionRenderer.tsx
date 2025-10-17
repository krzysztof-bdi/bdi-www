import FeatureGrid from "@/components/feature-grid"
import Stats from "@/components/stats"
import Testimonial from "@/components/testimonial"
import Rich from "@/components/rich"
export default function SectionRenderer({sections}:{sections:any[]}){return(<>{(sections||[]).map((s:any,i:number)=>{if(s.layout==="featureGrid")return <FeatureGrid key={i} items={s.items||[]} />;if(s.layout==="stats")return <Stats key={i} items={s.items||[]} />;if(s.layout==="testimonial")return <Testimonial key={i} items={s.items||[]} />;if(s.layout==="rich")return <Rich key={i} value={s.content||s.value||\"\"} />;return null})}</>)}
