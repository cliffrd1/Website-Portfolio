"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Calendar, ArrowLeft } from "lucide-react"

function BlogPostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const blogPosts = [
    {
      id: 1,
      title: "My OJT/Practicum Experience at WMSU",
      date: "Started Feb 17, 2025",
      content: `My On-the-Job Training (OJT) experience has been superb, We were deployed at the Admin Office of Western Mindanao State University (WMSU) and it has been a learning adventure like no other.

      During my time there, We were entrusted to make a venue reservation system for the University along with my group mates Isaac Adjaluddin, Fritz Gerald Bubog, and Earl Borgonia. We were instructed to work from home as we develop the system. We meet once a week for an update progress.`,
      images: [
        "/images/ojt.jpg",
        "/images/ojtfour.jpg",
        "/images/ojthree.jpg",
        "/images/ojtwo.jpg",
      ],
    },
    {
      id: 2,
      title: "The UI of our WMSU Venue Reservation System",
      date: "April 29, 2025",
      content: `We're excited to share a first look at the user interface of our ongoing development project—the WMSU Venue Reservation System! Designed with simplicity and efficiency in mind, the system aims to streamline the process of booking university venues for events, meetings, and activities. Stay tuned as we continue to refine its features and bring a seamless reservation experience to the WMSU community.`,
      images: [
        "/images/one.png",
        "/images/seven.png",
        "/images/two.png",
        "/images/three.png",
        "/images/four.png",
        "/images/five.png",
        "/images/six.png",
      ],
    },
    {
      id: 3,
      title: "Software Engineering Final Project",
      date: "May 2, 2025",
      content: `The title of our SE system is "WMSU Senior High School Students Behavior/Performance-Based Grade Calculation System", Our client was from WMSU Senior Highschool. 

      The system is a web-based application designed to support the academic and behavioral evaluation processes of WMSU Senior High School. The system allows administrators and faculty to efficiently manage student information, subject lists, and performance evaluations using predefined behavioral criteria. It integrates both academic data and performance-based indicators to provide a more holistic grading and evaluation system.
      
      
      We got INC at our first final defense, it tooks us months to finalize it. We finished by May 2 and finally got our INC form signed. It was good experience and I learned a lot.`,
      images: [
        "/images/inone.png",
        "/images/intwo.png",
        "/images/inthree.png",
        "/images/infour.png",
      ],
      
    },
    {
      id: 4,
      title: "CCS E-Games Tournament",
      date: "August 31, 2024",
      content: `In my free time I play a lot of this FPS game called Valorant, One time the CCS announced that there will be an E-games Tournament, the games will be Valorant, Mobile Legends, and Call of Duty Mobile. I immediately asked my classmates to join the valorant tournament. 

      Our first tourna. experience was way back 2021 my IGN was "Eisu" and I was the duelist in our team. At the first tournament, we lost the grand final match. 2022 & 2023 we were not able to join, our last tournament experience was last year 2024 which we got eliminated right away because of the BO1 match. Overall, it was really a memorable experience. I just hoped we won atleast one championship.`,
      images: [
        "/images/valthree.jpg",
        "/images/val.png",
        "/images/valtwo.png",
      ],
    },
    {
      id: 5,
      title: "My Gym Progress",
      date: "May 3, 2025",
      content: `I started lifting way back October 13,2024, the one who influenced me to hit the gym is my classmate named Gerald. The first gym I went to train is called JC Powerzone GYM where I met good people and had memorable experience. 

      I have been training for almost 2 years now. The workout routine I follow is PPL (Push, Pull, Leg). I start Chest and Triceps for Monday, Back and Biceps for Tuesday, Leg Day (Hell Day) on Wednesday then I rest on Thursday, and I repeat after that.`,
      images: [
        "/images/jimone.jpg",
        "/images/jimtwo.jpg",
        "/images/jimthree.jpg",
        "/images/jimfour.jpg",
        "/images/jimfive.jpg",
      ],
    },
    {
      id: 6,
      title: "Malamawi Trip",
      date: "April 5, 2025",
      content: `It was my first time in Basilan and trip to Malamawi, I was with my parents and two sisters. The reason why we went to Malamawi is because of my Sister's diversity study. 

      We boarded a boat to Isable Basilan for 2hours, upon arrival we instantly boarded a small "bangka" to Malamawi Island just for 5 mins. The resort was called Pahali and the entrance fee is 600 pesos consumable for food. As I step on the white beach of Malamawi, it was just beautiful. The sea water was clear, it's not rocky, and the people are nice. `,
      images: [
        "/images/mtwo.jpg",
        "/images/mthree.jpg",
        "/images/mone.jpg",
        "/images/msix.jpg",
        "/images/mfour.jpg",
        "/images/mfive.jpg",
      ],
    },
    {
      id: 7,
      title: "Pandemic Online Class",
      date: "2022-2023",
      content: `This picture is the only photo I have when I had an online classes during pandemic. It was a challenging part of my college life, because there's no IRL interaction.

      My first year in IT was asynchronous learning, I was self studying with basic programmming and explored the lessons, tools that our proffesors gave us. It was difficult for me at first to learn in that setting. Good thing everytime we meet, we always record our online meetings so that we can replay what our instructor taught us. There were times that I would think what if covid never really happened, I was wondering if what would be the case if it was on site learning. Overall, there was no problem at all and I learned a lot.`,
      images: [
        "/images/ptwo.jpg",
      ],
    },
  ]

  useEffect(() => {
    const foundPost = blogPosts.find((post) => post.id === Number.parseInt(id))
    setPost(foundPost)
    setLoading(false)
  }, [id])

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  if (!post) {
    return <div className="error">Blog post not found</div>
  }

  return (
    <div className="blog-detail">
      <Link to="/blog" className="back-link" onClick={() => window.scrollTo(0, 0)}>
        <ArrowLeft className="inline-block w-4 h-4 mr-1" /> Back to Blog
      </Link>

      <article className="blog-article">
        <h1 className="blog-detail-title">{post.title}</h1>
        <div className="blog-detail-meta">
          <Calendar className="inline-block w-4 h-4 mr-1" />
          <span>{post.date}</span>
        </div>

        <div className="blog-detail-content">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="blog-detail-gallery">
          <h2>Photo Gallery</h2>
          <div className={`blog-images-grid ${post.id === 5 ? 'grid-style-gym' : ''}`}>
            {post.images.map((image, index) => (
              <div className="blog-image" key={index}>
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${post.title} - Image ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                  className="hover:cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </article>

      {isModalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full Size" className="full-size-image" />
            <button className="close-modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogPostDetail