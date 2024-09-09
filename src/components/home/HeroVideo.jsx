import React from 'react'
import './HeroVideo.scss'

function HeroVideo() {
    return (
        <div className="hero-section">
          <video className="hero-video" src="/img/video1.mp4" autoPlay muted loop></video>
          <div className="hero-content">
            <h1>Discover Your Next Great Read</h1>
            <p>Explore a world of stories, knowledge, and inspiration. Dive into our vast collection of books and let your journey begin."</p>
            {/* <button className="cta-button">Call to Action</button> */}
          </div>
        </div>
      );
}

export default HeroVideo