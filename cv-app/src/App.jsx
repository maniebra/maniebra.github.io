import AboutMe from './sections/about-me'
import Hero from './sections/hero'
function App() {

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Hero />
      <AboutMe />
    </div>
  )
}

export default App
