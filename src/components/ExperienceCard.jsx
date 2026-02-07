export default function ExperienceCard({ company, role, description, tags }) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h3>{company}</h3>
        <span className="experience-role">{role}</span>
      </div>
      <p className="experience-description">{description}</p>
      <div className="experience-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}
