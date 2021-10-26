import styled, { css } from "styled-components"
import { useEffect, useState } from "react"

// inconsistently working, with no errors 😖

const AnimatedSVG = styled.div`
  width: ${({ width }) => width};

  @keyframes lineDraw {
    to {
      stroke-dashoffset: 0;
    }
  }

  svg {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px var(--red);
    background-color: transparent;
    stroke: var(--red);
    fill: var(--black);
    width: 100%;

    ${({ lengths }) => {
      return lengths.map(
        (length, i) =>
          css`
            & g path:nth-child(${i + 1}) {
              stroke-dasharray: ${length};
              stroke-dashoffset: ${length};
              animation: lineDraw 1.5s ease-in-out forwards;
              /* if want iteration 1, will need to do it
              with separate IntersectionObserver in HomeSection */
            }
          `,
      )
    }}/* ${({ extraCSS }) => extraCSS} */
  }
`

export const AnimatedHeader = ({ children, id, width, extraCSS }) => {
  const [lengths, setLengths] = useState([])

  useEffect(() => {
    const nodes = Array.from(document?.querySelectorAll(`#${id} g path`))

    setLengths(
      nodes?.map((path, i) => {
        return Math.round(path.getTotalLength())
      }),
    )
  }, [])

  return (
    <AnimatedSVG id={id} lengths={lengths} width={width} extraCSS={extraCSS}>
      {lengths && children}
    </AnimatedSVG>
  )
}
