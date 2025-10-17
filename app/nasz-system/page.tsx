import data from "@/content/nasz-system.json"
import PageShell from "@/app/_components/PageShell"
import SectionRenderer from "@/app/_components/SectionRenderer"
export default function Page(){return(<PageShell title="Nasz System"><SectionRenderer sections={(data as any).sections||[]} /></PageShell>)}
