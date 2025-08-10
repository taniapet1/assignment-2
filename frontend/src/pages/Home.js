import React from 'react';

function Home() {
  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Bokeh</h1>
            <p className="hero-subtitle">
              Creating beautiful, blurred backgrounds and stunning visual experiences
            </p>
            <p className="hero-description">
              Discover the art of depth and focus with our professional bokeh photography 
              and design services. Transform your visual content with elegant blur effects 
              that make your subjects shine.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">View Gallery</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="bokeh-circle large"></div>
            <div className="bokeh-circle medium"></div>
            <div className="bokeh-circle small"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Bokeh?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3>Professional Photography</h3>
              <p>Expert photographers specializing in bokeh techniques and artistic blur effects.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Creative Design</h3>
              <p>Custom design solutions that incorporate beautiful depth and focus elements.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times without compromising on quality or attention to detail.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Precision Focus</h3>
              <p>Masterful control of depth of field to highlight exactly what matters most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">5</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Something Beautiful?</h2>
            <p>Let's work together to bring your vision to life with stunning bokeh effects.</p>
            <button className="btn btn-primary large">Start Your Project</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;