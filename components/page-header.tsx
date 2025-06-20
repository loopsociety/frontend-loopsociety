import type React from "react"
interface PageHeaderProps {
  title: string
  description?: string
  action?: React.ReactNode
  ascii?: string
}

export default function PageHeader({ title, description, action, ascii }: PageHeaderProps) {
  return (
    <div className="mb-6 p-4 border border-green-400/30 bg-green-400/5">
      {ascii && <div className="ascii-art text-green-400 text-xs mb-2">{ascii}</div>}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-lg text-green-300 font-bold mb-2">{title}</h1>
          {description && (
            <p className="text-sm text-green-300">
              {">"} {description}
            </p>
          )}
        </div>
        {action && <div className="mt-2 md:mt-0">{action}</div>}
      </div>
    </div>
  )
}
