import styled from "styled-components"
import Link from "next/link"
import PoppedHeader from "../PoppedHeader"
import { ActiveCorners } from "./ActiveCorners"

const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 8% 8%;
  display: flex;
  flex-direction: column;

  a {
    transition: background-color 0.2s ease-in-out;
  }
  a:hover {
    background-color: var(--lightgrey);
  }
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
      opacity: 0.99, // attempt to break stacking context...
    }}
  >
    WATCH
  </ActiveCorners>
)

export const Slide = ({ name, href }) => {
  return (
    <TitleContainer>
      <PoppedHeader>{name}</PoppedHeader>

      <Link href={href} passHref>
        <a
          style={{
            width: "fit-content",
          }}
        >
          <WatchButton />
        </a>
      </Link>
    </TitleContainer>
  )
}
