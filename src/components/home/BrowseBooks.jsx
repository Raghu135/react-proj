import React from "react";
import "./Browsbooks.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";

function BrowseBooks() {
  return (
    <div className="home">
      <div className="homeone">
        <div className="section_one">
          <h4 className="homeintro">Introduction</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <button className="enquire_btn">Enquire Now</button>
          <div className="icon_section">
            <div className="icon_with_text">
              <FontAwesomeIcon icon={faShippingFast} />
              <h3>Faster Delivery</h3>
            </div>
            <div className="icon_with_text">
              <FontAwesomeIcon icon={faShippingFast} />
              <h3>Hassle Free Service</h3>
            </div>
            <div className="icon_with_text">
              <FontAwesomeIcon icon={faShippingFast} />
              <h3>Secure Payment</h3>
            </div>
          </div>
        </div>
        <div className="image_section">
          <img src="/img/kid_reading.jpg" alt="Book" />
        </div>
      </div>
    </div>
  );
}

export default BrowseBooks;
