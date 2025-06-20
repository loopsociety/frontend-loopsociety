"use client"

import Header from "@/components/header"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="max-w-2xl mx-auto p-4">
        <div className="mt-8">
          {/* ASCII Art Header */}
          <div className="ascii-art text-green-400 text-xs mb-6 text-center">
            {`╔══════════════════════════════════════╗
║            LOGIN TERMINAL            ║
║        Access Control System        ║
╚══════════════════════════════════════╝`}
          </div>

          {/* Login Form */}
          <div className="border border-green-400/30 bg-black">
            <div className="bg-green-400/10 p-3 border-b border-green-400/30">
              <h1 className="text-green-300 font-bold">┌─ AUTHENTICATION REQUIRED ─┐</h1>
            </div>

            <div className="p-6">
              <div className="mb-4 text-sm text-green-300">
                {">"} Enter your credentials to access LoopSociety
                <br />
                {">"} New users can register below
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-green-300 text-sm mb-2">root@loopsociety:~$ whoami</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-black border border-green-400/30 text-green-400 p-3 font-mono focus:outline-none focus:border-green-400"
                    placeholder="username"
                  />
                </div>

                <div>
                  <label className="block text-green-300 text-sm mb-2">root@loopsociety:~$ sudo -S</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black border border-green-400/30 text-green-400 p-3 font-mono focus:outline-none focus:border-green-400"
                    placeholder="password"
                  />
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" id="remember" className="bg-black border border-green-400/30" />
                  <label htmlFor="remember" className="text-green-300">
                    Remember this session
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors font-mono"
                  >
                    [LOGIN]
                  </button>
                  <Link
                    href="/register"
                    className="flex-1 px-6 py-3 border border-green-400/30 text-green-300 hover:bg-green-400/5 transition-colors text-center font-mono"
                  >
                    [REGISTER]
                  </Link>
                </div>
              </form>

              <div className="mt-6 pt-4 border-t border-green-400/20">
                <div className="text-xs text-green-400/70 space-y-1">
                  <div>{">"} Forgot password? Contact admin</div>
                  <div>{">"} Having trouble? Check system status</div>
                  <div>{">"} Security notice: Use strong passwords</div>
                </div>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="mt-6 border border-green-400/30 bg-green-400/5">
            <div className="p-4">
              <div className="ascii-art text-green-400 text-xs mb-2">
                {`┌─ SYSTEM STATUS ─┐
│  All systems OK  │
└──────────────────┘`}
              </div>
              <div className="text-xs text-green-300 space-y-1">
                <div>{">"} Server uptime: 99.9%</div>
                <div>{">"} Active connections: 89</div>
                <div>{">"} Last maintenance: 2024-01-10</div>
                <div>{">"} Security level: HIGH</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
