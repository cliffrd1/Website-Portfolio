"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Calendar, ArrowRight } from "lucide-react"

function BlogPost() {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "My OJT/Practicum Experience at WMSU",
      date: "Started Feb 17, 2025",
      excerpt: "Dive into my OJT journey at the Admin Office of Western Mindanao State University...",
      images: [
        "/images/ojt.jpg",
      ],
    },
    {
      id: 2,
      title: "The UI of our WMSU Venue Reservation System",
      date: "May 2, 2025",
      excerpt: "Checkout the UI of our Venue Reservation System as we showcase the ongoing design...",
      images: [
        "/images/two.png",
      ],
    },
    {
      id: 3,
      title: "Software Engineering Final Project",
      date: "2024-2025",
      excerpt: "Check out the system we developed for our SE...",
      images: [
        "/images/inone.png",
      ],
    },
    {
      id: 4,
      title: "CCS E-Games Tournament",
      date: "2021-2024",
      excerpt: "A memorable fun experience of me joining a valorant tournament with my classmates...",
      images: [
        "/images/valthree.jpg",
      ],
    },
    {
      id: 5,
      title: "My Gym Progress",
      date: "May 3, 2025",
      excerpt: "Checkout my journey in bulking up for almost 2 years...",
      images: [
        "/images/jimcov.jpg",
      ],
    },
    {
      id: 6,
      title: "Malamawi Trip",
      date: "April 5, 2025",
      excerpt: "A trip I will never forget, checkout my Malamawi Trip as I....",
      images: [
        "/images/mthree.jpg",
      ],
    },
    {
      id: 7,
      title: "Pandemic Online Class",
      date: "2022-2023",
      excerpt: "Checkout my pandemic online classes story...",
      content: `My On-the-Job Training (OJT) experience at the Admin Office of Western Mindanao State University (WMSU) has been a learning adventure like no other. From the first day, I was exposed to the intricacies of administrative work in a university setting. 

      During my time there, I was entrusted with a variety of tasks that helped me hone both my technical and soft skills. I worked closely with a team of professionals who shared their knowledge and provided hands-on learning experiences that were invaluable for my career development.`,
      images: [
        "/images/ptwo.jpg",
      ],
    },
  ])

  return (
    <div className="blog-page">
      <h1 className="blog-title">Blog Posts</h1>
      <p className="blog-description">
        Checkout my Blog Posts as I showcase my college experience and personal life.
      </p>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <div className="blog-card-image">
              <img src={post.images[0] || "/placeholder.svg"} alt={post.title} />
            </div>
            <div className="blog-card-content">
              <h2>{post.title}</h2>
              <div className="blog-meta">
                <Calendar className="inline-block w-4 h-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <p>{post.excerpt}</p>
              <Link
                to={`/blog/${post.id}`}
                className="blog-read-more"
                onClick={() => window.scrollTo(0, 0)}>
  Read More <ArrowRight className="inline-block w-4 h-4 ml-1" />
</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPost
