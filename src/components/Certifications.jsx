
import {
  Award,
  CalendarDays,
  ExternalLink,
  FileCheck2,
} from "lucide-react";

import "./Certifications.css";

const certifications = [
    {
    number: "01",
    title: "Internship Experience Certificate",
    organization: "Gradtwin Services (OPC) Private Limited",
    date: "July 2026 – October 2026",
    duration: "4 Months",
    description:
      "Completed an internship in the Full Stack Developer – Python domain.",
    certificate: "/certificates/gradtwin-internship.pdf",
    format: "PDF",
  },
  {
    number: "02",
    title: "Full Stack Development – MasterClass",
    organization: "NoviTech R&D Private Limited",
    date: "January 22 – February 28, 2025",
    duration: "30 Days",
    description:
      "Successfully completed a 30 Days MasterClass in Full Stack Development.",
    certificate: "/certificates/novitech-full-stack.png",
    format: "PNG",
  },

];

export default function Certifications() {
  return (
    <section
      className="certifications-section section-padding"
      id="certifications"
    >
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">MY ACHIEVEMENTS</span>
          <h2>
            Certifications <span>& Training</span>
          </h2>
          <p>
            Professional training and internship credentials
            that reflect my learning journey.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certification) => (
            <article
              className="certification-card"
              key={certification.number}
            >
              <div className="certification-card-top">
                <div className="certification-icon">
                  <Award size={28} />
                </div>

                <span className="certification-number">
                  {certification.number}
                </span>
              </div>

              <span className="certification-label">
                CERTIFICATE OF COMPLETION
              </span>

              <h3>{certification.title}</h3>

              <h4>{certification.organization}</h4>

              <p className="certification-description">
                {certification.description}
              </p>

              <div className="certification-meta">
                <span>
                  <CalendarDays size={16} />
                  {certification.date}
                </span>

                <span>
                  <FileCheck2 size={16} />
                  {certification.duration}
                </span>
              </div>

              <a
                href={certification.certificate}
                target="_blank"
                rel="noreferrer"
                className="certificate-view-button"
              >
                <FileCheck2 size={18} />
                View Certificate
                <ExternalLink size={17} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
