import { useGSAPAnimation } from '../hooks/useGSAPAnimation'
import { createHeroAnimation } from '../motion/animations'

export default function Hero() {

  const scope = useGSAPAnimation(() => {
    createHeroAnimation()
  })

  return (
    <section id="inicio" className="hero" ref={scope}>

      <div className="hero-grid" aria-hidden="true"></div>
      <div className="hero-glow hero-glow-one" aria-hidden="true"></div>
      <div className="hero-glow hero-glow-two" aria-hidden="true"></div>

      <div className="hero-noise" aria-hidden="true"></div>

      <div className="hero-content">

        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line"></span>
          <span>BETODEV STUDIO</span>
          <span className="hero-eyebrow-status">DIGITAL STUDIO</span>
        </div>

        <h1 className="hero-title">
          <span>CREAMOS</span>
          <span>TECNOLOGÍA.</span>
          <span className="hero-title-accent">TRANSFORMAMOS IDEAS.</span>
        </h1>

        <p className="hero-description">
          Desarrollo web, automatización, inteligencia artificial
          y productos digitales construidos para llevar ideas
          ambiciosas a la realidad.
        </p>

        <div className="hero-actions">

          <a href="#contacto" className="hero-button">
            <span>Construyamos algo increíble</span>
            <strong>↗</strong>
          </a>

          <a href="#proyectos" className="hero-link">
            <span>Explorar proyectos</span>
            <span>↓</span>
          </a>

        </div>

      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>SCROLL TO EXPLORE</span>
        <span className="hero-scroll-line"></span>
      </div>

      <div className="hero-corner hero-corner-top">
        <span>01</span>
        <span>EST. 2026</span>
      </div>

      <div className="hero-corner hero-corner-bottom">
        <span>WEB</span>
        <span>AI</span>
        <span>AUTOMATION</span>
      </div>

    </section>
  )
}
