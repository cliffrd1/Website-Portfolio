import { Briefcase, Calendar } from "lucide-react"

function Experience() {
  const experiences = [
    {
      company: "Innovision",
      role: "Frontend Designer",
      duration: "June 2024 - May 2025",
      description:
        "Collaborated on a Software Engineering Final Project titled 'WMSU Senior High School Students Behavior/Performance-Based Grade Calculation System'. The project involved building a web-based system to help WMSU Senior High School administrators and faculty evaluate students more holistically by integrating both academic and behavioral performance. It was a challenging but rewarding experience that involved multiple revisions and a final defense before completion.",
      responsibilities: [
        "Developed a dynamic and user-friendly web interface using HTML, CSS, and JavaScript",
        "Collaborated with a real client to gather requirements and revise the system based on feedback",
        "Handled student data management, subject listing, and performance evaluation logic",
        "Worked with the team in an agile environment, participating in planning and regular update meetings",
        "Overcame challenges during the defense process and contributed to the final approved submission",
      ],
    },
  ]

  return (
    <div className="experience-page">
      <h1 className="experience-title">Professional Experience</h1>
      <p className="experience-description">
        My professional journey in Software Engineering and Information Technology.
      </p>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-icon">
              <Briefcase />
            </div>

            <div className="experience-content">
              <h2 className="experience-role">{exp.role}</h2>
              <h3 className="experience-company">{exp.company}</h3>

              <div className="experience-duration">
                <Calendar className="inline-block w-4 h-4 mr-1" />
                <span>{exp.duration}</span>
              </div>

              <p className="experience-description">{exp.description}</p>

              <div className="experience-responsibilities">
                <h4>Key Responsibilities:</h4>
                <ul>
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="login-image-container">
        <h2 className="login-image-title">Login Page</h2>
        <img 
          src="/images/inone.png" 
          className="login-page-image" 
        />
      </div>
      <div className="login-image-container">
        <h2 className="login-image-title">Main Feature</h2>
        <img 
          src="/images/intwo.png" 
          className="login-page-image" 
        />
      </div>
    </div>
  )
}

export default Experience
