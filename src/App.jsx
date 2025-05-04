import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import AboutMe from "./AboutMe"
import BlogPost from "./BlogPost"
import BlogPostDetail from "./BlogPostDetail"
import Projects from "./Projects"
import Experience from "./Experience"
import Contact from "./Contact"
function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/blog" element={<BlogPost />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
