import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
// Error404 illustration now loaded from public/illustrations
import '../styles/NotFound.css';

function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found - 404"
        description="The page you're looking for doesn't exist. Navigate back to Dhruv Chheda's portfolio to explore his work and projects."
        keywords="404, page not found, Dhruv Chheda portfolio"
        canonicalUrl="https://www.dhruvchheda.com/404"
      />
      <div className="notfound-container">
        <div className="notfound-content">
          <div className="notfound-image-container">
            <img className="notfound-image" src="/illustrations/404.webp" alt="404 Not Found" />
          </div>
          <div className="notfound-text">
            <h1 className="notfound-title">Page Not Found</h1>
            <p className="notfound-description">
              Oops! The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
            <div className="notfound-actions">
              <Link to="/" className="btn btn-primary">
                Go Home
              </Link>
              <button 
                onClick={() => window.history.back()} 
                className="btn btn-secondary"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
