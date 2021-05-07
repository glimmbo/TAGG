import styles from "../styles/RedStrokeHeader.module.css"

export default function RedStrokeHeader({ children, top, left }) {
  return <h1 styles={{ ...styles, top, left }}>{children}</h1>
}
