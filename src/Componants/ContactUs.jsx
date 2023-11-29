import React, { useState } from 'react';

const formStyles = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '5px',
};

const labelStyles = {
  display: 'block',
  margin: '10px 0',
  fontSize: '16px',
};

const inputStyles = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  margin: '5px 0 15px 0',
  boxSizing: 'border-box',
  borderRadius: '3px',
  border: '1px solid #ccc',
};

const textareaStyles = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  margin: '5px 0 15px 0',
  boxSizing: 'border-box',
  borderRadius: '3px',
  border: '1px solid #ccc',
};

const buttonStyles = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '15px 20px',
  fontSize: '16px',
  borderRadius: '3px',
  border: 'none',
  cursor: 'pointer',
};

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={formStyles}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyles} htmlFor="name">
          Name:
        </label>
        <input
          style={inputStyles}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label style={labelStyles} htmlFor="email">
          Email:
        </label>
        <input
          style={inputStyles}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label style={labelStyles} htmlFor="message">
          Message:
        </label>
        <textarea
          style={textareaStyles}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button style={buttonStyles} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
