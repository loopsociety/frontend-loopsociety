import PageLayout from "@/components/page-layout"
import Breadcrumb from "@/components/breadcrumb"
import PageHeader from "@/components/page-header"
import Link from "next/link"

const allCategories = [
  {
    id: 1,
    name: "GENERAL",
    description: "General discussion and introductions",
    threads: 1234,
    posts: 5678,
    lastPost: { user: "h4ck3r_42", time: "2024-01-15 14:30:22" },
  },
  {
    id: 2,
    name: "PROJECTS",
    description: "Share your code and collaborate",
    threads: 567,
    posts: 2341,
    lastPost: { user: "code_ninja", time: "2024-01-15 13:45:11" },
  },
  {
    id: 3,
    name: "OPEN_SOURCE",
    description: "Free software and open source projects",
    threads: 890,
    posts: 3456,
    lastPost: { user: "gnu_lover", time: "2024-01-15 12:20:33" },
  },
  {
    id: 4,
    name: "DOCUMENTATION",
    description: "Tutorials, guides and documentation",
    threads: 234,
    posts: 1789,
    lastPost: { user: "doc_master", time: "2024-01-15 11:15:44" },
  },
  {
    id: 5,
    name: "SECURITY",
    description: "Security research and ethical hacking",
    threads: 445,
    posts: 1923,
    lastPost: { user: "sec_expert", time: "2024-01-15 10:30:55" },
  },
  {
    id: 6,
    name: "HARDWARE",
    description: "Hardware hacking and embedded systems",
    threads: 123,
    posts: 678,
    lastPost: { user: "hw_hacker", time: "2024-01-15 09:45:12" },
  },
  {
    id: 7,
    name: "ALGORITHMS",
    description: "Data structures and algorithm discussions",
    threads: 334,
    posts: 1456,
    lastPost: { user: "algo_master", time: "2024-01-15 08:20:11" },
  },
  {
    id: 8,
    name: "WEB_DEV",
    description: "Frontend, backend and full-stack development",
    threads: 789,
    posts: 3421,
    lastPost: { user: "web_wizard", time: "2024-01-15 07:15:33" },
  },
]

export default function CategoriesPage() {
  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "HOME", href: "/" }, { label: "CATEGORIES" }]} />

      <PageHeader
        title="ALL CATEGORIES"
        description="Browse all forum categories and find your community"
        ascii={`┌─ CATEGORY INDEX ─┐
│  Complete listing  │
└────────────────────┘`}
      />

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allCategories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="block border border-green-400/30 hover:bg-green-400/10 transition-colors"
          >
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-green-400 font-bold">
                  [{String(category.id).padStart(2, "0")}] {category.name}
                </h3>
                <div className="text-xs text-green-300">
                  {category.threads}T / {category.posts}P
                </div>
              </div>
              <p className="text-green-300/70 text-sm mb-3">{category.description}</p>
              <div className="text-xs text-green-400/70">
                <div>
                  {">"} Last: {category.lastPost.user}
                </div>
                <div>
                  {">"} {category.lastPost.time}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Category Stats */}
      <div className="mt-8 border border-green-400/30">
        <div className="bg-green-400/10 p-2 border-b border-green-400/30">
          <h3 className="text-green-300 font-bold">┌─ FORUM STATISTICS ─┐</h3>
        </div>
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-green-400 text-xl font-bold">8</div>
            <div className="text-green-300 text-sm">Categories</div>
          </div>
          <div>
            <div className="text-green-400 text-xl font-bold">4,616</div>
            <div className="text-green-300 text-sm">Total Threads</div>
          </div>
          <div>
            <div className="text-green-400 text-xl font-bold">18,741</div>
            <div className="text-green-300 text-sm">Total Posts</div>
          </div>
          <div>
            <div className="text-green-400 text-xl font-bold">1,337</div>
            <div className="text-green-300 text-sm">Members</div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
