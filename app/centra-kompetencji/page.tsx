import data from "@/content/centra-kompetencji.json"
import PageShell from "@/app/_components/PageShell"
import SectionRenderer from "@/app/_components/SectionRenderer"
export default function Page(){return(<PageShell title="Centra Kompetencji"><SectionRenderer sections={(data as any).sections||[]} /></PageShell>)}
