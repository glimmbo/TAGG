import { useEffect, useState } from "react"
// import { useRouter, Router } from "next/router"
import styled from "styled-components"
import { ActiveCorners } from "./elements/ActiveCorners"

const StyledA = styled.a`
  text-decoration: none;
  padding: 0.5em 0.5em;
  display: block;
  color: var(--grey);
  font-weight: 300;
  background-color: transparent;
  font-family: Montserrat;
  font-size: 1.1em;
  margin-right: 2vw;
  margin-left: 2vw;

  :hover {
    color: var(--lightgrey);
    font-weight: 500;
  }
`

export const NavLink = ({ href, children }) => {
  const [active, setActive] = useState(false)
  useEffect(() => {
    window?.addEventListener("hashchange", (ev) => {
      setActive(ev.newURL.split("#")[1] === href.split("#")[1])
    })
  }, [])

  return (
    <ActiveCorners active={active}>
      <StyledA href={href}>{children}</StyledA>
    </ActiveCorners>
  )
}
