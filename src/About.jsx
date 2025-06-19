import React from "react";

const About = () => (
  <div style={{
    maxWidth: '100px',
    margin: '60px auto',
    padding: '100px',
    background: '#fff',
    borderRadius: '26px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    textAlign: 'center',
  }}>
    <div style={{ fontSize: '14px' }}>
      <h2 style={{ color: '#023e8a', marginBottom: '12px' }}>About</h2>
<p>This live weather app is built with React and powered by WeatherAPI.com.</p>
<p>Select your favorite city to view real-time weather updates in a sleek, user-friendly interface.</p>

    </div>
  </div>
);

export default About;
