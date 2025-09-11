import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AnalyticsTracker } from "@/components/analytics-tracker"
import { ChatWidget } from "@/components/chat/chat-widget"
import { AuthProvider } from "@/contexts/auth-context"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "NRBTech - Solutions Technologiques Innovantes",
  description:
    "NRBTech - Votre partenaire de confiance pour les télécommunications, cybersécurité, intelligence artificielle et développement. Services tech professionnels pour entreprises.",
  generator: "NRBTech",
  keywords: ["télécommunications", "cybersécurité", "intelligence artificielle", "développement", "tech", "services"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AuthProvider>
          <ThemeProvider>
            <AnalyticsTracker />
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            <ChatWidget />
            <Analytics />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
