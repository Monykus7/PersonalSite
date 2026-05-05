import type { CSSProperties } from 'react'
import Link from 'next/link'

export type ArtifactCardProps = {
  href: string
  category: 'Project' | 'Experience'
  title: string
  subtitle: string
  tags: string[]
  highlight?: boolean
  /** When set, replaces the default category pill text (e.g. "Hackathon"). */
  categoryPillText?: string
  /** Omit the top-left category pill entirely. */
  hideCategoryPill?: boolean
  style?: CSSProperties
  className?: string
}

export default function ArtifactCard({
  href,
  category,
  title,
  subtitle,
  tags,
  highlight,
  categoryPillText,
  hideCategoryPill,
  style,
  className,
}: ArtifactCardProps) {
  const pillLabel = categoryPillText ?? category
  const hackathonPill = categoryPillText === 'Hackathon'

  return (
    <Link
      href={href}
      className={`group relative block rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg ${className ?? ''}`}
      style={style}
    >
      {highlight ? (
        <span className="absolute right-3 top-3 z-10 rounded bg-amber-300 px-2 py-0.5 text-xs font-semibold text-amber-900 shadow-sm">
          🏆 Hackathon Winner
        </span>
      ) : null}

      {!hideCategoryPill ? (
        <span
          className={
            hackathonPill
              ? 'inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-900'
              : 'inline-block rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800'
          }
        >
          {pillLabel}
        </span>
      ) : null}

      <h3 className="mt-3 text-xl font-semibold text-gray-800 group-hover:text-indigo-700">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{subtitle}</p>

      <div className="mt-4 border-t border-gray-200 pt-4">
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <p className={`text-xs text-gray-400 ${tags.length > 0 ? 'mt-3' : ''}`}>View details →</p>
      </div>
    </Link>
  )
}
