import styled, { css } from "styled-components"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const AnimatedSVG = styled.div`
  /* width: ${({ width }) => width}; */

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
      stroke-opacity: 1;
    }
  }

  @keyframes undraw {
    to {
      stroke-dashoffset: ${({ length }) => length};
      stroke-opacity: 0;
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
    transition: stroke-opacity 1s ease-in-out;

    /* ${({ extraCSS }) => extraCSS} */

    ${({ lengths }) => {
      return lengths.map(
        (length, i) =>
          css`
            & g path:nth-child(${i + 1}) {
              stroke-dasharray: ${length};
              stroke-dashoffset: ${length};
              animation: ${({ inView, entry }) =>
                inView && entry?.intersectionRatio > 0.5 ? `draw` : `undraw`};
              animation-duration: 2.5s;
              animation-timing-function: ease-in-out;
              animation-direction: normal;
              animation-fill-mode: forwards;
            }
          `,
      )
    }}
  }
`

export const AnimatedHeader = ({ children, id, width, extraCSS }) => {
  // inView is a prop that triggers a render...
  const [lengths, setLengths] = useState([])

  const {
    ref: refHeader,
    inView: inViewHeader,
    entry: entryHeader,
  } = useInView({
    threshold: 1, // fully in view
  })

  useEffect(() => {
    const nodes = Array.from(document?.querySelectorAll(`#${id} path`))

    setLengths(
      nodes?.map((path, i) => {
        return Math.round(path.getTotalLength())
      }),
    )
  }, [])

  return (
    lengths && (
      <AnimatedSVG
        id={id}
        lengths={lengths}
        width={width}
        // extraCSS={extraCSS}
        ref={refHeader}
        inView={inViewHeader}
        entry={entryHeader}
      >
        {children}
      </AnimatedSVG>
    )
  )
}
