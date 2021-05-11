import styled from "styled-components"

const H1 = styled.h1`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px var(--red);
  background-color: transparent;
  font-family: Montserrat-Bold;
  font-size: 33vh;
  letter-spacing: 0.05em;
  margin: 0;
  padding: 0;
  position: relative;
  text-transform: uppercase;
  text-align: center;
  user-select: none;
  width: 100vw;
  z-index: 0;
`

export default function RedStrokeHeader({ children, style }) {
  return <H1 style={style}>{children}</H1>
}
