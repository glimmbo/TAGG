import styled from "styled-components"
import HomeSection from "./HomeSection"
import PoppedHeader from "../PoppedHeader"

export const Wrap = styled.div`
  display: grid;
  max-width: 100%;
  padding: 40px 5%;
  margin-top: -45px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 5% 10%;
  grid-template-areas:
    "a c"
    "b d";
  @media screen and (max-width: 425px) {
    display: block;
    padding: 0 0;
    width: 100%;
  }
`

export const Text = styled.div`
  padding-bottom: 2em;
  margin-right: auto;
  grid-area: ${({ gridArea }) => gridArea};
  transform: ${({ gridArea }) => {
    return gridArea === "c" || gridArea === "d" ? "translateY(60%)" : "0"
  }};

  @media screen and (max-width: 425px) {
    padding: 2em 0;
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
            Different places. Different people. All at the top of their game and
            curated on a per-project basis.
            <br />
            <br />
            We have a network of over 60,000 creative partners across the world,
            all available on-demand and ready to make it work.
          </p>
        </Text>

        <Text gridArea="b">
          <PoppedHeader>Small by intention, not by necessity</PoppedHeader>
          <p>
            Having a centralized direction keeps the creative consistent, the
            communication crystal clear and the quality high. No game of
            telephone——everyone on our team is within earshot.
          </p>
        </Text>

        <Text mt="50%" gridArea="c">
          <PoppedHeader className="dropped">PARTNERS &gt; CLIENTS</PoppedHeader>
          <p>
            Think{" "}
            <span style={{ fontStyle: "italic" }}>
              same team, different office
            </span>
            . Just because we aren’t in the same place, doesn’t mean we can’t
            build a relationship like we are.
            <br />
            <br />
            It’s simple——when we have each other’s back we’ll make better
            content together.
            <br />
            <br />
            We also expect an invite to your christmas party… Just kidding.
          </p>
        </Text>
      </Wrap>
    </HomeSection>
  )
}
