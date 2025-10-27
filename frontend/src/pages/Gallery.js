import React, { useState } from 'react';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'nature', name: 'Nature' },
    { id: 'urban', name: 'Urban' },
    { id: 'events', name: 'Events' }
  ];

  const galleryItems = [
    { id: 1, category: 'portraits', title: 'Portrait with Soft Bokeh', description: 'Beautiful portrait with dreamy background blur' },
    { id: 2, category: 'nature', title: 'Flower in Focus', description: 'Macro photography with natural bokeh' },
    { id: 3, category: 'urban', title: 'City Lights', description: 'Urban night photography with light bokeh' },
    { id: 4, category: 'events', title: 'Wedding Moments', description: 'Romantic wedding photography with elegant blur' },
    { id: 5, category: 'portraits', title: 'Professional Headshot', description: 'Corporate portrait with subtle background blur' },
    { id: 6, category: 'nature', title: 'Garden Bokeh', description: 'Botanical photography with artistic depth' },
    { id: 7, category: 'urban', title: 'Street Photography', description: 'Urban lifestyle with selective focus' },
    { id: 8, category: 'events', title: 'Corporate Event', description: 'Professional event photography with depth' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="page gallery-page">
      {/* Gallery Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Gallery</h1>
          <p className="page-subtitle">
            Explore our collection of stunning bokeh photography and design work
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image">
                  <div className="image-placeholder">
                    <div className="placeholder-bokeh">
                      <div className="bokeh-dot"></div>
                      <div className="bokeh-dot"></div>
                      <div className="bokeh-dot"></div>
                    </div>
                  </div>
                  <div className="gallery-overlay">
                    <div className="gallery-info">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <button className="view-btn">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery CTA */}
      <section className="gallery-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Like What You See?</h2>
            <p>Let's create something amazing together. Get in touch to discuss your project.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Start a Project</button>
              <button className="btn btn-secondary">Download Portfolio</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;