
import {
  ShieldCheck,
  BrainCircuit,
  CloudSun,
  BookOpen,
  Utensils,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "SecureDataSystem",
    category: "Full Stack Development",
    description:
      "A secure document management system that protects sensitive files using AES encryption, with user authentication and document upload, download and decryption features.",
    technologies: ["Python", "Django", "MySQL", "AES", "HTML", "CSS", "JavaScript"],
    icon: ShieldCheck,
    featured: true,
    liveUrl: null,
  },
  {
    number: "02",
    title: "Traffic Violation Prediction and Recognition",
    category: "Academic Project",
    description:
      "A final-year project focused on identifying and recognizing traffic violations using deep learning and computer vision techniques.",
    technologies: ["Python", "Deep Learning", "CNN", "Computer Vision"],
    icon: BrainCircuit,
    featured: false,
    liveUrl: null,
  },
  {
    number: "03",
    title: "SkyCast",
    category: "Weather Application",
    description:
      "A weather application that presents weather information through a clean and user-friendly interface.",
    technologies: ["Weather App", "Frontend Development"],
    icon: CloudSun,
    featured: false,
    liveUrl: "https://sky-cast-psi-teal.vercel.app/",
  },
  {
    number: "04",
    title: "StorySpace",
    category: "Web Development",
    description:
      " Every story has a place."+
        " A story-reading website designed to provide a simple and engaging experience for browsing and reading stories.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: BookOpen,
    featured: false,
    liveUrl: "https://chandru815.github.io/StorySpace/",
  },
  {
    number: "05",
    title: "LOS POLLOS HERMANOS",
    category: "Restaurant Website",
    description:
      "A restaurant website featuring a themed design and an engaging interface for visitors.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: Utensils,
    featured: false,
    liveUrl: "https://chandru815.github.io/Los-Pollos-Hermanos/",
  },
];

export default function Projects() {
  return (
    <section className="projects-section section-padding" id="projects">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">MY RECENT WORK</span>
          <h2>
            Featured <span>Projects</span>
          </h2>
          <p>
            A selection of projects that reflect my learning,
            problem-solving and development experience.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                className={`project-card ${project.featured ? "project-featured" : ""}`}
                key={project.number}
              >
                <div className="project-card-top">
                  <div className="project-icon">
                    <Icon size={29} strokeWidth={1.7} />
                  </div>
                  <span className="project-number">{project.number}</span>
                </div>

                <span className="project-category">{project.category}</span>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span className="project-tech-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      View Live Project
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="project-status">
                      {project.number === "01"
                        ? "Backend Project"
                        : "Academic Project"}
                    </span>
                  )}

                  <ArrowUpRight className="project-arrow" size={21} />
                </div>
              </article>
            );
          })}
        </div>

        <div className="projects-github">
          <div>
            <h3>Want to see more of my work?</h3>
            <p>
              Explore my repositories and development projects on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/Chandru815/"
            target="_blank"
            rel="noreferrer"
            className="github-project-button"
          >
            <svg
              viewBox="0 0 24 24"
              width="19"
              height="19"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 1.7 2.62 1.2 3.26.92.1-.72.4-1.2.71-1.47-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
            </svg>
            Visit GitHub
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
