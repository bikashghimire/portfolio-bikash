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
const experiences = [
  // experiences can be added and removed
    {
    name: "Datadrivers Oy",
    role: "Software Developer",
    description:
      "Architected an enterprise-grade design system from the ground up, driving UI/UX consistency across multiple product lines and significantly improving development velocity. Spearheaded front-end R&D initiatives by evaluating next-generation frameworks and authoring Architecture Decision Records (ADRs) to guide scalable component library selection. Developed a comprehensive, accessible, and performant component library using TypeScript, React, and Tailwind CSS. Established robust development infrastructure including Storybook documentation, design tokens, and automated testing frameworks. Collaborated cross-functionally with product, design, and backend teams to deliver seamless user experiences for flagship platforms such as Webauto and Fleetskills. Additionally, mentored teams on modern front-end best practices, component-driven development, and CI/CD workflows.",
    stack: [
      "JavaScript",
      "React",
      "Storybook",
      "TypeScript",
      "Web Components",
      "SASS",
      "Jest",
      "Azure",
      "Azure DevOps",
      "Tailwind CSS",
      "Material UI",
      "Git",
      "CI/CD",
      "shadcn/ui",
      "Next.js",
      "Figma",
    ],
    duration: "Mar 2024 - Present",
  },
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
    duration: "May 2023 - Jan 2024",
  },

  {
    name: "Funky Salsa Oy",
    role: "Web Developer",
    description:
      " Developed an order-handling web application with modern features from scratch using modern features and practices",
    stack: ["SASS", "JavaScript", "React", "Firebase"],
    duration: "Aug 2022 - Mar 2023",
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

const projects = [
  // projects can be added and removed
    {
    name: "VisionBoard",
    description:
      "I developed a latent dashboard interface leveraging Next.js, TypeScript, and Shadcn/UI.",
    stack: ["Next.Js", "TypeScript", "Shadcn/UI"],
    sourceCode: "https://github.com/bikashghimire/visionboard-shadcn",
    livePreview: "https://visionboard-shadcn.vercel.app/",
  },
      {
    name: "Wave of Flavors",
    description:
      "A website for a restaurant in Helsinki, Finland. It is built with React, TypeScript, and Tailwind CSS.",
    stack: ["React.Js", "TypeScript", "Shadcn/UI"],
    sourceCode: "https://github.com/bikashghimire/wave-of-flavors",
    livePreview: "https://www.waveofflavors.fi/",
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
    name: "Dashboard",
    description:
      "I developed a dashboard interface leveraging Next.js, TypeScript, and Shadcn/UI.",
    stack: ["Next.Js", "TypeScript", "Shadcn/UI"],
    sourceCode: "https://github.com/bikashghimire/bikashpress-ui",
    livePreview: "https://bikashpress-ui.vercel.app/",
  },
  {
    name: "Tapana Oy Website",
    description:
      "I developed a dashboard interface leveraging Next.js, TypeScript, and Shadcn/UI.",
    stack: ["HTML", "CSS", "JavaScript"],
    sourceCode: "https://github.com/bikashghimire/tapana-oy",
    livePreview: "https://santo-one.vercel.app/",
  },
  {
    name: "Bikash Dev Website",
    description: "Website for showcasing my portfolio, blog, and other stuffs.",
    stack: ["TypeScript", "CSS", "JavaScript"],
    sourceCode: "https://github.com/bikashghimire/tapana-oy",
    livePreview: "https://bikashdev-com.vercel.app/",
  },
  {
    name: "Expense Calculator",
    description:
      "A react app helps with tracking everyday finances! You going to love it.",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    sourceCode: "https://github.com/bikashghimire/Expense-Calculater",
    livePreview: "https://expensescalculator1.netlify.app/",
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
    name: "Ecommerce",
    description: "Fully functioning ecommerce application",
    stack: ["SASS", "JavaScript", "EJS"],
    sourceCode: "https://github.com/bikashghimire/ecommerce-application",
    livePreview: "",
  },
  {
    name: "Sherpa Food & Bar Website",
    description: "A website for a restaurant in Helsinki",
    stack: ["BootStrap", "HTML", "CSS"],
    sourceCode: "https://github./bikashghimire/typescript-note-taking-app",
    livePreview:
      "https://bikashghimire.github.io/sherpa-food-and-bar-dev-team/",
  },

  {
    name: "SvelteKit Notebook",
    description: "A NoteBook app based on Sveltekit",
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
