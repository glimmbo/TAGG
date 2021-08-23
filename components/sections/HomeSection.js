import styled from "styled-components"
import RedStrokeHeader from "../RedStrokeHeader"

const Section = styled.section`
  min-height: 100vh;
  height: fit-content;
  min-width: 100vw;
  width: 100%;
  margin-top: 10vh;
  margin-bottom: 15vh;
  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 425px) {
    display: block;
  }
`

const Content = styled.div`
  /* draft */
  /* background-color: darkred; */
  width: 100%;
  margin: 5% 5%;
  margin-top: 130px;

  @media screen and (max-width: 425px) {
    width: initial;
    margin: 0 5%;
    margin-bottom: 0%;
  }
`

const HomeSection = ({ children, header1, header2, style }) => {
  return (
    <Section>
      <RedStrokeHeader>{header1}</RedStrokeHeader>
      {header2 && (
        <RedStrokeHeader transformDesktop="translate(0%, 170%)">
          {header2}
        </RedStrokeHeader>
      )}
      <Content>{children}</Content>
    </Section>
  )
}

export default HomeSection
