import styled from "styled-components"
import { NavLink } from "./NavLink"

const Nav = styled.nav`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  height: 10em;
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
    height: 7em;
    width: calc(100vw + 1em);
  }

  #logo {
    position: relative;
    margin-left: -1em;
    margin-top: .5em;
    outline: 1px solid var(--red);
    padding-left: 1em;
    /* box-shadow: 4px 4px var(--red), 0 4px var(--red); */
    background-color: var(--black);
    
    ::before {
      position: absolute;
      content: "";
      height: calc(100% + 5px);
      width: calc(100% + 5px);
      top: 0;
      left: 0;
      background-color: var(--red);
      clip-path: polygon(100% 100%, 0% 100%, -20% calc(100% - 4px), calc(100% - 4.5px) calc(100% - 4px), calc(100% - 4.5px) 0%, 100% calc(0% + 4px), 100% 100%);
    }
}


    @media screen and (max-width: 425px) {
      margin: 0 -15px;
    }
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Logo = styled.img`
  margin: 0.75em;
  margin-bottom: 0.35em;
  margin-left: 1em;
  height: 35px;
  transition: filter 0.2s ease-in-out;
  filter: invert(20%) sepia(45%) saturate(6941%) hue-rotate(329deg)
    brightness(95%) contrast(94%);

  :hover {
    /* to colour var(--grey) */
    filter: invert(100%) sepia(8%) saturate(316%) hue-rotate(229deg)
      brightness(79%) contrast(87%);
  }
  :active {
    /* to colour var(--white) */
    filter: invert(97%) sepia(4%) saturate(700%) hue-rotate(287deg)
      brightness(118%) contrast(94%);
  }

  @media screen and (max-width: 425px) {
    height: 25px;
    margin-left: 1em;
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
