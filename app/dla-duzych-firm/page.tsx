import data from "@/content/dla-duzych-firm.json"
import PageShell from "@/app/_components/PageShell"
import SectionRenderer from "@/app/_components/SectionRenderer"
export default function Page(){return(<PageShell title="Dla Dużych Firm"><SectionRenderer sections={(data as any).sections||[]} /></PageShell>)}
