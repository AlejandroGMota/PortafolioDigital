export default function ContactCard({ href, icon, label, external }) {
  return (
    <a
      href={href}
      className="contact-card"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}
