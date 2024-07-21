import React from "react";
import LazyLoad from "react-lazyload";
import Illustration from "../assets/experience.png";
import "../styles/Experience.css";

const internshipsData = [
  {
    id: 1,
    title: "Full Stack React Native Developer Engineer",
    company: "Rapturous Technology Private Limited",
    startDate: "February 15, 2024",
    endDate: "May 15, 2024",
    description: `
      I was a Full Stack React Native Developer Engineer at Rapturous Technology Private Limited in Delhi from February 15, 2024, to May 15, 2024. My role focused on developing and maintaining mobile applications using React Native, collaborating with cross-functional teams to implement new features and ensure optimal performance across various devices. I specialized in writing clean code, debugging technical issues, and integrating APIs and third-party libraries to enhance app functionality.
    `,
  },
  {
    id: 2,
    title: "Winter Internship Program",
    company: "Software Development Cell & REDX-AI Club",
    startDate: "December 2023",
    endDate: "January 2024",
    description:
      "During the winter internship program, I led an insightful session on 'Mobile App Development with React Native.' This session provided practical insights and real-world applications, emphasizing hands-on learning and collaboration with the Computer Engineering department, Software Development Cell, and REDX-AI Club.",
  },
  {
    id: 3,
    title: "Geofencing Internship",
    company: "CASCADE, K.J Somaiya Institute of Technology",
    startDate: "April 10-14, 2023",
    endDate: "May 30 - June 3, 2023",
    description:
      "Internship at CASCADE focusing on Geofencing technology, with hands-on experience in plotting agricultural plots. Demonstrated exceptional performance and practical skills in implementation.",
  },
  {
    id: 4,
    title: "Project Examination Management System",
    company: "Software Development Cell, KJSIT",
    startDate: "March 1 2022",
    endDate: "May 31 2022",
    description:
      "Completed an internship at the Software Development Cell, KJSIT, working on the Project Examination Management System from March 1, 2022, to May 31, 2023, under the guidance of Dr. Shyamal Virnodkar, Prof. Kavita Bathe, and Prof. Mrunali Desai. Achieved Intermediate Proficiency Level in HTML, CSS, JavaScript, .NET Framework, and MS SQL Server, demonstrating diligence, hard work, honesty, and strong technical skills.",
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <div className="experience-text">
          <h2>Experiences</h2>
          <p className="experience-description">
          Explore my diverse internship journey spanning mobile app development, React Native sessions, Geofencing technology, and project management systems. From my role as a Full Stack React Native Developer at Rapturous Technology to leading React Native sessions with the Software Development Cell & REDX-AI Club, each experience showcases my dedication to innovation and collaboration in software development. Discover my hands-on expertise across varied projects at CASCADE, K.J Somaiya Institute of Technology.
          </p>
        </div>
        <div className="experience-illustration">
          <LazyLoad height={200}>
            <img src={Illustration} alt="Experience" />
          </LazyLoad>
        </div>
      </div>
      <div className="internships-section">
        <h3>Internships</h3>
        <div className="timeline">
          {internshipsData.map((internship, index) => (
            <div
              key={internship.id}
              className={`timeline-block ${
                index % 2 === 0 ? "timeline-block-right" : "timeline-block-left"
              }`}
            >
              <div className="marker"></div>
              <div className="timeline-content">
                <h4>{internship.title}</h4>
                <p className="company-name">{internship.company}</p>
                <span>
                  {internship.startDate} - {internship.endDate}
                </span>
                <p>{internship.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
