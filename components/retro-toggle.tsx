"use client"

import { useState } from "react"

interface RetroToggleProps {
  label: string
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  description?: string
}

export default function RetroToggle({ label, defaultChecked = false, onChange, description }: RetroToggleProps) {
  const [checked, setChecked] = useState(defaultChecked)

  const handleToggle = () => {
    const newChecked = !checked
    setChecked(newChecked)
    if (onChange) {
      onChange(newChecked)
    }
  }

  return (
    <div className="flex items-center justify-between p-2 border border-green-400/30 hover:bg-green-400/5 transition-colors">
      <div className="flex-1">
        <div className="text-green-300 text-sm">{label}</div>
        {description && <div className="text-green-400/70 text-xs mt-1">{description}</div>}
      </div>
      <button
        onClick={handleToggle}
        className={`px-3 py-1 border font-mono text-xs transition-colors ${
          checked
            ? "border-green-400 bg-green-400/20 text-green-300"
            : "border-green-400/30 text-green-400 hover:bg-green-400/10"
        }`}
      >
        [{checked ? "ON" : "OFF"}]
      </button>
    </div>
  )
}
