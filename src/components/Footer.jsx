
import { ArrowUpRight, Mail, Code2 } from "lucide-react";
import "./Footer.css";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Chandru815/",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://in.linkedin.com/in/chandru-m-66132b326",
    icon: "linkedin",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Chandru815/",
    icon: "leetcode",
  },
];

function SocialIcon({ type }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 1.7 2.62 1.2 3.26.92.1-.72.4-1.2.71-1.47-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V8.98h3.56v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
      </svg>
    );
  }

  return <Code2 size={20} />;
}

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              CHAN<span>.</span>
            </a>

            <p>
              Python Full Stack Developer passionate about
              building secure, responsive and user-friendly
              web applications.
            </p>

            <a
              href="mailto:mchandru8150@gmail.com"
              className="footer-email"
            >
              <Mail size={17} />
              mchandru8150@gmail.com
            </a>
          </div>

          <div className="footer-navigation">
            <h3>Quick Links</h3>

            <div className="footer-links">
              {footerLinks.map((link) => (
                <a href={link.href} key={link.name}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-social">
            <h3>Connect With Me</h3>

            <p>
              Let's connect and explore opportunities
              to build something great.
            </p>

            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a
                  href={social.href}
                  key={social.name}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Chandru M. All rights reserved.
          </p>

          <a href="#home" className="footer-back-top">
            Back to Top
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
