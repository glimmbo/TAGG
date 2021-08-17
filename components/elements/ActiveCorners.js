import styled from "styled-components"

const Corners = styled.div`
  position: "relative";
  background-color: transparent;

  .top,
  .bottom {
    position: absolute;
    width: 6px;
    height: 6px;
    opacity: ${({ active }) => (active ? 1 : 0)};
  }

  .top {
    top: 0;
    border-top: 4px solid var(--red);
  }

  .bottom {
    bottom: 0;
    border-bottom: 4px solid var(--red);
  }

  .left {
    left: 0;
    border-left: 4px solid var(--red);
  }

  .right {
    right: 0;
    border-right: 4px solid var(--red);
  }
`
export const ActiveCorners = ({ children, active }) => {
  return (
    <Corners style={{ position: "relative" }} active={active}>
      <div className="top left" />
      <div className="top right" />
      <div className="bottom left" />
      <div className="bottom right" />
      {children}
    </Corners>
  )
}
