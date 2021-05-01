import styled from "styled-components"
import { NavLink } from "./NavLink"

const Spacer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 5em;
  width: 25%;
`

const Nav = styled.nav`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  height: 23vh;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
  font-weight: 300;
`

export const NavBar = () => {
  return (
    <Nav>
      <Spacer>
        <NavLink href="/about" content="ABOUT" />
        <NavLink href="/works" content="WORKS" />
        <NavLink href="/about#contact" content="CONTACT" />
      </Spacer>
    </Nav>
  )
}
