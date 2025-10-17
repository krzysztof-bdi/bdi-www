import data from "@/content/dla-sektora-publicznego.json"
import PageShell from "@/app/_components/PageShell"
import SectionRenderer from "@/app/_components/SectionRenderer"
export default function Page(){return(<PageShell title="Dla Sektora Publicznego"><SectionRenderer sections={(data as any).sections||[]} /></PageShell>)}
