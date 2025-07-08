export const seoData = {
  home: {
    title: "Home",
    description: "Dhruv Chheda: Professional Web & App Developer specializing in JavaScript, React, React Native, .NET, and MS SQL Server. Creating responsive, high-performance applications with modern technologies and best practices.",
    keywords: "Dhruv Chheda, web developer, app developer, JavaScript, React, React Native, .NET, MS SQL Server, portfolio, full stack developer, responsive design, high-performance applications, modern web development",
    url: "https://www.dhruvchheda.com",
    canonicalUrl: "https://www.dhruvchheda.com/"
  },
  education: {
    title: "Education",
    description: "Explore Dhruv Chheda's educational background and academic achievements. Learn about his Computer Engineering degree from K.J. Somaiya Institute of Technology and his academic journey in technology and software development.",
    keywords: "Dhruv Chheda education, Computer Engineering, K.J. Somaiya Institute of Technology, academic achievements, educational background, technology education, software development education",
    url: "https://www.dhruvchheda.com/education",
    canonicalUrl: "https://www.dhruvchheda.com/education"
  },
  experience: {
    title: "Experience",
    description: "Discover Dhruv Chheda's professional experience as a Full Stack React Native Developer at Rapturous Technology, internships, and diverse projects in mobile app development, geofencing technology, and project management systems.",
    keywords: "Dhruv Chheda experience, Full Stack React Native Developer, Rapturous Technology, internships, mobile app development, geofencing technology, project management systems, professional experience",
    url: "https://www.dhruvchheda.com/experience",
    canonicalUrl: "https://www.dhruvchheda.com/experience"
  },
  projects: {
    title: "Projects",
    description: "Explore Dhruv Chheda's innovative projects including RoboFriends, TrackaExpense, SkillFlex Resume Maker, and more. Each project showcases expertise in React, React Native, Firebase, and modern web technologies.",
    keywords: "Dhruv Chheda projects, RoboFriends, TrackaExpense, SkillFlex Resume Maker, React projects, React Native projects, Firebase projects, web development projects, mobile app projects, JavaScript projects",
    url: "https://www.dhruvchheda.com/projects",
    canonicalUrl: "https://www.dhruvchheda.com/projects"
  },
  blogs: {
    title: "Blog",
    description: "Read Dhruv Chheda's tech blog featuring articles on web development, React Native, Firebase, Ubuntu setup, macOS development setup, and insights into modern software development practices and tutorials.",
    keywords: "Dhruv Chheda blog, tech blog, web development articles, React Native tutorials, Firebase guides, Ubuntu setup, macOS development setup, software development tutorials, programming articles",
    url: "https://www.dhruvchheda.com/blogs",
    canonicalUrl: "https://www.dhruvchheda.com/blogs"
  },
  contact: {
    title: "Contact",
    description: "Get in touch with Dhruv Chheda for web development, app development, or collaboration opportunities. Connect via email, LinkedIn, or GitHub for professional inquiries and project discussions.",
    keywords: "Dhruv Chheda contact, web developer contact, app developer contact, collaboration opportunities, professional inquiries, project discussions, hire developer",
    url: "https://www.dhruvchheda.com/contact",
    canonicalUrl: "https://www.dhruvchheda.com/contact"
  }
};

export const generateBlogPostSEO = (blog) => {
  return {
    title: blog.title,
    description: blog.description,
    keywords: `${blog.title}, Dhruv Chheda blog, tech article, web development, React Native, Firebase, software development, programming tutorial`,
    url: `https://www.dhruvchheda.com/blog/${blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    canonicalUrl: blog.link,
    article: true,
    publishedDate: new Date(blog.date).toISOString(),
    tags: extractTagsFromTitle(blog.title),
    type: "article"
  };
};

const extractTagsFromTitle = (title) => {
  const techKeywords = ['React', 'React Native', 'Firebase', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'API', 'Ubuntu', 'macOS', 'Windows', 'Docker', 'Git', 'GitHub', 'VS Code', 'Development', 'Programming', 'Web Development', 'Mobile Development', 'Full Stack', 'Frontend', 'Backend'];
  const tags = [];
  
  techKeywords.forEach(keyword => {
    if (title.toLowerCase().includes(keyword.toLowerCase())) {
      tags.push(keyword);
    }
  });
  
  return tags.length > 0 ? tags : ['Web Development', 'Programming', 'Technology'];
}; 