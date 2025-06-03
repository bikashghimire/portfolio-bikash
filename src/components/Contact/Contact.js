import React, { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "../../portfolio";
import "./Contact.css";
import pdf from "../../resume/GHIMIRE_BIKASH_CV.pdf";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <motion.div
        className="contact__form-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <label htmlFor="name" className="contact__form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact__form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="email" className="contact__form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact__form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="message" className="contact__form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="contact__form-input"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-actions">
            <button type="submit" className="btn btn--outline">
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
      <a href={`mailto:${contact.email}`} className="contact__button">
        <span type="button" className="btn btn--outline">
          Email me
        </span>
      </a>
      <a href={pdf} rel="noreferer" className="contact__button">
        <span type="button" className="btn btn--outline">
          Download Resume
        </span>
      </a>
    </section>
  );
};

export default Contact;
