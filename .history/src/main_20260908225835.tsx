import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './sections/Home'
import Navbar, { type NavbarElement } from './components/Navbar'
import { IoHomeSharp } from 'react-icons/io5'



const navElements : NavbarElement[] = [
  {
    type: "button",
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
