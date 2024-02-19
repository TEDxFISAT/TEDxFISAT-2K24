import React, { useState, useEffect, useRef } from 'react';

const speakers = [
  { name: 'Alice Johnson', title: 'Web Development Guru', imageUrl: 'https://...' },
  { name: 'Bob Parker', title: 'Design Maestro', imageUrl: 'https://...' },
  // ... more speakers
];

function SpeakerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  // Smooth scrolling (with options for easing)
  const scrollToSlide = (index) => {
    sliderRef.current.scrollLeft = index * sliderRef.current.offsetWidth;
  };

  // Handle navigation
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % speakers.length);
  };

  useEffect(() => {
    scrollToSlide(activeIndex);
  }, [activeIndex]);

  return (
    <div className="relative overflow-hidden">
      <div 
        ref={sliderRef} 
        className="flex space-x-4 overflow-x-auto snap-x snap-mandatory"
      >
        {speakers.map((speaker, index) => (
          <div 
            key={speaker.name} 
            className={`snap-center min-w-64 flex-shrink-0 p-6 ${index === activeIndex ? 'bg-gray-100' : ''}`} // Change highlight styles as needed
          >
            <img src={speaker.imageUrl} alt={speaker.name} className="rounded-md" />
            <h3 className="mt-2 text-lg font-semibold">{speaker.name}</h3>
            <p className="text-gray-600">{speaker.title}</p>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className="absolute left-0 top-1/2 -translate-y-1/2" onClick={handlePrev}>
        {/* Use SVG icons or similar */}
        <span className="text-2xl">&lt;</span> 
      </button>
      <button className="absolute right-0 top-1/2 -translate-y-1/2" onClick={handleNext}>
        <span className="text-2xl">&gt;</span> 
      </button>
    </div>
  );
}

export default SpeakerSlider;
