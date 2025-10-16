import "./../styles/globals.css"
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { geistSans, lato } from "./(site)/fonts"

export const metadata: Metadata = {
  title: "Baltic Digital Institute — Oficjalna strona",
  description: "BDI — strategia, badania, wdrożenia cyfrowe."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${lato.variable} ${lato.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
