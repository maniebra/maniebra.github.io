import AboutMe from './sections/about-me'
import Hero from './sections/hero'
import Skills from './sections/skills'

function App() {

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  )
}

export default App
