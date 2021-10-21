import styled from "styled-components"
import HomeSection from "./HomeSection"
import RosterCard from "../RosterCard"

const leadership = [
  {
    given: "TROY ADAM",
    sur: "GORDON",
    role: "CEO, EXECUTIVE PRODUCER",
    bio: "Velit irure pariatur dolor occaecat nisi aute sint. Dolore in sint sunt Lorem aliquip excepteur est consectetur culpa et ea. Nostrud enim do minim eiusmod veniam sunt voluptate ut cillum eiusmod. Ullamco eiusmod ut cupidatat nisi excepteur est et fugiat sint est velit.",
    head: "/images/leadership/Leadership_TroyAdamGordon -CEO.png",
    mask: "/images/leadership/Leadership_TroyAdamGordon -CEO copy.png",
  },
  {
    given: "DAVE ‘DABS’",
    sur: "JOHNSON",
    role: "CHIEF CREATIVE & PARTNERSHIP OFFICER",
    bio: "Velit irure pariatur dolor occaecat nisi aute sint. Dolore in sint sunt Lorem aliquip excepteur est consectetur culpa et ea. Nostrud enim do minim eiusmod veniam sunt voluptate ut cillum eiusmod. Ullamco eiusmod ut cupidatat nisi excepteur est et fugiat sint est velit.",
    head: "/images/leadership/Leadership_ Dave _Dabs_ Johnson_ - Cheif Creative....png",
    mask: "/images/leadership/Leadership_ Dave _Dabs_ Johnson_ - Cheif Creative... copy.png",
  },
  {
    given: "ZAQIR",
    sur: "VIRANI",
    role: "ADVISOR",
    bio: "Velit irure pariatur dolor occaecat nisi aute sint. Dolore in sint sunt Lorem aliquip excepteur est consectetur culpa et ea. Nostrud enim do minim eiusmod veniam sunt voluptate ut cillum eiusmod. Ullamco eiusmod ut cupidatat nisi excepteur est et fugiat sint est velit.",
    head: "/images/leadership/Leadership_ZaqirVirani - Advisor.png",
    mask: "/images/leadership/Leadership_ZaqirVirani - Advisor copy.png",
  },
]

export const StaggerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;

  & > div {
    width: 40%;
    margin-bottom: 1em;
    &:not(:first-child) {
      margin-top: ${({ marginTop }) => marginTop};
    }
  }

  & > :nth-child(odd) {
    align-self: flex-start;
  }

  & > :nth-child(even) {
    align-self: flex-end;
  }

  @media screen and (max-width: 425px) {
    display: block;
    width: 95%;

    & > div {
      width: 100%;
      margin-bottom: 0;
      &:not(:first-child) {
        margin-top: 0;
      }
    }

    & > :nth-child(odd) {
      align-self: flex-start;
    }

    & > :nth-child(even) {
      align-self: flex-end;
    }
  }
`

export default function People() {
  return (
    <HomeSection id="people" header="people">
      <StaggerBox marginTop="-40%">
        {leadership.map(({ given, sur, role, bio, head, mask }, i) => (
          <RosterCard
            given={given}
            sur={sur}
            role={role}
            bio={bio}
            head={head}
            mask={mask}
            key={i}
          />
        ))}
      </StaggerBox>
    </HomeSection>
  )
}
