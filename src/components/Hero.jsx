
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Code2,
  Mail,
} from "lucide-react";

import profileImage from "../assets/hero.png";

export default function Hero() {
  const roles = [
    "Python Full Stack Developer",
    "Django Developer",
    "Web Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));

          if (displayText.length === currentRole.length) {
            setTimeout(() => setDeleting(true), 1200);
          }
        } else {
          setDisplayText(currentRole.substring(0, displayText.length - 1));

          if (displayText.length === 0) {
            setDeleting(false);
            setRoleIndex((previous) => (previous + 1) % roles.length);
          }
        }
      },
      deleting ? 45 : 85
    );

    return () => clearTimeout(timeout);
  }, [displayText, deleting, roleIndex]);

  return (
    <section className="hero-section" id="home">
      <div className="hero-background-glow"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <div className="hero-content">
          <div className="hero-availability">
            <span className="availability-dot"></span>
            Available for Opportunities
          </div>

          {/* Heading with compact profile for mobile and tablet */}

          <div className="hero-heading">
            <div className="hero-heading-text">
              <p className="hero-intro">HELLO, I'M</p>

              <h1>
                Chandru <span>M.</span>
              </h1>
            </div>

            <div className="hero-compact-visual">
              <div className="hero-compact-image-frame floating-profile">
                <img
                  src={profileImage}
                  alt="Chandru M - Python Full Stack Developer"
                />
              </div>
            </div>
          </div>

          <h2 className="hero-role">
            {displayText}
            <span className="typing-cursor">|</span>
          </h2>

          <p className="hero-description">
            I build secure, responsive and user-friendly web applications.
            Passionate about Python, Django and modern frontend technologies,
            I enjoy turning ideas into practical digital solutions.
          </p>

          {/* ACTION BUTTONS */}

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              <Code2 size={19} />
              Explore My Work
              <ArrowUpRight size={19} />
            </a>

            <a href="/resume.pdf" download className="resume-button">
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* SOCIAL LINKS */}

          <div className="hero-socials">
            <a
              href="https://github.com/Chandru815"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 1.7 2.62 1.2 3.26.92.1-.72.4-1.2.71-1.47-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>

            <a
              href="https://in.linkedin.com/in/chandru-m-66132b326"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              in
            </a>

            <a
              href="https://leetcode.com/u/Chandru815/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              title="LeetCode"
            >
              <Code2 size={23} />
            </a>

            <a
              href="mailto:mchandru8150@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* DESKTOP PROFILE IMAGE */}

        <div className="hero-visual">
          <div className="hero-image-glow"></div>

          <div className="hero-image-frame floating-profile">
            <img
              src={profileImage}
              alt="Chandru M - Python Full Stack Developer"
            />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}

      <a href="#about" className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={17} />
      </a>
    </section>
  );
}
