import styled from "styled-components"
import RedStrokeHeader from "../RedStrokeHeader"
import PoppedHeader from "../PoppedHeader"

const Grid = styled.div`
  transform: translateY(27vh);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "a ."
    ". b"
    "c .";

  & .text {
    padding-left: 10vh;
    padding-right: 10vh;
  }

  p {
  }
`

export default function Foundation() {
  return (
    <section id="foundation">
      <RedStrokeHeader style={{ transform: "translateX(-1vh)" }}>
        foundation
      </RedStrokeHeader>

      <Grid>
        <div className="text" style={{ gridArea: "a" }}>
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
        </div>

        <div
          className="text"
          style={{ gridArea: "b", transform: "translateY(-7vh)" }}
        >
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
        </div>

        <div
          className="text"
          style={{ gridArea: "c", transform: "translateY(-14vh)" }}
        >
          <PoppedHeader>PARTNERS &gt; CLIENTS</PoppedHeader>
          <p>
            If you hear a good story you share it, you tell your friends who
            texts her friend who posts about it online.
            <br />
            <br />
            Tell the right story to the right audience and they’re hooked -
            that's why we love stories. They’re who we are and what our clients
            become.
          </p>
        </div>
      </Grid>
    </section>
  )
}
