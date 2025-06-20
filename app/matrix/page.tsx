"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function MatrixPage() {
  const [matrixCode, setMatrixCode] = useState<string[][]>([])
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    // Generate matrix rain effect
    const generateMatrix = () => {
      const chars =
        "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      const columns = Math.floor(window.innerWidth / 20)
      const rows = Math.floor(window.innerHeight / 20)

      const matrix = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => chars[Math.floor(Math.random() * chars.length)]),
      )

      setMatrixCode(matrix)
    }

    generateMatrix()
    const interval = setInterval(() => {
      generateMatrix()
    }, 150)

    // Show message after 3 seconds
    const messageTimer = setTimeout(() => {
      setShowMessage(true)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(messageTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-20">
        {matrixCode.map((row, i) => (
          <div key={i} className="flex text-xs leading-none">
            {row.map((char, j) => (
              <span key={j} className="w-5 animate-pulse">
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Matrix Logo */}
          <div className="ascii-art text-green-400 text-xs mb-8 animate-pulse">
            {`
███╗   ███╗ █████╗ ████████╗██████╗ ██╗██╗  ██╗
████╗ ████║██╔══██╗╚══██╔══╝██╔══██╗██║╚██╗██╔╝
██╔████╔██║███████║   ██║   ██████╔╝██║ ╚███╔╝ 
██║╚██╔╝██║██╔══██║   ██║   ██╔══██╗██║ ██╔██╗ 
██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║██║██╔╝ ██╗
╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝
            `}
          </div>

          {showMessage && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-2xl text-green-300 mb-4">Wake up, Neo...</div>

              <div className="text-lg text-green-400 space-y-2">
                <p>The Matrix has you...</p>
                <p>Follow the white rabbit.</p>
              </div>

              <div className="border border-green-400/30 p-6 bg-black/50 backdrop-blur">
                <div className="text-green-300 mb-4">
                  "This is your last chance. After this, there is no going back."
                </div>
                <div className="text-sm text-green-400 mb-6">
                  You take the blue pill—the story ends, you wake up in your bed and believe whatever you want to
                  believe.
                  <br />
                  You take the red pill—you stay in Wonderland, and I show you how deep the rabbit hole goes.
                </div>

                <div className="flex justify-center space-x-8">
                  <Link
                    href="/"
                    className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors"
                  >
                    [BLUE PILL]
                  </Link>
                  <Link
                    href="/ghost"
                    className="px-6 py-3 border border-red-400 text-red-400 hover:bg-red-400/10 transition-colors"
                  >
                    [RED PILL]
                  </Link>
                </div>
              </div>

              <div className="text-xs text-green-400/70 mt-8">
                {">"} You accessed this page through the terminal
                <br />
                {">"} There are more secrets hidden in the system...
                <br />
                {">"} Try other commands to discover them
              </div>

              <Link
                href="/"
                className="inline-block px-4 py-2 border border-green-400/30 text-green-400 hover:bg-green-400/10 transition-colors text-sm mt-4"
              >
                [RETURN TO REALITY]
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
