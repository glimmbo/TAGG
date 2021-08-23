import styled from "styled-components"

const Popped = styled.h2`
  background-color: transparent;
  color: var(--lightgrey);
  font-family: Montserrat-Bold;
  letter-spacing: 50;
  margin-top: 0;
  margin-bottom: 1em;
  text-shadow: -0.1em 0.1em var(--red);
  text-transform: uppercase;
  user-select: none;
  z-index: 3;

  a {
    z-index: 3;
  }
`
export default function PoppedHeader({ children, style }) {
  return <Popped style={style}>{children}</Popped>
}
