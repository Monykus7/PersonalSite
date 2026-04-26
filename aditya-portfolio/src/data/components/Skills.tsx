import { skills } from '../content'

function SkillPill({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
      {label}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 px-4 py-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="border-b border-gray-200 pb-2 text-2xl font-bold text-gray-800">Skills</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">Languages</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.languages.map((item) => (
                <SkillPill key={item} label={item} />
              ))}
            </div>
          </article>

          <article className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">Frameworks</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.frameworks.map((item) => (
                <SkillPill key={item} label={item} />
              ))}
            </div>
          </article>

          <article className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">Developer Tools</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.tools.map((item) => (
                <SkillPill key={item} label={item} />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
