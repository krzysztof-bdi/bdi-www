"use client"
import Link from "next/link"

export default function Header() {
  const items = [
    { href: "/", label: "Strona główna" },
    { href: "/dla-duzych-firm", label: "Dla Dużych Firm" },
    { href: "/dla-msp", label: "Dla MŚP" },
    { href: "/dla-sektora-publicznego", label: "Dla Sektora Publicznego" },
    { href: "/dla-ciebie", label: "Dla Ciebie" },
    { href: "/nasz-system", label: "Nasz System" },
    { href: "/centra-kompetencji", label: "Centra Kompetencji" },
    { href: "/centrum-zaufania", label: "Centrum Zaufania" },
    { href: "/nasz-wplyw", label: "Nasz Wpływ" },
    { href: "/wiedza", label: "Wiedza" },
    { href: "/kontakt", label: "Kontakt" },
  ]
  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-wrap gap-4 text-sm">
        {items.map(i => <Link key={i.href} href={i.href} className="hover:underline">{i.label}</Link>)}
      </nav>
    </header>
  )
}
