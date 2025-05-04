import { Github, Instagram, Facebook } from "lucide-react"
import profilePic from "./assets/profile.png"

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src={profilePic || "/placeholder.svg?height=180&width=180"}
        alt="Clifford Ace Lagata"
      />
      <h2 className="card-title">Clifford Ace Lagata</h2>
      <div className="card-info">
        <span className="info">22 years old</span>
        <span className="info">170 cm</span>
      </div>
      <div className="social-links">
        <h3>Connect With Me</h3>
        <div className="social-icons">
          <a
            href="https://github.com/cliffrd1"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Github />
          </a>
          <a
            href="https://facebook.com/c1ffo/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Facebook />
          </a>
          <a
            href="https://instagram.com/x0307ace"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
