import { useEffect } from 'react'
import { reveal } from '../motion/animations'

export default function Hero(){

  useEffect(()=>{
    reveal('.hero-content')
  },[])

  return (
    <section id="inicio" className="hero">

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
