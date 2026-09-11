import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './sections/Home'
import Navbar, { type NavbarElement } from './components/Navbar'


const navElements : NavbarElement

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar/>
    <Home/>
  </StrictMode>,
)
