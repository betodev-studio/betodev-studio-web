import { useEffect } from 'react'
import { gsap } from '../motion/gsap'

const services = [
  {
    number: '01',
    title: 'Desarrollo Web',
    description:
      'Experiencias web rápidas, sofisticadas y diseñadas para convertir ideas en productos digitales memorables.',
    tags: ['React', 'Vite', 'UX/UI']
  },
  {
    number: '02',
    title: 'Automatización',
    description:
      'Sistemas que eliminan tareas repetitivas y conectan procesos para que tu negocio trabaje de forma más inteligente.',
    tags: ['Workflows', 'APIs', 'Bots']
  },
  {
    number: '03',
    title: 'Inteligencia Artificial',
    description:
      'Soluciones inteligentes que incorporan IA para analizar, automatizar y crear nuevas posibilidades.',
    tags: ['AI', 'LLM', 'Automation']
  },
  {
    number: '04',
    title: 'Productos Digitales',
    description:
      'Desde la idea inicial hasta un producto funcional, escalable y preparado para crecer.',
    tags: ['Strategy', 'Development', 'Scale']
  }
]

export default function Services(){

  useEffect(() => {

    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%'
      },
      y: 70,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: 'power4.out'
    })

  }, [])

  return (
    <section id="servicios" className="services">

      <div className="services-header">

        <div className="services-index">
          <span>02</span>
          <span className="services-line"></span>
          <span>SERVICIOS</span>
        </div>

        <div>
          <span className="services-kicker">
            Lo que hacemos
          </span>

          <h2>
            Tecnología que
            <br />
            <span>trabaja por ti.</span>
          </h2>
        </div>

      </div>

      <div className="services-grid">

        {services.map((service) => (

          <article
            className="service-card"
            key={service.number}
          >

            <div className="service-top">
              <span>{service.number}</span>
              <span className="service-arrow">↗</span>
            </div>

            <div className="service-body">

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

            </div>

            <div className="service-hover-line"></div>

          </article>

        ))}

      </div>

    </section>
  )
}
