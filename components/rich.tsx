import { PortableText } from "@portabletext/react"
export default function Rich({ value }: { value: any }) {
  return (
    <div className="prose prose-invert prose-zinc">
      <PortableText value={value} />
    </div>
  )
}
