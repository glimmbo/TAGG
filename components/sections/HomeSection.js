import styled from "styled-components"
import RedStrokeHeader from "../RedStrokeHeader"

const Section = styled.section`
  min-height: 100vh;
  height: fit-content;
  min-width: 100vw;
  width: 100%;
  margin-top: 15vh;
  /* margin-bottom: 10vh; */
  /* overflow: hidden; */
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Content = styled.div`
  margin-top: -60px;
  z-index: 1;
  /* background-color: rgba(50, 150, 75, 0.1); */

  @media screen and (max-width: 425px) {
    width: initial;
    margin: 0 5%;
    margin-bottom: 0%;
  }
`

const HomeSection = ({ id, children, header, sectionStyle }) => {
  return (
    <Section id={id} style={sectionStyle}>
      <RedStrokeHeader>{header}</RedStrokeHeader>
      {/* {header2 && <RedStrokeHeader>{header2}</RedStrokeHeader>} */}
      <Content>{children}</Content>
    </Section>
  )
}

export default HomeSection
