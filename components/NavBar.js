import styled from "styled-components"
import { NavLink } from "./NavLink"

const Nav = styled.nav`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  height: 10vh;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 20;
  font-weight: 300;
`

const Spacer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-right: 1vw;
`

const Logo = styled.img`
  height: 50px;
  filter: invert(20%) sepia(45%) saturate(6941%) hue-rotate(329deg)
    brightness(95%) contrast(94%);
`

export const NavBar = ({ visibleSection }) => {
  console.log("navbar visibleSection", visibleSection)
  return (
    <Nav>
      <a href="#" style={{ marginLeft: "40px", marginTop: "40px" }}>
        <Logo src="/images/taggSpray.png" />
      </a>
      <Spacer>
        <NavLink href="/#works" active={visibleSection === "works"}>
          WORKS
        </NavLink>
        <NavLink href="/#about" active={visibleSection === "about"}>
          ABOUT
        </NavLink>
        <NavLink href="/#contact" active={visibleSection === "contact"}>
          CONTACT
        </NavLink>
      </Spacer>
    </Nav>
  )
}
