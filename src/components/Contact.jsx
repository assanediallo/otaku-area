import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    data: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <div>
      <form netlify name="contact">
        <h2>LETS HAVE A TALK</h2>
        <div>
          <label htmlFor="name" placeholder="Your name">
            Name
          </label>
          <input
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email" placeholder="Your email address">
            Email
          </label>
          <input
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="message" placeholder="Your message here">
            Message
          </label>
          <textarea
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                message: e.target.value,
              }))
            }
            id="message"
            name="message"
          />
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            alert(`Thanks for contacting us ${formData.name}!`);
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
