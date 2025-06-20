import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="mb-4 text-sm text-green-300">
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link href={item.href} className="hover:text-green-400">
              {item.label}
            </Link>
          ) : (
            <span className="text-green-400">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="mx-2">{">"}</span>}
        </span>
      ))}
    </div>
  )
}
