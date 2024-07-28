import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import Illustration from "../assets/illustration.webp";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const form = useRef();
  const [status, setStatus] = React.useState("");

  const onSubmit = async (data) => {
    setStatus("Sending...");
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setStatus("Message sent successfully!");
      reset();
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <h2>Contact Me</h2>
        <p>
          Feel free to send me a message if you have any questions or
          suggestions.
        </p>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              {...register("subject", {
                required: "Subject is required",
                minLength: {
                  value: 3,
                  message: "Subject must be at least 3 characters",
                },
              })}
            />
            {errors.subject && (
              <p className="error-message">{errors.subject.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
            ></textarea>
            {errors.message && (
              <p className="error-message">{errors.message.message}</p>
            )}
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
          <p className="status">{status}</p>
        </form>
      </div>
      <div className="contact-illustration">
        <img src={Illustration} alt="Contact Illustration" />
      </div>
    </div>
  );
}

export default Contact;
