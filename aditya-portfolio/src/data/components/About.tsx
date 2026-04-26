import { about, personalInfo } from '../content'

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="border-b border-gray-200 pb-2 text-2xl font-bold text-gray-800">About</h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">{about}</p>
        </div>
        <aside className="rounded-xl border border-indigo-100 bg-indigo-50 p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Current Role</h3>
          <p className="mt-3 text-lg font-semibold text-gray-800">{personalInfo.currentRole}</p>
          <p className="mt-2 text-sm text-gray-600">
            University of Maryland FIRE program focused on practical QML research.
          </p>
        </aside>
      </div>
    </section>
  )
}
