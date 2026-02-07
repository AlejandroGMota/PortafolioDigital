import { useScrollReveal } from '../hooks/useScrollReveal'
import { experienceData } from '../data/experience'
import ExperienceCard from './ExperienceCard'

export default function Experience() {
  const sectionRef = useScrollReveal()

  return (
    <section id="experiencia" className="experience" ref={sectionRef}>
      <h2 className="section-title">Experiencia</h2>
      <div className="experience-grid">
        {experienceData.map((exp) => (
          <ExperienceCard
            key={exp.company}
            company={exp.company}
            role={exp.role}
            description={exp.description}
            tags={exp.tags}
          />
        ))}
      </div>
    </section>
  )
}
