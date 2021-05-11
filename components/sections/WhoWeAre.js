import styled from "styled-components"
import WhiteStrokeHeader from "../WhiteStrokeHeader"
import PoppedHeader from "../PoppedHeader"
import Image from "next/image"

const Frame = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  opacity: 0.2;
`
export default function WhoWeAre() {
  return (
    <section id="about" style={{ position: "relative" }}>
      <WhiteStrokeHeader style={{ transform: "translate(35vw, 8vh)" }}>
        Who
      </WhiteStrokeHeader>
      <WhiteStrokeHeader style={{ transform: "translate(48vw, 34vh)" }}>
        We
      </WhiteStrokeHeader>
      <WhiteStrokeHeader style={{ transform: "translate(56vw, 60vh)" }}>
        Are
      </WhiteStrokeHeader>
      <PoppedHeader
        style={{ fontSize: "4em", transform: "translate(10vw, 66vh)" }}
      >
        WE ARE TAGG
      </PoppedHeader>
      <p style={{ maxWidth: "35vw", transform: "translate(10vw, 67vh)" }}>
        Born digital advertising tailored for social networks. We take our
        clients' brand and translate it into something interesting and
        shareable.
      </p>
      <Frame>
        <Image src="/images/who.png" layout="fill" objectFit="cover"></Image>
      </Frame>
    </section>
  )
}
