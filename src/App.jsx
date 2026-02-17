import Contact from "./components/Contact"
import Hero from "./components/Hero"
// import LogoClouds from "./components/LogoClouds" // Tech stack section - kept for future use
import NavBar from "./components/NavBar"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Pricing from "./components/Pricing"
import Process from "./components/Process"
import Cta from "./components/Cta"
import Testimonial from "./components/Testimonial"

function App() {
  return (
    <div className="p-2 md:px-10">
      <NavBar />
      <Hero />
      <Services />
      <Pricing />
      <Process />
      <Projects />
      <Testimonial />
      <Cta />
      <Contact />
    </div>
  )
}

export default App
