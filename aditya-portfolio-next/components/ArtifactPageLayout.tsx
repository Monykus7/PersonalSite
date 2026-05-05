import Link from 'next/link'
import type { ProjectNarrative, ExperienceNarrative } from '@/data/content'

type Category = 'Project' | 'Experience'

type Props = {
  category: Category
  title: string
  subtitle: string
  tags: string[]
  narrative: ProjectNarrative | ExperienceNarrative
  links?: { github?: string }
  dates: string
  /** Shown in the artifact panel for projects (summary / outcomes). */
  summary?: string
  /** Shown as bullets in the artifact panel (typically experience). */
  bullets?: string[]
  prevHref: string
  prevLabel: string
  nextHref: string
  nextLabel: string
}

function isProjectNarrative(
  n: ProjectNarrative | ExperienceNarrative,
  category: Category,
): n is ProjectNarrative {
  return category === 'Project'
}

export default function ArtifactPageLayout({
  category,
  title,
  subtitle,
  tags,
  narrative,
  links,
  dates,
  summary,
  bullets,
  prevHref,
  prevLabel,
  nextHref,
  nextLabel,
}: Props) {
  const proj = isProjectNarrative(narrative, category) ? narrative : null
  const exp = !proj ? (narrative as ExperienceNarrative) : null

  return (
    <div className="min-h-0 flex-1 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
          <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            ← Back to Home
          </Link>
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800">
            {category}
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-12">
          <article className="space-y-10 order-2 lg:order-1">
            {proj ? (
              <>
                <section>
                  <h2 className="border-b border-gray-200 pb-2 text-lg font-semibold text-gray-900">
                    Problem
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-700">{proj.problem}</p>
                </section>
                <section>
                  <h2 className="border-b border-gray-200 pb-2 text-lg font-semibold text-gray-900">
                    Build
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-700">{proj.build}</p>
                </section>
                <section>
                  <h2 className="border-b border-gray-200 pb-2 text-lg font-semibold text-gray-900">
                    Learned
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-700">{proj.learned}</p>
                </section>
              </>
            ) : exp ? (
              <>
                <section>
                  <h2 className="border-b border-gray-200 pb-2 text-lg font-semibold text-gray-900">
                    Context
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-700">{exp.context}</p>
                </section>
                <section>
                  <h2 className="border-b border-gray-200 pb-2 text-lg font-semibold text-gray-900">
                    Contribution
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-700">{exp.contribution}</p>
                </section>
                <section>
                  <h2 className="border-b border-gray-200 pb-2 text-lg font-semibold text-gray-900">
                    Impact
                  </h2>
                  <p className="mt-4 leading-relaxed text-gray-700">{exp.impact}</p>
                </section>
              </>
            ) : null}
          </article>

          <aside className="order-1 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm lg:order-2 lg:self-start">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <p className="mt-2 text-sm text-indigo-700">{subtitle}</p>
            {dates ? <p className="mt-3 text-sm text-gray-600">{dates}</p> : null}

            <div className="my-4 border-t border-gray-200" />

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

            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                {category === 'Project' ? 'Overview' : 'Outcomes'}
              </h2>
              {summary ? (
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{summary}</p>
              ) : null}
              {bullets && bullets.length > 0 ? (
                <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-gray-700">
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}
              {!summary && (!bullets || bullets.length === 0) ? (
                <p className="mt-2 text-sm text-gray-500">—</p>
              ) : null}
            </div>

            {links?.github ? (
              <a
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                href={links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub →
              </a>
            ) : null}
          </aside>
        </div>

        <nav className="mt-14 flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:justify-between">
          <Link
            href={prevHref}
            className="text-sm font-medium text-gray-700 hover:text-indigo-600 sm:max-w-[45%]"
          >
            ← {prevLabel}
          </Link>
          <Link
            href={nextHref}
            className="text-right text-sm font-medium text-gray-700 hover:text-indigo-600 sm:max-w-[45%]"
          >
            {nextLabel} →
          </Link>
        </nav>
      </div>
    </div>
  )
}
