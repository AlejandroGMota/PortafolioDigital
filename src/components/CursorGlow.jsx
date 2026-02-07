import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const glow = glowRef.current
    if (!glow) return

    const handleMouseMove = (e) => {
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
    }

    const handleMouseEnter = () => glow.classList.add('hidden')
    const handleMouseLeave = () => glow.classList.remove('hidden')

    document.addEventListener('mousemove', handleMouseMove)

    const interactiveEls = document.querySelectorAll('a, button, .contact-card, .tech-card, .experience-card')
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return <div ref={glowRef} className="cursor-glow" />
}
