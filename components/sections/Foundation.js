import styled from "styled-components"
import HomeSection from "./HomeSection"
import PoppedHeader from "../PoppedHeader"

export const Wrap = styled.div`
  display: grid;
  padding: 5%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 5% 10%;
  grid-template-areas:
    "a c"
    "b d";
  @media screen and (max-width: 425px) {
    display: block;
    width: 100%;
  }
`

export const Text = styled.div`
  padding-bottom: 2em;
  margin-right: auto;
  grid-area: ${({ gridArea }) => gridArea};
  transform: ${({ gridArea }) => {
    return gridArea === "c" || gridArea === "d" ? "translateY(50%)" : "0"
  }};

  @media screen and (max-width: 425px) {
    margin-top: 0;
    width: 100%;
    transform: none;
  }
`

export default function Foundation() {
  return (
    <HomeSection id="foundation" header="foundation">
      <Wrap>
        <Text gridArea="a">
          <PoppedHeader>LEAN. AGILE. FULLY DISTRIBUTED</PoppedHeader>
          <p>
            At our core, we're all about stories. Doesn't matter if it's
            commercials, print or pre-roll if there isn't a narrative beating
            life into the spot, it's just an empty box.
            <br />
            <br />
            This is what we're infatuated with. Not just because we're
            filmmakers at heart, not because we still read comic books, but
            because we're human. Stories are a big part of that; They can make
            you laugh until you cry, stir up conversation, debate, or even rock
            your very foundation of perception.
          </p>
        </Text>

        <Text gridArea="b">
          <PoppedHeader>Small by intention, not by necessity</PoppedHeader>
          <p>
            Cupidatat reprehenderit aute ut laborum fugiat aute esse. Enim in
            magna duis officia mollit do eu est velit Lorem.
            <br />
            <br />
            Cillum dolore veniam non in aliquip laborum aute ut elit do do. Do
            voluptate minim ut reprehenderit laboris amet et sunt laboris
            nostrud exercitation labore reprehenderit consequat. Proident non
            sunt sunt sit anim ex officia velit. Non aute nostrud excepteur
            consequat.
          </p>
        </Text>

        <Text mt="50%" gridArea="c">
          <PoppedHeader className="dropped">PARTNERS &gt; CLIENTS</PoppedHeader>
          <p>
            If you hear a good story you share it, you tell your friends who
            texts her friend who posts about it online.
            <br />
            <br />
            Tell the right story to the right audience and they’re hooked -
            that's why we love stories. They’re who we are and what our clients
            become.
          </p>
        </Text>
      </Wrap>
    </HomeSection>
  )
}
