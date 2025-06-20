import PageLayout from "@/components/page-layout"
import Breadcrumb from "@/components/breadcrumb"
import PageHeader from "@/components/page-header"
import Link from "next/link"

const docCategories = [
  {
    id: 1,
    name: "Getting Started",
    description: "New to LoopSociety? Start here",
    docs: [
      { title: "Welcome Guide", slug: "welcome", difficulty: "Beginner" },
      { title: "Forum Rules", slug: "rules", difficulty: "Beginner" },
      { title: "First Steps", slug: "first-steps", difficulty: "Beginner" },
    ],
  },
  {
    id: 2,
    name: "Programming Tutorials",
    description: "Learn to code like a hacker",
    docs: [
      { title: "C Programming Fundamentals", slug: "c-fundamentals", difficulty: "Intermediate" },
      { title: "Assembly Language Basics", slug: "assembly-basics", difficulty: "Advanced" },
      { title: "Python for Hackers", slug: "python-hacking", difficulty: "Intermediate" },
      { title: "Rust Systems Programming", slug: "rust-systems", difficulty: "Advanced" },
    ],
  },
  {
    id: 3,
    name: "Security & Hacking",
    description: "Ethical hacking and security research",
    docs: [
      { title: "Network Security Basics", slug: "network-security", difficulty: "Intermediate" },
      { title: "Web Application Testing", slug: "web-app-testing", difficulty: "Advanced" },
      { title: "Reverse Engineering 101", slug: "reverse-engineering", difficulty: "Expert" },
      { title: "Cryptography Fundamentals", slug: "cryptography", difficulty: "Advanced" },
    ],
  },
  {
    id: 4,
    name: "System Administration",
    description: "Master the command line and servers",
    docs: [
      { title: "Linux Command Line", slug: "linux-cli", difficulty: "Beginner" },
      { title: "Server Configuration", slug: "server-config", difficulty: "Intermediate" },
      { title: "Docker & Containers", slug: "docker-containers", difficulty: "Intermediate" },
      { title: "Kubernetes Orchestration", slug: "kubernetes", difficulty: "Advanced" },
    ],
  },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "text-green-400"
    case "Intermediate":
      return "text-yellow-400"
    case "Advanced":
      return "text-orange-400"
    case "Expert":
      return "text-red-400"
    default:
      return "text-green-400"
  }
}

export default function DocsPage() {
  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "HOME", href: "/" }, { label: "DOCUMENTATION" }]} />

      <PageHeader
        title="DOCUMENTATION HUB"
        description="Tutorials, guides, and technical documentation for hackers and developers"
        ascii={`┌─ KNOWLEDGE BASE ─┐
│  Learn. Document.  │
│     Share.         │
└────────────────────┘`}
        action={
          <Link
            href="/docs/contribute"
            className="px-4 py-1 border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors text-sm"
          >
            [CONTRIBUTE]
          </Link>
        }
      />

      {/* Search Bar */}
      <div className="mb-6">
        <div className="flex items-center border border-green-400/30 bg-black">
          <span className="px-3 text-green-300">search@docs:~$</span>
          <input
            type="text"
            placeholder="Search documentation..."
            className="flex-1 bg-transparent text-green-400 p-2 outline-none"
          />
          <button className="px-4 py-2 border-l border-green-400/30 text-green-400 hover:bg-green-400/10">
            [SEARCH]
          </button>
        </div>
      </div>

      {/* Documentation Categories */}
      <div className="space-y-6">
        {docCategories.map((category) => (
          <div key={category.id} className="border border-green-400/30">
            <div className="bg-green-400/10 p-3 border-b border-green-400/30">
              <h2 className="text-green-300 font-bold">{category.name}</h2>
              <p className="text-green-400/70 text-sm mt-1">{category.description}</p>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {category.docs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className="block p-3 border border-green-400/20 hover:bg-green-400/5 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-green-400 font-bold mb-1">{doc.title}</h3>
                        <div className="flex items-center space-x-2 text-xs">
                          <span className="text-green-300">Difficulty:</span>
                          <span className={getDifficultyColor(doc.difficulty)}>{doc.difficulty.toUpperCase()}</span>
                        </div>
                      </div>
                      <div className="text-green-400 text-xs">[READ]</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="mt-8 border border-green-400/30">
        <div className="bg-green-400/10 p-2 border-b border-green-400/30">
          <h3 className="text-green-300 font-bold">┌─ QUICK LINKS ─┐</h3>
        </div>
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/docs/api" className="text-green-400 hover:text-green-300 text-sm">
            {">"} API Reference
          </Link>
          <Link href="/docs/faq" className="text-green-400 hover:text-green-300 text-sm">
            {">"} FAQ
          </Link>
          <Link href="/docs/changelog" className="text-green-400 hover:text-green-300 text-sm">
            {">"} Changelog
          </Link>
          <Link href="/docs/roadmap" className="text-green-400 hover:text-green-300 text-sm">
            {">"} Roadmap
          </Link>
        </div>
      </div>

      {/* Documentation Stats */}
      <div className="mt-6 border border-green-400/30">
        <div className="bg-green-400/10 p-2 border-b border-green-400/30">
          <h3 className="text-green-300 font-bold">┌─ DOCUMENTATION STATS ─┐</h3>
        </div>
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-green-400 text-xl font-bold">
              {docCategories.reduce((sum, cat) => sum + cat.docs.length, 0)}
            </div>
            <div className="text-green-300 text-sm">Total Docs</div>
          </div>
          <div>
            <div className="text-green-400 text-xl font-bold">4</div>
            <div className="text-green-300 text-sm">Categories</div>
          </div>
          <div>
            <div className="text-green-400 text-xl font-bold">23</div>
            <div className="text-green-300 text-sm">Contributors</div>
          </div>
          <div>
            <div className="text-green-400 text-xl font-bold">156</div>
            <div className="text-green-300 text-sm">Updates This Month</div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
