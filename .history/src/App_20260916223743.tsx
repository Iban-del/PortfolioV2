import gsap from "gsap"
import Nav from "./components/Nav"
import Home from "./sections/Home"
import { ScrollTrigger } from "gsap/all"
import Projects from "./sections/Projects"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"


const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills"},
  { name: "Project", href: "#project"},
  { name: "Contact", href: "#contact" },
]

function App() {
    gsap.registerPlugin(ScrollTrigger) 

    // default theme
    document.documentElement.classList.add("dark");

    return (
      <>
        <Nav links={links} />
        <div>
          <
        </div>
      </>
    )
}

const Sections = () => {
  return (
    <>
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
