
import {
  BriefcaseBusiness,
  Code2,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import "./Experience.css";

const experiences = [
  {
    number: "01",
    role: "Full Stack Developer – Python",
    company: "Gradtwin Services (OPC) Private Limited",
    period: "July 2026 – October 2026",
    type: "Internship",
    icon: Code2,
    description:
      "Worked on Python full-stack development and independently completed SecureDataSystem, a data protection project focused on secure document management.",
    highlights: [
      "Independently completed the SecureDataSystem project.",
      "Developed the project using Python and Django.",
      "Implemented AES-based data and document protection.",
      "Used MySQL for database management.",
    ],
    featured: true,
  },
  {
    number: "02",
    role: "Frontend Development Intern",
    company: "Greensoft Group of Technology",
    period: "February 2025 · 15 days",
    type: "Internship",
    icon: BriefcaseBusiness,
    description:
      "Gained practical exposure to frontend development, with a focus on building responsive and user-friendly web interfaces.",
    highlights: [
      "Focused on frontend development.",
      "Learned about responsive web interfaces.",
      "Worked on user-friendly interface development.",
    ],
    featured: false,
  },
];

export default function Experience() {
  return (
    <section
      className="experience-section section-padding"
      id="experience"
    >
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">MY JOURNEY</span>
          <h2>
            Work <span>Experience</span>
          </h2>
          <p>
            My professional learning journey through internships
            and hands-on development experience.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience) => {
            const Icon = experience.icon;

            return (
              <article
                className={`experience-card ${
                  experience.featured ? "experience-featured" : ""
                }`}
                key={experience.number}
              >
                <div className="experience-marker">
                  <Icon size={23} />
                </div>

                <div className="experience-card-content">
                  <div className="experience-card-top">
                    <span className="experience-type">
                      {experience.type}
                    </span>
                    <span className="experience-number">
                      {experience.number}
                    </span>
                  </div>

                  <h3>{experience.role}</h3>

                  <h4>{experience.company}</h4>

                  <div className="experience-meta">
                    <span>
                      <CalendarDays size={15} />
                      {experience.period}
                    </span>
                    <span>
                      <MapPin size={15} />
                      Professional Experience
                    </span>
                  </div>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <ul className="experience-highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>
                        <span className="experience-bullet"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {experience.featured && (
                    <div className="experience-project-link">
                      <span>Key Project: SecureDataSystem</span>
                      <ArrowUpRight size={18} />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
