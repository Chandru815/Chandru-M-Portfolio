
import {
  UserRound,
  GraduationCap,
  Code2,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building responsive web applications with Python, Django and modern frontend technologies.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Practical Experience",
    description: "Hands-on development experience through internships and independent project work.",
  },
  {
    icon: GraduationCap,
    title: "IT Graduate",
    description: "B.Tech in Information Technology from JJ College of Engineering and Technology.",
  },
];

export default function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">GET TO KNOW ME</span>
          <h2>About <span>Me</span></h2>
          <p>A little about my journey, experience and passion for technology.</p>
        </div>

        <div className="about-layout">
          <div className="about-main">
            <div className="about-icon">
              <UserRound size={28} />
            </div>

            <h3>Turning ideas into digital solutions.</h3>

            <p>
              I'm Chandru M, a B.Tech Information Technology graduate
              passionate about developing secure, responsive and user-friendly
              web applications.
            </p>

            <p>
              I work with Python, Django, MySQL, JavaScript and modern
              frontend technologies. Through internships and personal
              projects, I've gained practical experience in building
              database-driven applications, developing backend functionality
              and creating clean user interfaces.
            </p>

            <p>
              I enjoy learning new technologies, solving real-world problems
              and continuously improving my development skills. My goal is
              to grow as a Python Full Stack Developer and contribute to
              meaningful software projects.
            </p>

            <a
              href="https://github.com/Chandru815"
              target="_blank"
              rel="noreferrer"
              className="about-link"
            >
              Explore my GitHub <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="about-highlights">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="about-highlight-card" key={item.title}>
                  <div className="highlight-icon">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
