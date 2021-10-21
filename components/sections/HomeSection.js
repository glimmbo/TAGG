import styled from "styled-components"
import RedStrokeHeader from "../RedStrokeHeader"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react/cjs/react.development"
import { useRouter } from "next/router"

const Section = styled.section`
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  margin-top: 15vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Content = styled.div`
  margin-top: -60px;
  z-index: 1;

  @media screen and (max-width: 425px) {
    width: initial;
    margin: 0 5%;
    margin-bottom: 0%;
  }
`

const HomeSection = ({ id, children, header, sectionStyle }) => {
  const { ref, inView, entry } = useInView({
    threshold: [0.5, 0],
    trackVisibility: true,
    delay: 300,
  })
  const router = useRouter()

  if (["works", "about", "contact"].includes(id)) {
    useEffect(() => {
      // push new hash when in view
      if (inView && window) {
        router.push(`/#${id}`)
      }
    }, [inView])
  }

  let adjusted
  if (header === "works") {
    adjusted = (
      <span>
        wor<span style={{ letterSpacing: "0.15em" }}>ks</span>
      </span>
    )
  } else if (header === "extended family") {
    adjusted = (
      <span>
        <span style={{ letterSpacing: "0.15em " }}>ex</span>tended family
      </span>
    )
  } else {
    adjusted = header
  }
  return (
    <Section id={id} style={sectionStyle} ref={ref}>
      <RedStrokeHeader>{adjusted}</RedStrokeHeader>
      <Content>{children}</Content>
    </Section>
  )
}

export default HomeSection
