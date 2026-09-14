import { useEffect } from 'react'
import { gsap } from '../motion/gsap'

export default function Footer(){

  useEffect(() => {

    gsap.from('.contact-content', {
      scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%'
      },
      y: 70,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out'
    })

  }, [])

  return (
    <>
      <section id="contacto" className="contact">

        <div className="contact-glow"></div>

        <div className="contact-content">

          <div className="contact-index">
            <span>04</span>
            <span className="contact-line"></span>
            <span>CONTACTO</span>
          </div>

          <span className="contact-kicker">
            Tu próxima idea comienza aquí.
          </span>

          <h2>
            Hagamos algo
            <br />
            <span>extraordinario.</span>
          </h2>

          <p>
            Cuéntanos qué tienes en mente.
            Nosotros nos encargamos de convertirlo
            en tecnología.
          </p>

          <a
            href="mailto:hola@betodev.studio"
            className="contact-button"
          >
            Hablemos
            <span>↗</span>
          </a>

        </div>

      </section>

      <footer className="site-footer">

        <div className="footer-top">

          <a href="#inicio" className="footer-brand">
            <strong>BETODEV</strong>
            <span>STUDIO</span>
          </a>

          <div className="footer-links">
            <a href="#manifesto">Manifiesto</a>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} BetoDev Studio
          </span>

          <span>
            Tecnología · Creatividad · Inteligencia
          </span>
        </div>

      </footer>
    </>
  )
}
