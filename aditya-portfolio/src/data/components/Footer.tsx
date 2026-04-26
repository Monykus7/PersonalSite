import { personalInfo } from '../content'

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-8 text-gray-300 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-sm md:flex-row">
        <p>{personalInfo.name}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a className="hover:text-indigo-300" href={`mailto:${personalInfo.email}`}>
            Email
          </a>
          <a className="hover:text-indigo-300" href={personalInfo.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-indigo-300" href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-gray-400">Built with React and Tailwind</p>
      </div>
    </footer>
  )
}
