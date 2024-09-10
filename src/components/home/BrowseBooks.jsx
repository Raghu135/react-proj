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
          <p>hcdsbc cksahbc jkcbsh dkbash wdkwjbd wkjdbkbd</p>
          <div className="icon_section">
            <FontAwesomeIcon icon={faShippingFast} />
            <FontAwesomeIcon icon={faShippingFast} />
            <FontAwesomeIcon icon={faShippingFast} />
            <FontAwesomeIcon icon={faShippingFast} />
          </div>
        </div>
        <div className="image_section">
          <img src="/img/book1.jpeg" alt="Book" />
        </div>
      </div>
    </div>
  );
}

export default BrowseBooks;
