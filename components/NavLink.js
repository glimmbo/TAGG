import { useEffect, useState } from "react"
import { useRouter } from "next/router"
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

  :hover {
    color: var(--lightgrey);
    font-weight: 500;
  }
`

export const NavLink = ({ href, children }) => {
  const router = useRouter()
  const [currentPath, setCurrentPath] = useState("")
  useEffect(() => setCurrentPath(router.pathname), [])

  return (
    <ActiveCorners active={currentPath === href}>
      <StyledA href={href}>{children}</StyledA>
    </ActiveCorners>
  )
}

// function MyComp() {
//   const router = useRouter()
//   const [currentPath, setCurrentPath] = useState("")
//   useEffect(() => setCurrentPath(router.pathname), [])

//   return (
//     <a className={currentPath === "/some-path" ? "currentCSS" : "defaultCSS"}>
//       Some link
//     </a>
//   )
// }
