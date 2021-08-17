import RedStrokeHeader from "../RedStrokeHeader"
import ContactCard from "../ContactCard"

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <RedStrokeHeader
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        CONTACT
      </RedStrokeHeader>
      <ContactCard />
    </section>
  )
}
