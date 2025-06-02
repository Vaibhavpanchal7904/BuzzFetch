import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <section className="about-us-container">
      <h2 className="about-title">About BuzzFetch</h2>
      <p className="about-description">
        At BuzzFetch, our mission is to keep you informed with accurate, 
        timely, and trustworthy news from across the globe. We believe that 
        information empowers individuals, and our platform is designed to 
        deliver news in a clear and engaging way.
      </p>
      
      <h3 className="about-subtitle">Our Vision</h3>
      <p className="about-description">
        To be the leading source of credible news that connects communities 
        and encourages informed decision-making worldwide.
      </p>
      
      <h3 className="about-subtitle">What We Offer</h3>
      <ul className="about-list">
        <li>Real-time updates on world, business, technology, health, science, and sports news</li>
        <li>Deep-dive analysis and opinion pieces from expert journalists</li>
        <li>User-friendly platform with personalized news feeds</li>
        <li>Mobile and desktop accessibility for news on the go</li>
        <li>Commitment to unbiased reporting and journalistic integrity</li>
      </ul>

      <h3 className="about-subtitle">Our Team</h3>
      <p className="about-description">
        BuzzFetch is powered by a dedicated team of journalists, developers, 
        and editors who work tirelessly to bring you the best news experience.
      </p>

      <h3 className="about-subtitle">Contact Us</h3>
      <p className="about-description">
        Have questions or feedback? Reach out to us at 
        <a href="mailto:support@buzzfetch.com" className="about-link"> support@buzzfetch.com</a>.
      </p>
    </section>
  );
};

export default AboutUs;
