import styled from "styled-components"
export const StaggerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 60%;

  & > div {
    width: 40%;
    margin-bottom: 1em;
    &:not(:first-child) {
      margin-top: ${({ marginTop }) => marginTop};
    }
  }

  & > :nth-child(odd) {
    align-self: flex-start;
  }

  & > :nth-child(even) {
    align-self: flex-end;
  }

  @media screen and (max-width: 425px) {
    display: block;
    width: 95%;

    & > div {
      width: 100%;
      margin-bottom: 0;
      &:not(:first-child) {
        margin-top: 0;
      }
    }

    & > :nth-child(odd) {
      align-self: flex-start;
    }

    & > :nth-child(even) {
      align-self: flex-end;
    }
  }
`
