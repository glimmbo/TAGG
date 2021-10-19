import { useEffect, useState } from "react"
import styled from "styled-components"
import { ActiveCorners } from "./elements/ActiveCorners"
import { useRouter } from "next/router"

const StyledA = styled.a`
  text-decoration: none;
  padding: 0.5em 0.5em;
  display: block;
  color: var(--grey);
  font-weight: 300;
  background-color: transparent;
  font-family: Montserrat;
  font-size: 1.1em;
  margin-right: 0.5em;
  margin-left: 0.5em;
  user-select: none;

  @media screen and (max-width: 425px) {
    margin: 0;
  }

  :hover {
    color: var(--lightgrey);
    font-weight: 500;
  }
`

export const NavLink = ({ href, children }) => {
  const [active, setActive] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setActive(router.asPath === href)
  }, [router])

  return (
    <ActiveCorners active={active}>
      <StyledA href={href}>{children}</StyledA>
    </ActiveCorners>
  )
}
