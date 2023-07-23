const header = {
  homepage: "",
  title: "portfolio",
};

const about = {
  name: "Bikash Ghimire",
  role: "Front End Developer",
  description:
    "Ambitious, Optimistic Web Developer with the skillsets of JavaScript,React, TypeScript for modern web development with the ability to work in a fast-changing environment",
  social: {
    linkedin: "https://linkedin.com/in/bikashghimire",
    github: "https://github.com",
  },
};

const projects = [
  // projects can be added and removed
  {
    name: "Expense Calculator",
    description: "A react app helps with tracking everyday finances",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    sourceCode: "https://github.com/bikashghimire/Expense-Calculater",
    livePreview: "https://expensescalculator1.netlify.app/",
  },

  {
    name: "GitHub User Search",
    description:
      "A react app helps to find users in github by searching with username",
    stack: ["SASS", "JavaScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://searchuseringithub.netlify.app/",
  },

  {
    name: "Country Search API",
    description:
      "It displays list of countries with their detail information gets data from api",
    stack: ["SASS", "JavaScript", "React"],
    sourceCode: "https://github.com/bikashghimire/Country-Flag-API",
    livePreview: "work in progress",
  },
  {
    name: "Ecommerce",
    description:
      "It displays list of countries with their detail information gets data from api",
    stack: ["SASS", "JavaScript", "ExpressJS"],
    sourceCode: "https://github.com/bikashghimire/ecommerce-application",
    livePreview: "Maintaing, refining",
  },
  {
    name: "Blog-Site",
    description:
      "It displays list of countries with their detail information gets data from api",
    stack: ["SASS", "JavaScript", "EJS"],
    sourceCode: "https://github.com/bikashghimire/blog-post",
    livePreview: "work in progress",
  },
  {
    name: "Ecommerce",
    description: "Fully functioning ecommerce application",
    stack: ["SASS", "JavaScript", "EJS"],
    sourceCode: "https://github.com/bikashghimire/ecommerce-application",
    livePreview: "",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Storybook",
  "Redux",
  "SASS",
  "Material UI",
  "Git",
  "CI/CD",
  "Express",
  "PHP",
  "SQL",
  "Express JS",
  "Node JS",
  "PYTHON",
];

const contact = {
  email: "bikashghimire2610@gmail.com",
};

export { header, about, projects, skills, contact };
