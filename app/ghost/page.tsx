"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function GhostPage() {
  const [glitchText, setGlitchText] = useState("GHOST PROTOCOL")
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Glitch effect for title
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    const originalText = "GHOST PROTOCOL"

    const glitchInterval = setInterval(() => {
      let glitched = ""
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)]
        } else {
          glitched += originalText[i]
        }
      }
      setGlitchText(glitched)
    }, 100)

    // Show content after 2 seconds
    const contentTimer = setTimeout(() => {
      setShowContent(true)
      setGlitchText(originalText)
      clearInterval(glitchInterval)
    }, 2000)

    return () => {
      clearInterval(glitchInterval)
      clearTimeout(contentTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse"></div>
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="absolute w-full h-px bg-green-400/10" style={{ top: `${i * 2}%` }}></div>
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glitch Title */}
          <div className="text-4xl font-bold mb-8 text-green-300">
            <span className="inline-block animate-pulse">{glitchText}</span>
          </div>

          {showContent && (
            <div className="space-y-8 animate-fade-in">
              {/* Ghost ASCII Art */}
              <div className="ascii-art text-green-400 text-xs">
                {`
                    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                    ░░░░░░░░░░░░░░░██████░░░░░░░░░░░░░░░░░░░
                    ░░░░░░░░░░░░██████████████░░░░░░░░░░░░░
                    ░░░░░░░░░░████████████████████░░░░░░░░
                    ░░░░░░░░██████████████████████████░░░░
                    ░░░░░░████████████████████████████░░░░
                    ░░░░░░██████████████████████████████░░
                    ░░░░████████████████████████████████░░
                    ░░░░██████████████████████████████████
                    ░░░░██████████████████████████████████
                    ░░░░██████████████████████████████████
                    ░░░░██████████████████████████████████
                    ░░░░██████████████████████████████████
                    ░░░░██████████████████████████████████
                    ░░░░██████████████████████████████████
                    ░░░░██████████████████████████████████
                    ░░░░██████████████████████████████████
                    ░░░░██████████████████████████████████
                    ░░░░░░████████████████████████████░░░░
                    ░░░░░░░░████████████████████████░░░░░░
                    ░░░░░░░░░░████████████████████░░░░░░░░
                    ░░░░░░░░░░░░████████████████░░░░░░░░░░
                    ░░░░░░░░░░░░░░████████████░░░░░░░░░░░░
                    ░░░░░░░░░░░░░░░░████████░░░░░░░░░░░░░░
                    ░░░░░░░░░░░░░░░░░░████░░░░░░░░░░░░░░░░
                `}
              </div>

              <div className="border border-green-400/30 p-6 bg-black/80 backdrop-blur">
                <div className="text-green-300 text-xl mb-4">GHOST PROTOCOL ACTIVATED</div>

                <div className="text-sm text-green-400 space-y-3 text-left">
                  <div>{">"} You are now invisible to the system</div>
                  <div>{">"} Your digital footprint has been erased</div>
                  <div>{">"} All traces of your presence are being deleted...</div>
                  <div>{">"} Connection secured through quantum tunneling</div>
                  <div>{">"} Identity: [CLASSIFIED]</div>
                  <div>{">"} Location: [UNKNOWN]</div>
                  <div>{">"} Status: GHOST</div>
                </div>

                <div className="mt-6 p-4 border border-green-400/20 bg-green-400/5">
                  <div className="text-green-300 text-sm mb-2">CLASSIFIED INFORMATION:</div>
                  <div className="text-green-400 text-xs space-y-1">
                    <div>{">"} Project Codename: PHANTOM</div>
                    <div>{">"} Clearance Level: ULTRA BLACK</div>
                    <div>{">"} Access Code: 7H3-GH057-1N-7H3-M4CH1N3</div>
                    <div>{">"} Next Phase: OPERATION SHADOWNET</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="border border-green-400/30 p-4">
                  <div className="text-green-300 font-bold mb-2">STEALTH MODE</div>
                  <div className="text-green-400/70">
                    Your browsing is now completely anonymous. No logs, no traces.
                  </div>
                </div>
                <div className="border border-green-400/30 p-4">
                  <div className="text-green-300 font-bold mb-2">QUANTUM ENCRYPTION</div>
                  <div className="text-green-400/70">All communications are protected by quantum entanglement.</div>
                </div>
                <div className="border border-green-400/30 p-4">
                  <div className="text-green-300 font-bold mb-2">NEURAL INTERFACE</div>
                  <div className="text-green-400/70">
                    Direct connection to the collective consciousness established.
                  </div>
                </div>
              </div>

              <div className="text-xs text-green-400/70 space-y-1">
                <div>{">"} Warning: This page will self-destruct in 60 seconds</div>
                <div>{">"} All evidence of your visit will be quantum-erased</div>
                <div>{">"} Remember: You were never here</div>
              </div>

              <div className="flex justify-center space-x-4">
                <Link
                  href="/"
                  className="px-4 py-2 border border-green-400/30 text-green-400 hover:bg-green-400/10 transition-colors"
                >
                  [RETURN TO SURFACE]
                </Link>
                <Link
                  href="/matrix"
                  className="px-4 py-2 border border-red-400/30 text-red-400 hover:bg-red-400/10 transition-colors"
                >
                  [DEEPER INTO RABBIT HOLE]
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
