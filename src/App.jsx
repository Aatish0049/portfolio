import './App.css';
import { useState } from 'react';
import initialProjectsData from './projectsData';

function App() {
  const [projects, setProjects] = useState(initialProjectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    shortDescription: '',
    description: '',
    tech: '',
    demo: '',
    github: ''
  });

  const handleInputChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value
    });
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.title || !newProject.description) return;

    setProjects([...projects, newProject]);
    setNewProject({
      title: '',
      shortDescription: '',
      description: '',
      tech: '',
      demo: '',
      github: ''
    });
    setShowForm(false);
  };

  return (
    <div>
      <nav className="navbar">
        <h2 className="logo">Aatish Tiwari</h2>
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="header">
        <div className="header-content">
          <img src="/profile.jpeg" alt="Aatish Tiwari" className="profile-pic" />
          <h1>Hi, I'm Aatish Tiwari</h1>
          <p>Full Stack Developer | Java | MERN Stack</p>
        </div>
      </header>


     <section className="intro">
  <h2>About Me</h2>
  <p>
    Hello! I'm a passionate <strong>Full Stack Developer</strong> with practical experience in building dynamic and scalable web applications using <strong>Java, React.js, Node.js</strong>, and <strong>MongoDB</strong>.
  </p>
  <p>
    My tech journey began with curiosity and quickly turned into a strong drive to create meaningful, user-friendly software solutions. I enjoy crafting clean, efficient code and solving real-world problems through innovative development.
  </p>
  <p>
    Beyond coding, I’ve taken up leadership roles—organizing tech events, leading the sponsorship team during college fests, and actively contributing to open-source communities. I thrive in collaborative environments and always stay eager to learn and grow.
  </p>
  <p>
    <strong>Technical Skills:</strong> Java, MERN Stack (MongoDB, Express, React, Node.js), REST APIs, Git & GitHub, MySQL, MS Excel, MS Word, Responsive Web Design
  </p>
  <p>
    <strong>Soft Skills:</strong> Strong Communication, Quick Learning, Leadership, Teamwork, Creative Problem Solving
  </p>
</section>



      <section id="projects" className="section">
        <h2 className="center">My Projects</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              <button className="btn" onClick={() => setSelectedProject(project)}>View Project</button>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setSelectedProject(null)}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <p><strong>Technologies:</strong> {selectedProject.tech}</p>
            {selectedProject.demo && <p><a href={selectedProject.demo} target="_blank" rel="noreferrer">Live Demo</a></p>}
            {selectedProject.github && <p><a href={selectedProject.github} target="_blank" rel="noreferrer">GitHub</a></p>}
          </div>
        </div>
      )}

      <section className="add-project section">
        <h2 className="center">Want to Add New Project?</h2>
        <div className="center">
          <button className="btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Cancel" : "Add New Project"}
          </button>
        </div>

        {showForm && (
          <form className="project-form" onSubmit={handleAddProject}>
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={newProject.title}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="shortDescription"
              placeholder="Short Description"
              value={newProject.shortDescription}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Full Project Description"
              value={newProject.description}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="tech"
              placeholder="Technologies Used (e.g., React, Node)"
              value={newProject.tech}
              onChange={handleInputChange}
            />
            <input
              type="url"
              name="demo"
              placeholder="Live Demo URL"
              value={newProject.demo}
              onChange={handleInputChange}
            />
            <input
              type="url"
              name="github"
              placeholder="GitHub Repo URL"
              value={newProject.github}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn">Submit Project</button>
          </form>
        )}
      </section>

      <section id="contact" className="contact section">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:aatish1ranvir@gmail.com">aatish1ranvir@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/aatish-tiwari0049" target="_blank" rel="noreferrer">linkedin.com/in/aatish-tiwari0049</a></p>
        <p>GitHub: <a href="https://github.com/Aatish0049" target="_blank" rel="noreferrer">github.com/Aatish0049</a></p>
      </section>

      <footer className="footer">
        &copy; 2025 Aatish Tiwari. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
