import RedStrokeHeader from "../RedStrokeHeader"
import RosterCard from "../RosterCard"
import PoppedHeader from "../PoppedHeader"

// could GetStaticProps here for active roster

// fetch team from X
const team = {
  extended: [
    {
      given: "CAT",
      sur: "MEDEIROS",
      role: "SALLUA",
      head: "/images/extended-fam/ExtendedFam_CatMedeiros - SALLUA.png",
      mask: "/images/extended-fam/ExtendedFam_CatMedeiros - SALLUA copy.png",
    },
    {
      head: "/images/extended-fam/ExtendedFam_JeffZwicker-DirectorOfPhotography.png",
      mask: "/images/extended-fam/ExtendedFam_JeffZwicker-DirectorOfPhotography copy.png",
      given: "JEFF",
      sur: "ZWICKER",
      role: "Director of Photography",
    },
    {
      head: "/images/extended-fam/ExtendedFam_WilliamSelviz - RENDRD.png",
      mask: "/images/extended-fam/ExtendedFam_WilliamSelviz - RENDRD copy.png",
      given: "WILLIAM",
      sur: "SELVIS",
      role: "RENDRD",
    },
    {
      head: "/images/extended-fam/ExtendedFam_NickGrossman.png",
      mask: "/images/extended-fam/ExtendedFam_NickGrossman copy.png",
      given: "NICK",
      sur: "GROSSMAN",
      role: "Animator / VFX",
    },
    {
      head: "/images/extended-fam/ExtendedFam_CurtisHuisman - Sensored.png",
      mask: "/images/extended-fam/ExtendedFam_CurtisHuisman - Sensored copy.png",
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
        {team.extended.map(({ given, sur, role, bio, head, mask }, i) => (
          <RosterCard
            given={given}
            sur={sur}
            role={role}
            bio={bio}
            head={head}
            mask={mask}
            key={i}
          ></RosterCard>
        ))}
      </div>
    </section>
  )
}
