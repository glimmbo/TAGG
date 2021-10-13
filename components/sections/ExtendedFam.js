import HomeSection from "./HomeSection"
import RosterCard from "../RosterCard"
import styled from "styled-components"

const team = {
  extended: [
    {
      given: "CAT",
      sur: "MEDEIROS",
      role: "SALLUA",
      head: "/images/extended-fam/ExtendedFam_CatMedeiros - SALLUA.png",
      mask: "/images/extended-fam/ExtendedFam_CatMedeiros - SALLUA copy.png",
      bio: "We’re not sure how, but she has a knack for clarifying the inexpressible, and forming it into some truly stunning designs. It might be magic. ",
    },
    {
      head: "/images/extended-fam/ExtendedFam_JeffZwicker-DirectorOfPhotography.png",
      mask: "/images/extended-fam/ExtendedFam_JeffZwicker-DirectorOfPhotography copy.png",
      given: "JEFF",
      sur: "ZWICKER",
      role: "Director of Photography",
      bio: "Put him in any room, any location, under any amount of pressure, and this man will light it beautifully. He’s also got a mean Jiu Jitsu take down.",
    },
    {
      head: "/images/extended-fam/ExtendedFam_WilliamSelviz - RENDRD.png",
      mask: "/images/extended-fam/ExtendedFam_WilliamSelviz - RENDRD copy.png",
      given: "WILLIAM",
      sur: "SELVIZ",
      role: "RENDRD",
      bio: "A tastemaker when it comes to the 3D content his team produces. His style is fresh, his approach is unique, and of course, his sneaker collection is fire.",
    },
    {
      head: "/images/extended-fam/ExtendedFam_NickGrossman.png",
      mask: "/images/extended-fam/ExtendedFam_NickGrossman copy.png",
      given: "NICK",
      sur: "GROSSMAN",
      role: "Animator / VFX",
      bio: "Multi-talented across the gamut of post-production, he’s like three people in one, and oftentimes we wish there were three of him…",
    },
    {
      head: "/images/extended-fam/ExtendedFam_CurtisHuisman - Sensored.png",
      mask: "/images/extended-fam/ExtendedFam_CurtisHuisman - Sensored copy.png",
      given: "CURTIS",
      sur: "HUISMAN",
      role: "SENSORED",
      bio: "Curtis is the ultimate one-man band when it comes to production. Whether it’s on-location, in studio, car, plane, whatever—he’s always ready to hit that little red button.",
    },
  ],
}

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10% 0px;
  grid-template-areas:
    ". . ."
    ". . .";

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5% 0%;
    grid-template-areas:
      ". . "
      ". . "
      ". . ";
  }
`

const GridItem = styled.div`
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5% 0%;
    grid-template-areas:
      ". . "
      ". . "
      ". . ";
  }
`

export default function ExtendedFam() {
  return (
    <HomeSection id="extended-fam" header="extended family">
      <Grid>
        {team.extended.map(({ given, sur, role, bio, head, mask }, i) => (
          <GridItem key={i}>
            <RosterCard
              given={given}
              sur={sur}
              role={role}
              bio={bio}
              head={head}
              mask={mask}
            ></RosterCard>
          </GridItem>
        ))}
      </Grid>
    </HomeSection>
  )
}
