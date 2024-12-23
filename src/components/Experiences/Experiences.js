import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../portfolio";
import "./Experiences.css";

const Experiences = () => {
  if (!experiences.length) return null;

  return (
    <section id="experiences" className="section experiences">
      <h2 className="section__title">Experiences</h2>

      <div className="experiences__timeline">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="experience__item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="experience__content">
              <h3 className="experience__title">{experience.name}</h3>
              <h4 className="experience__role">{experience.role}</h4>
              <p className="experience__duration">{experience.duration}</p>
              <p className="experience__description">
                {experience.description}
              </p>
              <div className="experience__stack">
                {experience.stack.map((tech, idx) => (
                  <span key={idx} className="experience__tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
