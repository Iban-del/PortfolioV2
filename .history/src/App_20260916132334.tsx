import Nav from "./components/Nav"


const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

function App() {
    return (
      <>
        <Nav links={links} i />
      </>
    )
}

export default App
