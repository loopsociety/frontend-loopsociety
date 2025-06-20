import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import Link from "next/link"

// Mock data for posts
const posts = [
  {
    id: 1,
    author: "root_access",
    title: "Administrator",
    postCount: 1337,
    joinDate: "2020-01-01",
    content: `Welcome to LoopSociety, fellow hackers and developers!

This is our underground community where we share knowledge, collaborate on projects, and push the boundaries of technology.

RULES:
1. Respect other members
2. No illegal activities
3. Share knowledge freely
4. Help newcomers
5. Keep discussions technical

Remember: for(;;) { learn(); code(); share(); }

Let's build something amazing together!`,
    timestamp: "2024-01-15 09:00:00",
    signature: "root@loopsociety:~# while true; do hack; done",
  },
  {
    id: 2,
    author: "newbie_01",
    title: "Script Kiddie",
    postCount: 5,
    joinDate: "2024-01-10",
    content: `Thanks for the welcome!

I'm new to programming and excited to learn from everyone here. I've been working with Python for a few months and just started learning about web development.

Looking forward to contributing to the community!

Quick question: What's the best way to get started with open source contributions?`,
    timestamp: "2024-01-15 14:30:22",
    signature: "Learning one line of code at a time...",
  },
  {
    id: 3,
    author: "code_ninja",
    title: "Senior Developer",
    postCount: 892,
    joinDate: "2021-03-15",
    content: `@newbie_01 Welcome to the community!

For open source contributions, I'd recommend:

1. Start with documentation fixes
2. Look for "good first issue" labels
3. Read the contributing guidelines carefully
4. Don't be afraid to ask questions
5. Start small and work your way up

Some beginner-friendly projects:
- First-timers-only repositories
- Documentation improvements
- Bug reports and testing
- Translation work

The key is to find projects you actually use and care about. That way you'll be motivated to contribute meaningfully.

Happy coding!`,
    timestamp: "2024-01-15 15:45:33",
    signature: "Code is poetry in motion",
  },
]

export default function ThreadPage({ params }: { params: { id: string } }) {
  const threadId = params.id
  const threadTitle = "Welcome to LoopSociety - Read the Rules"

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
            <Link href="/category/1" className="hover:text-green-400">
              GENERAL
            </Link>
            <span className="mx-2">{">"}</span>
            <span className="text-green-400">THREAD</span>
          </div>

          {/* Thread Header */}
          <div className="mb-6 p-4 border border-green-400/30 bg-green-400/5">
            <div className="ascii-art text-green-400 text-xs mb-2">
              {`┌─ THREAD ─┐
│  ${threadTitle.substring(0, 30)}${threadTitle.length > 30 ? "..." : ""}
└───────────┘`}
            </div>
            <h1 className="text-lg text-green-300 font-bold mb-2">{threadTitle}</h1>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="text-sm text-green-400">
                {">"} Posts: {posts.length} | Views: 1337 | Started by: {posts[0]?.author}
              </div>
              <button className="mt-2 md:mt-0 px-4 py-1 border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors text-sm">
                [REPLY]
              </button>
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={post.id} className="border border-green-400/30 bg-black">
                {/* Post Header */}
                <div className="bg-green-400/10 p-3 border-b border-green-400/30">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="flex items-center space-x-4">
                      <span className="text-green-300 font-bold">#{String(index + 1).padStart(3, "0")}</span>
                      <span className="text-green-400 font-bold">{post.author}</span>
                      <span className="text-green-300 text-sm">[{post.title}]</span>
                    </div>
                    <div className="text-xs text-green-400/70 mt-1 md:mt-0">{post.timestamp}</div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="flex flex-col md:flex-row">
                  {/* User Info Sidebar */}
                  <div className="md:w-48 p-3 border-b md:border-b-0 md:border-r border-green-400/30 bg-green-400/5">
                    <div className="text-center">
                      <div className="ascii-art text-green-400 text-xs mb-2">
                        {`┌─────────┐
│  USER   │
└─────────┘`}
                      </div>
                      <div className="text-green-400 font-bold text-sm mb-1">{post.author}</div>
                      <div className="text-green-300 text-xs mb-2">{post.title}</div>
                      <div className="text-green-400/70 text-xs space-y-1">
                        <div>Posts: {post.postCount}</div>
                        <div>Joined: {post.joinDate}</div>
                      </div>
                    </div>
                  </div>

                  {/* Post Body */}
                  <div className="flex-1 p-4">
                    <div className="text-green-300 text-sm whitespace-pre-line leading-relaxed">{post.content}</div>

                    {/* Signature */}
                    {post.signature && (
                      <div className="mt-4 pt-2 border-t border-green-400/20">
                        <div className="text-green-400/60 text-xs italic">
                          {">"} {post.signature}
                        </div>
                      </div>
                    )}

                    {/* Post Actions */}
                    <div className="mt-4 flex space-x-4 text-xs">
                      <button className="text-green-400 hover:text-green-300">[QUOTE]</button>
                      <button className="text-green-400 hover:text-green-300">[EDIT]</button>
                      <button className="text-red-400 hover:text-red-300">[DELETE]</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reply Form */}
          <div className="mt-6 border border-green-400/30 bg-black">
            <div className="bg-green-400/10 p-3 border-b border-green-400/30">
              <h3 className="text-green-300 font-bold">┌─ QUICK REPLY ─┐</h3>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-green-300 text-sm mb-2">{">"} MESSAGE:</label>
                <textarea
                  className="w-full h-32 bg-black border border-green-400/30 text-green-400 p-2 font-mono text-sm resize-none focus:outline-none focus:border-green-400"
                  placeholder="Type your message here..."
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xs text-green-400/70">{">"} Use [code][/code] for code blocks</div>
                <button className="px-6 py-2 border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors">
                  [POST REPLY]
                </button>
              </div>
            </div>
          </div>

          {/* Thread Navigation */}
          <div className="mt-4 flex justify-between items-center text-sm">
            <button className="px-4 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">
              [PREV THREAD]
            </button>
            <Link
              href="/category/1"
              className="px-4 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10"
            >
              [BACK TO CATEGORY]
            </Link>
            <button className="px-4 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">
              [NEXT THREAD]
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
