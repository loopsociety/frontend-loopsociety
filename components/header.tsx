"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import TerminalInput from "./terminal-input"

export default function Header() {
  const [currentTime, setCurrentTime] = useState("")
  const [showTerminal, setShowTerminal] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleString("en-US", {
          hour12: false,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleTerminalClick = () => {
    setShowTerminal(!showTerminal)
  }

  return (
    <header className="border-b border-green-400/30 p-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* ASCII Art Header */}
        <div className="ascii-art text-green-400 text-xs mb-2 hidden md:block">
          {`╔═══════════════════════════════════════════════════════════════════════════════════════════╗
║  ██╗      ██████╗  ██████╗ ██████╗ ███████╗ ██████╗  ██████╗██╗███████╗████████╗██╗   ██╗ ║
║  ██║     ██╔═══██╗██╔═══██╗██╔══██╗██╔════╝██╔═══██╗██╔════╝██║██╔════╝╚══██╔══╝╚██╗ ██╔╝ ║
║  ██║     ██║   ██║██║   ██║██████╔╝███████╗██║   ██║██║     ██║█████╗     ██║    ╚████╔╝  ║
║  ██║     ██║   ██║██║   ██║██╔═══╝ ╚════██║██║   ██║██║     ██║██╔══╝     ██║     ╚██╔╝   ║
║  ███████╗╚██████╔╝╚██████╔╝██║     ███████║╚██████╔╝╚██████╗██║███████╗   ██║      ██║    ║
║  ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝     ╚══════╝ ╚═════╝  ╚═════╝╚═╝╚══════╝   ╚═╝      ╚═╝    ║
╚═══════════════════════════════════════════════════════════════════════════════════════════╝`}
        </div>

        {/* Mobile Header */}
        <div className="md:hidden">
          <div className="text-green-400 text-lg font-bold">
            LoopSociety <span className="text-green-300">for(;;)</span>
          </div>
        </div>

        {/* Navigation and Status */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-2">
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-green-300">{">"} SYSTEM STATUS: ONLINE</span>
            <span className="text-green-300">{">"} USERS: 1337</span>
            <span className="text-green-300">{">"} UPTIME: 99.9%</span>
          </div>

          <div className="flex items-center space-x-4 text-sm mt-2 md:mt-0">
            <span className="text-green-300">[{currentTime}]</span>
            <Link href="/login" className="text-green-400 hover:text-green-300 transition-colors">
              [LOGIN]
            </Link>
            <Link href="/register" className="text-green-400 hover:text-green-300 transition-colors">
              [REGISTER]
            </Link>
          </div>
        </div>

        {/* Interactive Terminal */}
        <div className="mt-4">
          <div
            className="cursor-pointer hover:bg-green-400/5 p-2 -m-2 rounded transition-colors"
            onClick={handleTerminalClick}
          >
            <div className="text-sm flex items-center">
              <span className="text-green-300">root@loopsociety:~$ </span>
              <span className="text-green-400/70 ml-2">
                {showTerminal ? "terminal active..." : "click to access terminal"}
              </span>
              <span className="cursor-blink ml-1"></span>
            </div>
          </div>

          {showTerminal && (
            <div className="mt-4 p-4 border border-green-400/30 bg-black/90">
              <TerminalInput onCommand={() => {}} />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
