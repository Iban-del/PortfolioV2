import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IoHomeSharp } from 'react-icons/io5'





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar elements={navElements}/>
    <Home/>
  </StrictMode>,
)
