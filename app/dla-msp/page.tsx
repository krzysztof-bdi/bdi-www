import data from "@/content/dla-msp.json"
import PageShell from "@/app/_components/PageShell"
import SectionRenderer from "@/app/_components/SectionRenderer"
export default function Page(){return(<PageShell title="Dla MŚP"><SectionRenderer sections={(data as any).sections||[]} /></PageShell>)}
