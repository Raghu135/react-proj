import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './OurOffice.scss'; // Import custom styles

const OurOffice = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={10000}
        stopOnHover={true}
        showStatus={false}
        onChange={handleSlideChange}
      >
        <div className={`carousel-slide ${activeIndex === 0 ? "active-slide" : ""}`}>
          <img
            src="https://jpeg.org/images/jpeg-home.jpg"
            alt="Slide 1"
            className="zoom-animation"
          />
        </div>
        <div className={`carousel-slide ${activeIndex === 1 ? "active-slide" : ""}`}>
          <img
            src="https://photographylife.com/wp-content/uploads/2018/11/Moeraki-Boulders-New-Zealand.jpg"
            alt="Slide 2"
            className="zoom-animation"
          />
        </div>
        <div className={`carousel-slide ${activeIndex === 2 ? "active-slide" : ""}`}>
          <img
            src="https://jpeg.org/images/jpeg-home.jpg"
            alt="Slide 3"
            className="zoom-animation"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default OurOffice;
