import uniqid from "uniqid";
import { experiences } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Experiences.css";

const Experiences = () => {
  if (!experiences.length) return null;

  return (
    <section id="projects" className="section experiences">
      <h2 className="section__title">Experiences</h2>

      <div className="experiences__grid">
        {experiences.map((project) => (
          <div key={uniqid()} className="experience__card">
            <h3 className="experience__title">{project.name}</h3>
            <h4 className="experience__role">{project.role}</h4>
            <p className="experience__description">{project.description}</p>
            <div className="experience__stack">
              {project.stack.map((tech) => (
                <span key={uniqid()} className="experience__tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
