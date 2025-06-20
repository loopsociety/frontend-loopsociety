import type React from "react"
import Header from "./header"
import Sidebar from "./sidebar"

interface PageLayoutProps {
  children: React.ReactNode
  showSidebar?: boolean
}

export default function PageLayout({ children, showSidebar = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {showSidebar && <Sidebar />}
        <main className={`flex-1 p-4 ${!showSidebar ? "max-w-4xl mx-auto" : ""}`}>{children}</main>
      </div>
    </div>
  )
}
