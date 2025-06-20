import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "LoopSociety - Devs Community Forum",
  description: "A retro terminal-style forum for developers and hackers",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-green-400 font-mono antialiased min-h-screen">{children}</body>
    </html>
  )
}
