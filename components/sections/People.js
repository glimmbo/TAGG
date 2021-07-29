import styled from "styled-components"
import RedStrokeHeader from "../RedStrokeHeader"
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

  @media screen and (min-width: 600px) {
    flex-direction: "column";
  }
`

export default function People() {
  return (
    <section id="people">
      <RedStrokeHeader>People</RedStrokeHeader>
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
    </section>
  )
}
