"use client"

import type React from "react"

import { useState } from "react"

interface RetroInputProps {
  label: string
  type?: "text" | "email" | "password"
  defaultValue?: string
  placeholder?: string
  onChange?: (value: string) => void
  multiline?: boolean
  rows?: number
}

export default function RetroInput({
  label,
  type = "text",
  defaultValue = "",
  placeholder,
  onChange,
  multiline = false,
  rows = 3,
}: RetroInputProps) {
  const [value, setValue] = useState(defaultValue)
  const [focused, setFocused] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  const baseClasses = `w-full bg-black border text-green-400 p-2 font-mono text-sm transition-colors ${
    focused ? "border-green-400 shadow-[0_0_5px_rgba(0,255,0,0.3)]" : "border-green-400/30 hover:border-green-400/50"
  }`

  return (
    <div>
      <label className="block text-green-300 text-sm mb-2">{label}:</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          rows={rows}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}
    </div>
  )
}
