import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="page contact-page">
      {/* Contact Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Ready to create something beautiful? Let's discuss your project
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select a service</option>
                    <option value="portrait">Portrait Photography</option>
                    <option value="event">Event Photography</option>
                    <option value="commercial">Commercial Photography</option>
                    <option value="digital">Digital Bokeh Effects</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary form-submit">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              
              <div className="contact-item">
                <h3>📍 Studio Location</h3>
                <p>
                  123 Photography Lane<br />
                  Creative District<br />
                  San Francisco, CA 94102
                </p>
              </div>
              
              <div className="contact-item">
                <h3>📞 Phone</h3>
                <p>(555) 123-BOKEH</p>
                <p>(555) 123-2653</p>
              </div>
              
              <div className="contact-item">
                <h3>✉️ Email</h3>
                <p>hello@bokehstudio.com</p>
                <p>info@bokehstudio.com</p>
              </div>
              
              <div className="contact-item">
                <h3>🕒 Studio Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: By appointment only
                </p>
              </div>

              <div className="contact-item">
                <h3>🌐 Follow Us</h3>
                <div className="social-links">
                  <a href="https://instagram.com/bokehstudio" className="social-link">Instagram</a>
                  <a href="https://facebook.com/bokehstudio" className="social-link">Facebook</a>
                  <a href="https://twitter.com/bokehstudio" className="social-link">Twitter</a>
                  <a href="https://linkedin.com/company/bokehstudio" className="social-link">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Find Our Studio</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <p>📍 Interactive Map Coming Soon</p>
              <p>Located in the heart of San Francisco's Creative District</p>
              <button className="btn btn-secondary">Get Directions</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;