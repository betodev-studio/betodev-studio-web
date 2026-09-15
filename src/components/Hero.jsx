import { useGSAPAnimation } from '../hooks/useGSAPAnimation'
import { createRevealAnimation } from '../motion/animations'

export default function Hero(){

  const scope = useGSAPAnimation(() => {
    createRevealAnimation({
      trigger: '.hero-content'
    })
  })

  return (
    <section id="inicio" className="hero" ref={scope}>

      <div className="hero-content">

        <span className="gold">
          BETODEV STUDIO
        </span>

        <h1 className="hero-title">
          Creamos tecnología.
          <br/>
          Transformamos ideas.
        </h1>

        <p>
          Desarrollo web, automatización,
          inteligencia artificial y productos
          digitales de nueva generación.
        </p>

        <a href="#contacto" className="hero-button">
          Construyamos algo increíble
        </a>

      </div>

    </section>
  )
}
