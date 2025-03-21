import React from 'react';
 

function PopularServicePage() {
  return (
    <section className="popular-services">
      <div className="container-">
        <h2 className="section-title">Popular Services</h2>
        <button className="view-all-btn">View All Services</button>
        <div className="service-cards-container">
          <div className="service-card">
            <img src="https://api.nur.softifiedgroup.com/uploads/nur/static/images/botox.jpg" alt="Neurotoxin Injectables" />
            <p className="service-title">Neurotoxin Injectables</p>
            <p className="service-description">
              Neurotoxin Injectables are used to treat dynamic wrinkles caused by facial movements such as smiling or frowning.
            </p>
          </div>
          <div className="service-card">
            <img src="https://api.nur.softifiedgroup.com/uploads/nur/static/images/filler.jpg" alt="Fillers" />
            <p className="service-title">Fillers</p>
            <p className="service-description">
              Dermal fillers help to diminish facial lines and restore volume and fullness in the face.
            </p>
          </div>
          <div className="service-card">
            <img src="https://api.nur.softifiedgroup.com/uploads/nur/static/images/botox.jpg" alt="Morpheus8" />
            <p className="service-title">Morpheus8</p>
            <p className="service-description">
              Morpheus8 is a fractional skin treatment that stimulates collagen production of the underlying layers of the dermis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularServicePage;
