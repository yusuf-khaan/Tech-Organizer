import React, { useState } from 'react';

const CircularCarousel = () => {
  const images = [
    'P1\p1\public\IIT_Guwahati_Logo.svg.png',
    'P1\p1\public\IIT_Kanpur_Logo.svg.png',
    'P1\p1\public\IIT_Kharagpur_Logo.svg.png',
    'P1\p1\public\IIT_Madras_Logo.svg.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="absolute inset-0 transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
        Prev
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
        Next
      </button>
    </div>
  );
};

export default CircularCarousel;
