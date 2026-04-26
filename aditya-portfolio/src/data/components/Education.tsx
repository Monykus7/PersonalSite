import { education } from '../content'

export default function Education() {
  const school = education[0]

  return (
    <section id="education" className="bg-white px-4 py-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="border-b border-gray-200 pb-2 text-2xl font-bold text-gray-800">Education</h2>
        <article className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800">{school.school}</h3>
          <p className="mt-2 text-base text-indigo-700">{school.degree}</p>
          <p className="mt-1 text-sm text-gray-600">{school.minors}</p>
          <p className="mt-1 text-sm font-medium text-gray-500">{school.dates}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {school.coursework.map((course) => (
              <span
                key={course}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
              >
                {course}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
