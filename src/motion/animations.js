import { gsap } from './gsap'

export function reveal(selector) {
  const animation = gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      once: true,
    },
    y: 80,
    opacity: 0,
    filter: 'blur(10px)',
    duration: 1.2,
    ease: 'power4.out',
  })

  return animation
}

export function revealScale(selector) {
  const animation = gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      once: true,
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })

  return animation
}
