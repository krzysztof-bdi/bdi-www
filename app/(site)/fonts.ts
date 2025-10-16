import localFont from "next/font/local"
import { Lato } from "next/font/google"

export const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
})

export const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
})
