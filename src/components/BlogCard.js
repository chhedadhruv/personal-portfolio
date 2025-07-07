import React from "react";
import "../styles/BlogCard.css";

const BlogCard = ({ title, description, link, date, readTime }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="blog-card"
      aria-label={`Read blog post: ${title}`}
    >
      <div className="blog-card-content">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-description">{description}</p>
        <div className="blog-meta">
          <span className="blog-date" aria-label={`Published on ${formatDate(date)}`}>
            {formatDate(date)}
          </span>
          <span className="blog-read-time" aria-label={`Estimated reading time: ${readTime}`}>
            {readTime}
          </span>
        </div>
      </div>
    </a>
  );
};

export default BlogCard; 