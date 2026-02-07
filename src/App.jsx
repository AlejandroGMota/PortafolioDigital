import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'

export default function App() {
  useEffect(() => {
    document.body.classList.add('loaded')

    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      document.documentElement.classList.add('reduce-motion')
    }

    console.log('%c\u{1F44B} \u00A1Hola Developer!', 'font-size: 20px; font-weight: bold; color: #667eea;')
    console.log('%cSi est\u00E1s viendo esto, eres de los m\u00EDos \u{1F60E}', 'font-size: 14px; color: #a1a1a6;')
    console.log('%c\u{1F680} Portafolio construido con React + Vite', 'font-size: 12px; color: #667eea;')
    console.log('%c\u{1F4E7} \u00BFQuieres colaborar? Cont\u00E1ctame!', 'font-size: 12px; color: #5e5ce6;')
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <CursorGlow />
    </>
  )
}
