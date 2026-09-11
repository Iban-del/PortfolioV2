import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IoHomeSharp } from 'react-icons/io5'



const navElements : NavbarElement[] = [
  {
    text: "Home",
    href: "#home",
    icon: <IoHomeSharp />
  }
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar elements={navElements}/>
    <Home/>
  </StrictMode>,
)
