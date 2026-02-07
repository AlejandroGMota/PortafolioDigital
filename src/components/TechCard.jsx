export default function TechCard({ icon, title, items }) {
  return (
    <div className="tech-card">
      <div className="tech-icon">{icon}</div>
      <h3>{title}</h3>
      <ul className="tech-list">
        {items.map((item, i) => (
          <li key={i}>
            <span className="bullet">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
