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
  return gsap.from(target, {
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
}

export function createScaleAnimation({
  trigger,
  target = trigger,
  start = 'top 80%',
  scale = 0.8,
  duration = 1,
  delay = 0,
}) {
  return gsap.from(target, {
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
}

export function createNavbarAnimation() {
  const intro = gsap.from('.navbar', {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out',
  })

  const scrollTrigger = gsap.to('.navbar', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: '+=120',
      scrub: true,
    },
    width: 'min(92%, 1280px)',
    top: 10,
    borderRadius: 16,
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: 'rgba(5, 5, 5, .9)',
    borderColor: 'rgba(212, 175, 55, .16)',
    boxShadow: '0 16px 50px rgba(0, 0, 0, .35)',
    ease: 'none',
  })

  return {
    intro,
    scrollTrigger,
  }
}

export function createHeroAnimation() {
  const timeline = gsap.timeline()

  timeline
    .from('.hero-eyebrow', {
      y: 25,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
    .from('.hero-title span', {
      y: 90,
      opacity: 0,
      filter: 'blur(14px)',
      duration: 1.15,
      stagger: 0.12,
      ease: 'power4.out',
    }, '-=0.35')
    .from('.hero-description', {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
    }, '-=0.55')
    .from('.hero-actions', {
      y: 25,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.55')
    .from('.hero-scroll, .hero-corner', {
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power2.out',
    }, '-=0.35')

  gsap.to('.hero-grid', {
    x: 20,
    y: 15,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })

  gsap.to('.hero-glow-one', {
    scale: 1.12,
    opacity: 0.075,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })

  gsap.to('.hero-glow-two', {
    x: -35,
    y: -20,
    scale: 1.08,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })

  return timeline
}
