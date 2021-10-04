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
