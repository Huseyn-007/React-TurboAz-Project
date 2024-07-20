import React, { useState } from 'react';
import '../assets/Slider.css';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>{"<"}</button>
      <div className="slider-content">
        <img src={images[currentIndex]} alt={`slide ${currentIndex}`} />
      </div>
      <button className="next" onClick={nextSlide}>{">"}</button>
    </div>
  );
};

export default Slider;
