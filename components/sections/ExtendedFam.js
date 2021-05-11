import RedStrokeHeader from "../RedStrokeHeader"
import RosterCard from "../RosterCard"
import PoppedHeader from "../PoppedHeader"

// could GetStaticProps here for active roster

// fetch team from X
const team = {
  extended: [
    {
      head: "/images/rosterSample.png",
      given: "CAT",
      sur: "MEDEIROS",
      role: "SALLUA",
    },
    {
      head: "/images/rosterSample.png",
      given: "JEFF",
      sur: "ZWICKER",
      role: "Director of Photography",
    },
    {
      head: "/images/rosterSample.png",
      given: "JUSTIN",
      sur: "RITCHIE",
      role: "JUMBO",
    },
    {
      head: "/images/rosterSample.png",
      given: "NICK",
      sur: "GORSSMAN",
      role: "Animator / VFX",
    },
    {
      head: "/images/rosterSample.png",
      given: "CURTIS",
      sur: "HUISMAN",
      role: "SENSORED",
    },
  ],
}

export default function ExtendedFam() {
  return (
    <section id="extended-fam">
      <RedStrokeHeader>EXTENDED FAMILY</RedStrokeHeader>
      <div style={{ display: "grid" }}>
        {team.extended.map(({ given, sur, role, bio, head }, i) => (
          <RosterCard
            given={given}
            sur={sur}
            role={role}
            bio={bio}
            head={head}
            key={i}
          ></RosterCard>
        ))}
      </div>
    </section>
  )
}
