import styled, { css } from "styled-components"
import { useEffect, useState, useMemo } from "react"

// inconsistently working, with no errors 😖

const AnimatedSVG = styled.div`
  width: ${({ width }) => width};

  @keyframes lineDraw {
    to {
      stroke-dashoffset: 0;
      stroke-opacity: 1;
    }
  }

  svg {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px var(--red);
    background-color: transparent;
    stroke: var(--red);
    fill: var(--black);
    width: 100%;
    stroke-opacity: 0;
    transition: stroke-opacity 0.5s ease-in-out;

    ${({ lengths }) => {
      return lengths.map(
        (length, i) =>
          css`
            & g path:nth-child(${i + 1}) {
              stroke-dasharray: ${length};
              stroke-dashoffset: ${length};
              animation: lineDraw 2s ease-in-out forwards;
              animation-delay: 0.2s;
              /* if want iteration 1, will need to do it
              with separate IntersectionObserver in HomeSection */
            }
          `,
      )
    }}/* ${({ extraCSS }) => extraCSS} */
  }
`

export const AnimatedHeader = ({ children, id, width, extraCSS, inView }) => {
  // inView is a prop that triggers a render...
  const [lengths, setLengths] = useState([])

  useEffect(() => {
    const nodes = Array.from(document?.querySelectorAll(`#${id} g path`))

    setLengths(
      nodes?.map((path, i) => {
        return Math.round(path.getTotalLength())
      }),
    )
  }, [inView])

  return (
    <AnimatedSVG id={id} lengths={lengths} width={width} extraCSS={extraCSS}>
      {lengths && children}
    </AnimatedSVG>
  )
}
