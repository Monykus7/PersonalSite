import { useState } from 'react'
import { projects } from '../content.ts'
import StoryModal from './StoryModal.tsx'

export default function ProjectsSection() {
  const [open, setOpen] = useState<{ title: string; story: string } | null>(null)

  return (
    <section id="projects" className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-2">
          <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            Hackathon wins included
          </span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`relative rounded-xl border p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                project.highlight
                  ? 'border-amber-300 bg-amber-50/40 md:col-span-2'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              {project.highlight ? (
                <span className="absolute right-3 top-3 rounded bg-amber-300 px-2 py-1 text-xs font-semibold text-amber-900">
                  Hackathon winner
                </span>
              ) : null}
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="mt-2 text-sm text-indigo-700">{project.subtitle}</p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.title}-${tag}`}
                    className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                ) : null}
                {project.story ? (
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50"
                    onClick={() => setOpen({ title: project.title, story: project.story! })}
                  >
                    Read story
                  </button>
                ) : null}
              </div>
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
