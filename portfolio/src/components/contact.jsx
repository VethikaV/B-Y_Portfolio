import './CSS/style.css';
import { RiLinkedinBoxFill, RiMailFill, RiPhoneFill } from 'react-icons/ri';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="hc">Contact</h1>
      <div className="contact-card">
        <div className="contact-info">
          <a href="https://www.linkedin.com/in/vethika-venkatraman-106082210/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <RiLinkedinBoxFill className="icon" /> LinkedIn
          </a>
          <p className="contact-detail">
            <RiMailFill className="icon" /> vethika1681@gmail.com
          </p>
          <p className="contact-detail">
            <RiPhoneFill className="icon" /> +91 8428411134
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
