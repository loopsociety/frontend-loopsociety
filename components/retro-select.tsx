"use client"

import { useState } from "react"

interface RetroSelectProps {
  label: string
  options: { value: string; label: string }[]
  defaultValue?: string
  onChange?: (value: string) => void
}

export default function RetroSelect({ label, options, defaultValue, onChange }: RetroSelectProps) {
  const [value, setValue] = useState(defaultValue || options[0]?.value || "")
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (newValue: string) => {
    setValue(newValue)
    setIsOpen(false)
    if (onChange) {
      onChange(newValue)
    }
  }

  const selectedOption = options.find((opt) => opt.value === value)

  return (
    <div className="relative">
      <label className="block text-green-300 text-sm mb-2">{label}:</label>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-black border border-green-400/30 text-green-400 p-2 font-mono text-sm text-left flex justify-between items-center hover:border-green-400/50 transition-colors"
        >
          <span>{selectedOption?.label || "Select option"}</span>
          <span className="text-green-300">[{isOpen ? "▲" : "▼"}]</span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-10 bg-black border border-green-400/30 border-t-0 max-h-40 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`w-full p-2 text-left font-mono text-sm transition-colors ${
                  option.value === value ? "bg-green-400/20 text-green-300" : "text-green-400 hover:bg-green-400/10"
                }`}
              >
                {">"} {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
