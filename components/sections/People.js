import styled from "styled-components"
import RedStrokeHeader from "../RedStrokeHeader"
import RosterCard from "../RosterCard"

// could GetStaticProps here for active roster

// fetch team from X
const team = {
  leadership: [
    {
      given: "TROY ADAM",
      sur: "GORDON",
      role: "CEO + Executive Producer",
      bio:
        "Velit irure pariatur dolor occaecat nisi aute sint. Dolore in sint sunt Lorem aliquip excepteur est consectetur culpa et ea. Nostrud enim do minim eiusmod veniam sunt voluptate ut cillum eiusmod. Ullamco eiusmod ut cupidatat nisi excepteur est et fugiat sint est velit.",
      head: "/images/rosterSample.png",
    },
    {
      given: "DAVE ‘DABS’",
      sur: "JOHNSON",
      role: "Chief Partnership Officer",
      bio:
        "Velit irure pariatur dolor occaecat nisi aute sint. Dolore in sint sunt Lorem aliquip excepteur est consectetur culpa et ea. Nostrud enim do minim eiusmod veniam sunt voluptate ut cillum eiusmod. Ullamco eiusmod ut cupidatat nisi excepteur est et fugiat sint est velit.",
      head: "/images/rosterSample.png",
    },
    {
      given: "ZAQIR",
      sur: "VIRANI",
      role: "Advisor",
      bio:
        "Velit irure pariatur dolor occaecat nisi aute sint. Dolore in sint sunt Lorem aliquip excepteur est consectetur culpa et ea. Nostrud enim do minim eiusmod veniam sunt voluptate ut cillum eiusmod. Ullamco eiusmod ut cupidatat nisi excepteur est et fugiat sint est velit.",
      head: "/images/rosterSample.png",
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
        {team.leadership.map(({ given, sur, role, bio, head }, i) => (
          <RosterCard
            given={given}
            sur={sur}
            role={role}
            bio={bio}
            head={head}
            key={i}
          ></RosterCard>
        ))}
      </FlexBox>
    </section>
  )
}
