import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0gdgxjo",
        "template_4s9b68r",
        form.current,
        "NMyOVmaSNsOi657uR"
      )
      .then(
        (result) => {
          alert("Email sent successfully...");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>chaitanya.g713@gmail.com</h5>
            <a
              href="mailto:chaitanya.g713@gmail.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Chaitanya Gabbita</h5>
            <a
              href="https://m.me/chaytuuuuu"
              rel="noreferrer noopener"
              target="_blank"
            >
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91-7207789204</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+917207789204"
              rel="noreferrer noopener"
              target="_blank"
            >
              Send Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name..."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message..."
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
