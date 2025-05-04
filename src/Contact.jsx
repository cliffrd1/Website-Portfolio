"use client"

import { useState } from "react"
import { Mail, Phone, Github, Linkedin, Instagram, Facebook } from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  return (
    <div className="page-wrapper">
    <div className="contact-page">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-description">
        Feel free to reach out if you have a question, or just want to connect.
      </p>

      <div className="contact-container">
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="contact-info-items">
            <div className="contact-info-item">
              <Phone className="contact-icon" />
              <div>
                <h3>Phone</h3>
                <p>09686856904</p>
              </div>
            </div>

            <div className="contact-info-item">
              <Mail className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>lagataclifford@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h2>Connect With Me</h2>
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
      </div>
    </div>
    </div>
  )
}

export default Contact
