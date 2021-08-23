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
  width: 100vw;
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
    gap: 0 0%;
    grid-template-areas:
      ". . "
      ". . "
      ". . ";
  }
`

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
    width: 50vw;
  }
`

export default function ExtendedFam() {
  return (
    <HomeSection id="extended-fam" header1="extended" header2="family">
      <Grid>
        {team.extended.map(({ given, sur, role, bio, head, mask }, i) => (
          <GridItem>
            <RosterCard
              given={given}
              sur={sur}
              role={role}
              bio={bio}
              head={head}
              mask={mask}
              key={i}
            ></RosterCard>
          </GridItem>
        ))}
      </Grid>
    </HomeSection>
  )
}
