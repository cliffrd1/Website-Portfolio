import { Github, ExternalLink } from "lucide-react"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Vite to showcase my skills and projects.",
      technologies: ["React", "Vite", "CSS", "React Router"],
      repoUrl: "https://github.com/cliffrd1/Website-Portfolio",
      liveUrl: "https://cliffportfolio.netlify.app/",
      image: "/images/portfolio.png",
    },
    {
      id: 2,
      title: "Scientific Calculator",
      description: "Developed a fully functional scientific calculator with advanced features such as trigonometric functions, logarithms, exponentiation, and memory operations.",
      technologies: ["React", "JavaScript", "CSS"],
      repoUrl: "https://github.com/hasteeza/scientific-calculator",
      liveUrl: "https://tdrn-scientific-calculator.netlify.app/",
      image: "/images/scical.png" ,
    },
    {
      id: 3,
      title: "Mini Pokédex App",
      description: "Built a mini Pokédex using the PokéAPI for real-time Pokémon data and json-server for a mock backend. Features include team building, simulated battles, and interactive Pokémon profiles.",
      technologies: ["React", "JavaScript", "CSS", "JSON Server"],
      repoUrl: "https://github.com/hasteeza/pokemon",
      liveUrl: "https://tdrn-pokeweb.netlify.app/",
      image: "/images/pokemon.png",
    },
  ]

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-description">
        Here are some of the projects I've worked on, including my weekly assignments and personal project.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image || "/placeholder.svg"} alt={project.title} />
            </div>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span className="tech-tag" key={index}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  <Github className="inline-block w-4 h-4 mr-1" /> Repository
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink className="inline-block w-4 h-4 mr-1" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
