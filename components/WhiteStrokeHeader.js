import styled from "styled-components"

const H1 = styled.h1`
  background-color: transparent;
  font-family: Montserrat-Bold;
  letter-spacing: 0.1em;
  margin: 0;
  opacity: ${({ inView }) => (inView ? ".05" : "1")};
  padding: 0;
  position: absolute;
  text-transform: uppercase;
  text-align: center;
  user-select: none;
  z-index: 1;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px var(--white);
  transition: all 2000ms ease-in 100ms;
  font-size: 33vh;
  overflow: hidden;

  @media screen and (max-width: 425px) {
    font-size: 14vh;
  }
`

export default function WhiteStrokeHeader({ children, style, inView }) {
  return (
    <H1 style={style} inView={inView}>
      {children}
    </H1>
  )
}
