import Nav from "./components/Nav"
import Home from "./sections/Home"


const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

function App() {
    return (
      <>
        <Nav links={links} />
        <Home />
      </>
    )
}

export default App
