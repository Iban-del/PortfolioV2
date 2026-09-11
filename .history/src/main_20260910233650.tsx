import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import gsap from 'gsap';
import Nav from './components/ui/Nav';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav navLinks={[]} />

  </StrictMode>,
)
