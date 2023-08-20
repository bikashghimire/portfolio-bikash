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
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
