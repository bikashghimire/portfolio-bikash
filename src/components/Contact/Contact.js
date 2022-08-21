import { contact } from "../../portfolio";
import "./Contact.css";
import pdf from "../../resume/BIKASHGHIMIRECV.pdf";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type="button" className="btn btn--outline">
          Email me
        </span>
      </a>
      <a href={pdf} rel="noreferer">
        <span type="button" className="btn btn--outline">
          Download Resume
        </span>
      </a>
    </section>
  );
};

export default Contact;
