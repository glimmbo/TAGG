import { useEffect, useState } from "react"
import { useRouter, Router } from "next/router"
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
  const { asPath } = useRouter()

  Router.events.on("hashChangeStart", console.log(href, asPath))

  console.log(asPath)
  useEffect(() => console.log(href, asPath), [asPath])

  console.log(href === asPath)
  return (
    <ActiveCorners active={href === asPath}>
      <StyledA href={href}>{children}</StyledA>
    </ActiveCorners>
  )
}
