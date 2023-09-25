import React, { useState, useEffect } from 'react';
import './style.css';

const CircularScrollIndicator = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrolledPercentage = Math.min(
        (scrollY / (documentHeight - windowHeight)) * 100,
        100
      );
      setScrollPercentage(scrolledPercentage);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className="circular-scroll-indicator">
      <div className="indicator">
        <svg viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="15.91549430918954"
            fill="transparent"
            stroke="#007bff"
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset={100 - scrollPercentage}
          />
        </svg>
      </div>
    </div>
  );
};

export default CircularScrollIndicator;
