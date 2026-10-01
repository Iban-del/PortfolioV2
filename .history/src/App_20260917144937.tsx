import gsap from "gsap"
import Nav from "./components/Nav"
import Home from "./sections/Home"
import { ScrollTrigger } from "gsap/all"
import Projects from "./sections/Projects"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"


const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills"},
  { name: "Project", href: "#project"},
  { name: "Contact", href: "#contact" },
]

function App() {
    gsap.registerPlugin(ScrollTrigger) 

    // section des refs
    const nav = useRef<HTMLElement|null>(null);
    const mobileMenu = useRef<HTMLDivElement|null>(null);
    const homeSection = useRef<HTMLElement|null>(null);

    useGSAP(()=>{
      gsap.to('progress', {
        value: 100,
        ease: 'none',
        scrollTrigger: { scrub: 0.3 }
      });
    })

    // default theme
    document.documentElement.classList.add("dark");

    return (
      <div className="w-screen h-screen">
        <Nav links={links} nav={nav} mobileMenu={mobileMenu} />
        <div>
            <Home homeSection={homeSection} nav={nav} />
            <div>
              <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            </div>
        </div>
        <progress className="fixed bottom-0 w-full" max="100" value="0"></progress>
      </div>
    )
}


export default App
