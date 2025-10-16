"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"

const nav = [
  { href: "/", label: "Strona główna" },
  { href: "/dla-ciebie", label: "Dla Ciebie" },
  { href: "/dla-msp", label: "Dla MŚP" },
  { href: "/dla-duzych-firm", label: "Dla Dużych Firm" },
  { href: "/sektor-publiczny", label: "Sektor Publiczny" },
  { href: "/centra-kompetencji", label: "Centra Kompetencji" },
  { href: "/nasz-system", label: "Nasz System" },
  { href: "/nasz-wplyw", label: "Nasz Wpływ" },
  { href: "/wiedza", label: "Wiedza" },
  { href: "/kontakt", label: "Kontakt" }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[color:var(--brand)]/80 border-b border-[#0d1b2a]">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-lg no-underline text-white">BDI</Link>
        <nav className="hidden md:flex gap-6">
          {nav.map(i => (
            <Link key={i.href} href={i.href} className="no-underline text-sm text-white/80 hover:text-white">{i.label}</Link>
          ))}
        </nav>
        <button className="md:hidden p-2 text-white/90" aria-label="Menu" onClick={() => setOpen(v=>!v)}>
          <Menu size={22} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#0d1b2a]">
          <div className="container py-3 flex flex-col gap-3">
            {nav.map(i => (
              <Link key={i.href} href={i.href} className="no-underline text-sm text-white" onClick={() => setOpen(false)}>{i.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
