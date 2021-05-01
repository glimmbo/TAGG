import { NavBar } from "./Nav"
export function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}
