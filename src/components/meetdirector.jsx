import React from "react";
import "../global.css"; // Ensure styles are included

const MeetDirector = () => {
  return (
    <section className="meet-director-section">
      <div className="text-container">
        <h2>Meet Our Medical Director</h2>
      </div>
      <div className="video-container">
        <video className="video" autoPlay loop controls playsInline muted>
          <source
            src="https://api.nur.softifiedgroup.com/uploads/nur/static/videos/kb.mp4"
            type="video/mp4"
          />
          <p>Your browser doesn't support HTML5 video.</p>
        </video>
      </div>
    </section>
  );
};

export default MeetDirector;
