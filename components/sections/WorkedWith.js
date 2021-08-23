import styled from "styled-components"
import HomeSection from "./HomeSection"
import HoverLogo from "../elements/HoverLogo"

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

export default function WorkedWith() {
  return (
    <HomeSection id="worked-with" header1="worked" header2="with">
      <MobileRowDesktopCol>
        <MobileColDesktopRow>
          <HoverLogo
            active={"/clients/client_EDM-active.svg"}
            inactive={"/clients/client_EDM-inactive.svg"}
          />
          <HoverLogo
            active={"/clients/client_HW-active.svg"}
            inactive={"/clients/client_HW-inactive.svg"}
          />
          <HoverLogo
            active={"/clients/client_MC-active.svg"}
            inactive={"/clients/client_MC-inactive.svg"}
          />
          <HoverLogo
            active={"/clients/client_modo-active.svg"}
            inactive={"/clients/client_modo-inactive.svg"}
          />
        </MobileColDesktopRow>
        <MobileColDesktopRow>
          <HoverLogo
            active={"/clients/client_TB-active.svg"}
            inactive={"/clients/client_TB-inactive.svg"}
          />
          <HoverLogo
            active={"/clients/client_TED-active.svg"}
            inactive={"/clients/client_TED-inactive.svg"}
          />
          <HoverLogo
            active={"/clients/client_TS-active.svg"}
            inactive={"/clients/client_TS-inactive.svg"}
          />
          <HoverLogo
            active={"/clients/client_ZGM-active.svg"}
            inactive={"/clients/client_ZGM-inactive.svg"}
          />
        </MobileColDesktopRow>
      </MobileRowDesktopCol>
    </HomeSection>
  )
}
