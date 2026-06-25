import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./CSS/style.css";
import {
  RiLinkedinBoxFill,
  RiMailFill,
  RiPhoneFill,
} from "react-icons/ri";

const Contact = () => {
  const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
       {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
     }
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send message.");
    });
};

    return (
  <section className="contact-section" id="contact">
    <div className="contact-header">
      <h1>Contact Me</h1>
      <p>
        Have a project in mind, an exciting opportunity, or simply a question? I'd be happy to hear from you. Let's connect and create something impactful together.
      </p>
    </div>

    <div className="contact-form-wrapper">
      <div className="contact-form-container">
        <h2>Send a Message</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message here..."
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>

  );
};

export default Contact;