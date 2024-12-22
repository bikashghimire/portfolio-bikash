import React from "react";
import { motion } from "framer-motion";
import { academics } from "../../portfolio";
import "./Academics.css";

const Academics = () => {
  return (
    <section className="section academics" id="academics">
      <h2 className="section__title">Academics</h2>
      <div className="academics__container">
        {academics.map((academic, index) => (
          <motion.div
            className="academic__item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>{academic.institution}</h3>
            <p>{academic.degree}</p>
            <p>{academic.duration}</p>
            <ul className="academic__list">
              {academic.courses.map((course, idx) => (
                <li className="academic__badge" key={idx}>
                  ✔ {course}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Academics;
