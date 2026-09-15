import './App.css'

function App() {
  return (
    <div className="portfolio">

      <nav className="navbar">
        <h2>BIKEKO ISAAC</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Bikeko Isaac</span>
          </h1>

          <h3>BSc Information Technology Student</h3>

          <p>
            I am an Information Technology student at Ghana Communication
            Technology University, passionate about technology, leadership,
            public speaking and youth development.
          </p>

          <a href="#about" className="button">
            Discover More
          </a>
        </div>

        <div className="profile">
          <div className="profile-placeholder">
            BIKEKO
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a BSc Information Technology student at Ghana Communication
          Technology University. I am interested in technology and its ability
          to create opportunities and solve problems.
        </p>

        <p>
          Beyond technology, I have a strong interest in leadership,
          public speaking, youth advocacy and community development.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>My Skills</h2>

        <div className="cards">
          <div className="card">
            <h3>💻 Technology</h3>
            <p>Programming, web development and digital technology.</p>
          </div>

          <div className="card">
            <h3>🎤 Public Speaking</h3>
            <p>Communication, presentations and expressing ideas confidently.</p>
          </div>

          <div className="card">
            <h3>👥 Leadership</h3>
            <p>Teamwork, organisation and community leadership.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>My Projects</h2>

        <div className="project">
          <h3>CGPA Calculator</h3>
          <p>
            A programming project developed to calculate students' CGPA
            using C++.
          </p>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let's Connect</h2>
        <p>
          Thank you for visiting my portfolio.
        </p>
      </section>

      <footer>
        <p>© 2026 Bikeko Isaac. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App