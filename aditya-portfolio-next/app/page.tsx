import Hero from '@/components/Hero'
import ArtifactCard from '@/components/ArtifactCard'
import { projects, experience, skills } from '@/data/content'

const skillGroups = [
  { title: 'Languages', items: skills.languages },
  { title: 'Frameworks', items: skills.frameworks },
  { title: 'Developer Tools', items: skills.tools },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="experience" className="scroll-mt-20 bg-gray-50 px-4 py-16 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="border-b border-gray-200 pb-2 text-2xl font-bold text-gray-800">Experience</h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {experience.map((e, i) => (
              <ArtifactCard
                key={e.slug}
                href={`/experience/${e.slug}`}
                category="Experience"
                title={e.role}
                subtitle={`${e.org} · ${e.location}`}
                tags={[]}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 bg-white px-4 py-16 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="border-b border-gray-200 pb-2 text-2xl font-bold text-gray-800">Projects</h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <ArtifactCard
                key={p.slug}
                href={`/projects/${p.slug}`}
                category="Project"
                title={p.title}
                subtitle={p.subtitle}
                tags={p.tags}
                highlight={p.highlight}
                categoryPillText={
                  p.slug === 'relay' || p.slug === 'terpspark' ? 'Hackathon' : undefined
                }
                hideCategoryPill={p.slug === 'floradex'}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(i + experience.length) * 80}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-20 border-t border-gray-100 bg-white px-4 py-10 md:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={`${group.title}-${skill}`}
                    className="rounded-md bg-white px-2.5 py-1 text-xs text-gray-600 ring-1 ring-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
