import styles from "../styles/WhiteStrokeHeader"
export default function WhiteStrokeHeader({ children, top, left }) {
  return <h1 style={{ ...styles, top, left }}>{children}</h1>
}
