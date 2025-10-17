import data from "@/content/nasz-wplyw.json"
import PageShell from "@/app/_components/PageShell"
import SectionRenderer from "@/app/_components/SectionRenderer"
export default function Page(){return(<PageShell title="Nasz Wpływ"><SectionRenderer sections={(data as any).sections||[]} /></PageShell>)}
