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
    "/7536194c-5302-4179-94bd-16d62ed29eb9.webp",
    "/cartoon-ai-robot-scene_23-2151675051.avif",
    "/712db9e4-2d0d-4c98-a9d7-637f517fc0d2.webp",
    "/6a619cc0-509a-4d7c-bcf6-e3304bc5b366.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-container">
      <div className="hero-item">
        <img src={images[currentIndex]} alt="Sliding Images" />
        <div className="overlay">
          <h1 className="headline">Discover the Future of Web Development</h1>
          <p className="subtext">Innovation, Automation, and Design at Your Fingertips</p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>

      <style jsx>{`
        .hero-container {
          position: relative;
          height: 500px;
          background: linear-gradient(135deg, #1f2937, #3b82f6);
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 60px;
        }
        .hero-item {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-item img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 10px;
          transition: transform 0.6s, box-shadow 0.6s;
        }
        .hero-item img:hover {
          transform: translateZ(20px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
        }
        .overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
        }
        .headline {
          font-size: 3em;
          animation: fadeIn 2s ease-in-out;
        }
        .subtext {
          font-size: 1.5em;
          margin-top: 10px;
          animation: fadeIn 3s ease-in-out;
        }
        .cta-button {
          background-color: #2563eb;
          color: white;
          padding: 10px 20px;
          font-size: 1.2em;
          margin-top: 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .cta-button:hover {
          background-color: #1e40af;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
