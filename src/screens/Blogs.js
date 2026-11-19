import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import "../styles/Blogs.css";
import AOS from "aos";
import "aos/dist/aos.css";
// Illustration now loaded from public/illustrations
import { BlogIllustration } from "../components/Illustrations";
import SkeletonLoader from "../components/SkeletonLoader";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import BreadcrumbStructuredData from "../components/BreadcrumbStructuredData";
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
      <BreadcrumbStructuredData breadcrumbs={[
        { name: "Home", url: "https://www.dhruvchheda.com/" },
        { name: "Blog", url: "https://www.dhruvchheda.com/blogs/" }
      ]} />
      <div className="blogs-container">
      <div className="blogs-header" data-aos="fade-up">
        <div className="blogs-text">
          <h1 className="blogs-title">Blog Posts</h1>
          <p className="blogs-description">
            Articles on mobile and web development, building a camera simulator, self-hosting and
            open source, published on Medium. These are the {blogs.length} posts so far.
          </p>
        </div>
        <div className="blogs-illustration">
          <BlogIllustration />
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