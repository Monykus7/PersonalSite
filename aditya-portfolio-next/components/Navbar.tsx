'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { personalInfo } from '@/data/content'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isHome = pathname === '/'

  if (!isHome) {
    return (
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm">
        <nav className="mx-auto flex w-full max-w-6xl items-center px-4 py-4 text-white md:px-8">
          <Link href="/" className="text-white transition hover:text-indigo-400">
            ← Home
          </Link>
        </nav>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 text-white md:px-8">
        <Link href="/" className="text-lg font-semibold" onClick={() => setOpen(false)}>
          {personalInfo.name}
        </Link>

        <button
          type="button"
          className="rounded border border-gray-600 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          <li>
            <a href="#experience" className="text-gray-200 transition hover:text-indigo-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-200 transition hover:text-indigo-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="text-gray-200 transition hover:text-indigo-300">
              Skills
            </a>
          </li>
        </ul>
      </nav>

      {open ? (
        <ul className="space-y-3 border-t border-gray-700 px-4 pb-4 text-sm text-gray-200 md:hidden">
          <li>
            <a
              href="#experience"
              className="block transition hover:text-indigo-300"
              onClick={() => setOpen(false)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block transition hover:text-indigo-300"
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block transition hover:text-indigo-300"
              onClick={() => setOpen(false)}
            >
              Skills
            </a>
          </li>
        </ul>
      ) : null}
    </header>
  )
}
