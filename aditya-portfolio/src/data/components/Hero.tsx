import { useState } from 'react'
import { personalInfo } from '../content'

export default function Hero() {
  const [imageMissing, setImageMissing] = useState(false)

  return (
    <section id="hero" className="bg-gray-900 px-4 py-16 text-white md:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[220px_1fr]">
        <div className="mx-auto">
          {!imageMissing ? (
            <img
              src="/headshot.jpg"
              alt={`${personalInfo.name} headshot`}
              className="h-44 w-44 rounded-full border-4 border-indigo-400 object-cover shadow-lg"
              onError={() => setImageMissing(true)}
            />
          ) : (
            <div className="flex h-44 w-44 items-center justify-center rounded-full border-4 border-indigo-400 bg-gray-800 text-sm text-gray-300">
              Add public/headshot.jpg
            </div>
          )}
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{personalInfo.name}</h1>
          <p className="mt-3 text-lg text-indigo-300">{personalInfo.tagline}</p>
          <p className="mt-3 text-base text-gray-300">{personalInfo.oneLiner}</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-200 md:justify-start">
            <a className="hover:text-indigo-300" href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
            </a>
            <span className="hidden text-gray-500 md:inline">|</span>
            <a className="hover:text-indigo-300" href={`tel:${personalInfo.phone}`}>
              {personalInfo.phone}
            </a>
            <span className="hidden text-gray-500 md:inline">|</span>
            <a
              className="hover:text-indigo-300"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <span className="hidden text-gray-500 md:inline">|</span>
            <a
              className="hover:text-indigo-300"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
