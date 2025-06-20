import PageLayout from "@/components/page-layout"
import Breadcrumb from "@/components/breadcrumb"
import PageHeader from "@/components/page-header"
import RetroToggle from "@/components/retro-toggle"
import RetroSelect from "@/components/retro-select"
import RetroInput from "@/components/retro-input"

export default function SettingsPage() {
  return (
    <PageLayout>
      <Breadcrumb items={[{ label: "HOME", href: "/" }, { label: "SETTINGS" }]} />

      <PageHeader
        title="SYSTEM CONFIGURATION"
        description="Configure your LoopSociety experience"
        ascii={`┌─ CONFIG TERMINAL ─┐
│   System Settings   │
└─────────────────────┘`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Account Settings */}
        <div className="border border-green-400/30">
          <div className="bg-green-400/10 p-3 border-b border-green-400/30">
            <h2 className="text-green-300 font-bold">┌─ ACCOUNT SETTINGS ─┐</h2>
          </div>
          <div className="p-4 space-y-4">
            <RetroInput label="Username" defaultValue="root_access" />
            <RetroInput label="Email" type="email" defaultValue="root@loopsociety.dev" />
            <RetroInput
              label="Signature"
              defaultValue="root@loopsociety:~# while true; do hack; done"
              multiline
              rows={3}
            />
            <button className="px-4 py-2 border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors">
              [UPDATE ACCOUNT]
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="border border-green-400/30">
          <div className="bg-green-400/10 p-3 border-b border-green-400/30">
            <h2 className="text-green-300 font-bold">┌─ SECURITY SETTINGS ─┐</h2>
          </div>
          <div className="p-4 space-y-4">
            <RetroInput label="Current Password" type="password" />
            <RetroInput label="New Password" type="password" />
            <RetroInput label="Confirm Password" type="password" />
            <RetroToggle
              label="Two-Factor Authentication"
              description="Enable 2FA for enhanced security"
              defaultChecked={false}
            />
            <RetroToggle
              label="Login Notifications"
              description="Get notified of new login attempts"
              defaultChecked={true}
            />
            <button className="px-4 py-2 border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors">
              [UPDATE SECURITY]
            </button>
          </div>
        </div>

        {/* Display Settings */}
        <div className="border border-green-400/30">
          <div className="bg-green-400/10 p-3 border-b border-green-400/30">
            <h2 className="text-green-300 font-bold">┌─ DISPLAY SETTINGS ─┐</h2>
          </div>
          <div className="p-4 space-y-4">
            <RetroSelect
              label="Terminal Theme"
              options={[
                { value: "classic", label: "Classic Green" },
                { value: "amber", label: "Amber Terminal" },
                { value: "blue", label: "Blue Matrix" },
                { value: "red", label: "Red Alert" },
                { value: "purple", label: "Purple Haze" },
                { value: "cyan", label: "Cyan Punk" },
              ]}
              defaultValue="classic"
            />
            <RetroSelect
              label="Font Size"
              options={[
                { value: "12", label: "Small (12px)" },
                { value: "14", label: "Medium (14px)" },
                { value: "16", label: "Large (16px)" },
                { value: "18", label: "Extra Large (18px)" },
              ]}
              defaultValue="14"
            />
            <div className="space-y-2">
              <RetroToggle
                label="Terminal Animations"
                description="Enable cursor blinking and text effects"
                defaultChecked={true}
              />
              <RetroToggle
                label="Sound Effects"
                description="Enable terminal beeps and typing sounds"
                defaultChecked={false}
              />
              <RetroToggle label="ASCII Art" description="Show decorative ASCII art elements" defaultChecked={true} />
              <RetroToggle
                label="Matrix Mode"
                description="Enable falling code background effect"
                defaultChecked={false}
              />
            </div>
            <button className="px-4 py-2 border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors">
              [UPDATE DISPLAY]
            </button>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="border border-green-400/30">
          <div className="bg-green-400/10 p-3 border-b border-green-400/30">
            <h2 className="text-green-300 font-bold">┌─ PRIVACY SETTINGS ─┐</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <RetroToggle
                label="Public Profile"
                description="Allow others to view your profile"
                defaultChecked={true}
              />
              <RetroToggle label="Show Online Status" description="Display when you're online" defaultChecked={true} />
              <RetroToggle
                label="Allow Private Messages"
                description="Receive messages from other users"
                defaultChecked={true}
              />
              <RetroToggle label="Email Notifications" description="Get notified via email" defaultChecked={false} />
              <RetroToggle
                label="Activity Tracking"
                description="Track your forum activity for stats"
                defaultChecked={true}
              />
              <RetroToggle label="Anonymous Mode" description="Hide your identity in posts" defaultChecked={false} />
            </div>
            <button className="px-4 py-2 border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors">
              [UPDATE PRIVACY]
            </button>
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="lg:col-span-2 border border-green-400/30">
          <div className="bg-green-400/10 p-3 border-b border-green-400/30">
            <h2 className="text-green-300 font-bold">┌─ ADVANCED SETTINGS ─┐</h2>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <RetroToggle
                label="Developer Mode"
                description="Enable advanced debugging features"
                defaultChecked={false}
              />
              <RetroToggle
                label="Beta Features"
                description="Access experimental functionality"
                defaultChecked={false}
              />
              <RetroToggle label="API Access" description="Enable API key generation" defaultChecked={false} />
            </div>
            <div className="space-y-2">
              <RetroToggle
                label="Quantum Encryption"
                description="Use quantum-resistant encryption"
                defaultChecked={true}
              />
              <RetroToggle label="Ghost Protocol" description="Enable stealth browsing mode" defaultChecked={false} />
              <RetroToggle label="Neural Interface" description="Connect to the AI subsystem" defaultChecked={false} />
            </div>
          </div>
          <div className="p-4 border-t border-green-400/30">
            <div className="flex space-x-4">
              <button className="px-4 py-2 border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors">
                [SAVE ALL SETTINGS]
              </button>
              <button className="px-4 py-2 border border-red-400/30 text-red-400 hover:bg-red-400/10 transition-colors">
                [RESET TO DEFAULTS]
              </button>
              <button className="px-4 py-2 border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 transition-colors">
                [EXPORT CONFIG]
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className="mt-6 border border-green-400/30">
        <div className="bg-green-400/10 p-2 border-b border-green-400/30">
          <h3 className="text-green-300 font-bold">┌─ SYSTEM INFORMATION ─┐</h3>
        </div>
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <div className="text-green-300">OS Version:</div>
            <div className="text-green-400">QuantumOS v3.14159</div>
          </div>
          <div>
            <div className="text-green-300">Kernel:</div>
            <div className="text-green-400">Linux 6.66.42-quantum</div>
          </div>
          <div>
            <div className="text-green-300">Shell:</div>
            <div className="text-green-400">/bin/bash v5.1.16</div>
          </div>
          <div>
            <div className="text-green-300">Uptime:</div>
            <div className="text-green-400">365 days, 23:59:59</div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
