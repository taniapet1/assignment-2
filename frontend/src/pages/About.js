import React from 'react';

function About() {
  return (
    <div className="page about-page">
      {/* About Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About Bokeh</h1>
          <p className="page-subtitle">
            Mastering the art of beautiful blur and depth since 2019
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Bokeh was founded with a simple vision: to bring the mesmerizing beauty of 
                depth and blur to every visual story. Named after the Japanese term for the 
                aesthetic quality of blur in photography, we specialize in creating stunning 
                visual experiences that capture attention and evoke emotion.
              </p>
              <p>
                Our journey began when our founder, inspired by the dreamy quality of bokeh 
                effects in street photography, decided to make this artistic technique 
                accessible to businesses and individuals alike. Today, we've grown into a 
                team of passionate artists and technicians dedicated to perfecting the craft.
              </p>
            </div>
            <div className="story-visual">
              <div className="bokeh-demo">
                <div className="demo-circle c1"></div>
                <div className="demo-circle c2"></div>
                <div className="demo-circle c3"></div>
                <div className="demo-circle c4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Sarah Chen</h3>
              <p className="member-role">Creative Director</p>
              <p>Expert in artistic vision and bokeh aesthetics with 8+ years experience.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Marcus Rodriguez</h3>
              <p className="member-role">Lead Photographer</p>
              <p>Specializes in portrait and commercial photography with stunning depth effects.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Emily Thompson</h3>
              <p className="member-role">Digital Artist</p>
              <p>Creates digital bokeh effects and post-processing magic for all projects.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>David Kim</h3>
              <p className="member-role">Technical Lead</p>
              <p>Ensures technical excellence and innovative solutions for complex projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality First</h3>
              <p>Every project receives meticulous attention to detail and artistic excellence.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>We constantly explore new techniques and technologies to push creative boundaries.</p>
            </div>
            <div className="value-item">
              <h3>Collaboration</h3>
              <p>We work closely with clients to understand their vision and exceed expectations.</p>
            </div>
            <div className="value-item">
              <h3>Authenticity</h3>
              <p>Our work reflects genuine artistic passion and commitment to the craft.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;