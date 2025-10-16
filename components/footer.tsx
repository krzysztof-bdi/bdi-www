export default function Footer() {
  return (
    <footer className="border-t border-[#0d1b2a] mt-16">
      <div className="container py-10 text-sm text-[color:var(--brand-light)]">
        © {new Date().getFullYear()} Baltic Digital Institute — Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  )
}
