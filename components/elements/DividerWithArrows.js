import styled from "styled-components"

export const DividerWithArrows = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  border-bottom: 1px solid var(--grey);

  .arrow {
    height: 50px;
    width: 50px;
    border: 2px solid var(--lightgrey);
  }
  .arrow .left {
    transform: rotate(180deg);
    border-right: 0px;
  }
`
