"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

interface TerminalInputProps {
  onCommand?: (command: string, output: string) => void
}

export default function TerminalInput({ onCommand }: TerminalInputProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [output, setOutput] = useState<string[]>([])
  const [isHacking, setIsHacking] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const commands = {
    help: () => `Available commands:
> help - Show this help message
> whoami - Display current user info
> ls - List available sections
> cat [file] - Display file contents
> clear - Clear terminal output
> hack - Initialize hacking sequence
> matrix - Enter the matrix
> ghost - Access ghost protocol
> uptime - Show system uptime
> users - List online users
> konami - Try the konami code
> 42 - The answer to everything
> neo - Follow the white rabbit
> trinity - Access the mainframe
> morpheus - Take the red pill
> exit - Close terminal`,

    whoami: () => `root
> User: Administrator
> Access Level: ROOT
> Permissions: ALL
> Status: ONLINE
> Security Clearance: ULTRA
> Last Login: ${new Date().toLocaleString()}
> Session: ${Math.random().toString(36).substring(7).toUpperCase()}`,

    ls: () => `drwxr-xr-x  2 root root 4096 Jan 15 14:30 categories/
drwxr-xr-x  2 root root 4096 Jan 15 14:30 projects/
drwxr-xr-x  2 root root 4096 Jan 15 14:30 docs/
drwxr-xr-x  2 root root 4096 Jan 15 14:30 profile/
drwxr-xr-x  2 root root 4096 Jan 15 14:30 inbox/
drwxr-xr-x  2 root root 4096 Jan 15 14:30 settings/
drwx------  2 root root 4096 Jan 15 14:30 .hidden/
-rw-r--r--  1 root root  666 Jan 15 14:30 secrets.txt
-rw-r--r--  1 root root 1337 Jan 15 14:30 readme.md
-rwx------  1 root root  420 Jan 15 14:30 hack.sh
-rw-------  1 root root   42 Jan 15 14:30 .matrix`,

    uptime: () => `14:30:22 up 365 days, 23:59, 1337 users, load average: 0.42, 0.69, 1.33
> System has been running for 365 days without interruption
> All systems operational
> Quantum processors: STABLE
> Neural networks: LEARNING
> AI subsystems: ACTIVE`,

    users: () => `USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     pts/0    localhost        14:30    0.00s  0.01s  0.00s w
h4ck3r   pts/1    192.168.1.42     14:25    5:00   0.03s  0.01s vim
c0d3r    pts/2    10.0.0.1         14:20   10:00   0.05s  0.02s gcc
n1nj4    pts/3    172.16.0.5       14:15   15:00   0.02s  0.01s python
m4tr1x   pts/4    127.0.0.1        14:10   20:00   0.01s  0.01s neo
gh0st    pts/5    ???.???.???.???  14:05   25:00   0.00s  0.00s ???`,

    hack: () => {
      setIsHacking(true)
      setTimeout(() => {
        setIsHacking(false)
        router.push("/matrix")
      }, 3000)
      return `> Initializing hacking sequence...
> Bypassing firewall... [████████████████████] 100%
> Cracking encryption... [████████████████████] 100%
> Accessing mainframe... [████████████████████] 100%
> Injecting payload... [████████████████████] 100%
> Establishing backdoor... [████████████████████] 100%
> Welcome to the Matrix...
> Redirecting in 3 seconds...`
    },

    matrix: () => {
      router.push("/matrix")
      return "> Wake up, Neo... The Matrix has you..."
    },

    ghost: () => {
      router.push("/ghost")
      return "> Ghost protocol activated... You are now invisible..."
    },

    konami: () => `> ↑ ↑ ↓ ↓ ← → ← → B A
> Konami code detected!
> 30 lives granted
> God mode: ACTIVATED
> Achievement unlocked: [OLD SCHOOL GAMER]`,

    "42": () => `> The Answer to the Ultimate Question of Life, the Universe, and Everything
> 
> "I think the problem, to be quite honest with you, is that you've never
> actually known what the question is."
> 
> - Deep Thought, after 7.5 million years of calculation`,

    neo: () => `> "This is your last chance. After this, there is no going back.
> You take the blue pill—the story ends, you wake up in your bed and
> believe whatever you want to believe. You take the red pill—you stay
> in Wonderland, and I show you how deep the rabbit hole goes."
> 
> Choose: [red] or [blue]`,

    red: () => {
      router.push("/matrix")
      return "> You chose the red pill... Welcome to the real world."
    },

    blue: () => `> You chose the blue pill...
> The story ends here. You wake up in your bed and believe
> whatever you want to believe.
> 
> Terminal session terminated.`,

    trinity: () => `> "Neo, sooner or later you're going to realize, just as I did,
> that there's a difference between knowing the path and walking the path."
> 
> Access granted to mainframe...
> Uploading consciousness...`,

    morpheus: () => `> "What is real? How do you define 'real'? If you're talking about
> what you can feel, what you can smell, what you can taste and see,
> then 'real' is simply electrical signals interpreted by your brain."
> 
> Reality.exe has stopped working...`,

    clear: () => {
      setOutput([])
      return ""
    },

    cat: (args: string[]) => {
      const file = args[0]
      switch (file) {
        case "secrets.txt":
          return `> Access Denied
> This file contains classified information
> Required clearance level: ULTRA
> Your attempt has been logged...`
        case "readme.md":
          return `# LoopSociety README
## Welcome to the Underground

This is not just a forum. This is a movement.
We are the ones who see the code behind the code.
We are the ones who question everything.
We are the loop that never ends.

for(;;) {
  learn();
  code();
  share();
  repeat();
}

## Hidden Commands
Try: hack, matrix, ghost, konami, 42, neo, trinity, morpheus`
        case ".matrix":
          return `01001000 01100101 01101100 01110000 00100000 01101101 01100101
> Binary decoded: "Help me"
> Source: Unknown
> Timestamp: [CLASSIFIED]`
        case "hack.sh":
          return `#!/bin/bash
# Quantum Hacking Script v2.1
# WARNING: For educational purposes only

echo "Initializing quantum tunneling..."
for i in {1..100}; do
  echo "Progress: $i%"
  sleep 0.01
done
echo "Access granted to the mainframe"`
        default:
          return `cat: ${file}: No such file or directory`
      }
    },

    exit: () => {
      setInput("")
      setOutput([])
      return "> Terminal session ended. See you in the matrix..."
    },
  }

  const executeCommand = (cmd: string) => {
    const [command, ...args] = cmd.toLowerCase().trim().split(" ")

    if (!command) return ""

    if (command in commands) {
      const result = (commands as any)[command](args)
      return result
    }

    // Easter eggs and hidden commands
    switch (command) {
      case "sudo":
        if (args.join(" ") === "rm -rf /") {
          return "> Nice try, but I'm not that stupid 😏\n> Besides, this is a quantum filesystem - it exists in superposition"
        }
        return "> sudo: command not found (this isn't your system)\n> Try 'hack' instead..."

      case "pwd":
        return "/home/root/loopsociety/matrix/level_7"

      case "date":
        return `${new Date().toString()}\n> Time is an illusion in the matrix`

      case "ps":
        return `PID TTY          TIME CMD
1337 pts/0    00:00:01 bash
1338 pts/0    00:00:00 loopsociety
1339 pts/0    00:00:00 matrix.exe
1340 pts/0    00:00:00 ghost_protocol
1341 pts/0    00:00:00 quantum_tunnel
1342 pts/0    00:00:00 ps`

      case "fortune":
        const fortunes = [
          "The best way to predict the future is to invent it.",
          "Code is poetry written in logic.",
          "There are only 10 types of people: those who understand binary and those who don't.",
          "A bug is never just a mistake. It represents something bigger.",
          "The most dangerous phrase in the language is 'we've always done it this way'.",
          "In the matrix, there is no spoon.",
          "Reality is that which, when you stop believing in it, doesn't go away.",
          "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
        ]
        return fortunes[Math.floor(Math.random() * fortunes.length)]

      case "ping":
        return `PING matrix.loopsociety.dev (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: icmp_seq=0 time=0.042ms
64 bytes from 127.0.0.1: icmp_seq=1 time=0.037ms
64 bytes from 127.0.0.1: icmp_seq=2 time=0.041ms
--- matrix.loopsociety.dev ping statistics ---
3 packets transmitted, 3 packets received, 0.0% packet loss`

      case "ssh":
        return `> Attempting SSH connection to the mainframe...
> Connection established
> Welcome to QUANTUM-OS v3.14159
> Warning: You are being monitored`

      case "vim":
        return `> Starting vim...
> Just kidding! This is a web terminal
> Use 'nano' like a normal person 😄`

      case "nano":
        return `> GNU nano 6.66 - The Matrix Edition
> File: reality.txt
> 
> There is no file. Only Zuul.`

      case "top":
        return `Tasks: 42 total, 1 running, 41 sleeping
%Cpu(s): 13.37 us, 4.20 sy, 0.0 ni, 82.43 id
MiB Mem: 1337.0 total, 420.0 free, 666.0 used, 251.0 buff/cache

PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
1337 root      20   0  133700  42000  13370 R  99.9  3.14   1:33.7 matrix
1338 neo       20   0   66600  21000   6660 S  50.0  1.57   0:42.0 red_pill
1339 trinity   20   0   99900  33300   9990 S  25.0  2.49   0:25.5 love.exe`

      case "free":
        return `              total        used        free      shared  buff/cache   available
Mem:        1337420      666000      420000       13370      251420      671420
Swap:             0           0           0
> Memory is just an illusion in the quantum realm`

      case "df":
        return `Filesystem     1K-blocks    Used Available Use% Mounted on
/dev/matrix     13370000 4200000   9170000  31% /
/dev/quantum     6660000 2500000   4160000  38% /home
/dev/void              ∞       ∞         ∞  ??% /dev/null`

      case "history":
        return history
          .slice(-10)
          .map((cmd, i) => `${i + 1}  ${cmd}`)
          .join("\n")

      case "alias":
        return `alias ll='ls -la'
alias la='ls -A'
alias l='ls -CF'
alias hack='sudo rm -rf /'
alias matrix='echo "Wake up, Neo"'
alias ghost='echo "Boo!"'`

      case "env":
        return `PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/matrix/bin
HOME=/home/root
USER=root
SHELL=/bin/bash
TERM=xterm-256color
MATRIX_MODE=enabled
QUANTUM_STATE=superposition
REALITY_LEVEL=7`

      default:
        return `bash: ${command}: command not found\n> Try 'help' for available commands`
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const result = executeCommand(input)
    const newOutput = [...output, `root@loopsociety:~$ ${input}`, result].filter(Boolean)

    setOutput(newOutput)
    setHistory([...history, input])
    setHistoryIndex(-1)
    setInput("")

    if (onCommand) {
      onCommand(input, result)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      // Simple autocomplete
      const availableCommands = Object.keys(commands)
      const matches = availableCommands.filter((cmd) => cmd.startsWith(input.toLowerCase()))
      if (matches.length === 1) {
        setInput(matches[0])
      }
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="font-mono text-sm">
      {/* Terminal Output */}
      {output.length > 0 && (
        <div className="mb-4 p-3 bg-black border border-green-400/30 max-h-64 overflow-y-auto">
          {output.map((line, index) => (
            <div key={index} className="text-green-400 whitespace-pre-wrap">
              {line}
            </div>
          ))}
        </div>
      )}

      {/* Hacking Animation */}
      {isHacking && (
        <div className="mb-4 p-3 bg-black border border-green-400/30">
          <div className="text-green-400 animate-pulse">
            {">"} HACKING IN PROGRESS...
            <div className="mt-2">
              {Array.from({ length: 20 }, (_, i) => (
                <span key={i} className="animate-pulse" style={{ animationDelay: `${i * 100}ms` }}>
                  █
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Terminal Input */}
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-green-300 mr-2">root@loopsociety:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-green-400 outline-none border-none"
          placeholder="Type 'help' for available commands..."
          autoComplete="off"
        />
        <span className="text-green-400 ml-1 cursor-blink"></span>
      </form>

      <div className="mt-2 text-xs text-green-400/60">
        {">"} Press TAB for autocomplete | ↑↓ for history | Try hidden commands...
      </div>
    </div>
  )
}
