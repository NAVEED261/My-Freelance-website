'use client';

import React, { useEffect, useState } from 'react';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/15d920a9-1526-476a-bd7d-eead73579497.webp",
    "/419c32d1-cef6-4a19-a08b-12af082142e6.webp",
    "/4ea81ea4-9090-4163-b5c9-ceebbb95e358.webp",
    "/712db9e4-2d0d-4c98-a9d7-637f517fc0d2.webp",
    "/e4009344-81ad-4da1-b56f-b65423049e42.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-container">
      <div className="hero-item">
        <img src={images[currentIndex]} alt="Sliding Images" />
      </div>

      <style jsx>{`
        .hero-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 500px; /* Adjust the height according to your preference */
          overflow: hidden;
          position: relative;
          padding-top: 60px; /* Add padding to ensure space for the fixed navbar */
        }
        .hero-item {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-style: preserve-3d;
          animation: slide 3s infinite;
        }
        .hero-item img {
          max-width: 90%; /* Adjust this value to make images smaller */
          max-height: 90%; /* Adjust this value to make images smaller */
          border-radius: 10px;
          transition: transform 0.6s, box-shadow 0.6s;
        }
        .hero-item img:hover {
          transform: translateZ(20px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
        }

        @keyframes slide {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          50% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
