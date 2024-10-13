"use client";  // Add this line at the top

import Link from 'next/link';
import Image from 'next/image';

export default function Source() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 lg:px-24">
        {/* Logo on the Left Side */}
        <div className="logo">
          <Link href="/">
            <div className="logo-container">
              <img
                src="/images/Screenshot 2024-10-06 231809.png"
                alt="Fatima Zehra Logo"
                className="logo-img"
              />
              <span className="decorator decorator-1"></span>
              <span className="decorator decorator-2"></span>
            </div>
          </Link>
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get to Know Fatima Zehra StenoWeb Dynamics
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            At **Fatima Zehra StenoWeb Dynamics** (FZSWD), we are committed to empowering the youth by providing comprehensive training in modern IT skills, web development, and automation technologies. Our aim is to bridge the skill gap, giving every individual the chance to excel in the digital world.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our specially structured courses are designed to equip you with in-demand skills, ranging from **web development** and **full-stack solutions** to **automation** and **AI-driven technologies**. Whether you are starting your journey in tech or looking to advance your current skills, FZSWD is here to guide you at every step.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            By joining hands with **Fatima Zehra StenoWeb Dynamics**, you all not only learn valuable skills but also gain the confidence and competitive edge needed to thrive in a rapidly evolving digital landscape. We believe in the **potential of our youth**, and together, we aim to create equal opportunities for everyone.
          </p>
          <Link href="/about" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
            Learn More About Us
          </Link>
          
         {/* Signature Image */}
         <div className="signature mt-8">
            <img
              src="/images/Screenshot 2024-10-07 004729.png"
              alt="H. Naveed Signature"
              className="signature-img"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-container {
          position: relative;
        }
        .logo-img {
          height: 120px;
          width: auto;
          border-radius: 50%;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
        }
        .logo-container:hover .logo-img {
          transform: rotate(360deg);
        }
        .decorator {
          position: absolute;
          border-radius: 50%;
          width: 140px;
          height: 140px;
          border: 3px solid #2563eb;
          animation: spin 10s linear infinite;
        }
        .decorator-1 {
          top: -15px;
          left: -15px;
          border-color: #2563eb;
        }
        .decorator-2 {
          bottom: -15px;
          right: -15px;
          border-color: #ffb703;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .signature-img {
          height: 80px; /* Adjust the size of the signature as needed */
          width: auto;
        }
      `}</style>
    </div>
  );
}
