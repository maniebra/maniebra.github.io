import AboutMe from './sections/about-me'
import Experience from './sections/experience'
import Hero from './sections/hero'
import Projects from './sections/projects'
import Skills from './sections/skills'

function App() {

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
