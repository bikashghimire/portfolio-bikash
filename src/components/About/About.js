import React from "react";
import { motion } from "framer-motion";
import { about } from "../../portfolio";
import "./About.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  const { name, role, description, social } = about;

  return (
    <section className="section about" id="about">
      <motion.div
        className="about__container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {name && (
          <motion.h1
            className="about__title"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hi, I am <span className="about__name">{name}.</span>
          </motion.h1>
        )}
        {role && (
          <motion.h2
            className="about__role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {role}
          </motion.h2>
        )}
        {description && (
          <motion.p
            className="about__description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {description}
          </motion.p>
        )}
        <div className="about__social">
          {social && social.linkedin && (
            <motion.a
              href={social.linkedin}
              className="about__social-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <LinkedInIcon />
            </motion.a>
          )}
          {social && social.github && (
            <motion.a
              href={social.github}
              className="about__social-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <GitHubIcon />
            </motion.a>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
