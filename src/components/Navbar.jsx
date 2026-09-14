import { useEffect } from 'react'
import { gsap } from '../motion/gsap'

export default function Navbar() {

  useEffect(() => {
    gsap.from('.navbar', {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    })
  }, [])

  return (
    <nav className="navbar">

      <a href="#inicio" className="navbar-logo">
        <span>BETODEV</span>
        <small>STUDIO</small>
      </a>

      <div className="navbar-links">
        <a href="#manifesto">Manifiesto</a>
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </div>

      <a href="#contacto" className="navbar-cta">
        Hablemos
      </a>

    </nav>
  )
}
