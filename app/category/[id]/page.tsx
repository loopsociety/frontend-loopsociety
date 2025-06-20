import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Link from "next/link"

// Mock data for threads
const threads = [
  {
    id: 1,
    title: "Welcome to LoopSociety - Read the Rules",
    author: "root_access",
    replies: 42,
    views: 1337,
    lastPost: { user: "newbie_01", time: "2024-01-15 14:30:22" },
    pinned: true,
    locked: false,
  },
  {
    id: 2,
    title: "Building a distributed file system in Rust",
    author: "rust_crab",
    replies: 23,
    views: 456,
    lastPost: { user: "systems_dev", time: "2024-01-15 13:45:11" },
    pinned: false,
    locked: false,
  },
  {
    id: 3,
    title: "Reverse engineering proprietary protocols",
    author: "protocol_hacker",
    replies: 67,
    views: 892,
    lastPost: { user: "wireshark_wizard", time: "2024-01-15 12:20:33" },
    pinned: false,
    locked: false,
  },
  {
    id: 4,
    title: "[SOLVED] Memory leak in C++ multithreaded application",
    author: "cpp_master",
    replies: 15,
    views: 234,
    lastPost: { user: "valgrind_user", time: "2024-01-15 11:15:44" },
    pinned: false,
    locked: true,
  },
  {
    id: 5,
    title: "Open source alternative to proprietary CAD software",
    author: "foss_advocate",
    replies: 89,
    views: 1123,
    lastPost: { user: "blender_guru", time: "2024-01-15 10:30:55" },
    pinned: false,
    locked: false,
  },
]

export default function CategoryPage({ params }: { params: { id: string } }) {
  const categoryId = params.id
  const categoryName = "GENERAL" // This would be fetched based on ID

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 p-4">
          {/* Breadcrumb */}
          <div className="mb-4 text-sm text-green-300">
            <Link href="/" className="hover:text-green-400">
              HOME
            </Link>
            <span className="mx-2">{">"}</span>
            <span className="text-green-400">{categoryName}</span>
          </div>

          {/* Category Header */}
          <div className="mb-6 p-4 border border-green-400/30 bg-green-400/5">
            <div className="ascii-art text-green-400 text-xs mb-2">
              {`┌─ CATEGORY: ${categoryName} ─┐
│  Threads and discussions   │
└────────────────────────────┘`}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <p className="text-sm text-green-300">{">"} General discussion and introductions for new members</p>
              <Link
                href={`/category/${categoryId}/new`}
                className="mt-2 md:mt-0 px-4 py-1 border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors text-sm"
              >
                [NEW THREAD]
              </Link>
            </div>
          </div>

          {/* Threads Table */}
          <div className="border border-green-400/30">
            <div className="bg-green-400/10 p-2 border-b border-green-400/30">
              <h2 className="text-green-300 font-bold">┌─ THREADS ─┐</h2>
            </div>

            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-2 p-2 bg-green-400/5 border-b border-green-400/30 text-xs font-bold text-green-300">
              <div className="col-span-6">THREAD TITLE</div>
              <div className="col-span-2 text-center">AUTHOR</div>
              <div className="col-span-1 text-center">REPLIES</div>
              <div className="col-span-1 text-center">VIEWS</div>
              <div className="col-span-2">LAST POST</div>
            </div>

            {/* Threads */}
            {threads.map((thread) => (
              <Link
                key={thread.id}
                href={`/thread/${thread.id}`}
                className="block hover:bg-green-400/10 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 p-3 border-b border-green-400/20 text-sm">
                  <div className="md:col-span-6">
                    <div className="flex items-center space-x-2">
                      {thread.pinned && <span className="text-green-300 text-xs">[PIN]</span>}
                      {thread.locked && <span className="text-red-400 text-xs">[LOCK]</span>}
                      <span className="text-green-400 font-bold">{thread.title}</span>
                    </div>
                  </div>

                  <div className="md:col-span-2 text-center">
                    <span className="md:hidden text-green-300">By: </span>
                    <span className="text-green-400">{thread.author}</span>
                  </div>

                  <div className="md:col-span-1 text-center">
                    <span className="md:hidden text-green-300">Replies: </span>
                    <span className="text-green-400">{thread.replies}</span>
                  </div>

                  <div className="md:col-span-1 text-center">
                    <span className="md:hidden text-green-300">Views: </span>
                    <span className="text-green-400">{thread.views}</span>
                  </div>

                  <div className="md:col-span-2 text-xs">
                    <div className="text-green-300">
                      {">"} {thread.lastPost.user}
                    </div>
                    <div className="text-green-400/70">{thread.lastPost.time}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center space-x-2 text-sm">
            <button className="px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">
              [PREV]
            </button>
            <span className="px-3 py-1 bg-green-400/20 text-green-300">[1]</span>
            <button className="px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">[2]</button>
            <button className="px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">[3]</button>
            <button className="px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">
              [NEXT]
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
