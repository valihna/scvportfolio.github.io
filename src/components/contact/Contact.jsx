/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "./Input";

import "./Contact.css";

function Contact() {
  const [formValue, setFormValue] = useState({
    lastname: "",
    firstname: "",
    mail: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const showToastMessage = () => {
    toast.success("Your message has been sent, thank you !", {
      position: "top-right",
    });
  };

  const showToastErrorMessage = () => {
    toast.error("An error occurred, you can try again !", {
      position: "top-right",
    });
  };

  const {
    VITE_EMAILJS_PUBLIC_KEY,
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
  } = import.meta.env;
  const emailjsServiceId = VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = VITE_EMAILJS_PUBLIC_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(emailjsServiceId, emailjsTemplateId, e.target, emailjsPublicKey) // Utilisation de la variable d'environnement
      .then(
        (result) => {
          showToastMessage(result);
        },
        (error) => {
          showToastErrorMessage(error);
        }
      );
  };

  return (
    <div className="containFormContact">
      <h2>Contact</h2>
      <div className="containForm">
        <form onSubmit={handleSubmit} className="contactForm">
          <div>
            <Input
              label="Nom"
              name="lastname"
              type="text"
              value={formValue.lastname}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              label="Prénom"
              name="firstname"
              type="text"
              value={formValue.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              label="Votre mail"
              name="mail"
              type="text"
              value={formValue.mail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="messageForm">
            <label>
              <span>Your message</span>
              <textarea
                className="textArea"
                name="message"
                value={formValue.message}
                onChange={handleChange}
                id="description"
                maxLength={400}
                required
              />
            </label>
            <div className="submit">
              <button type="submit" className="buttonsubmit">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
