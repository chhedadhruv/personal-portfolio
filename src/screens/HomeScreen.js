import React, { useEffect, useState, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiCanva,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiFirebase,
  SiGit,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiVite,
  SiNginx,
} from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from "../assets/Dhruv_Chheda_Resume.pdf";
import SEO from "../components/SEO";
import { seoData } from "../data/seoData";
import "../styles/HomeScreen.css";

function HomeScreen() {
  const skillsRef = useRef(null);
  const isVisible = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <SEO {...seoData.home} />
      <main>
        <section className="hero" data-aos="fade-up">
          <div className="hero-content">
            <div className="info">
              <h1 className="hero-title">Dhruv Chheda</h1>
              <h2 className="hero-subtitle">Full-Stack Developer & Mobile App Creator</h2>
            <p className="hero-description">
              I'm a passionate full-stack developer specializing in modern web applications, 
              cross-platform mobile apps, and scalable backend systems. With expertise in 
              React, React Native, Node.js, and cloud technologies, I create comprehensive 
              solutions with clean code and modern best practices.
            </p>

            <div className="social-media">
              <a
                href="https://www.linkedin.com/in/dhruv-chheda/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn Profile"
              >
                <FaLinkedin aria-label="LinkedIn" />
              </a>
              <a
                href="https://github.com/chhedadhruv"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub Profile"
              >
                <FaGithub aria-label="GitHub" />
              </a>
              <a
                href="mailto:me@dhruvchheda.com"
                className="social-link"
                title="Send Email"
              >
                <FaEnvelope aria-label="Email" />
              </a>
            </div>
            <a
              href={Resume}
              download
              className="download-resume"
              title="Download Resume"
            >
              Download Resume
            </a>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/dhruv-chheda.webp`}
            alt="Dhruv Chheda, Full-Stack Developer and Mobile App Creator"
            className="hero-photo"
          />
        </div>
      </section>

      <section
        ref={skillsRef}
        className={`skills-section ${isVisible ? "visible" : ""}`}
        data-aos="fade-up"
        aria-label="Technical Skills"
      >
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-category" data-aos="fade-up">
          <h3>Frontend Development</h3>
          <div className="skills-list" role="list">
            <div className="skill-card" data-aos="flip-left">
              <SiHtml5 className="skill-icon" />
              <p>HTML</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiCss3 className="skill-icon" />
              <p>CSS</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiJavascript className="skill-icon" />
              <p>JavaScript</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiTypescript className="skill-icon" />
              <p>TypeScript</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiReact className="skill-icon" />
              <p>React</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiReact className="skill-icon" />
              <p>React Native</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiVite className="skill-icon" />
              <p>Vite</p>
            </div>
          </div>
        </div>

        <div className="skills-category" data-aos="fade-up">
          <h3>Backend & Database</h3>
          <div className="skills-list">
            <div className="skill-card" data-aos="flip-left">
              <SiNodedotjs className="skill-icon" />
              <p>Node.js</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiDotnet className="skill-icon" />
              <p>.NET</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiPostgresql className="skill-icon" />
              <p>PostgreSQL</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiMicrosoftsqlserver className="skill-icon" />
              <p>MS SQL Server</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiFirebase className="skill-icon" />
              <p>Firebase</p>
            </div>
          </div>
        </div>

        <div className="skills-category" data-aos="fade-up">
          <h3>DevOps & Deployment</h3>
          <div className="skills-list">
            <div className="skill-card" data-aos="flip-left">
              <SiDocker className="skill-icon" />
              <p>Docker</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiNginx className="skill-icon" />
              <p>Nginx</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiGit className="skill-icon" />
              <p>Git</p>
            </div>
          </div>
        </div>

        <div className="skills-category" data-aos="fade-up">
          <h3>Design & Creative Tools</h3>
          <div className="skills-list">
            <div className="skill-card" data-aos="flip-left">
              <SiCanva className="skill-icon" />
              <p>Canva</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiFigma className="skill-icon" />
              <p>Figma</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiAdobephotoshop className="skill-icon" />
              <p>Photoshop</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiAdobeillustrator className="skill-icon" />
              <p>Illustrator</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiAdobeaftereffects className="skill-icon" />
              <p>After Effects</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiAdobepremierepro className="skill-icon" />
              <p>Premiere Pro</p>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}

export default HomeScreen;
