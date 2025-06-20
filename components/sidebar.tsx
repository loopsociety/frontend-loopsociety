"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  { href: "/", label: "HOME", icon: "[H]" },
  { href: "/categories", label: "CATEGORIES", icon: "[C]" },
  { href: "/projects", label: "PROJECTS", icon: "[P]" },
  { href: "/docs", label: "DOCS", icon: "[D]" },
  { href: "/profile", label: "PROFILE", icon: "[U]" },
  { href: "/inbox", label: "INBOX", icon: "[M]" },
  { href: "/settings", label: "SETTINGS", icon: "[S]" },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-full md:w-64 bg-black border-r border-green-400/30 p-4">
      <div className="ascii-art text-green-400 text-xs mb-4">
        {`┌─────────────────────┐
│    MAIN MENU        │
└─────────────────────┘`}
      </div>

      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-2 py-1 text-sm transition-colors ${
              pathname === item.href
                ? "bg-green-400/20 text-green-300"
                : "text-green-400 hover:text-green-300 hover:bg-green-400/10"
            }`}
          >
            <span className="text-green-300">{item.icon}</span> {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-8 ascii-art text-green-400 text-xs">
        {`┌─────────────────────┐
│    QUICK STATS      │
├─────────────────────┤
│ THREADS: 42,069     │
│ POSTS: 133,742      │
│ MEMBERS: 1,337      │
│ ONLINE: 89          │
└─────────────────────┘`}
      </div>

      <div className="mt-4 text-xs text-green-400/70">
        <div>{">"} Last backup: OK</div>
        <div>{">"} Server load: 23%</div>
        <div>{">"} Memory: 67% used</div>
      </div>
    </aside>
  )
}
