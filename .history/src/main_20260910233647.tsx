import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IoHomeSharp } from 'react-icons/io5'
import gsap from 'gsap';
import Nav from './components/ui/Nav';


gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav navLinks={[]} />

  </StrictMode>,
)
