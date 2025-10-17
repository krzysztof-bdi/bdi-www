import data from "@/content/home.json"
import PageShell from "@/app/_components/PageShell"
import SectionRenderer from "@/app/_components/SectionRenderer"
export default function Page(){return(<PageShell title="Baltic Digital Institute"><SectionRenderer sections={(data as any).sections||[]} /></PageShell>)}
