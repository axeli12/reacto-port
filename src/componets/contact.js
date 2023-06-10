import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or username is invalid");
      return;
    }
    if (!setMessage) {
      setErrorMessage("This field is required");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contactform">
      <div className="contactme " style={{ fontSize: 50 }}>
        <div>Contact Me</div>
      </div>
      <form className="contactme" style={{ fontSize: 20 }}>
        <div>
          <label>Name:</label>
          <br></br>
          <input
            value={name}
            name="name"
            size="100"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <br></br>
          <label htmlFor="email">Email:</label>
          <br></br>
          <input
            value={email}
            name="email"
            size="100"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <br></br>
          <label htmlFor="message">Message:</label>
          <br></br>
          <input
            value={message}
            name="message"
            size="100"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
          />
          <br></br>
          <button type="button" size="30" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;