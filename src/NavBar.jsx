import { useState } from "react";
import { Link } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="navbar-brand">
          <Code2 className="inline-block w-5 h-5 mr-2 mb-1" />
          CLIFFORD ACE A. LAGATA
        </div>

        {/* Toggle Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Links */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
         <Link to="/" className="nav-link" onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}>Home</Link>
         <Link to="/about" className="nav-link" onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}>About Me</Link>
         <Link to="/blog" className="nav-link" onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}>Blog</Link>
         <Link to="/projects" className="nav-link" onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}>Projects</Link>
         <Link to="/experience" className="nav-link" onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}>Experience</Link>
         <Link to="/contact" className="nav-link" onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}>Contact</Link>
      </div>

    </nav>
  );
}

export default NavBar;
