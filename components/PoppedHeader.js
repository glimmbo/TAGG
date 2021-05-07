import "../styles/PoppedHeader.module.css"
export default function PoppedHeader({ children, size }) {
  return size === 1 ? <h1>{children}</h1> : <h2>{children}</h2>
}
