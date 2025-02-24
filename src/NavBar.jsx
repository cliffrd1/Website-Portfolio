import { Link } from "react-router-dom"
import { Code2 } from "lucide-react"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Code2 className="inline-block w-5 h-5 mr-2 mb-1" />
        IT 142-A
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About Me
        </Link>
      </div>
    </nav>
  )
}

export default NavBar

