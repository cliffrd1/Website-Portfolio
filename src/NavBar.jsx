import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">IT 142-A</div>
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

