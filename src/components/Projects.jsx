import { useEffect } from 'react'
import { createRevealAnimation } from '../motion/animations'

const projects = [
  {
    number: '01',
    category: 'AI / SPORTS',
    title: 'B-Sports AI',
    description:
      'Plataforma inteligente enfocada en análisis deportivo, datos y predicciones mediante inteligencia artificial.',
    stack: ['AI', 'Python', 'Data']
  },
  {
    number: '02',
    category: 'AUTOMATION',
    title: 'Choppersito',
    description:
      'Automatización inteligente para WhatsApp diseñada para transformar conversaciones en procesos digitales.',
    stack: ['WhatsApp', 'Bots', 'Automation']
  },
  {
    number: '03',
    category: 'WEB / DIGITAL',
    title: 'Digital Experiences',
    description:
      'Experiencias web modernas construidas con interacción, rendimiento y una identidad visual diferenciada.',
    stack: ['React', 'GSAP', 'UX/UI']
  }
]

export default function Projects(){

  useEffect(() => {

    createRevealAnimation({
      trigger: '.projects-list',
      target: '.project-item',
      y: 80,
      duration: 1.1,
      stagger: 0.18
    })

  }, [])

  return (
    <section id="proyectos" className="projects">

      <div className="projects-header">

        <div className="projects-index">
          <span>03</span>
          <span className="projects-line"></span>
          <span>PROYECTOS</span>
        </div>

        <div>
          <span className="projects-kicker">
            Trabajo seleccionado
          </span>

          <h2>
            Ideas que
            <br />
            <span>se vuelven realidad.</span>
          </h2>
        </div>

      </div>

      <div className="projects-list">

        {projects.map((project) => (

          <article className="project-item" key={project.number}>

            <div className="project-number">
              {project.number}
            </div>

            <div className="project-main">

              <div className="project-meta">
                {project.category}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

            </div>

            <div className="project-action">
              <span>VER PROYECTO</span>
              <strong>↗</strong>
            </div>

          </article>

        ))}

      </div>

    </section>
  )
}
