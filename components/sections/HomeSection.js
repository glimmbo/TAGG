import styled from "styled-components"
import RedStrokeHeader from "../RedStrokeHeader"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
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

  & svg {
    transform: translateY(-20px);
  }
`

const Content = styled.div`
  /* background-color: navy; */
  margin-top: -60px;
  z-index: 1;

  @media screen and (max-width: 425px) {
    width: initial;
    margin: 0 5%;
    margin-bottom: 0%;
  }
`

const HomeSection = ({
  id,
  children,
  header,
  HeaderComponent,
  sectionStyle,
}) => {
  const {
    ref: refSection,
    inView: inViewSection,
    entry: entrySection,
  } = useInView({
    threshold: [0.5],
    trackVisibility: true,
    delay: 300,
  })

  const {
    ref: refHeader,
    inView: inViewHeader,
    entry: entryHeader,
  } = useInView({
    threshold: [0, 1],
    trackVisibility: true,
    triggerOnce: true,
  })

  useEffect(() => {
    console.log(inViewHeader, entryHeader?.target)
  }, [inViewHeader])

  const router = useRouter()

  useEffect(() => {
    // push new hash when in view
    if (inViewSection && window) {
      router.push(`/#${id}`)
    }
  }, [inViewSection])

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
    <Section id={id} style={sectionStyle} ref={refSection}>
      <HeaderComponent inView={inViewHeader} ref={refHeader} />
      <Content>{children}</Content>
    </Section>
  )
}

export default HomeSection
