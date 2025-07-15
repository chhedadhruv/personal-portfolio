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
    title: "TrackaExpense - Personal Finance Manager",
    description:
      "A comprehensive, ad-free personal finance app built with React Native and Firebase. Features expense tracking, income management, savings goals, bill splitting, and graphical insights.",
    technologies: ["React Native", "Firebase", "React Navigation", "Chart Kit"],
    link: "https://github.com/chhedadhruv/TrackaExpense",
  },
  {
    id: 2,
    title: "MyTodo - Complete Task Management Ecosystem",
    description:
      "A modern, full-stack task management solution with web, mobile, and API. Features JWT authentication, real-time sync, dark/light themes, and comprehensive task management with priority levels and due date tracking.",
    technologies: ["React", "React Native", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Nginx"],
    link: "https://github.com/chhedadhruv/myTodo",
  },
  {
    id: 3,
    title: "Quotify - Daily Inspiration App",
    description:
      "A beautiful React Native app with 2,127+ inspiring quotes, smart category filtering, home screen widgets, and elegant design. Works completely offline with instant quote loading and cross-platform support.",
    technologies: ["React Native", "TypeScript", "WidgetKit", "AsyncStorage"],
    link: "https://github.com/chhedadhruv/quotify",
  },
  {
    id: 4,
    title: "Quote API",
    description:
      "A modern, secure REST API for inspirational quotes with advanced search, tag-based filtering, rate limiting, and comprehensive documentation. Deployed on personal home server with Docker and Cloudflare tunnel integration.",
    technologies: ["Node.js", "Express", "Docker", "Cloudflare", "PostgreSQL"],
    link: "https://github.com/chhedadhruv/inspirational-quotes-api",
  },
  {
    id: 5,
    title: "TrueYouTeller - Personality Test Platform",
    description:
      "A delightful personality test website that reveals 16 distinct personality types with spirit animals, career insights, and relationship guidance. Features mini-games and comprehensive personality analysis.",
    technologies: ["React", "Vite", "Firebase", "TypeScript"],
    link: "https://github.com/chhedadhruv/trueyouteller",
  },
  {
    id: 6,
    title: "RoboFriends - Interactive Robot Gallery",
    description:
      "A modern React web application showcasing unique robot friends with smart search capabilities, real-time suggestions, and beautiful UI animations. Features Google Sheets integration and Robohash avatars.",
    technologies: ["React", "React Bootstrap", "Google Sheets API", "Robohash"],
    link: "https://github.com/chhedadhruv/Robofriends",
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
            Explore my diverse portfolio of full-stack applications, mobile apps, and APIs 
            built with modern technologies. From complete task management ecosystems to 
            personality testing platforms, each project showcases my expertise in creating 
            scalable, user-friendly solutions across web, mobile, and backend development.
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
