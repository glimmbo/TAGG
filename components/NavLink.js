import { useRouter } from "next/router"
import {
  link,
  selected,
  unselected,
  top,
  left,
  bottom,
  right,
} from "../styles/NavLink.module.css"
export const NavLink = (props) => {
  const router = useRouter()
  console.log(props, router)
  console.log(`/${props.href}` === router.asPath)
  return (
    <div className={`/${props.href}` === router.asPath ? selected : unselected}>
      <div className={`${top} ${left}`} />
      <div className={`${top} ${right}`} />
      <div className={`${bottom} ${right}`} />
      <div className={`${bottom} ${left}`} />
      <a className={link} href={props.href}>
        {props.children}
      </a>
    </div>
  )
}
