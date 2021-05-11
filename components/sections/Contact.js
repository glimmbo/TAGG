import RedStrokeHeader from "../RedStrokeHeader"
import ContactCard from "../ContactCard"
export default function Contact() {
  return (
    <section id="contact">
      <RedStrokeHeader style={{ transform: "translateY(19vh)" }}>
        CONTACT
      </RedStrokeHeader>
      <ContactCard />
    </section>
  )
}
