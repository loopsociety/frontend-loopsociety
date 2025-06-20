import PageLayout from "@/components/page-layout"
import Breadcrumb from "@/components/breadcrumb"
import PageHeader from "@/components/page-header"

const userProfile = {
  username: "root_access",
  title: "System Administrator",
  joinDate: "2020-01-01",
  lastSeen: "2024-01-15 14:30:22",
  posts: 1337,
  threads: 42,
  reputation: 9999,
  level: "ROOT",
  badges: [
    { name: "Founder", color: "text-yellow-400" },
    { name: "Code Master", color: "text-green-400" },
    { name: "Security Expert", color: "text-red-400" },
    { name: "Mentor", color: "text-blue-400" },
  ],
  stats: {
    linesOfCode: 1000000,
    bugsFixed: 2048,
    projectsContributed: 256,
    helpfulAnswers: 512,
  },
  recentActivity: [
    { action: "Posted in", target: "Welcome to LoopSociety", time: "2 hours ago" },
    { action: "Created thread", target: "New Security Guidelines", time: "1 day ago" },
    { action: "Merged PR", target: "QuantumOS Core Update", time: "2 days ago" },
    { action: "Reviewed code", target: "CryptoChat Enhancement", time: "3 days ago" },
  ],
}

export default function ProfilePage() {
  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "HOME", href: "/" }, { label: "PROFILE" }]} />

      <PageHeader
        title="USER PROFILE"
        description="Your digital identity in the LoopSociety"
        ascii={`┌─ USER TERMINAL ─┐
│   root_access    │
└──────────────────┘`}
        action={
          <button className="px-4 py-1 border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors text-sm">
            [EDIT PROFILE]
          </button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="border border-green-400/30">
            <div className="bg-green-400/10 p-3 border-b border-green-400/30">
              <h2 className="text-green-300 font-bold">┌─ BASIC INFORMATION ─┐</h2>
            </div>
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-green-300">Username:</span>
                  <div className="text-green-400 font-bold">{userProfile.username}</div>
                </div>
                <div>
                  <span className="text-green-300">Title:</span>
                  <div className="text-green-400">{userProfile.title}</div>
                </div>
                <div>
                  <span className="text-green-300">Member Since:</span>
                  <div className="text-green-400">{userProfile.joinDate}</div>
                </div>
                <div>
                  <span className="text-green-300">Last Seen:</span>
                  <div className="text-green-400">{userProfile.lastSeen}</div>
                </div>
                <div>
                  <span className="text-green-300">Access Level:</span>
                  <div className="text-red-400 font-bold">{userProfile.level}</div>
                </div>
                <div>
                  <span className="text-green-300">Reputation:</span>
                  <div className="text-green-400 font-bold">{userProfile.reputation}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="border border-green-400/30">
            <div className="bg-green-400/10 p-3 border-b border-green-400/30">
              <h2 className="text-green-300 font-bold">┌─ STATISTICS ─┐</h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-green-400 text-2xl font-bold">{userProfile.posts}</div>
                  <div className="text-green-300 text-sm">Posts</div>
                </div>
                <div>
                  <div className="text-green-400 text-2xl font-bold">{userProfile.threads}</div>
                  <div className="text-green-300 text-sm">Threads</div>
                </div>
                <div>
                  <div className="text-green-400 text-2xl font-bold">{userProfile.stats.bugsFixed}</div>
                  <div className="text-green-300 text-sm">Bugs Fixed</div>
                </div>
                <div>
                  <div className="text-green-400 text-2xl font-bold">{userProfile.stats.projectsContributed}</div>
                  <div className="text-green-300 text-sm">Projects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="border border-green-400/30">
            <div className="bg-green-400/10 p-3 border-b border-green-400/30">
              <h2 className="text-green-300 font-bold">┌─ RECENT ACTIVITY ─┐</h2>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {userProfile.recentActivity.map((activity, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <div className="text-green-300">
                      {">"} {activity.action} <span className="text-green-400">{activity.target}</span>
                    </div>
                    <div className="text-green-400/70">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Avatar/ASCII Art */}
          <div className="border border-green-400/30">
            <div className="bg-green-400/10 p-3 border-b border-green-400/30">
              <h3 className="text-green-300 font-bold">┌─ AVATAR ─┐</h3>
            </div>
            <div className="p-4 text-center">
              <div className="ascii-art text-green-400 text-xs mb-4">
                {`    ┌─────────┐
    │ ◉     ◉ │
    │    ─    │
    │  \\___/  │
    └─────────┘
   ROOT ACCESS
  SYSTEM ADMIN`}
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="border border-green-400/30">
            <div className="bg-green-400/10 p-3 border-b border-green-400/30">
              <h3 className="text-green-300 font-bold">┌─ BADGES ─┐</h3>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {userProfile.badges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-green-300">{">"}</span>
                    <span className={`${badge.color} font-bold`}>[{badge.name.toUpperCase()}]</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System Info */}
          <div className="border border-green-400/30">
            <div className="bg-green-400/10 p-3 border-b border-green-400/30">
              <h3 className="text-green-300 font-bold">┌─ SYSTEM INFO ─┐</h3>
            </div>
            <div className="p-4 text-xs space-y-1">
              <div className="text-green-400">{">"} OS: QuantumOS v2.1</div>
              <div className="text-green-400">{">"} Shell: /bin/bash</div>
              <div className="text-green-400">{">"} Editor: vim</div>
              <div className="text-green-400">{">"} Language: C/Rust/Python</div>
              <div className="text-green-400">{">"} Timezone: UTC+0</div>
              <div className="text-green-400">{">"} Encryption: AES-256</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="border border-green-400/30">
            <div className="bg-green-400/10 p-3 border-b border-green-400/30">
              <h3 className="text-green-300 font-bold">┌─ QUICK ACTIONS ─┐</h3>
            </div>
            <div className="p-4 space-y-2">
              <button className="w-full px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10 text-sm">
                [CHANGE PASSWORD]
              </button>
              <button className="w-full px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10 text-sm">
                [UPDATE AVATAR]
              </button>
              <button className="w-full px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10 text-sm">
                [PRIVACY SETTINGS]
              </button>
              <button className="w-full px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10 text-sm">
                [EXPORT DATA]
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
