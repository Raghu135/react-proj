// ExampleCarouselImage.js
import React from 'react';
import PropTypes from 'prop-types';

function ExampleCarouselImage({ src }) {
  return (
    <img
      src={`/img/${src}`} // Path relative to the public directory
      alt={src}
      className="d-block w-100" // Ensure the image takes up the full width of the carousel
    />
  );
}

ExampleCarouselImage.propTypes = {
  src: PropTypes.string.isRequired, // Ensures that `src` is provided
};

export default ExampleCarouselImage;
