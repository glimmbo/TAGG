import styles from "../styles/Blurb"
export default function Blurb({ children }) {
  return <p style={styles.blurb}>{children}</p>
}
