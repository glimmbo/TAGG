import styled from "styled-components"

const Corners = styled.div`
  background-color: transparent;
  position: "relative";

  .top,
  .bottom {
    position: absolute;
    width: 6px;
    height: 6px;
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
    <Corners>
      <div className="top left" style={{ opacity: active ? 1 : 0 }} />
      <div className="top right" style={{ opacity: active ? 1 : 0 }} />
      <div className="bottom left" style={{ opacity: active ? 1 : 0 }} />
      <div className="bottom right" style={{ opacity: active ? 1 : 0 }} />
      {children}
    </Corners>
  )
}
