import React from "react";
import LazyLoad from "react-lazyload";
import TicTacToe from "../assets/projects/tictactoe.jpeg";
import Tracka from "../assets/projects/tracka.png";
import Resume from "../assets/projects/resume.png";
import Todo from "../assets/projects/todo.png";
import Quote from "../assets/projects/quote.png";
import "../styles/Project.css";

const projectData = [
  {
    id: 1,
    title: "RoboFriends",
    description: "RoboFriends is a React web application that allows users to search for robots and generate unique robot cards. It fetches data from Google Sheets and uses Robohash to create personalized robot images.",
    technologies: ["React", "React Bootstrap", "Robohash"],
    image: `https://robohash.org/1?set=set3`,
    link: "https://github.com/chhedadhruv/Robofriends",
  },
  {
    id: 2,
    title: "Tic Tac Toe Game",
    description: "Classic Tic Tac Toe game built with React. This real-time web application features an intuitive interface for two-player gameplay and demonstrates my React skills.",
    technologies: ["React"],
    image: TicTacToe,
    link: "https://github.com/chhedadhruv/TicTacToe",
  },
  {
    id: 3,
    title: "Expense Tracking App",
    description: "TrackaExpense is a React Native and Firebase-based expense tracking application. It offers graphical insights, expense tracking, and a split function to manage shared costs efficiently.",
    technologies: ["React Native", "Firebase"],
    image: Tracka,
    link: "https://github.com/chhedadhruv/TrackaExpense",
  },
  {
    id: 4,
    title: "Resume Maker",
    description: "SkillFlex is a resume builder that allows users to create professional resumes with customizable sections and stylish templates. Built with React, Firebase, and React Bootstrap, it offers secure and user-friendly resume creation.",
    technologies: ["React", "Firebase", "React Bootstrap"],
    image: Resume,
    link: "https://github.com/chhedadhruv/Resume-Maker",
  },
  {
    id: 5,
    title: "Todo App",
    description: "Todo is a React Native and Firebase-powered task management application. It features real-time task updates and a clean interface to manage tasks efficiently across devices.",
    technologies: ["React Native", "Firebase"],
    image: Todo,
    link: "https://github.com/chhedadhruv/my_todo_app",
  },
  {
    id: 6,
    title: "Random Quote Generator",
    description: "This React Native app generates inspirational quotes fetched from an API. It includes features like text-to-speech, copy-to-clipboard, and tweet functionalities for a seamless user experience.",
    technologies: ["React Native"],
    image: Quote,
    link: "https://github.com/chhedadhruv/Random-Quote-Generator",
  },
];

const Projects = () => {
  return (
    <div className="project-page">
      <header className="project-header">
        <h1>My Projects</h1>
        <p>Explore my diverse projects showcasing expertise in web and app development using modern technologies.</p>
      </header>
      <section className="project-grid">
        {projectData.map((project) => (
          <article className="project-card" key={project.id}>
            <LazyLoad height={200} offset={100} once>
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="project-image"
              />
            </LazyLoad>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
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
  );
};

export default Projects;
