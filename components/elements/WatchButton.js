import styled from "styled-components"
import Link from "next/link"
import PoppedHeader from "../PoppedHeader"
import { ActiveCorners } from "../elements/ActiveCorners"

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`

const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 8% 8%;
  display: flex;
  flex-direction: column;
`

const WatchButton = () => (
  <ActiveCorners
    active={true}
    style={{
      width: "calc(9ch + 1em)",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "var(--red)",
      fontFamily: "Consolas, sans-serif",
      margin: 0,
      padding: ".5em 2em",
      userSelect: "none",
      zIndex: 10,
    }}
  >
    WATCH
  </ActiveCorners>
)

export const Slide = ({ name, href }) => {
  return (
    <Overlay>
      <TitleContainer>
        <PoppedHeader>{name}</PoppedHeader>

        <Link href={href} passHref>
          <a>
            <WatchButton />
          </a>
        </Link>
      </TitleContainer>
    </Overlay>
  )
}
