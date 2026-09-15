import { gsap } from './gsap'

export function createRevealAnimation({
  trigger,
  target = trigger,
  start = 'top 80%',
  y = 80,
  duration = 1.2,
  delay = 0,
  stagger = 0,
}) {
  const animation = gsap.from(target, {
    scrollTrigger: {
      trigger,
      start,
      once: true,
    },
    y,
    opacity: 0,
    filter: 'blur(10px)',
    duration,
    delay,
    stagger,
    ease: 'power4.out',
  })

  return animation
}

export function createScaleAnimation({
  trigger,
  target = trigger,
  start = 'top 80%',
  scale = 0.8,
  duration = 1,
  delay = 0,
}) {
  const animation = gsap.from(target, {
    scrollTrigger: {
      trigger,
      start,
      once: true,
    },
    scale,
    opacity: 0,
    duration,
    delay,
    ease: 'power3.out',
  })

  return animation
}


export function createNavbarAnimation() {
  return gsap.from('.navbar', {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out',
  })
}
