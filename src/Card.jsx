import profilePic from "./assets/profile.png"

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic || "/placeholder.svg"} alt="profile picture" />
      <h2 className="card-title">Clifford Ace Lagata</h2>
      <p className="card-text">IT 4th Year Student</p>
      <div className="card-info">
        <span className="info">21 years old</span>
        <span className="info">170 cm</span>
        <span className="info">Filipino</span>
      </div>
    </div>
  )
}

export default Card

