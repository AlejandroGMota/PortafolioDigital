import { useState, useEffect, useRef } from 'react'

export function useHeaderScroll() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const lastScrollRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset

      setScrolled(currentScroll > 50)

      if (currentScroll > lastScrollRef.current && currentScroll > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      lastScrollRef.current = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrolled, visible }
}
