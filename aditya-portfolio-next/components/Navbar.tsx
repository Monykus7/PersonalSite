'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { experience, projects } from '@/data/content'

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      {isHome ? (
        <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-white md:px-8">
          <Link href="/reflection" className="text-sm font-medium text-gray-200 transition hover:text-indigo-300">
            Reflection
          </Link>

          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-gray-200">
            {experience.map((e) => (
              <Link key={e.slug} href={`/experience/${e.slug}`} className="transition hover:text-indigo-300">
                {e.role}
              </Link>
            ))}
            {projects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="transition hover:text-indigo-300">
                {p.title}
              </Link>
            ))}
          </div>
        </nav>
      ) : (
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 text-white md:px-8">
          <Link href="/" className="text-sm font-medium text-gray-200 transition hover:text-indigo-300">
            Home
          </Link>
          <Link href="/reflection" className="text-sm font-medium text-gray-200 transition hover:text-indigo-300">
            Reflection
          </Link>
        </nav>
      )}
    </header>
  )
}
