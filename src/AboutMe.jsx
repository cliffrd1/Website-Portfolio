import { Mail, Phone, Code, Target, Heart, ExternalLink } from "lucide-react"

function AboutMe() {
  return (
    <div className="about-me">
      <h1>About Me</h1>

      <section className="about-section">
        <h2>Introduction</h2>
        <p>
        I am an Information Technology graduate who is passionate in the IT Industry
        and explore various fields of technology. I am committed to delivering excellent
        customer service and ensuring efficient operations. With a strong passion for technology
        and a talent for troubleshooting, I specialize in both software and hardware solutions.
        </p>
      </section>

      <section className="about-section">
        <h2>
          <Code className="inline-block w-5 h-5 mr-2 mb-1" />
          Skills & Expertise
        </h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Web Development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <ul>
              <li>Technical Troubleshooting</li>
              <li>Basic Networking</li>
              <li>Hardware Maintenance</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Creative Skills</h3>
            <ul>
              <li>Video Editing</li>
              <li>Photo Editing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>
          <Target className="inline-block w-5 h-5 mr-2 mb-1" />
          Career Goals
        </h2>
        <div className="career-paths">
          <div className="career-path">
            <h3>Primary Goal: Frontend Designer</h3>
            <p>
              My primary aim is to become a Frontend Designer, crafting beautiful and intuitive user interfaces that
              enhance the digital experience. I'm particularly interested in UI/UX design, responsive web development,
              and modern frontend frameworks. I aspire to create impactful digital solutions that combine aesthetic
              appeal with excellent user experience.
            </p>
          </div>
          <div className="career-path">
            <h3>Secondary Goal: Personal Trainer</h3>
            <p>
            My second career goal is to be a certified gym personal trainer
            who gives people the right fitness regime, motivation, and correct
            direction toward attaining their set fitness goals. I aim at developing
            a supportive environment for the clients to gain strength and confidence
            with good total well-being.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>
          <Heart className="inline-block w-5 h-5 mr-2 mb-1" />
          Personal Touch
        </h2>
        <div className="personal-details">
          <h3>Fun Facts</h3>
          <ul>
            <li>I can bench press 154lbs (70KG) "My target for this year is 100kg" </li>
            <li>I've visited 5 cities in the Philippines</li>
          </ul>

          <h3>Hobbies</h3>
          <ul>
            <li>Video Games</li>
            <li>Watching Esports</li>
            <li>Movies & Anime</li>
          </ul>
        </div>
      </section>


    </div>
  )
}

export default AboutMe

