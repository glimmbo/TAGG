import styled from "styled-components"

const Corners = styled.div`
  position: relative;
  background-color: transparent;
  display: flex;

  .top,
  .bottom {
    position: absolute;
    width: 6px;
    height: 6px;
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: all 300ms ease-in;
  }

  .top {
    top: 0;
    border-top: 4px solid var(--red);
    align-self: flex-start;
  }

  .bottom {
    bottom: 0;
    border-bottom: 4px solid var(--red);
    align-self: flex-end;
  }

  .left {
    left: 0;
    border-left: 4px solid var(--red);
    justify-self: left;
  }

  .right {
    right: 0;
    border-right: 4px solid var(--red);
    justify-self: right;
  }
`
export const ActiveCorners = ({ children, active }) => {
  return (
    <Corners active={active}>
      <div className="top left" />
      <div className="top right" />
      <div className="bottom left" />
      <div className="bottom right" />
      {children}
    </Corners>
  )
}
