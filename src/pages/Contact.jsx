import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    emailjs
      .sendForm(
        'service_XXXXXXX',     // ✅ Replace with your actual Service ID
        'template_XXXXXXX',    // ✅ Replace with your actual Template ID
        e.target,
        'YOUR_PUBLIC_KEY'      // ✅ Replace with your actual Public Key
      )
      .then(
        () => {
          setSubmitted(true);
          e.target.reset();
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setError(true);
        }
      );
  };

  const fields = [
    { id: 'name', label: 'Your Name', name: 'from_name', type: 'text' },
    { id: 'email', label: 'Email', name: 'from_email', type: 'email' },
    { id: 'subject', label: 'Subject', name: 'subject', type: 'text' },
    { id: 'message', label: 'Message', name: 'message', isTextarea: true },
  ];

  return (
    <div className="contact text-white">
      <h2 className="text-center mb-4">Contact</h2>
      <div className="container">
        <div className="contact-card p-4 shadow rounded bg-secondary">
          <h3 className="text-center mb-4">📬 Contact Me</h3>

          {submitted && (
            <div className="alert alert-success text-center" role="alert">
              ✅ Message sent successfully!
            </div>
          )}
          {error && (
            <div className="alert alert-danger text-center" role="alert">
              ❌ Failed to send message. Please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {fields.map((field, index) => (
                <div
                  className={`col-12 ${field.id === 'name' || field.id === 'email' ? 'col-md-6' : ''} slide-in-line`}
                  key={index}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <label htmlFor={field.id} className="form-label">{field.label}</label>
                  {field.isTextarea ? (
                    <textarea
                      className="form-control"
                      name={field.name}
                      id={field.id}
                      rows="4"
                      required
                    />
                  ) : (
                    <input
                      type={field.type}
                      className="form-control"
                      name={field.name}
                      id={field.id}
                      required
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-4 slide-in-line" style={{ animationDelay: `${fields.length * 0.2}s` }}>
              <button type="submit" className="btn btn-primary px-5 py-2">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
