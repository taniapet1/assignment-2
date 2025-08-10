import React from 'react';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Portrait Photography',
      price: 'Starting at $299',
      description: 'Professional portrait sessions with stunning bokeh backgrounds that make you the star.',
      features: [
        '2-hour photo session',
        'Professional lighting setup',
        '50+ edited high-resolution photos',
        'Artistic bokeh backgrounds',
        'Online gallery for sharing'
      ]
    },
    {
      id: 2,
      title: 'Event Photography',
      price: 'Starting at $799',
      description: 'Capture your special moments with beautiful depth and artistic blur effects.',
      features: [
        'Full event coverage',
        'Multiple photographers',
        '200+ edited photos',
        'Same-day preview gallery',
        'USB drive with all photos'
      ]
    },
    {
      id: 3,
      title: 'Commercial Photography',
      price: 'Starting at $499',
      description: 'Elevate your brand with professional commercial photography featuring bokeh aesthetics.',
      features: [
        'Product photography',
        'Brand lifestyle shots',
        'Commercial usage rights',
        'Multiple format deliveries',
        'Rush delivery available'
      ]
    },
    {
      id: 4,
      title: 'Digital Bokeh Effects',
      price: 'Starting at $99',
      description: 'Transform your existing photos with professional digital bokeh effects and enhancements.',
      features: [
        'Photo retouching',
        'Digital bokeh creation',
        'Background replacement',
        'Color grading',
        '48-hour turnaround'
      ]
    }
  ];

  return (
    <div className="page services-page">
      {/* Services Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Professional photography and design services with beautiful bokeh effects
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-price">{service.price}</p>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary service-btn">Get Quote</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We discuss your vision, requirements, and creative goals for the project.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>Detailed planning of the shoot including location, lighting, and bokeh techniques.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p>Professional photography session with expert bokeh creation and artistic direction.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Delivery</h3>
              <p>Carefully edited photos delivered in your preferred format with full resolution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is bokeh photography?</h3>
              <p>Bokeh refers to the aesthetic quality of blur in the out-of-focus areas of a photograph, creating beautiful, dreamy backgrounds that make subjects stand out.</p>
            </div>
            <div className="faq-item">
              <h3>How long does a typical session take?</h3>
              <p>Portrait sessions typically last 2 hours, while event coverage varies based on the event duration. We'll discuss timing during consultation.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide digital copies?</h3>
              <p>Yes, all packages include high-resolution digital copies delivered through our secure online gallery system.</p>
            </div>
            <div className="faq-item">
              <h3>Can you add bokeh effects to existing photos?</h3>
              <p>Absolutely! Our digital bokeh service can enhance existing photos with professional blur effects and artistic enhancements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;