import HomeSection from "./HomeSection"
import ContactCard from "../ContactCard"

export default function Contact() {
  return (
    <HomeSection
      id="contact"
      header="contact"
      sectionStyle={{ maxHeight: "100vh" }}
    >
      <ContactCard />
    </HomeSection>
  )
}
