const header = {
  homepage: "",
  title: "portfolio",
};

const about = {
  name: "Bikash Ghimire",
  role: "Software Developer",
  description:
    "Ambitious, Optimistic Web Developer with the skillsets of JavaScript,React, TypeScript, Node JS for modern web development with the ability to work in a fast-changing environment",
  social: {
    linkedin: "https://linkedin.com/in/bikashghimire",
    github: "https://github.com/bikashghimire",
  },
};

const academics = [
  {
    institution: "Åbo Akademi University",
    degree:
      "Masters Degree in Information Technology, Computer Software Engineering",
    duration: "Aug 2023 - Feb 2025",
    courses: [
      "Artificial Intelligence",
      "Software Quality",
      "Machine Learning",
      "Web Technologies",
      "System Safety",
      "Project Course",
      "Autonomic Software and System",
      "Tools for Reliable Software Construction",
      "Cloud Computing",
      "Code Optimisation",
      "Research Method in Computer Science and Engineering",
      "Data Science",
      "Software Construction",
      "Analytics for Industrial Internet",
    ],
  },
  {
    institution: "Centria University of Applied Sciences",
    degree:
      "Bachelor's degree in Information Technology, Computer Software Engineering",
    duration: "Aug 2017 - Dec 2021",
    courses: [
      "Extent of Studies : 240 Cr.",
      "Completed Studies : 275 Cr.",
      "Software Engineering, Mathematics, Physics and Chemistry",
      "Algorithm and Data Structure",
      "Modeling Techniques, Object-Oriented Programming & Modelling",
      "Mobile Software Development I & II",
      "Embedded Software",
      "Software Project",
      "Agile Methodology",
      "Android Programming",
      "C, C++, Java, JavaScript, HTML, CSS, SQL, C#(ASP.NET)",
      "IP Networks, CCNA1, Security, Routing and Switching essentials",
      "Netbeans, Microsoft Visual Studio",
      "Project Management",
    ],
  },
];
const experiences = [
  // experiences can be added and removed
  {
    name: "Metso",
    role: "Software Developer",
    description:
      "At Metso, I led the development of scalable design system UI libraries, including a React-based framework and a framework-agnostic web components library, collectively achieving 100,000+ npm downloads. I ensured components were reusable, accessible, and performance-optimized, adhering to WCAG standards and collaborating with cross-functional teams. My work on the design system earned recognition at the Metso Innovation Award 2024 for its impact on UI/UX standardization and scalability. Additionally, I developed AI-driven solutions in Azure using OpenAI Studio, integrated CI/CD workflows, and deployed static web applications.",
    stack: [
      "JavaScript",
      "React",
      "Storybook",
      "TypeScript",
      "Web Components",
      "SASS",
      "Jest",
      "Azure",
      "Azure OpenAI Studio",
      "CI/CD",
      "Figma",
    ],
    duration: "May 2023 - Nov 2024",
  },

  {
    name: "Funky Salsa Oy",
    role: "Web Developer",
    description:
      " Developed an order-handling web application with modern features from scratch using modern features and practices",
    stack: ["SASS", "JavaScript", "React", "Firebase"],
    duration: "2022 - August 2023",
  },
  {
    name: "Integrify Oy",
    role: "Full Stack Developer",
    description:
      "Joined through the six-month intensive full-stack program for modern web development with the stacks of React, TypeScript, NodeJS, MongoDB, SQL & PostgreSQL with the role of Full stack developer.",
    stack: ["HTML", "CSS", "JavaScript", "React", "MongoDB"],
    duration: "January 2022 - June 2022",
  },

  {
    name: "Centria University R & D",
    role: "Software Developer Intern",
    description:
      "During my six-month internship at Centria University of Applied Sciences in Kokkola, I engaged in two significant projects, one in Game Development and the other in Web Development.,",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "C++",
      "Arduino",
      "Raspberry Pi",
      "Agile Methodology",
    ],
    duration: "July 2021 - December 2021",
  },
];
const projects = [
  // projects can be added and removed
  {
    name: "Expense Calculator",
    description:
      "A react app helps with tracking everyday finances! You going to love it.",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    sourceCode: "https://github.com/bikashghimire/Expense-Calculater",
    livePreview: "https://expensescalculator1.netlify.app/",
  },

  {
    name: "Bikash Dev Blog",
    description:
      "I sometimes write stuffs about Front-End development, Design System.",
    stack: ["Nunjucks", "JavaScript", "CSS"],
    sourceCode: "https://github.com/bikashghimire/bikashdev-blog",
    livePreview: "https://bikashdev.netlify.app/about/",
  },

  {
    name: "Country Search API",
    description:
      "It displays list of countries with their detail information gets data from api",
    stack: ["SASS", "JavaScript", "React"],
    sourceCode: "https://github.com/bikashghimire/restapi-countries-latest",
    livePreview: "work in progress",
  },
  {
    name: "Serverless React",
    description:
      "It displays list of countries with their detail information gets data from api",
    stack: ["React", "JavaScript", "ExpressJS"],
    sourceCode: "https://github.com/bikashghimire/react-aws",
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
  {
    name: "NoteBook",
    description: "A NoteBook app based on React, BootStrap & TypeScript. ",
    stack: ["BootStrap", "React", "TypeScript"],
    sourceCode: "https://github./bikashghimire/typescript-note-taking-app",
    livePreview: "https://mynotebookapps.netlify.app/",
  },
  {
    name: "SvelteKit",
    description: "A NoteBook app based on Sveltekit with login logout features",
    stack: ["Sveltekit", "Firebase", "TypeScript"],
    sourceCode: "https://github.com/bikashghimire/sveltekit-crud-fullstack",
    livePreview: "https://mynotebookapps.netlify.app/",
  },
  {
    name: "Under going",
    description: "A NoteBook app based on Sveltekit with login logout features",
    stack: ["Sveltekit", "Firebase", "TypeScript"],
    sourceCode: "https://github.com/bikashghimire/sveltekit-crud-fullstack",
    livePreview: "https://mynotebookapps.netlify.app/",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Web Components",
  "Storybook",
  "Redux",
  "Next JS",
  "SASS",
  "Material UI",
  "Git",
  "CI/CD",
  "Express",
  "JEST",
  "PHP",
  "SQL",
  "Express JS",
  "Node JS",
  "PYTHON",
  "SvelteKit",
];

const contact = {
  email: "bikashghimire2610@gmail.com",
};

export { header, about, academics, experiences, projects, skills, contact };
