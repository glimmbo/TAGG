import styled from "styled-components"
import { forwardRef } from "react"

const Section = styled.section`
  min-height: 30vh;
  width: 100%;
  position: relative;
  margin-bottom: 10vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & svg {
    transform: translateY(-20px);
  }

  @media screen and (max-width: 425px) {
    margin: 2em 0;
  }
  /* sectionStyle */
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

const HomeSection = forwardRef((props, ref) => {
  const { id, children, HeaderComponent, sectionStyle, contentStyle } = props

  return (
    <Section id={id} ref={ref} style={sectionStyle}>
      <HeaderComponent />
      <Content style={contentStyle}>{children}</Content>
    </Section>
  )
})

export default HomeSection
