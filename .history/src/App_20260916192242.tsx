import gsap from "gsap"
import Nav from "./components/Nav"
import Home from "./sections/Home"
import { ScrollTrigger } from "gsap/all"
import Project from "./sections/Project"


const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

function App() {
    gsap.registerPlugin(ScrollTrigger) 

    // default theme
    document.documentElement.classList.add("dark");

    return (
      <>
        <Nav links={links} />
        <Home />
        <About
        <Project/>
      </>
    )
}

export default App
