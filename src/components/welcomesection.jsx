import React from 'react';
import '../global.css';
const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-content">
          <h2 className="welcome-title">Welcome To</h2>
          <h3 className="welcome-subtitle">NUR | Med Spa & Wellness</h3>
          <p className="welcome-description">
            Dive into an oasis of rejuvenation and holistic wellness in Lake Nona. At NUR Med Spa &
            Wellness, we blend state-of-the-art treatments with personalized care to enhance your
            natural beauty and well-being. NUR Med Spa & Wellness propels you into an experience
            where cutting-edge treatments seamlessly intertwine with individualized attention,
            amplifying not only your innate beauty but also your overall health. Our commitment is to
            craft an environment where the pursuit of wellness becomes a personalized journey,
            ensuring that you emerge not just rejuvenated, but uniquely restored in both mind and
            body.
          </p>
          <div className="welcome-quote">
            <p className="quote-text">
              " When many people hear about med spas and wellness, they often associate it primarily
              with women. However, at Nur Med Spa, we cater to both men and women. Our services for
              men include neurotoxin injectables, skin tightening, weight loss treatments, hormone
              therapies, and much more. There's no reason for men to overlook self-care anymore -
              we're here to provide a range of services to help you look and feel your best. "
            </p>
          </div>
          <p className="quote-author">- Khurram Bukari</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;