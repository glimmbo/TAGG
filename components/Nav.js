import styled from "styled-components"
import { NavLink } from "./NavLink"

const Nav = styled.nav`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  height: 10vh;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
  font-weight: 300;
`

const Spacer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const NavBar = () => {
  return (
    <Nav>
      <Spacer>
        <NavLink href="/#about">ABOUT</NavLink>
        <NavLink href="/#works">WORKS</NavLink>
        <NavLink href="/#contact">CONTACT</NavLink>
      </Spacer>
    </Nav>
  )
}
