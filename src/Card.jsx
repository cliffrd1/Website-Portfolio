import { GraduationCap } from "lucide-react"
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
      <p className="card-text">
        <GraduationCap className="inline-block w-5 h-5 mr-2 mb-1" />
        IT 4th Year Student
      </p>
      <div className="card-info">
        <span className="info">21 years old</span>
        <span className="info">170 cm</span>
        <span className="info">Filipino</span>
      </div>
    </div>
  )
}

export default Card

