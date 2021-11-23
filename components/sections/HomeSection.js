import styled from "styled-components"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useRouter } from "next/router"
import whyTho from "../hooks/whyTho"

const Section = styled.section`
  min-height: fit-content;
  width: 100%;
  margin: 5vh 0;
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

const HomeSection = (props) => {
  whyTho("HomeSection", props)
  const { id, children, HeaderComponent, sectionStyle } = props

  // const {
  //   ref: refSection,
  //   inView: inViewSection,
  //   entry: entrySection,
  // } = useInView({
  //   threshold: [0.5],
  //   trackVisibility: true,
  //   delay: 100,
  // })

  const router = useRouter()

  // https://github.com/vercel/next.js/pull/27195 (no scroll on hash push)
  // useEffect(() => {
  //   // push new hash when in view
  //   if (inViewSection && window) {
  //     router.replace(`/#${id}`, `/#${id}`, { shallow: true })
  //   }
  // }, [inViewSection])

  return (
    <Section id={id} style={sectionStyle}>
      <HeaderComponent />
      <Content>{children}</Content>
    </Section>
  )
}

export default HomeSection
