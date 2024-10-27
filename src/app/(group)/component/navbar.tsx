"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="logo-bismillah-container">
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

          {/* Bismillah Image in the Center */}
          <div className="center-prayer">
            <img
              src="/images/Screenshot 2024-10-08 135902.png"
              alt="Bismillah Calligraphy"
              className="prayer-img rounded-lg"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="solutions-menu"
            >
              <Link href="/solutions">Solutions</Link>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/solutions/automation">Automation</Link>
                  </li>
                  <li>
                    <Link href="/solutions/economics-research">Economics Research</Link>
                  </li>
                  <li>
                    <Link href="/solutions/full-stack-development">Full-Stack Development</Link>
                  </li>
                  <li>
                    <Link href="/solutions/gpt-expertise">GPT Expertise</Link>
                  </li>
                  <li>
                    <Link href="/solutions/mda">Malir Development Authority (MDA)</Link>
                  </li>
                  <li>
                    <Link href="/solutions/stenography">Stenography</Link>
                  </li>
                  <li>
                    <Link href="/solutions/ui-ux-design">UI/UX Design</Link>
                  </li>
                  <li>
                    <Link href="/solutions/web-development">Web Development</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        header {
          background-color: #1e3a8a;
          color: white;
          padding: 30px 60px; /* Increased padding */
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        nav {
          display: flex;
          align-items: center;
          justify-content: space-between; /* Space between logo and menu */
          max-width: 1400px; /* Set max width for the nav */
          margin: 0 auto;
          padding: 0 30px; /* Adjust padding for side spacing */
          width: calc(100% - 10rem); /* Ensure full width with margin */
        }
        .logo-bismillah-container {
          display: flex;
          align-items: center;
          justify-content: flex-start; /* Align logo and image properly to the left */
          flex: 2;
        }
        .logo {
          margin-right: 40px; /* Space between logo and image */
        }
        .logo-container {
          position: relative;
          display: inline-block;
          transition: transform 1s ease;
          animation: rotateLogo 8s infinite linear; /* Continuous rotation */
        }
        .logo-container:hover {
          animation: none; /* Stop rotation on hover */
        }
        .logo-img {
          height: 150px;
          width: 150px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
        }
        .center-prayer {
          text-align: center;
          margin-left: auto; /* Center the prayer image */
        }
        .prayer-img {
          height: 180px;
          object-fit: contain;
        }
        .menu {
          display: flex;
          justify-content: flex-end; /* Align menu items to the right */
          flex: 1;
        }
        .menu ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .menu ul li {
          margin-left: 5rem; /* Space between menu items */
          position: relative;
        }
        .menu ul li a {
          color: #f3f4f6;
          text-decoration: none;
          font-size: 1.5em; /* Font size increased */
          font-weight: bold;
          padding: 10px 20px; /* Padding increased */
          transition: color 0.3s ease, background-color 0.3s ease;
          border-radius: 8px; /* Rounded corners */
        }
        .dropdown-menu {
          display: flex;
          flex-direction: column; /* Make dropdown items align vertically */
          position: absolute;
          top: 100%;
          left: 0;
          background: #1f2937;
          list-style: none;
          padding: 10px 0;
          margin: 0;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          border-radius: 12px;
          width: 220px;
          z-index: 1000;
        }
        .dropdown-menu li {
          margin: 5px 0; /* Add space between dropdown items */
        }
        .dropdown-menu li a {
          display: block;
          padding: 10px 20px;
          color: #e2e8f0;
          text-decoration: none;
          font-size: 1.2em;
          transition: background-color 0.3s ease;
        }
        .dropdown-menu li a:hover {
          background-color: #2563eb;
          color: #ffffff;
        }

        /* Animation for logo rotation */
        @keyframes rotateLogo {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          nav {
            flex-direction: column; /* Stack items vertically on small screens */
            align-items: flex-start; /* Align left */
          }
          .menu ul {
            flex-direction: column; /* Stack links vertically on small screens */
            align-items: center; /* Center links */
          }
        }
      `}</style>
    </header>
  );
}
