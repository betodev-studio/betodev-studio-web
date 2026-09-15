import { useGSAPAnimation } from '../hooks/useGSAPAnimation'
import {
  createRevealAnimation,
  createScaleAnimation
} from '../motion/animations'

export default function Manifesto(){

  const scope = useGSAPAnimation(() => {
    createRevealAnimation({
      trigger: '.manifesto-content'
    })

    createScaleAnimation({
      trigger: '.manifesto-mark'
    })
  })

  return (
    <section id="manifesto" className="manifesto" ref={scope}>

      <div className="manifesto-grid">

        <div className="manifesto-index">
          <span>01</span>
          <span className="manifesto-line"></span>
          <span>MANIFIESTO</span>
        </div>

        <div className="manifesto-content">

          <span className="manifesto-kicker">
            Tecnología con propósito.
          </span>

          <h2>
            No seguimos
            <br />
            tendencias.
            <br />
            <span>Las convertimos</span>
            <br />
            en posibilidades.
          </h2>

          <p>
            En BetoDev Studio diseñamos y construimos experiencias
            digitales que combinan tecnología, creatividad e
            inteligencia para convertir ideas en productos que
            realmente hacen la diferencia.
          </p>

          <div className="manifesto-footer">
            <span>WEB</span>
            <span>AUTOMATION</span>
            <span>AI</span>
            <span>DIGITAL PRODUCTS</span>
          </div>

        </div>

        <div className="manifesto-mark" aria-hidden="true">
          <span>BD</span>
        </div>

      </div>

    </section>
  )
}
