import React from 'react';
import '../styles/LoadingSpinner.css';

const SkeletonLoader = ({ type = 'default', count = 3 }) => {
  const renderCardSkeleton = () => (
    <div className="skeleton-card">
      <div className="skeleton-line medium"></div>
      <div className="skeleton-line short"></div>
      <div className="skeleton-line long"></div>
      <div className="skeleton-line medium"></div>
    </div>
  );

  const renderBlogSkeleton = () => (
    <div className="skeleton-card">
      <div className="skeleton-line long"></div>
      <div className="skeleton-line long"></div>
      <div className="skeleton-line medium"></div>
      <div className="skeleton-line short"></div>
    </div>
  );

  const renderProjectSkeleton = () => (
    <div className="skeleton-card">
      <div className="skeleton-line medium"></div>
      <div className="skeleton-line long"></div>
      <div className="skeleton-line long"></div>
      <div className="skeleton-line short"></div>
    </div>
  );

  const getSkeleton = () => {
    switch (type) {
      case 'blog':
        return renderBlogSkeleton();
      case 'project':
        return renderProjectSkeleton();
      default:
        return renderCardSkeleton();
    }
  };

  return (
    <div className="skeleton-container">
      {Array.from({ length: count }, (_, index) => (
        <div key={index}>
          {getSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader; 