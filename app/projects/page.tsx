import PageLayout from "@/components/page-layout"
import Breadcrumb from "@/components/breadcrumb"
import PageHeader from "@/components/page-header"
import Link from "next/link"

const projects = [
  {
    id: 1,
    name: "QuantumOS",
    description: "A quantum-resistant operating system built from scratch",
    author: "quantum_dev",
    language: "C/Assembly",
    stars: 2847,
    forks: 423,
    status: "Active",
    lastUpdate: "2024-01-15",
  },
  {
    id: 2,
    name: "CryptoChat",
    description: "End-to-end encrypted messaging with zero-knowledge architecture",
    author: "crypto_ninja",
    language: "Rust",
    stars: 1923,
    forks: 287,
    status: "Beta",
    lastUpdate: "2024-01-14",
  },
  {
    id: 3,
    name: "NeuralHack",
    description: "AI-powered penetration testing framework",
    author: "ai_hacker",
    language: "Python",
    stars: 3456,
    forks: 678,
    status: "Active",
    lastUpdate: "2024-01-13",
  },
  {
    id: 4,
    name: "BlockchainDB",
    description: "Decentralized database with blockchain verification",
    author: "chain_master",
    language: "Go",
    stars: 1567,
    forks: 234,
    status: "Alpha",
    lastUpdate: "2024-01-12",
  },
  {
    id: 5,
    name: "TerminalUI",
    description: "Modern terminal interface library for retro applications",
    author: "ui_wizard",
    language: "JavaScript",
    stars: 892,
    forks: 156,
    status: "Stable",
    lastUpdate: "2024-01-11",
  },
]

export default function ProjectsPage() {
  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "HOME", href: "/" }, { label: "PROJECTS" }]} />

      <PageHeader
        title="COMMUNITY PROJECTS"
        description="Open source projects built by the LoopSociety community"
        ascii={`┌─ PROJECT REPOSITORY ─┐
│   Code. Share. Build.   │
└─────────────────────────┘`}
        action={
          <Link
            href="/projects/new"
            className="px-4 py-1 border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors text-sm"
          >
            [SUBMIT PROJECT]
          </Link>
        }
      />

      {/* Project Filters */}
      <div className="mb-6 flex flex-wrap gap-2 text-sm">
        <button className="px-3 py-1 bg-green-400/20 text-green-300 border border-green-400/30">[ALL]</button>
        <button className="px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">[ACTIVE]</button>
        <button className="px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">[BETA]</button>
        <button className="px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">[STABLE]</button>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="border border-green-400/30 hover:bg-green-400/5 transition-colors">
            <div className="p-4">
              <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Link
                      href={`/project/${project.id}`}
                      className="text-green-400 font-bold text-lg hover:text-green-300"
                    >
                      {project.name}
                    </Link>
                    <span
                      className={`px-2 py-1 text-xs border ${
                        project.status === "Active"
                          ? "border-green-400 text-green-400"
                          : project.status === "Beta"
                            ? "border-yellow-400 text-yellow-400"
                            : project.status === "Alpha"
                              ? "border-red-400 text-red-400"
                              : "border-blue-400 text-blue-400"
                      }`}
                    >
                      {project.status.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-green-300 mb-2">{project.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-green-400/70">
                    <span>
                      {">"} By: {project.author}
                    </span>
                    <span>
                      {">"} Language: {project.language}
                    </span>
                    <span>
                      {">"} Updated: {project.lastUpdate}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-3 md:mt-0 text-sm">
                  <div className="text-center">
                    <div className="text-green-400 font-bold">{project.stars}</div>
                    <div className="text-green-300/70">Stars</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-400 font-bold">{project.forks}</div>
                    <div className="text-green-300/70">Forks</div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 text-xs">
                <button className="px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">
                  [VIEW CODE]
                </button>
                <button className="px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">
                  [FORK]
                </button>
                <button className="px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">
                  [STAR]
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Stats */}
      <div className="mt-8 border border-green-400/30">
        <div className="bg-green-400/10 p-2 border-b border-green-400/30">
          <h3 className="text-green-300 font-bold">┌─ PROJECT STATISTICS ─┐</h3>
        </div>
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-green-400 text-xl font-bold">{projects.length}</div>
            <div className="text-green-300 text-sm">Active Projects</div>
          </div>
          <div>
            <div className="text-green-400 text-xl font-bold">{projects.reduce((sum, p) => sum + p.stars, 0)}</div>
            <div className="text-green-300 text-sm">Total Stars</div>
          </div>
          <div>
            <div className="text-green-400 text-xl font-bold">{projects.reduce((sum, p) => sum + p.forks, 0)}</div>
            <div className="text-green-300 text-sm">Total Forks</div>
          </div>
          <div>
            <div className="text-green-400 text-xl font-bold">42</div>
            <div className="text-green-300 text-sm">Contributors</div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
