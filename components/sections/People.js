import styled from "styled-components"
import HomeSection from "./HomeSection"
import RosterCard from "../RosterCard"

const team = {
  leadership: [
    {
      given: "TROY ADAM",
      sur: "GORDON",
      role: "CEO + Executive Producer",
      bio: "Velit irure pariatur dolor occaecat nisi aute sint. Dolore in sint sunt Lorem aliquip excepteur est consectetur culpa et ea. Nostrud enim do minim eiusmod veniam sunt voluptate ut cillum eiusmod. Ullamco eiusmod ut cupidatat nisi excepteur est et fugiat sint est velit.",
      head: "/images/leadership/Leadership_TroyAdamGordon -CEO.png",
      mask: "/images/leadership/Leadership_TroyAdamGordon -CEO copy.png",
    },
    {
      given: "DAVE ‘DABS’",
      sur: "JOHNSON",
      role: "Chief Partnership Officer",
      bio: "Velit irure pariatur dolor occaecat nisi aute sint. Dolore in sint sunt Lorem aliquip excepteur est consectetur culpa et ea. Nostrud enim do minim eiusmod veniam sunt voluptate ut cillum eiusmod. Ullamco eiusmod ut cupidatat nisi excepteur est et fugiat sint est velit.",
      head: "/images/leadership/Leadership_ Dave _Dabs_ Johnson_ - Cheif Creative....png",
      mask: "/images/leadership/Leadership_ Dave _Dabs_ Johnson_ - Cheif Creative... copy.png",
    },
    {
      given: "ZAQIR",
      sur: "VIRANI",
      role: "Advisor",
      bio: "Velit irure pariatur dolor occaecat nisi aute sint. Dolore in sint sunt Lorem aliquip excepteur est consectetur culpa et ea. Nostrud enim do minim eiusmod veniam sunt voluptate ut cillum eiusmod. Ullamco eiusmod ut cupidatat nisi excepteur est et fugiat sint est velit.",
      head: "/images/leadership/Leadership_ZaqirVirani - Advisor.png",
      mask: "/images/leadership/Leadership_ZaqirVirani - Advisor copy.png",
    },
  ],
}

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    min-height: fit-content;
  }
`

export default function People() {
  return (
    <HomeSection id="people" header1="people">
      <FlexBox>
        {team.leadership.map(({ given, sur, role, bio, head, mask }, i) => (
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
      </FlexBox>
    </HomeSection>
  )
}
