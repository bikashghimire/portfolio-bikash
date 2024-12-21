import uniqid from "uniqid";
import { projects } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Projects.css";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {projects.map((project) => (
          <div key={uniqid()} className="project__card">
            <ProjectContainer project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
