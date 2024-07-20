import React from "react";
import School from "../assets/education/school.jpeg";
import College from "../assets/education/college.jpg";
import University from "../assets/education/university.jpeg";
import GDSC from "../assets/education/gdsc.jpeg";
import StudentCouncil from "../assets/education/council.jpeg";
import REDXAIClub from "../assets/education/redx.png";
import Aavishkar from "../assets/education/aavishkar.jpg";
import "../styles/Education.css";

const educationData = [
  {
    id: 1,
    institution: "K.J Somaiya Institute Of Technology",
    image: University,
    startYear: 2021,
    endYear: "Present",
  },
  {
    id: 2,
    institution: "Pace Junior Science College",
    image: College,
    startYear: 2019,
    endYear: 2021,
  },
  {
    id: 3,
    institution: "Sou A.K Joshi English Medium School",
    image: School,
    startYear: 2009,
    endYear: 2019,
  },
];

const activitiesData = [
  {
    id: 1,
    title: "Web Expert, REDX-AI Club",
    image: REDXAIClub,
    description:
      "As a Web Expert with REDX-AI Club, I played a pivotal role in driving growth and development through strategic organization of workshops, webinars, and hackathons focused on Artificial Intelligence, Machine Learning, and Data Science. Leveraging collaboration with industry leaders, I mentored students to cultivate a dynamic environment of innovation and continuous learning.",
    link: "https://redxai.club",
  },
  // {
  //   id: 2,
  //   title: "Conducted a Session on Mobile App Development",
  //   image: REDXAIClub,
  //   description:
  //     'During the winter internship program, I led an insightful session on "Mobile App Development with React Native." This session provided practical insights and real-world applications, emphasizing hands-on learning and collaboration with the Computer Engineering department, Software Development Cell, and REDX-AI Club.',
  //   link: "https://developers.google.com/community/dsc",
  // },
  {
    id: 2,
    title: "Certificate of Selection, Aavishkar 2023-24",
    image: Aavishkar,
    description:
      "Acknowledged for exceptional participation in the final round of 'Aavishkar 2023-24', a prestigious national-level technical event organized by Aavishkar. Engaged in diverse technical competitions, workshops, and hackathons, fostering innovation and collaborative learning opportunities among peers.",
    link: "https://developers.google.com/community/dsc",
  },
  {
    id: 3,
    title: "Content Creator, GDSC KJSIT",
    image: GDSC,
    description:
      "Served as the Content Creator for Google Developer Student Clubs (GDSC) at K. J. Somaiya Institute of Technology, driving initiatives to boost digital presence, strengthen brand resonance, and foster community engagement. Through strategic social media management, impactful visual design, and the creation of compelling video content, I significantly amplified GDSC's influence and outreach.",
    link: "https://redxai.club",
  },
  {
    id: 4,
    title: "Digital and Cinematography Head, Students' Council, KJSIT",
    image: StudentCouncil,
    description:
      "Led the Digital Media and Cinematography initiatives as the Head of the KJSIT Students' Council. Directed the creation of visually compelling content and integrated multimedia elements for the 'Surge Cultural Fest' and 'Score Sports Fest', elevating event experiences.",
    link: "https://studentscouncil.com",
  },
];

const EducationCards = () => {
  return (
    <div className="education-page">
      <section className="education-section">
        <h2>Education</h2>
        <div className="cards-container">
          {educationData.map((edu) => (
            <div key={edu.id} className="card">
              <img src={edu.image} alt={edu.institution} />
              <div className="card-info">
                <h3 className="card-title">{edu.institution}</h3>
                <p className="card-years">
                  {edu.startYear} - {edu.endYear}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="activities-section">
        <h2>Co-Curricular Activities</h2>
        <div className="cards-container">
          {activitiesData.map((activity) => (
            <div
              key={activity.id}
              className="card"
            >
              <img src={activity.image} alt={activity.title} />
              <div className="card-info">
                <h3 className="card-title">{activity.title}</h3>
                <p className="card-description">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationCards;
