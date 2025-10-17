import type { Metadata } from "next"
import "@/styles/globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { lato } from "./(site)/fonts"
export const metadata: Metadata={title:"Baltic Digital Institute — Oficjalna strona",description:"Strategia, badania i wdrożenia cyfrowe."}
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang="pl"><body className={`${lato.className} bg-[#0A192F] text-white`}><Header />{children}<Footer /></body></html>) }
