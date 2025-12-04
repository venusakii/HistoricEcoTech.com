import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { TimeResponsiveProvider } from "@/components/time-responsive-provider"
import { TimeResponsiveOverlay } from "@/components/time-responsive-overlay"
import { LightBeamCursor } from "@/components/light-beam-cursor"
import { TimeIndicator } from "@/components/time-indicator"
import { AmbientEffects } from "@/components/ambient-effects"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
})

export const metadata: Metadata = {
  title: "HistoricEcoTech | Sustainable Energy for Heritage Homes",
  description:
    "Sustainable energy and water management for historic homes. We modernize heritage estates without erasing their soul.",
  generator: "v0.app",
  keywords: ["sustainable energy", "heritage homes", "historic preservation", "eco-tech", "smart home"],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export const viewport = {
  themeColor: "#4D908E",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <TimeResponsiveProvider>
          <TimeResponsiveOverlay />
          <LightBeamCursor />
          <AmbientEffects />
          {children}
          <TimeIndicator />
        </TimeResponsiveProvider>
        <Analytics />
      </body>
    </html>
  )
}
