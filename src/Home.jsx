"use client"

import { Link } from "react-router-dom"
import { ArrowRight, Dumbbell, Gamepad2, User } from "lucide-react"
import Card from "./Card"

function Home() {
  return (
    <div className="home">
      <div className="hero-enhanced">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">
            Passionate about Information Technology and creating innovative solutions. Exploring the endless
            possibilities in the world of tech.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="hero-button primary">
              View Projects
            </Link>
            <Link to="/blog" className="hero-button primary">
              Blog Posts
            </Link>
            <Link to="/contact" className="hero-button secondary">
              Contact Me
            </Link>
          </div>
        </div>
        <Card />
      </div>
    </div>
  )
}

export default Home
