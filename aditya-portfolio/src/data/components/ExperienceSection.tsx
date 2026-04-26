import { useState } from 'react'
import { experience } from '../content.ts'
import StoryModal from './StoryModal.tsx'

export default function ExperienceSection() {
  const [open, setOpen] = useState<{ title: string; story: string } | null>(null)

  return (
    <section id="experience" className="bg-gray-50 px-4 py-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="border-b border-gray-200 pb-2 text-2xl font-bold text-gray-800">Experience</h2>

        <div className="mt-8 space-y-8 border-l-2 border-indigo-200 pl-6">
          {experience.map((item) => (
            <article key={`${item.role}-${item.org}`} className="relative">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-white bg-indigo-600" />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{item.role}</h3>
                  <p className="mt-1 text-sm text-indigo-700">
                    {item.org} | {item.location}
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-500">{item.dates}</p>
                </div>
                {item.story ? (
                  <button
                    type="button"
                    className="shrink-0 rounded-md border border-indigo-200 bg-white px-3 py-1.5 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50"
                    onClick={() => setOpen({ title: item.role, story: item.story! })}
                  >
                    Read story
                  </button>
                ) : null}
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {open ? (
        <StoryModal title={`${open.title} — story`} story={open.story} onClose={() => setOpen(null)} />
      ) : null}
    </section>
  )
}
