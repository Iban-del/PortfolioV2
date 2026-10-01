import gsap from "gsap"
import Nav from "./components/Nav"
import Home from "./sections/Home"
import { ScrollTrigger } from "gsap/all"


const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

function App() {
    gsap.registerPlugin(ScrollTrigger) 


    return (
      <>
        <Nav links={links} />
        <Home />
        <Pro
      </>
    )
}

export default App
