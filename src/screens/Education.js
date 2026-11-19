import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Illustration now loaded from public/illustrations
import { EducationIllustration } from "../components/Illustrations";
import SkeletonLoader from "../components/SkeletonLoader";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import BreadcrumbStructuredData from "../components/BreadcrumbStructuredData";
import { seoData } from "../data/seoData";
import "../styles/Education.css";

const educationData = [
  {
    id: 1,
    institution: "K.J Somaiya Institute Of Technology",
    degree: "B.Tech in Computer Engineering",
    startYear: 2021,
    endYear: 2025,
  },
  {
    id: 2,
    institution: "Pace Junior Science College",
    degree: "HSC Science",
    startYear: 2019,
    endYear: 2021,
  },
  {
    id: 3,
    institution: "Sou A.K Joshi English Medium School",
    degree: "SSC",
    startYear: 2009,
    endYear: 2019,
  },
];

const activitiesData = [
  {
    id: 1,
    title: "Web Expert, REDX-AI Club",
    description:
      "As a Web Expert with REDX-AI Club, I played a pivotal role in driving growth and development through strategic organization of workshops, webinars, and hackathons focused on Artificial Intelligence, Machine Learning, and Data Science. Leveraging collaboration with industry leaders, I mentored students to cultivate a dynamic environment of innovation and continuous learning.",
  },
  {
    id: 2,
    title: "Certificate of Selection, Aavishkar 2023-24",
    description:
      "Acknowledged for exceptional participation in the final round of 'Aavishkar 2023-24', a prestigious national-level technical event organized by Aavishkar. Engaged in diverse technical competitions, workshops, and hackathons, fostering innovation and collaborative learning opportunities among peers.",
  },
  {
    id: 3,
    title: "Content Creator, GDSC KJSIT",
    description:
      "Served as the Content Creator for Google Developer Student Clubs (GDSC) at K. J. Somaiya Institute of Technology, driving initiatives to boost digital presence, strengthen brand resonance, and foster community engagement. Through strategic social media management, impactful visual design, and the creation of compelling video content, I significantly amplified GDSC's influence and outreach.",
  },
  {
    id: 4,
    title: "Digital and Cinematography Head, Students' Council, KJSIT",
    description:
      "Led the Digital Media and Cinematography initiatives as the Head of the KJSIT Students' Council. Directed the creation of visually compelling content and integrated multimedia elements for the 'Surge Cultural Fest' and 'Score Sports Fest', elevating event experiences.",
  },
];

const EducationCards = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonLoader type="default" count={7} />;
  }

  return (
    <>
      <SEO {...seoData.education} />
      <StructuredData type="education" data={educationData} />
      <BreadcrumbStructuredData breadcrumbs={[
        { name: "Home", url: "https://www.dhruvchheda.com/" },
        { name: "Education", url: "https://www.dhruvchheda.com/education/" }
      ]} />
      <div className="education-container">
      <div className="education-header">
        <div className="education-text" data-aos="fade-right">
          <h2>Education</h2>
          <p className="education-description">
            I completed a B.Tech in Computer Engineering at K.J. Somaiya Institute of Technology
            (2021 to 2025), alongside activities in the REDX-AI Club, GDSC and the Students' Council.
          </p>
        </div>
        <div className="education-illustration" data-aos="fade-left">
          <EducationIllustration />
        </div>
      </div>

      <section className="education-section">
        <h3>Academic Background</h3>
        <div className="cards-container">
          {educationData.map((edu) => (
            <div key={edu.id} className="card" data-aos="fade-up">
              <div className="card-info">
                <h4 className="card-title">{edu.institution}</h4>
                <p className="card-degree">{edu.degree}</p>
                <p className="card-years">
                  {edu.startYear} - {edu.endYear}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="activities-section">
        <h3>Co-Curricular Activities</h3>
        <div className="cards-container">
          {activitiesData.map((activity) => (
            <div key={activity.id} className="card" data-aos="fade-up">
              <div className="card-info">
                <h4 className="card-title">{activity.title}</h4>
                <p className="card-description">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default EducationCards;
