import { NavLink } from "./NavLink"
// import { nav, spacer } from "../styles/Nav.module.css"

export const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink href="#about" content="ABOUT" />
        <NavLink href="#works" content="WORKS" />
        <NavLink href="#contact" content="CONTACT" />
      </div>
    </nav>
  )
}
