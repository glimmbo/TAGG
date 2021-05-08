import { useRouter } from "next/router"
import styled from "styled-components"
import { ActiveCorners } from "./elements/ActiveCorners"

const StyledA = styled.a`
  position: "relative";
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

const Box = styled.div`
  .selected {
  }
`

export const NavLink = ({ href, children }) => {
  const router = useRouter()
  console.log(`/${href}` === router.asPath)

  return (
    <>
      {/* {`${props.href}` === router.asPath && <ActiveCorners />} */}
      <ActiveCorners active={true}>
        <StyledA href={href}>{children}</StyledA>
      </ActiveCorners>
    </>
  )
}
