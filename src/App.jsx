import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import AboutMe from "./AboutMe"

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

