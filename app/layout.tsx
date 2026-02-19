import type { Metadata } from "next"
import { Playfair_Display, Inter, Tajawal } from "next/font/google"
import { Analytics } from '@vercel/analytics/next'
import "./globals.css"

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const tajawal = Tajawal({ 
  subsets: ["arabic"],
  weight: ['300', '400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Vantix | Premium Digital Assets & E-Commerce Solutions",
  description: "Elite agency crafting high-performance digital assets with 100% ownership and zero monthly fees. Premium ready-made stores for luxury brands.",
  keywords: "premium e-commerce, digital assets, luxury stores, custom coded stores",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfairDisplay.variable} ${inter.variable} ${tajawal.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
