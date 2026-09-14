import { useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Services from './components/Services'
import Projects from './components/Projects'
import Footer from './components/Footer'

import { useLenis } from './hooks/useLenis'
import { ScrollTrigger } from './motion/gsap'

import './styles/globals.css'


export default function App(){

  useLenis()

  useEffect(()=>{

    ScrollTrigger.refresh()

  },[])


  return (
    <>
      <Navbar/>
      <Hero/>
      <Manifesto/>
      <Services/>
      <Projects/>
      <Footer/>
    </>
  )
}
