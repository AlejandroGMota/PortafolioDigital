import { useState, useEffect, useCallback } from 'react'
import { useHeaderScroll } from '../hooks/useHeaderScroll'
import { navItems } from '../data/navigation'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrolled, visible } = useHeaderScroll()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }, [])

  const headerStyle = {
    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'all 0.3s ease',
  }

  return (
    <header className={scrolled ? 'scrolled' : ''} style={headerStyle}>
      <nav>
        <button
          className={`menu-icon${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar${menuOpen ? ' active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
