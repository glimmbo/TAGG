import styled from "styled-components"

const TriangleButton = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid var(--lightgrey);
  border-radius: 5%;
  position: relative;
  margin-bottom: -1px;
  &::after {
    content: "";
    position: absolute;
    top: 35%;
    left: 35%;
    width: 25%;
    height: 25%;
    border-left: 2px solid var(--red);
    border-bottom: 2px solid var(--red);
    transform: ${({ left, right }) =>
      left ? "rotate(45deg)" : right ? "rotate(-135deg)" : "rotate(0deg)"};
  }
`

const Divider = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-bottom: 1px solid var(--grey);
`

export const DividerWithArrows = ({ onLeft, onRight }) => {
  return (
    <Divider>
      <TriangleButton onClick={onLeft} left />
      <TriangleButton onClick={onRight} right />
    </Divider>
  )
}
