import data from "@/content/wiedza.json"
import PageShell from "@/app/_components/PageShell"
import SectionRenderer from "@/app/_components/SectionRenderer"
export default function Page(){return(<PageShell title="Wiedza"><SectionRenderer sections={(data as any).sections||[]} /></PageShell>)}
