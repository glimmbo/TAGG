import styled from "styled-components"
import Link from "next/link"

const Quiet = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 5;

  a,
  p {
    color: var(--grey);
    margin: 0;
  }
`
const PrivacyPolicy = () => {
  return (
    <Quiet>
      <Link href="/privacy-policy" passHref>
        <a target="_blank">
          <p>Privacy Policy</p>
        </a>
      </Link>
      <p>&nbsp; | &nbsp;© TAGG Creative 2022</p>
    </Quiet>
  )
}
export { PrivacyPolicy }
