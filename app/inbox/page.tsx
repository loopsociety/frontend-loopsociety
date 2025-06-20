import PageLayout from "@/components/page-layout"
import Breadcrumb from "@/components/breadcrumb"
import PageHeader from "@/components/page-header"

const messages = [
  {
    id: 1,
    from: "system_admin",
    subject: "Welcome to LoopSociety",
    preview: "Welcome to our underground community...",
    timestamp: "2024-01-15 14:30:22",
    read: true,
    priority: "normal",
  },
  {
    id: 2,
    from: "code_ninja",
    subject: "RE: Rust project collaboration",
    preview: "I'd love to contribute to your quantum OS project...",
    timestamp: "2024-01-15 13:45:11",
    read: false,
    priority: "high",
  },
  {
    id: 3,
    from: "security_bot",
    subject: "[ALERT] Suspicious login attempt",
    preview: "We detected an unusual login attempt from IP...",
    timestamp: "2024-01-15 12:20:33",
    read: false,
    priority: "urgent",
  },
  {
    id: 4,
    from: "crypto_master",
    subject: "New encryption algorithm discussion",
    preview: "Check out this new post-quantum cryptography...",
    timestamp: "2024-01-15 11:15:44",
    read: true,
    priority: "normal",
  },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "urgent":
      return "text-red-400"
    case "high":
      return "text-yellow-400"
    default:
      return "text-green-400"
  }
}

const getPrioritySymbol = (priority: string) => {
  switch (priority) {
    case "urgent":
      return "!!!"
    case "high":
      return "!!"
    default:
      return ">"
  }
}

export default function InboxPage() {
  const unreadCount = messages.filter((m) => !m.read).length

  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "HOME", href: "/" }, { label: "INBOX" }]} />

      <PageHeader
        title={`INBOX (${unreadCount} UNREAD)`}
        description="Secure messaging system for LoopSociety members"
        ascii={`┌─ MESSAGE CENTER ─┐
│   Encrypted Mail   │
└────────────────────┘`}
        action={
          <button className="px-4 py-1 border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors text-sm">
            [COMPOSE]
          </button>
        }
      />

      {/* Message Filters */}
      <div className="mb-6 flex flex-wrap gap-2 text-sm">
        <button className="px-3 py-1 bg-green-400/20 text-green-300 border border-green-400/30">[ALL]</button>
        <button className="px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">
          [UNREAD] ({unreadCount})
        </button>
        <button className="px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">[SENT]</button>
        <button className="px-3 py-1 border border-green-400/30 text-green-400 hover:bg-green-400/10">
          [ARCHIVED]
        </button>
      </div>

      {/* Messages List */}
      <div className="border border-green-400/30">
        <div className="bg-green-400/10 p-2 border-b border-green-400/30">
          <h2 className="text-green-300 font-bold">┌─ MESSAGES ─┐</h2>
        </div>

        {/* Message Header */}
        <div className="hidden md:grid grid-cols-12 gap-2 p-2 bg-green-400/5 border-b border-green-400/30 text-xs font-bold text-green-300">
          <div className="col-span-1">STATUS</div>
          <div className="col-span-2">FROM</div>
          <div className="col-span-5">SUBJECT</div>
          <div className="col-span-2">TIMESTAMP</div>
          <div className="col-span-2">ACTIONS</div>
        </div>

        {/* Messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`grid grid-cols-1 md:grid-cols-12 gap-2 p-3 border-b border-green-400/20 text-sm hover:bg-green-400/5 transition-colors ${
              !message.read ? "bg-green-400/5" : ""
            }`}
          >
            <div className="md:col-span-1 flex items-center">
              <span className={`${getPriorityColor(message.priority)} font-bold`}>
                {getPrioritySymbol(message.priority)}
              </span>
              {!message.read && <span className="ml-2 w-2 h-2 bg-green-400 rounded-full"></span>}
            </div>

            <div className="md:col-span-2">
              <span className="md:hidden text-green-300">From: </span>
              <span className="text-green-400 font-bold">{message.from}</span>
            </div>

            <div className="md:col-span-5">
              <div className="text-green-400 font-bold mb-1">{message.subject}</div>
              <div className="text-green-300/70 text-xs">{message.preview}</div>
            </div>

            <div className="md:col-span-2 text-xs">
              <span className="md:hidden text-green-300">Time: </span>
              <span className="text-green-400/70">{message.timestamp}</span>
            </div>

            <div className="md:col-span-2 flex space-x-2 text-xs">
              <button className="text-green-400 hover:text-green-300">[READ]</button>
              <button className="text-green-400 hover:text-green-300">[REPLY]</button>
              <button className="text-red-400 hover:text-red-300">[DELETE]</button>
            </div>
          </div>
        ))}
      </div>

      {/* Inbox Stats */}
      <div className="mt-6 border border-green-400/30">
        <div className="bg-green-400/10 p-2 border-b border-green-400/30">
          <h3 className="text-green-300 font-bold">┌─ INBOX STATISTICS ─┐</h3>
        </div>
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-green-400 text-xl font-bold">{messages.length}</div>
            <div className="text-green-300 text-sm">Total Messages</div>
          </div>
          <div>
            <div className="text-green-400 text-xl font-bold">{unreadCount}</div>
            <div className="text-green-300 text-sm">Unread</div>
          </div>
          <div>
            <div className="text-green-400 text-xl font-bold">
              {messages.filter((m) => m.priority === "urgent").length}
            </div>
            <div className="text-green-300 text-sm">Urgent</div>
          </div>
          <div>
            <div className="text-green-400 text-xl font-bold">2.1GB</div>
            <div className="text-green-300 text-sm">Storage Used</div>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="mt-6 p-4 border border-green-400/30 bg-green-400/5">
        <div className="ascii-art text-green-400 text-xs mb-2">
          {`┌─ SECURITY NOTICE ─┐
│  End-to-End Crypto │
└────────────────────┘`}
        </div>
        <div className="text-sm text-green-300 space-y-1">
          <div>{">"} All messages are encrypted with AES-256</div>
          <div>{">"} Messages are automatically deleted after 30 days</div>
          <div>{">"} Suspicious activity is logged and monitored</div>
        </div>
      </div>
    </PageLayout>
  )
}
