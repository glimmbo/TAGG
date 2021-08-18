import styled from "styled-components"
import RedStrokeHeader from "../RedStrokeHeader"
import PoppedHeader from "../PoppedHeader"
import Image from "next/dist/client/image"

const ScrollXonMobile = styled.section`
  position: relative;
  @media screen and (max-width: 425px) {
    overflow-x: scroll;
    min-height: fit-content;
    padding: 2em 0;
  }
`

export const Stagger = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  max-height: 100vh;
  transform: translateY(15%);

  .text {
    margin: 0 10vh;
    flex: 1 1 auto;
    max-width: 40%;
  }
  .text.two {
    margin-top: 5%;
  }
  .text.three {
    margin-top: 15%;
  }

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    max-height: fit-content;
    font-size: 0.8em;
    width: 300vw;
    min-height: "fit-content";

    .text {
      margin: 0;
      padding: 1em 2em;
      max-width: 90vw;
    }
    .text.two {
      margin-top: 0;
    }
    .text.three {
      margin-top: 0;
    }

    p {
      font-size: 1em;
      line-height: 1.15em;
    }
  }
`

const SidewaysAnimation = styled.div`
  display: none;
  position: absolute;
  margin: 3em;
  & > * img {
  }
  @media screen and (max-width: 425px) {
    display: block;
    position: absolute;
    transform: rotate(-90deg);
    fill: var(--red);
    left: 50%;
    top: 50%;
    height: 120px;
    width: 120px;
  }
`

const SideScrollArrow = () => (
  <SidewaysAnimation>
    <img src="/autoscroll-arrows/autoscroll_video-inactive.svg" />
  </SidewaysAnimation>
)

export default function Foundation() {
  return (
    <ScrollXonMobile id="foundation">
      <RedStrokeHeader
        transform="translateX(13%)"
        transformMobile="translateX(20%)"
      >
        foundation
      </RedStrokeHeader>
      <SideScrollArrow
        src="/autoscroll-arrows/autoscroll_video-inactive.svg"
        height="120px"
        width="120px"
      ></SideScrollArrow>
      <Stagger>
        <div className="text">
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

        <div className="text two">
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

        <div className="text three">
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
      </Stagger>
    </ScrollXonMobile>
  )
}
