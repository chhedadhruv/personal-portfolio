import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  author = "Dhruv Chheda",
  image = "/dhruv-chheda.webp",
  url = "https://www.dhruvchheda.com",
  type = "website",
  article = false,
  publishedDate,
  modifiedDate,
  tags = [],
  canonicalUrl
}) => {
  const siteTitle = "Dhruv Chheda - Web & App Developer";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const fullImage = image.startsWith('http') ? image : `${url}${image}`;
  const fullCanonicalUrl = canonicalUrl || url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@dhruvchheda_me" />
      <meta name="twitter:site" content="@dhruvchheda_me" />

      {/* Article specific tags */}
      {article && (
        <>
          <meta property="article:author" content={author} />
          {publishedDate && (
            <meta property="article:published_time" content={publishedDate} />
          )}
          {modifiedDate && (
            <meta property="article:modified_time" content={modifiedDate} />
          )}
          {tags.length > 0 && (
            tags.map((tag, index) => (
              <meta key={index} property="article:tag" content={tag} />
            ))
          )}
        </>
      )}

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#000000" />
      
      {/* Structured Data for WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteTitle,
          "url": url,
          "description": description,
          "author": {
            "@type": "Person",
            "name": author
          },
          "publisher": {
            "@type": "Person",
            "name": author
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO; 