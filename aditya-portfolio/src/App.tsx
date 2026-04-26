import About from './data/components/About'
import Education from './data/components/Education'
import ExperienceSection from './data/components/ExperienceSection'
import Footer from './data/components/Footer'
import Hero from './data/components/Hero'
import Navbar from './data/components/Navbar'
import ProjectsSection from './data/components/ProjectsSection'
import Skills from './data/components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <ExperienceSection />
        <Education />
      </main>
      <Footer />
    </div>
  )
}

export default App
