import styles from "../styles/RedStrokeHeader.module.css"

export default function RedStrokeHeader({ children, top, left }) {
  return (
    <h1 className={styles.h1} style={{ top, left }}>
      {children}
    </h1>
  )
}
