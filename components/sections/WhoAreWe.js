import styled from "styled-components"
import WhiteStrokeHeader from "../WhiteStrokeHeader"
import Image from "next/image"

const Frame = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  opacity: 0.2;
`
export default function WhoAreWe() {
  return (
    <section id="about" style={{ position: "relative" }}>
      <WhiteStrokeHeader>Who</WhiteStrokeHeader>
      <WhiteStrokeHeader>Are</WhiteStrokeHeader>
      <WhiteStrokeHeader>We?</WhiteStrokeHeader>
      <Frame>
        <Image src="/images/who.png" layout="fill" objectFit="cover"></Image>
      </Frame>
    </section>
  )
}
