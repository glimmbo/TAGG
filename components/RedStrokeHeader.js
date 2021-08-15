import { useRef, useEffect } from "react"
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
  position: absolute;
  text-transform: uppercase;
  text-align: center;
  user-select: none;
  width: 100vw;
  z-index: 0;
`

export default function RedStrokeHeader({ children, style }) {
  // alter an element's style with scrollY
  const h1Ref = useRef()
  // useEffect(() => {
  //   let didScroll = false

  //   const scrollInProgress = () => {
  //     didScroll = true
  //   }

  //   const raf = () => {
  //     if (didScroll) {
  //       h1Ref.current.style.transform =
  //         "translateX(" + window.scrollY / 100 + "%)"
  //       // don't translate, just change X pos of each
  //       didScroll = false
  //     }
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  //   window.addEventListener("scroll", scrollInProgress)
  // })
  return (
    <H1 style={style} ref={h1Ref}>
      {children}
    </H1>
  )
}
