import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './sections/Home'
import Navbar, { type NavbarElement } from './components/Navbar'


 type : NavType,
    text : string,
    href : string
    icon: JSX.Element
const navElements : NavbarElement[] = [
  {
    type: "button",
    text: "Home",
    href: "#home",
    icon 
  }
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <Home/>
  </StrictMode>,
)
