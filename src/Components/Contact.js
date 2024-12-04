import React from 'react';
import './Contact.css';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "78bea2a6-4ba0-41b5-b308-0e9419063dbe");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div id='contact'  className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's Talk</h2>
          <p>
            I'm currently available to take on new projects. If you'd like to
            work together, feel free to reach out!
          </p>
          <div className="contact-details">
            <p>Email: <span>priyanshupande23@gmail.com</span></p>
            <p>Phone: <span>9653348876</span></p>
            <p>Location: <span>Maharashtra, India</span></p>
          </div>
        </div>
        <form  onSubmit={onsubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" name="name" />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" name="email" />

          <label htmlFor="message">Write a Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            
            placeholder="Enter your message"
          ></textarea>

          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
