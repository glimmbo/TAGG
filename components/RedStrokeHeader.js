import { useRef, useEffect } from "react"
import styled from "styled-components"

const H1 = styled.h1`
  ${({ transform }) => transform}

  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px var(--red);
  background-color: transparent;
  font-family: Montserrat-Bold;
  letter-spacing: 0.05em;
  margin: 0;
  padding: 0;
  position: absolute;
  text-transform: uppercase;
  text-align: center;
  user-select: none;
  z-index: 0;
  overflow: hidden;
  font-size: 20vh;
  @media screen and (max-width: 425px) {
    font-size: 10vh;
  }
`

export default function RedStrokeHeader({ children, style }) {
  // alter an element's style with scrollY
  const h1Ref = useRef()
  useEffect(() => {
    let didScroll = false

    const scrollInProgress = () => {
      didScroll = true
    }

    const raf = () => {
      if (didScroll) {
        console.log(window.scrollY)

        // h1Ref.current.style.transform =
        //   "translateX(" + window.scrollY / 100 + " %)"

        // don't translate, just change X pos of each
        didScroll = false
      }
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    window.addEventListener("scroll", scrollInProgress)
  })
  return (
    <div style={{ position: "relative", ...style }}>
      <H1 style={style} ref={h1Ref}>
        {children}
      </H1>
    </div>
  )
}
