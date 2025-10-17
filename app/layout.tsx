import "@/styles/globals.css"
import type { Metadata } from "next"
import Header from "@/components/header"
import { lato } from "./(site)/fonts"

export const metadata: Metadata = {
  title: "Baltic Digital Institute — Oficjalna strona",
  description: "Strategia, badania i wdrożenia cyfrowe.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${lato.className} bg-[#0A192F] text-white`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
