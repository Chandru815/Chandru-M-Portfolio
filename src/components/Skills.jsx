
import {
  Code2,
  Server,
  Monitor,
  Database,
  GitBranch,
  Globe,
} from "lucide-react";

import "./Skills.css";

const skillGroups = [
  {
    title: "Programming Languages",
    description: "Languages I use to build application logic.",
    icon: Code2,
    skills: [
      { name: "Python", level: "Core" },
      { name: "JavaScript", level: "Core" },
    ],
  },
  {
    title: "Backend Development",
    description: "Building server-side applications and APIs.",
    icon: Server,
    skills: [
      { name: "Django", level: "Core" },
      { name: "REST API", level: "Core" },
    ],
  },
  {
    title: "Frontend Development",
    description: "Creating responsive and user-friendly interfaces.",
    icon: Monitor,
    skills: [
      { name: "HTML5", level: "Core" },
      { name: "CSS3", level: "Core" },
      { name: "Bootstrap", level: "Core" },
      { name: "Tailwind CSS", level: "Core" },
      { name: "React.js", level: "Familiar" },
    ],
  },
  {
    title: "Database & Tools",
    description: "Managing data and development workflows.",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Core" },
      { name: "MongoDB", level: "Familiar" },
      { name: "Git", level: "Core" },
      { name: "GitHub", level: "Core" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section section-padding" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-eyebrow">WHAT I WORK WITH</span>

          <h2>
            My <span>Skills</span>
          </h2>

          <p>
            Technologies and tools I use to build web applications
            and practical digital solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={25} />
                  </div>

                  <span className="skill-card-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{group.title}</h3>

                <p className="skill-description">
                  {group.description}
                </p>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span
                      className={`skill-tag ${
                        skill.level === "Familiar"
                          ? "skill-familiar"
                          : ""
                      }`}
                      key={skill.name}
                    >
                      {skill.name}

                      {skill.level === "Familiar" && (
                        <small>Familiar</small>
                      )}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="skills-bottom">
          <div className="skills-bottom-icon">
            <Globe size={22} />
          </div>

          <div>
            <h4>Always Learning, Always Building</h4>
            <p>
              Continuously improving my development skills through
              hands-on projects and learning new technologies.
            </p>
          </div>

          <GitBranch className="skills-bottom-decoration" size={30} />
        </div>

      </div>
    </section>
  );
}
