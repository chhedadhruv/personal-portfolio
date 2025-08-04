export const seoData = {
  home: {
    title: "Home",
    description: "Dhruv Chheda: Professional Web & App Developer specializing in JavaScript, React, React Native, .NET, and MS SQL Server. Creating responsive, high-performance applications with modern technologies and best practices.",
    keywords: "Dhruv Chheda, web developer, app developer, JavaScript, React, React Native, .NET, MS SQL Server, portfolio, full stack developer, responsive design, high-performance applications, modern web development",
    url: "https://www.dhruvchheda.com/",
    canonicalUrl: "https://www.dhruvchheda.com/"
  },
  education: {
    title: "Education",
    description: "Discover Dhruv Chheda's educational journey from Computer Engineering at K.J. Somaiya Institute of Technology to leadership roles in REDX-AI Club. Explore academic achievements, technical certifications, and his expertise in AI, ML, and software development gained through rigorous academic training.",
    keywords: "Dhruv Chheda education, Computer Engineering KJSIT, K.J. Somaiya Institute of Technology, REDX-AI Club, academic achievements, educational background, technology education, software development education, AI ML certifications",
    url: "https://www.dhruvchheda.com/education/",
    canonicalUrl: "https://www.dhruvchheda.com/education/"
  },
  experience: {
    title: "Experience",
    description: "Explore Dhruv Chheda's professional journey from internships to Full Stack React Native Developer at Rapturous Technology. Experience includes mobile app development, geofencing technology at CASCADE, project management systems at KJSIT, and leading technical sessions on React Native development.",
    keywords: "Dhruv Chheda professional experience, Full Stack React Native Developer, Rapturous Technology internship, CASCADE geofencing, KJSIT project management, mobile app development, React Native development, technical leadership",
    url: "https://www.dhruvchheda.com/experience/",
    canonicalUrl: "https://www.dhruvchheda.com/experience/"
  },
  projects: {
    title: "Projects",
    description: "Dive into Dhruv Chheda's innovative project portfolio featuring MyTodo task management ecosystem, TrackaExpense finance manager, Quote API with Docker deployment, Quotify inspiration app, and TrueYouTeller personality platform. Each project demonstrates full-stack expertise in React, React Native, Node.js, TypeScript, and cloud technologies.",
    keywords: "Dhruv Chheda projects portfolio, MyTodo task management, TrackaExpense personal finance, Quote API Docker, Quotify app, TrueYouTeller personality test, React projects, React Native projects, Node.js TypeScript, full-stack development",
    url: "https://www.dhruvchheda.com/projects/",
    canonicalUrl: "https://www.dhruvchheda.com/projects/"
  },
  blogs: {
    title: "Blog",
    description: "Read Dhruv Chheda's tech blog featuring articles on web development, React Native, Firebase, Ubuntu setup, macOS development setup, and insights into modern software development practices and tutorials.",
    keywords: "Dhruv Chheda blog, tech blog, web development articles, React Native tutorials, Firebase guides, Ubuntu setup, macOS development setup, software development tutorials, programming articles",
    url: "https://www.dhruvchheda.com/blogs/",
    canonicalUrl: "https://www.dhruvchheda.com/blogs/"
  },
  contact: {
    title: "Contact",
    description: "Get in touch with Dhruv Chheda for web development, app development, or collaboration opportunities. Connect via email, LinkedIn, or GitHub for professional inquiries and project discussions.",
    keywords: "Dhruv Chheda contact, web developer contact, app developer contact, collaboration opportunities, professional inquiries, project discussions, hire developer",
    url: "https://www.dhruvchheda.com/contact/",
    canonicalUrl: "https://www.dhruvchheda.com/contact/"
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