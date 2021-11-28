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
  padding: 0 1em;

  background: linear-gradient(var(--black), transparent);

  @media screen and (max-width: 425px) {
    font-size: 75%;
  }

  #logo {
    margin-left: 1em;
    margin-top: 1em;

    @media screen and (max-width: 425px) {
      margin-left: 15px;
    }
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Logo = styled.img`
  height: 50px;
  filter: invert(20%) sepia(45%) saturate(6941%) hue-rotate(329deg)
    brightness(95%) contrast(94%);

  @media screen and (max-width: 425px) {
    height: 35px;
  }
`

export const NavBar = ({ visibleSection }) => {
  return (
    <Nav>
      <a id="logo" href="#">
        <Logo src="/images/taggSpray.png" />
      </a>
      <Links>
        <NavLink href="/#works" active={visibleSection === "works"}>
          WORKS
        </NavLink>
        <NavLink href="/#about" active={visibleSection === "about"}>
          ABOUT
        </NavLink>
        <NavLink href="/#contact" active={visibleSection === "contact"}>
          CONTACT
        </NavLink>
      </Links>
    </Nav>
  )
}
