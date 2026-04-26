import { useState } from 'react'
import { Link } from 'react-scroll'
import { personalInfo } from '../content'

const sections = ['about', 'skills', 'projects', 'experience', 'education']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 text-white md:px-8">
        <Link
          to="hero"
          smooth={true}
          offset={-64}
          duration={450}
          className="cursor-pointer text-lg font-semibold"
          onClick={() => setOpen(false)}
        >
          {personalInfo.name}
        </Link>

        <button
          type="button"
          className="rounded border border-gray-600 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                offset={-64}
                duration={450}
                className="cursor-pointer capitalize text-gray-200 transition hover:text-indigo-300"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <ul className="space-y-3 border-t border-gray-700 px-4 pb-4 text-sm text-gray-200 md:hidden">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                offset={-64}
                duration={450}
                className="block cursor-pointer capitalize transition hover:text-indigo-300"
                onClick={() => setOpen(false)}
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  )
}
