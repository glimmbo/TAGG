import { useRouter } from "next/router"
import Link from "next/link"
;`
  div {
    background-color: transparent;
  }

  a {
    text-decoration: none;
    padding: 0.5em 0.5em;
    display: block;
    color: var(--grey);
    font-weight: 300;
    background-color: transparent;
    font-family: Montserrat;
    font-size: 1.1em;
  }

  a:hover {
    color: var(--lightgrey);
    font-weight: 500;
  }

  .selected {
    position: relative;
    width: 125px;
    padding: 0.35em 0.5em;
    text-align: center;
  }

  .selected a {
    color: var(--lightgrey);
    font-weight: 500;
  }

  div.unselected {
    text-align: center;
    width: 125px;
    padding: 0.35em 0.5em;
  }

  .top,
  .bottom {
    position: absolute;
    width: 6px;
    height: 6px;
  }

  .top {
    top: 0;
    border-top: 4px solid var(--red);
  }

  .bottom {
    bottom: 0;
    border-bottom: 4px solid var(--red);
  }

  .left {
    left: 0;
    border-left: 4px solid var(--red);
  }

  .right {
    right: 0;
    border-right: 4px solid var(--red);
  }
`
export const NavLink = (props) => {
  const router = useRouter()

  return (
    <div className={props.href === router.pathname ? "selected" : "unselected"}>
      <div className="top left" />
      <div className="top right" />
      <div className="bottom right" />
      <div className="bottom left" />
      <Link href={props.href}>
        <a>{props.content}</a>
      </Link>
    </div>
  )
}
