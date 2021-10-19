import styled from "styled-components"
import HomeSection from "./HomeSection"
import Client from "../elements/HoverLogo"

const MobileColDesktopRow = styled.div`
  display: flex;
  margin-top: -6%;
  justify-content: center;
  @media screen and (max-width: 425px) {
    display: block;
  }
`

const MobileRowDesktopCol = styled.div`
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: row;
  }
`

const Flow = styled.div`
  margin-top: -80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 425px) {
    max-height: 90vh;
    margin-top: -95px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  }
`

export default function WorkedWith() {
  return (
    <HomeSection id="worked-with" header="worked with">
      <Flow>
        <div style={{ width: "100px" }} />
        <Client src="amazon.svg" href="https://aws.amazon.com/" />
        <Client src="cocacola.svg" href="https://www.coca-cola.com/" />
        <Client src="cult.svg" href="https://cultideas.com/" />
        <Client src="espn.svg" href="https://www.espn.com/" />
        <Client src="hotwheels.svg" href="https://hotwheels.mattel.com/" />
        <Client src="intel.svg" href="https://www.intel.com" />
        <Client src="monstercat.svg" href="https://www.monstercat.com/" />
        <Client src="seahawks.svg" href="http://www.seahawks.com/" />
        <Client src="spotify.svg" href="https://www.spotify.com/" />
        <Client src="teekay.svg" href="https://www.teekay.com/" />
        <Client src="troyboi.svg" href="https://troyboimusic.com/" />
        <Client src="uclahealth.svg" href="https://www.uclahealth.org/" />
        <Client src="underarmour.svg" href="https://www.underarmour.com/" />
      </Flow>
    </HomeSection>
  )
}
