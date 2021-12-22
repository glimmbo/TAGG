import styled from "styled-components"
export const StaggerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 70%;

  @media screen and (max-width: 425px) {
    display: block;
    width: 95%;
  }

  & > div {
    max-width: 30%;
    margin-bottom: 1em;
    &:not(:first-child) {
      margin-top: ${({ marginTop }) => marginTop};
    }
    @media screen and (max-width: 425px) {
      max-width: 100%;
      width: 100%;
      margin-bottom: 0;
      &:not(:first-child) {
        margin-top: 0;
      }
    }
  }

  & > :nth-child(odd) {
    align-self: flex-start;
  }

  & > :nth-child(even) {
    align-self: flex-end;
  }
`
