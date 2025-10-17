import data from "@/content/centrum-zaufania.json"
import PageShell from "@/app/_components/PageShell"
import SectionRenderer from "@/app/_components/SectionRenderer"
export default function Page(){return(<PageShell title="Centrum Zaufania"><SectionRenderer sections={(data as any).sections||[]} /></PageShell>)}
