import React, { useEffect, useState, useRef } from "react";
import LazyLoad from "react-lazyload";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfilePhoto from "../assets/profile.png";
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
import Resume from "../assets/Dhruv_Chheda_Resume.pdf";
import "../styles/HomeScreen.css";

function HomeScreen() {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    const currentRef = skillsRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <section className="hero">
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
                href="https://www.linkedin.com/in/dhruv-chheda-52637522a/"
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
          <LazyLoad height={200} offset={100} once>
            <img
              src={ProfilePhoto}
              alt="Dhruv Chheda, Web and App Developer"
              className="hero-photo"
            />
          </LazyLoad>
        </div>
      </section>

      <section
        ref={skillsRef}
        className={`skills-section ${isVisible ? "visible" : ""}`}
      >
        <h2 className="skills-title">Skills</h2>
        <div className="skills-category">
          <h3>Web and App Development</h3>
          <div className="skills-list">
            <div className="skill-card">
              <SiHtml5 className="skill-icon" />
              <p>HTML</p>
            </div>
            <div className="skill-card">
              <SiCss3 className="skill-icon" />
              <p>CSS</p>
            </div>
            <div className="skill-card">
              <SiJavascript className="skill-icon" />
              <p>JavaScript</p>
            </div>
            <div className="skill-card">
              <SiReact className="skill-icon" />
              <p>React</p>
            </div>
            <div className="skill-card">
              <SiReact className="skill-icon" />
              <p>React Native</p>
            </div>
            <div className="skill-card">
              <SiDotnet className="skill-icon" />
              <p>.NET</p>
            </div>
            <div className="skill-card">
              <SiMicrosoftsqlserver className="skill-icon" />
              <p>MS SQL Server</p>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Designing Skills</h3>
          <div className="skills-list">
            <div className="skill-card">
              <SiCanva className="skill-icon" />
              <p>Canva</p>
            </div>
            <div className="skill-card">
              <SiFigma className="skill-icon" />
              <p>Figma</p>
            </div>
            <div className="skill-card">
              <SiAdobephotoshop className="skill-icon" />
              <p>Photoshop</p>
            </div>
            <div className="skill-card">
              <SiAdobeillustrator className="skill-icon" />
              <p>Illustrator</p>
            </div>
            <div className="skill-card">
              <SiAdobeaftereffects className="skill-icon" />
              <p>After Effects</p>
            </div>
            <div className="skill-card">
              <SiAdobepremierepro className="skill-icon" />
              <p>Premiere Pro</p>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3>Tools</h3>
          <div className="skills-list">
            <div className="skill-card">
              <SiFirebase className="skill-icon" />
              <p>Firebase</p>
            </div>
            <div className="skill-card">
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
