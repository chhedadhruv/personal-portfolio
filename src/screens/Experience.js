import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Illustration now loaded from public/illustrations
import { ExperienceIllustration } from "../components/Illustrations";
import SkeletonLoader from "../components/SkeletonLoader";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import BreadcrumbStructuredData from "../components/BreadcrumbStructuredData";
import { seoData } from "../data/seoData";
import "../styles/Experience.css";

const internshipsData = [
  {
    id: 1,
    title: "Software Development Engineer I (Mobile)",
    company: "FOXO",
    startDate: "November 2025",
    endDate: "Present",
    description:
      "Made flows config-driven through a backend table so new content ships without an app release. Migrated API calls from RTK Query to TanStack Query as the single data layer. Automated releases with EAS Build and EAS Submit to TestFlight and the Play internal track, and built background EAS Update (OTA) handling. Reworked Mixpanel events and Sentry error reporting, and added EAS Insights/Observe for launch time and time-to-interactive.",
  },
  {
    id: 2,
    title: "React Native Developer Intern",
    company: "Rapturous Technology Pvt. Ltd.",
    startDate: "February 2024",
    endDate: "May 2024",
    description:
      "Built and deployed Android and iOS apps with React Native, Redux and REST APIs, with secure authentication and unit tests.",
  },
  {
    id: 3,
    title: "Mobile App Developer Intern, Surakshak Women's Safety Platform",
    company: "REDX-AI Club, K.J. Somaiya Institute of Technology",
    startDate: "July 2023",
    endDate: "August 2023",
    description:
      "Co-built a safety platform across four repositories with a team of 7+: an Expo mobile app, a Next.js admin dashboard, a Firebase Cloud Functions backend and a landing site, localized in English, Hindi and Marathi with i18next. Built the release pipeline with GitHub Actions and EAS, where each push picks an OTA update or a native build from the diff across dev, staging and prod variants. Built the Cloud Functions backend (Node 22, TypeScript): a rate-limited public live-tracking API, 1-minute lost-contact detection, daily cleanup jobs, community moderation and push notifications via OneSignal.",
  },
  {
    id: 4,
    title: "Winter Internship Program",
    company: "Software Development Cell & REDX-AI Club",
    startDate: "December 2023",
    endDate: "January 2024",
    description:
      "During the winter internship program, I led an insightful session on 'Mobile App Development with React Native.' This session provided practical insights and real-world applications, emphasizing hands-on learning and collaboration with the Computer Engineering department, Software Development Cell, and REDX-AI Club.",
  },
  {
    id: 5,
    title: "Geofencing Internship",
    company: "CASCADE, K.J Somaiya Institute of Technology",
    startDate: "April 10-14, 2023",
    endDate: "May 30 - June 3, 2023",
    description:
      "Internship at CASCADE focusing on Geofencing technology, with hands-on experience in plotting agricultural plots. Demonstrated exceptional performance and practical skills in implementation.",
  },
  {
    id: 6,
    title: "Project Examination Management System",
    company: "Software Development Cell, KJSIT",
    startDate: "March 1 2022",
    endDate: "May 31 2022",
    description:
      "Completed an internship at the Software Development Cell, KJSIT, working on the Project Examination Management System from March 1, 2022, to May 31, 2022, under the guidance of Dr. Shyamal Virnodkar, Prof. Kavita Bathe, and Prof. Mrunali Desai. Achieved Intermediate Proficiency Level in HTML, CSS, JavaScript, .NET Framework, and MS SQL Server.",
  },
];

const Experience = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SkeletonLoader type="default" count={3} />;
  }

  return (
    <>
      <SEO {...seoData.experience} />
      <StructuredData type="experience" data={internshipsData} />
      <BreadcrumbStructuredData breadcrumbs={[
        { name: "Home", url: "https://www.dhruvchheda.com/" },
        { name: "Experience", url: "https://www.dhruvchheda.com/experience/" }
      ]} />
      <div className="experience-container">
      <div className="experience-header">
        <div className="experience-text" data-aos="fade-right">
          <h2>Experiences</h2>
          <p className="experience-description">
            I work as a mobile engineer on a production React Native (Expo) app, where I focus on
            data-layer migrations, release automation and observability. Before that I interned on
            React Native apps and a women's safety platform, and I ran a React Native session for
            the Software Development Cell and REDX-AI Club.
          </p>
        </div>
        <div className="experience-illustration" data-aos="fade-left">
          <ExperienceIllustration />
        </div>
      </div>
      <div className="internships-section">
        <h3>Work and internships</h3>
        <div className="timeline">
          {internshipsData.map((internship, index) => (
            <div
              key={internship.id}
              className={`timeline-block ${
                index % 2 === 0 ? "timeline-block-right" : "timeline-block-left"
              }`}
              data-aos="fade-up"
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
    </>
  );
};

export default Experience;
