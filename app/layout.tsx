import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Inter } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "greek", "greek-ext"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
})

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext", "greek", "greek-ext"],
  display: "swap",
  variable: "--font-inter",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
})

export const metadata: Metadata = {
  title: "Κατερίνα Σκουλαρίκη - Συμβολαιογράφος Ξάνθης",
  description:
    "Αξιόπιστες συμβολαιογραφικές υπηρεσίες με συνέπεια και διακριτικότητα. Επικοινωνήστε μαζί μας για όλες τις νομικές σας ανάγκες.",
  generator: "React",
  openGraph: {
    title: "Κατερίνα Σκουλαρίκη - Συμβολαιογράφος Ξάνθης",
    description: "Αξιόπιστες συμβολαιογραφικές υπηρεσίες με συνέπεια και διακριτικότητα.",
    locale: "el_GR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="el" className={`${openSans.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
