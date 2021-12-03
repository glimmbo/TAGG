import styled from "styled-components"
import { forwardRef } from "react"

const Section = styled.section`
  min-height: fit-content;
  width: 100%;
  margin: 25vh 0;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  & svg {
    transform: translateY(-20px);
  }

  @media screen and (max-width: 425px) {
    margin: 2em 0;
  }
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
    <Section id={id} style={sectionStyle} ref={ref}>
      <HeaderComponent />
      <Content style={contentStyle}>{children}</Content>
    </Section>
  )
})

export default HomeSection
