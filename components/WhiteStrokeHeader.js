import styled from "styled-components"

const H1 = styled.h1`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px var(--white);
  animation-name: fadeIn;
  animation-timing-function: ease-in;
  animation-duration: 5500ms;
  animation-delay: 50ms;
  animation-direction: forwards;
  animation-fill-mode: forwards;
  background-color: transparent;
  font-family: Montserrat-Bold;
  font-size: 33vh;
  letter-spacing: 0.1em;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  text-transform: uppercase;
  text-align: center;
  z-index: 1;
`

export default function WhiteStrokeHeader({ children, style }) {
  return <H1 style={style}>{children}</H1>
}
