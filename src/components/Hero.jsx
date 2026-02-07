import { useState } from 'react'
import { useAge } from '../hooks/useAge'
import { profile } from '../data/profile'

export default function Hero() {
  const [showDescription, setShowDescription] = useState(false)
  const age = useAge(profile.birthDate)

  const handleToggle = () => {
    setShowDescription((prev) => !prev)
  }

  return (
    <section id="inicio" className="hero visible">
      <div className="hero-content">
        <p className="hero-label">{profile.title}</p>
        <h1 className="hero-title">{profile.headline}</h1>
        <div className="hero-info">
          <h2>{profile.name}</h2>
          <p className="hero-age">
            <span>{age}</span> años | {profile.degree}
          </p>
          <button className="hero-btn" onClick={handleToggle}>
            {showDescription ? 'Ocultar' : '¿Quién soy?'}
          </button>
          {showDescription && (
            <p
              className="hero-description"
              style={{ animation: 'fadeInUp 0.5s ease-out' }}
            >
              Construyo sistemas backend robustos con <strong>Go</strong> y <strong>Node.js</strong>,
              arquitecturas de <strong>microservicios</strong> escalables, y gestiono infraestructura
              completa con <strong>Docker</strong>, <strong>Kubernetes</strong> y pipelines de <strong>CI/CD</strong>.
              Mi enfoque combina desarrollo técnico de alto nivel con comprensión estratégica del negocio.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
