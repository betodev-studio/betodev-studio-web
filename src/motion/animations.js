import { gsap, ScrollTrigger } from './gsap'

export function reveal(selector) {

  gsap.from(selector,{
    scrollTrigger:{
      trigger:selector,
      start:'top 80%'
    },
    y:80,
    opacity:0,
    filter:'blur(10px)',
    duration:1.2,
    ease:'power4.out'
  })

}

export function revealScale(selector){

  gsap.from(selector,{
    scrollTrigger:{
      trigger:selector,
      start:'top 80%'
    },
    scale:.8,
    opacity:0,
    duration:1,
    ease:'power3.out'
  })

}
