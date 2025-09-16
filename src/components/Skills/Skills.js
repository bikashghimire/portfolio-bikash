import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faSass,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCogs,
  faVial,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import uniqid from "uniqid";
import "./Skills.css";

const skillIcons = {
  HTML: faHtml5,
  CSS: faCss3Alt,
  JavaScript: faJs,
  TypeScript: faCode,
  React: faReact,
  "Web Components": faCode,
  Storybook: faCode,
  Redux: faCode,
  "Next JS": faCode,
  SASS: faSass,
  "Material UI": faCode,
  Git: faGitAlt,
  "CI/CD": faCogs,
  Express: faNodeJs,
  JEST: faVial,
  PHP: faCode,
  SQL: faDatabase,
  "Express JS": faNodeJs,
  "Node JS": faNodeJs,
  PYTHON: faPython,
  SvelteKit: faCode,
};

const Skills = () => {
  const skills = Object.keys(skillIcons);

  if (!skills.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="skills__grid">
        {skills.map((skill) => (
          <div key={uniqid()} className="skills__card">
            <FontAwesomeIcon icon={skillIcons[skill]} size="3x" />
            <p className="skills__name">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
