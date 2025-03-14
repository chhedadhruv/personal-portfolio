import React, { useEffect } from "react";
import BlogCard from "../components/BlogCard";
import "../styles/Blogs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogIllustration from "../assets/blog-illustration.webp";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const blogs = [
    {
      title: "Revive Your Old Laptop: 5 Lean Operating Systems That Bring New Life to Your Machine",
      description: "Breathe new life into aging hardware with efficient, fast, and user-friendly OS choices.",
      link: "https://medium.com/@dhruvchheda/revive-your-old-laptop-5-lean-operating-systems-that-bring-new-life-to-your-machine-4b8a1a03b184",
      date: "February 22, 2025",
      readTime: "7 min read",
    },
    {
      title: "Create React App Is Dead: What This Means for Developers and What to Use Instead",
      description: "Create React App (CRA) has been officially deprecated, urging developers to transition to more advanced frameworks like Next.js, Vite, and…",
      link: "https://medium.com/@dhruvchheda/create-react-app-is-dead-what-this-means-for-developers-and-what-to-use-instead-6b7fa163a9e6",
      date: "February 15, 2025",
      readTime: "3 min read",
    },
    {
      title: "Getting Started with Firebase: The Ultimate Beginner's Guide",
      description: "Firebase simplifies backend development, allowing developers to focus on building great applications. With just a few lines of code, you…",
      link: "https://medium.com/@dhruvchheda/getting-started-with-firebase-the-ultimate-beginners-guide-121421081558",
      date: "February 14, 2025",
      readTime: "4 min read",
    },
    {
      title: "Building Cross-Platform Apps with React Native: The Ultimate Guide",
      description: "Learn how to build fast, efficient, and beautiful cross-platform mobile apps with React Native. This guide covers everything from…",
      link: "https://medium.com/@dhruvchheda/building-cross-platform-apps-with-react-native-the-ultimate-guide-8aaac6f12c58",
      date: "February 10, 2025",
      readTime: "6 min read",
    },
    {
      title: "Ultimate Guide to Setting Up Your Ubuntu System for Software Development",
      description: "Are you ready to turn your Ubuntu system into a developer's powerhouse? This guide will walk you through all the essential tools…",
      link: "https://medium.com/@dhruvchheda/ultimate-guide-to-setting-up-your-ubuntu-system-for-software-development-4eada57117dc",
      date: "February 8, 2025",
      readTime: "3 min read",
    },
    {
      title: "Ultimate Guide to Setting Up Your MacBook for Software Development",
      description: "Are you ready to transform your MacBook into a developer's paradise? This guide will walk you through all the essential tools, tips, and…",
      link: "https://medium.com/@dhruvchheda/ultimate-guide-to-setting-up-your-macbook-for-software-development-4afcec1ac521",
      date: "January 18, 2025",
      readTime: "4 min read",
    },
    {
      title: "Ultimate Guide to Setting Up Your Windows Machine for Software Development",
      description: "Are you ready to transform your Windows machine into a powerful development workstation? This comprehensive guide will walk you through…",
      link: "https://medium.com/@dhruvchheda/ultimate-guide-to-setting-up-your-windows-machine-for-software-development-4036f4fc17c3",
      date: "January 16, 2025",
      readTime: "3 min read",
    },
    {
      title: "Kickstart Your Developer Journey: A Beginner's Guide to Software Development Success",
      description: "Are you studying computer engineering or aspiring to make a career in software development? It's natural to feel overwhelmed by the…",
      link: "https://medium.com/@dhruvchheda/kickstart-your-developer-journey-a-beginners-guide-to-software-development-success-1d45882d58dd",
      date: "January 14, 2025",
      readTime: "3 min read",
    },
    {
      title: "From Open Source to Building Apps: My Journey as a Developer",
      description: "Hello, and welcome to my corner of the internet!",
      link: "https://medium.com/@dhruvchheda/from-open-source-to-building-apps-my-journey-as-a-developer-4e3b93a1a7bf",
      date: "December 20, 2024",
      readTime: "2 min read",
    }
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="blogs-container">
      <div className="blogs-header" data-aos="fade-up">
        <div className="blogs-text">
          <h1 className="blogs-title">Blog Posts</h1>
          <p className="blogs-description">
            Explore my thoughts and insights on software development, technology, and more.
            I write about my experiences, share knowledge, and discuss the latest trends in tech.
          </p>
        </div>
        <div className="blogs-illustration">
          <img src={BlogIllustration} alt="Blogging illustration" />
        </div>
      </div>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <BlogCard {...blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;