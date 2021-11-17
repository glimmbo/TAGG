import styled, { css } from "styled-components"
import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

const AnimatedSVG = styled.div`
  @keyframes draw {
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
    transition: stroke-opacity 1s ease-in-out;

    /* ${({ extraCSS }) => extraCSS} */

    ${({ lengths }) => {
      return lengths.map(
        ({ length, duration }, i) =>
          css`
            & g path:nth-child(${i + 1}) {
              stroke-dasharray: ${length};
              stroke-dashoffset: ${length};
              animation: ${({ inView, entry }) =>
                inView && entry?.intersectionRatio > 0.5 ? `draw` : ``};
              animation-duration: ${duration};
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
  const widthRef = useRef(null)

  const {
    ref: refHeader,
    inView: inViewHeader,
    entry: entryHeader,
  } = useInView({
    threshold: 1, // fully in view
    triggerOnce: true,
  })

  useEffect(() => {
    console.log(widthRef.current.style.width)
    const nodes = Array.from(document?.querySelectorAll(`#${id} path`))
    let avgLength

    setLengths(
      nodes?.map((path, i, arr) => {
        // Shorter path length = faster completion ∴ longer duration for shorter lengths
        const length = Math.round(path?.getTotalLength())

        // Average length of all paths
        avgLength = Math.round(
          arr.reduce(
            (acc, curr) => acc + Math.round(curr?.getTotalLength()),
            0,
          ) / arr.length,
        )

        const duration = `2s` // nope..
        return { length, duration }
      }),
    )
  }, [])

  return (
    lengths && (
      <div ref={widthRef}>
        <AnimatedSVG
          id={id}
          lengths={lengths}
          // extraCSS={extraCSS}
          ref={refHeader}
          inView={inViewHeader}
          entry={entryHeader}
        >
          {children}
        </AnimatedSVG>
      </div>
    )
  )
}
