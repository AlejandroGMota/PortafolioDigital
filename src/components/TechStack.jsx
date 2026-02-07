import { useScrollReveal } from '../hooks/useScrollReveal'
import { techStackData } from '../data/techStack'
import TechCard from './TechCard'

export default function TechStack() {
  const sectionRef = useScrollReveal()

  return (
    <section id="tecnologias" className="tech-stack" ref={sectionRef}>
      <h2 className="section-title">Stack Tecnológico</h2>
      <div className="tech-grid">
        {techStackData.map((tech) => (
          <TechCard
            key={tech.title}
            icon={tech.icon}
            title={tech.title}
            items={tech.items}
          />
        ))}
      </div>
    </section>
  )
}
