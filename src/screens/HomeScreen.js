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
} from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from "../assets/Dhruv_Chheda_Resume.pdf";
import "../styles/HomeScreen.css";

function HomeScreen() {
  const skillsRef = useRef(null);
  const isVisible = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <section className="hero" data-aos="fade-up">
        <div className="hero-content">
          <div className="info">
            <h1 className="hero-title">Dhruv Chheda</h1>
            <h2 className="hero-subtitle">Web & App Developer</h2>
            <p className="hero-description">
              I’m a skilled web and app developer specializing in JavaScript,
              React, React Native, .NET, and MS SQL Server. I create responsive,
              high-performance applications with a focus on user-friendly
              solutions. My expertise includes the latest technologies and best
              practices in web and app development.
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
            alt="Dhruv Chheda, Web and App Developer"
            className="hero-photo"
          />
        </div>
      </section>

      <section
        ref={skillsRef}
        className={`skills-section ${isVisible ? "visible" : ""}`}
        data-aos="fade-up"
      >
        <h2 className="skills-title">Skills</h2>
        <div className="skills-category" data-aos="fade-up">
          <h3>Web and App Development</h3>
          <div className="skills-list">
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
              <SiReact className="skill-icon" />
              <p>React</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiReact className="skill-icon" />
              <p>React Native</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiDotnet className="skill-icon" />
              <p>.NET</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiMicrosoftsqlserver className="skill-icon" />
              <p>MS SQL Server</p>
            </div>
          </div>
        </div>

        <div className="skills-category" data-aos="fade-up">
          <h3>Designing Skills</h3>
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

        <div className="skills-category" data-aos="fade-up">
          <h3>Tools</h3>
          <div className="skills-list">
            <div className="skill-card" data-aos="flip-left">
              <SiFirebase className="skill-icon" />
              <p>Firebase</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiGit className="skill-icon" />
              <p>Git</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeScreen;
