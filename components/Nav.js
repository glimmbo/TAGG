import { NavLink } from "./NavLink"
import { nav, spacer } from "../styles/Nav.module.css"

export const NavBar = () => {
  return (
    <nav className={nav}>
      <div className={spacer}>
        <NavLink href="#about">ABOUT</NavLink>
        <NavLink href="#works">WORKS</NavLink>
        <NavLink href="#contact">CONTACT</NavLink>
      </div>
    </nav>
  )
}
