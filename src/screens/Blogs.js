import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import "../styles/Blogs.css";
import AOS from "aos";
import "aos/dist/aos.css";
// Illustration now loaded from public/illustrations
import SkeletonLoader from "../components/SkeletonLoader";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import { seoData } from "../data/seoData";
import blogsData from "../data/blogs.json";

const Blogs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // Sort blogs by date (newest first)
  const blogs = blogsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (loading) {
    return <SkeletonLoader type="blog" count={6} />;
  }

  return (
    <>
      <SEO {...seoData.blogs} />
      <StructuredData type="blog" data={blogs} />
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
          <img src="/illustrations/blog-illustration.webp" alt="Blogging illustration" />
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
    </>
  );
};

export default Blogs;