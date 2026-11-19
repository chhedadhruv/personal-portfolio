export const seoData = {
  home: {
    title: "Home",
    description: "Dhruv Chheda is a mobile engineer with 1+ year shipping production React Native (Expo) apps on iOS and Android, focused on performance, release automation and AI-assisted development.",
    keywords: "Dhruv Chheda, mobile engineer, React Native, Expo, TypeScript, Firebase, TanStack Query, EAS Build, iOS, Android, portfolio",
    url: "https://www.dhruvchheda.com/",
    canonicalUrl: "https://www.dhruvchheda.com/"
  },
  education: {
    title: "Education",
    description: "Dhruv Chheda completed a B.Tech in Computer Engineering at K.J. Somaiya Institute of Technology (2021 to 2025), with activities in the REDX-AI Club, GDSC and the Students' Council.",
    keywords: "Dhruv Chheda education, Computer Engineering, K.J. Somaiya Institute of Technology, REDX-AI Club, GDSC KJSIT",
    url: "https://www.dhruvchheda.com/education/",
    canonicalUrl: "https://www.dhruvchheda.com/education/"
  },
  experience: {
    title: "Experience",
    description: "Dhruv Chheda's experience: Software Development Engineer I (Mobile) at FOXO, plus React Native internships at Rapturous Technology and REDX-AI Club (Surakshak women's safety platform).",
    keywords: "Dhruv Chheda experience, mobile engineer, React Native developer, Expo, EAS releases, TanStack Query, FOXO, Rapturous Technology, Surakshak",
    url: "https://www.dhruvchheda.com/experience/",
    canonicalUrl: "https://www.dhruvchheda.com/experience/"
  },
  projects: {
    title: "Projects",
    description: "Projects by Dhruv Chheda: TrackaExpense (Expo and Firebase finance app on Google Play), Learn Photography (Next.js site with a camera simulator) and create-projex (project scaffolding CLI).",
    keywords: "Dhruv Chheda projects, TrackaExpense, Learn Photography, create-projex, React Native app, Expo, Firebase, Next.js",
    url: "https://www.dhruvchheda.com/projects/",
    canonicalUrl: "https://www.dhruvchheda.com/projects/"
  },
  blogs: {
    title: "Blog",
    description: "Articles by Dhruv Chheda on building a camera simulator, self-hosting, open source and software development setups, published on Medium.",
    keywords: "Dhruv Chheda blog, Medium articles, camera simulator, home server, open source, React Native, Firebase",
    url: "https://www.dhruvchheda.com/blogs/",
    canonicalUrl: "https://www.dhruvchheda.com/blogs/"
  },
  contact: {
    title: "Contact",
    description: "Contact Dhruv Chheda about mobile engineering work, React Native and Expo projects or collaboration by email, LinkedIn or GitHub.",
    keywords: "Dhruv Chheda contact, mobile engineer contact, React Native, Expo, collaboration",
    url: "https://www.dhruvchheda.com/contact/",
    canonicalUrl: "https://www.dhruvchheda.com/contact/"
  }
};

export const generateBlogPostSEO = (blog) => {
  return {
    title: blog.title,
    description: blog.description,
    keywords: `${blog.title}, Dhruv Chheda blog, tech article, Medium, software development`,
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