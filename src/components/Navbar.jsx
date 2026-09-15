import { useGSAPAnimation } from '../hooks/useGSAPAnimation'
import { createNavbarAnimation } from '../motion/animations'

export default function Navbar() {

  useGSAPAnimation(() => {
    createNavbarAnimation()
  })

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
