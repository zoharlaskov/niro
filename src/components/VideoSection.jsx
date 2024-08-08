import React from "react";

function VideoSection() {
  return (
    <section id="videos" className="section">
      <h2>לזכרה</h2>
      <div className="video">
        <iframe
          src="https://www.youtube.com/embed/YUtC3cgCOEM?autoplay=1&loop=1&playlist=YUtC3cgCOEM"
          allow="autoplay"
          allowFullScreen
          title="Video 1"
        ></iframe>
      </div>
    </section>
  );
}

export default VideoSection;
