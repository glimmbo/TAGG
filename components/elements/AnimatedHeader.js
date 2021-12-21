import styled, { css } from "styled-components"
import { useInView } from "react-intersection-observer"
import { svgPathProperties } from "svg-path-properties"

const AnimatedSVG = styled.div`
  width: 100%;
  padding: 0 1em;

  @media screen and (max-width: 425px) {
    padding: 0;
  }

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
    fill: transparent;
    width: 100%;
    stroke-opacity: 0;
    transition: stroke-opacity 1s ease-in-out;

    ${({ lengths }) => {
      if (lengths) {
        return lengths.map(
          (length, i) =>
            css`
              & g path:nth-child(${i + 1}) {
                stroke-dasharray: ${length};
                stroke-dashoffset: ${length};
                animation: ${({ inView }) => (inView ? `draw` : ``)};
                animation-duration: 2s;
                animation-timing-function: ease-in-out;
                animation-direction: normal;
                animation-fill-mode: forwards;
              }
            `,
        )
      }
    }}
  }
`

export const AnimatedHeader = (props) => {
  const { children, id } = props

  const { ref: refHeader, inView: inViewHeader } = useInView({
    threshold: 1, // fully in view
    // triggerOnce: true,
  })

  const lengths = children.props.children.props.children.map((path) => {
    return Math.round(new svgPathProperties(path.props.d).getTotalLength())
  })

  return (
    lengths && (
      <AnimatedSVG
        id={id}
        lengths={lengths}
        ref={refHeader}
        inView={inViewHeader}
      >
        {children}
      </AnimatedSVG>
    )
  )
}
