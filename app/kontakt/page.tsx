import data from "@/content/kontakt.json"
import PageShell from "@/app/_components/PageShell"
import SectionRenderer from "@/app/_components/SectionRenderer"
export default function Page(){return(<PageShell title="Kontakt"><SectionRenderer sections={(data as any).sections||[]} /></PageShell>)}
