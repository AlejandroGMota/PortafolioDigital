import { useScrollReveal } from '../hooks/useScrollReveal'
import { contactsData } from '../data/contacts'
import ContactCard from './ContactCard'

export default function Contact() {
  const sectionRef = useScrollReveal()

  return (
    <section id="contacto" className="contact" ref={sectionRef}>
      <h2 className="section-title">Contacto</h2>
      <div className="contact-grid">
        {contactsData.map((contact) => (
          <ContactCard
            key={contact.label}
            href={contact.href}
            icon={contact.icon}
            label={contact.label}
            external={contact.external}
          />
        ))}
      </div>
    </section>
  )
}
