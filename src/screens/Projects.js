import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Illustration now loaded from public/illustrations
import SkeletonLoader from "../components/SkeletonLoader";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import { seoData } from "../data/seoData";
import "../styles/Project.css";

const projectData = [
  {
    id: 1,
    title: "RoboFriends",
    description:
      "RoboFriends is a React web application that allows users to search for robots and generate unique robot cards. It fetches data from Google Sheets and uses Robohash to create personalized robot images.",
    technologies: ["React", "React Bootstrap", "Robohash"],
    link: "https://github.com/chhedadhruv/Robofriends",
  },
  {
    id: 2,
    title: "Tic Tac Toe Game",
    description:
      "Classic Tic Tac Toe game built with React. This real-time web application features an intuitive interface for two-player gameplay and demonstrates my React skills.",
    technologies: ["React"],
    link: "https://github.com/chhedadhruv/TicTacToe",
  },
  {
    id: 3,
    title: "Expense Tracking App",
    description:
      "TrackaExpense is a React Native and Firebase-based expense tracking application. It offers graphical insights, expense tracking, and a split function to manage shared costs efficiently.",
    technologies: ["React Native", "Firebase"],
    link: "https://github.com/chhedadhruv/TrackaExpense",
  },
  {
    id: 4,
    title: "Resume Maker",
    description:
      "SkillFlex is a resume builder that allows users to create professional resumes with customizable sections and stylish templates. Built with React, Firebase, and React Bootstrap, it offers secure and user-friendly resume creation.",
    technologies: ["React", "Firebase", "React Bootstrap"],
    link: "https://github.com/chhedadhruv/Resume-Maker",
  },
  {
    id: 5,
    title: "Todo App",
    description:
      "Todo is a React Native and Firebase-powered task management application. It features real-time task updates and a clean interface to manage tasks efficiently across devices.",
    technologies: ["React Native", "Firebase"],
    link: "https://github.com/chhedadhruv/my_todo_app",
  },
  {
    id: 6,
    title: "Random Quote Generator",
    description:
      "This React Native app generates inspirational quotes fetched from an API. It includes features like text-to-speech, copy-to-clipboard, and tweet functionalities for a seamless user experience.",
    technologies: ["React Native"],
    link: "https://github.com/chhedadhruv/Random-Quote-Generator",
  },
];

const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonLoader type="project" count={6} />;
  }

  return (
    <>
      <SEO {...seoData.projects} />
      <StructuredData type="projects" data={projectData} />
      <div className="project-container">
      <div className="project-header">
        <div className="project-text" data-aos="fade-right">
          <h2>My Projects</h2>
          <p className="project-description">
            Explore my diverse projects showcasing expertise in web and app
            development using modern technologies. Each project demonstrates
            my commitment to creating innovative solutions and leveraging
            cutting-edge frameworks to deliver exceptional user experiences.
          </p>
        </div>
        <div className="project-illustration" data-aos="fade-left">
          <img src="/illustrations/projects-illustration.webp" alt="Projects" />
        </div>
      </div>

      <section className="project-grid">
        {projectData.map((project) => (
          <article className="project-card" key={project.id} data-aos="fade-up">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <li key={index} className={`tech-item tech-item-${index}`}>
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
    </>
  );
};

export default Projects;
