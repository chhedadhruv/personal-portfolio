import React, { useEffect, useState, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  SiReact,
  SiExpo,
  SiTypescript,
  SiReactquery,
  SiRedux,
  SiZod,
  SiTailwindcss,
  SiNextdotjs,
  SiThreedotjs,
  SiMdx,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPython,
  SiJest,
  SiVitest,
  SiGithubactions,
  SiSentry,
  SiMixpanel,
  SiDocker,
  SiNginx,
  SiAnthropic,
} from "react-icons/si";
import { FaMobileAlt, FaBell, FaRobot, FaBolt, FaFlask } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from "../assets/Dhruv_Chheda_Resume.pdf";
import SEO from "../components/SEO";
import { seoData } from "../data/seoData";
import "../styles/HomeScreen.css";

const skillGroups = [
  {
    title: "Mobile",
    skills: [
      { name: "React Native", Icon: SiReact },
      { name: "Expo", Icon: SiExpo },
      { name: "EAS Build/Submit/Update", Icon: FaMobileAlt },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "TanStack Query", Icon: SiReactquery },
      { name: "Zustand", Icon: FaBolt },
      { name: "Redux", Icon: SiRedux },
      { name: "NativeWind", Icon: SiTailwindcss },
      { name: "Zod", Icon: SiZod },
    ],
  },
  {
    title: "Web",
    skills: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "MDX", Icon: SiMdx },
      { name: "React Three Fiber", Icon: SiThreedotjs },
    ],
  },
  {
    title: "Backend and Data",
    skills: [
      { name: "Firebase", Icon: SiFirebase },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Python", Icon: SiPython },
    ],
  },
  {
    title: "Quality and Release",
    skills: [
      { name: "Jest", Icon: SiJest },
      { name: "Vitest", Icon: SiVitest },
      { name: "Maestro", Icon: FaFlask },
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "Sentry", Icon: SiSentry },
      { name: "Mixpanel", Icon: SiMixpanel },
      { name: "OneSignal", Icon: FaBell },
    ],
  },
  {
    title: "Infra and AI Tools",
    skills: [
      { name: "Docker", Icon: SiDocker },
      { name: "Nginx", Icon: SiNginx },
      { name: "Claude Code", Icon: SiAnthropic },
      { name: "On-device LLMs (Gemma, Qwen)", Icon: FaRobot },
    ],
  },
];

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
              <h2 className="hero-subtitle">Mobile Engineer | React Native and Expo</h2>
            <p className="hero-description">
              I build production React Native (Expo) apps for iOS and Android, with 1+ year of
              shipping experience. I focus on performance, release automation and AI-assisted
              development, and I'm currently learning agentic AI.
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
            alt="Dhruv Chheda, Mobile Engineer"
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
        {skillGroups.map((group) => (
          <div className="skills-category" data-aos="fade-up" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skills-list" role="list">
              {group.skills.map(({ name, Icon }) => (
                <div className="skill-card" data-aos="flip-left" role="listitem" key={name}>
                  <Icon className="skill-icon" />
                  <p>{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      </main>
    </>
  );
}

export default HomeScreen;
