import styles from "../styles/RedStrokeHeader.module.css"
console.log(styles)
export default function RedStrokeHeader({ children, top, left }) {
  return <h1 className={styles.h1}>{children}</h1>
}
