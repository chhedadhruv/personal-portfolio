import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProjectsIllustration } from "../components/Illustrations";
import SkeletonLoader from "../components/SkeletonLoader";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import BreadcrumbStructuredData from "../components/BreadcrumbStructuredData";
import { seoData } from "../data/seoData";
import "../styles/Project.css";

const projectData = [
  {
    id: 1,
    title: "TrackaExpense - Personal Finance App",
    description:
      "A solo-built, ad-free personal finance app with 126 registered users, published on Google Play. Group splits and settle-up, budgets, recurring transactions, credit-card tracking, receipt OCR with Google Cloud Vision and bank-SMS import, on an offline-first data layer (TanStack Query, MMKV, live Firestore listeners). Backed by 20 Cloud Functions and quality gates with Jest, Firestore rules tests and Maestro end-to-end flows.",
    technologies: ["Expo SDK 58", "React Native", "TypeScript", "Firebase", "TanStack Query", "NativeWind"],
    link: "https://github.com/chhedadhruv/TrackaExpense",
  },
  {
    id: 2,
    title: "Learn Photography - Interactive Lessons",
    description:
      "A static, SEO-friendly site for beginner photographers with 93 Zod-validated MDX lessons, client-side search, JSON-LD and dynamic Open Graph images. Includes an interactive camera simulator built with React Three Fiber on a pure-TypeScript exposure and scoring engine, covered by about 277 Vitest tests.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind", "MDX", "React Three Fiber"],
    link: "https://learn.dhruvchheda.com",
  },
  {
    id: 3,
    title: "create-projex - Project Scaffolding CLI",
    description:
      "A CLI that scaffolds web projects from 7 templates with guided prompts, dry-run mode and deploy presets (Vercel, Netlify, Cloudflare Pages). Every template is build-checked in CI, and post-create hooks run as argv subprocesses rather than through a shell.",
    technologies: ["Node.js", "TypeScript", "Vite", "Astro", "Next.js"],
    link: "https://github.com/chhedadhruv/create-projex",
  },
  {
    id: 4,
    title: "MyTodo - Complete Task Management Ecosystem",
    description:
      "A full-stack task management solution with web, mobile, and API. Features JWT authentication, real-time sync, dark/light themes, and task management with priority levels and due date tracking.",
    technologies: ["React", "React Native", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Nginx"],
    link: "https://github.com/chhedadhruv/myTodo",
  },
  {
    id: 5,
    title: "Quote API",
    description:
      "A REST API for inspirational quotes with advanced search, tag-based filtering, rate limiting, and documentation. Deployed on a personal home server with Docker and a Cloudflare tunnel.",
    technologies: ["Node.js", "Express", "Docker", "Cloudflare", "PostgreSQL"],
    link: "https://github.com/chhedadhruv/inspirational-quotes-api",
  },
  {
    id: 6,
    title: "Quotify - Daily Inspiration App",
    description:
      "A React Native app with 2,127+ quotes, category filtering, home screen widgets and offline support. Works completely offline with instant quote loading on iOS and Android.",
    technologies: ["React Native", "TypeScript", "WidgetKit", "AsyncStorage"],
    link: "https://github.com/chhedadhruv/quotify",
  },
  {
    id: 7,
    title: "TrueYouTeller - Personality Test Platform",
    description:
      "A personality test website that reveals 16 distinct personality types with spirit animals, career insights, and relationship guidance, plus themed mini quizzes.",
    technologies: ["React", "React Router", "Vite", "Firebase"],
    link: "https://github.com/chhedadhruv/trueyouteller",
  },
  {
    id: 8,
    title: "RoboFriends - Interactive Robot Gallery",
    description:
      "A React web app showcasing robot friends with smart search, real-time suggestions, and animated UI. Uses Google Sheets as a data source and Robohash avatars.",
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
      <BreadcrumbStructuredData breadcrumbs={[
        { name: "Home", url: "https://www.dhruvchheda.com/" },
        { name: "Projects", url: "https://www.dhruvchheda.com/projects/" }
      ]} />
      <div className="project-container">
      <div className="project-header">
        <div className="project-text" data-aos="fade-right">
          <h2>My Projects</h2>
          <p className="project-description">
            Production mobile apps, a photography learning site with an interactive camera simulator, and developer tools. The first three are my current featured work; the older projects below show my earlier full-stack range.
          </p>
        </div>
        <div className="project-illustration" data-aos="fade-left">
          <ProjectsIllustration />
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
