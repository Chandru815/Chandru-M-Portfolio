
import {
  Mail,
  ArrowUpRight,
  Send,
  Code2,
} from "lucide-react";

import "./Contact.css";

const contactMethods = [
  {
    title: "Email",
    value: "mchandru8150@gmail.com",
    description: "Send me an email",
    icon: "email",
    link: "mailto:mchandru8150@gmail.com",
  },
  {
    title: "LinkedIn",
    value: "Connect professionally",
    description: "Let's connect on LinkedIn",
    icon: "linkedin",
    link: "https://in.linkedin.com/in/chandru-m-66132b326",
  },
  {
    title: "GitHub",
    value: "Chandru815",
    description: "Explore my repositories",
    icon: "github",
    link: "https://github.com/Chandru815/",
  },
];

function ContactIcon({ type }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" width="23" height="23" fill="currentColor">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 1.7 2.62 1.2 3.26.92.1-.72.4-1.2.71-1.47-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" width="23" height="23" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V8.98h3.56v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
      </svg>
    );
  }

  return <Mail size={23} />;
}

export default function Contact() {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-eyebrow">GET IN TOUCH</span>
          <h2>
            Let's <span>Connect</span>
          </h2>
          <p>
            Have an opportunity or a project in mind?
            I'd love to hear from you. Let's discuss how
            we can work together.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-message-card">
            <div className="contact-message-icon">
              <Code2 size={30} />
            </div>

            <span className="contact-availability">
              <span className="contact-availability-dot"></span>
              OPEN TO OPPORTUNITIES
            </span>

            <h3>Let's build something meaningful together.</h3>

            <p>
              I'm interested in Python Full Stack Developer
              opportunities, internships and projects where
              I can contribute, learn and grow.
            </p>

            <a
              href="mailto:mchandru8150@gmail.com"
              className="contact-primary-button"
            >
              <Send size={18} />
              Say Hello
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-methods">
            {contactMethods.map((method) => (
              <a
                href={method.link}
                target={method.title === "Email" ? undefined : "_blank"}
                rel={method.title === "Email" ? undefined : "noreferrer"}
                className="contact-method-card"
                key={method.title}
              >
                <div className="contact-method-icon">
                  <ContactIcon type={method.icon} />
                </div>

                <div className="contact-method-info">
                  <h4>{method.title}</h4>
                  <p>{method.value}</p>
                  <span>{method.description}</span>
                </div>

                <ArrowUpRight
                  className="contact-method-arrow"
                  size={20}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
