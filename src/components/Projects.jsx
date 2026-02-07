import { useScrollReveal } from '../hooks/useScrollReveal'
import { projectsData } from '../data/projects'

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Projects() {
  const sectionRef = useScrollReveal()

  return (
    <section id="proyectos" className="projects" ref={sectionRef}>
      <h2 className="section-title">Proyectos</h2>
      <div className="github-card">
        <div className="github-icon">{projectsData.icon}</div>
        <h3>{projectsData.title}</h3>
        <p className="github-description">{projectsData.description}</p>
        <div className="github-card-buttons">
          {projectsData.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={link.variant === 'primary' ? 'github-button' : 'blog-button'}
            >
              {link.label}
              <ArrowIcon />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
