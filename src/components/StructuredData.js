import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type, data }) => {
  const generatePersonSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dhruv Chheda",
    "jobTitle": "Mobile Engineer",
    "url": "https://www.dhruvchheda.com",
    "image": "https://www.dhruvchheda.com/dhruv-chheda.webp",
    "description": "Mobile engineer with 1+ year shipping production React Native (Expo) apps on iOS and Android, focused on performance, release automation and AI-assisted development.",
    "sameAs": [
      "https://www.linkedin.com/in/dhruv-chheda/",
      "https://www.instagram.com/chheda.dhruv3/",
      "https://x.com/dhruvchheda_me",
      "https://github.com/chhedadhruv"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918097217836",
      "contactType": "Personal",
      "email": "me@dhruvchheda.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  });

  const generateProjectsSchema = (projects) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dhruv Chheda",
    "hasCredential": projects.map(project => ({
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.description,
      "url": project.link,
      "author": {
        "@type": "Person",
        "name": "Dhruv Chheda"
      },
      "keywords": project.technologies.join(', ')
    }))
  });

  const generateExperienceSchema = (experiences) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dhruv Chheda",
    "worksFor": experiences.map(exp => ({
      "@type": "Organization",
      "name": exp.company,
      "description": exp.description
    })),
    "hasOccupation": experiences.map(exp => ({
      "@type": "Occupation",
      "name": exp.title,
      "occupationLocation": {
        "@type": "Place",
        "name": exp.company
      },
      "description": exp.description
    }))
  });

  const generateArticleSchema = (articles) => ({
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Dhruv Chheda's Tech Blog",
    "description": "Articles on building a camera simulator, self-hosting, open source and software development, published on Medium",
    "author": {
      "@type": "Person",
      "name": "Dhruv Chheda"
    },
    "blogPost": articles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.description,
      "url": article.link,
      "datePublished": new Date(article.date).toISOString(),
      "author": {
        "@type": "Person",
        "name": "Dhruv Chheda"
      },
      "publisher": {
        "@type": "Person",
        "name": "Dhruv Chheda"
      }
    }))
  });

  const generateEducationSchema = (educations) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dhruv Chheda",
    "alumniOf": educations.map(edu => ({
      "@type": "EducationalOrganization",
      "name": edu.institution,
      "description": `${edu.degree} from ${edu.institution}`
    }))
  });

  const getSchemaByType = () => {
    switch (type) {
      case 'person':
        return generatePersonSchema();
      case 'projects':
        return generateProjectsSchema(data);
      case 'experience':
        return generateExperienceSchema(data);
      case 'blog':
        return generateArticleSchema(data);
      case 'education':
        return generateEducationSchema(data);
      default:
        return generatePersonSchema();
    }
  };

  const schema = getSchemaByType();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData; 