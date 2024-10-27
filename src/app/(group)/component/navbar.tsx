"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header({ className }) { // Accept className as a prop
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <header className={className}> {/* Apply className to header */}
      <nav className="navbar">
        <div className="logo-container">
          {/* Logo on the Left Side */}
          <Link href="/">
            <img
              src="/images/Screenshot 2024-10-06 231809.png"
              alt="Fatima Zehra Logo"
              className="logo-img animated-logo" // Added class for animation
            />
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
          background-color: #004080; /* Dark blue background */
          padding: 20px 0; /* Padding for spacing */
          margin-top: 20px; /* Space from the top */
        }
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between; /* Space between logo, center, and menu */
          max-width: 1200px;
          margin: 0 auto; /* Center the navbar */
          width: 90%; /* Full width */
        }
        .logo-container {
          flex: 1; /* Logo on the left */
        }
        .logo-img {
          height: 60px; /* Adjust the size as needed */
          width: 60px; /* Adjust the size as needed */
          border-radius: 50%; /* Circular logo */
          transition: transform 0.6s ease; /* Animation transition */
        }
        .animated-logo:hover {
          transform: rotate(360deg); /* Rotate on hover */
        }
        .center-prayer {
          flex: 2; /* Center image */
          text-align: center; /* Center text */
        }
        .prayer-img {
          height: 80px; /* Adjust size of Bismillah image */
          width: auto;
        }
        .menu {
          flex: 1; /* Menu on the right */
          text-align: right; /* Align menu items to the right */
        }
        .menu ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          justify-content: flex-end; /* Align menu items to the right */
        }
        .menu ul li {
          margin-left: 20px; /* Space between items */
          background-color: white; /* White background for links */
          border-radius: 5px; /* Rounded corners */
          padding: 10px 15px; /* Padding for box appearance */
          transition: background-color 0.3s ease; /* Smooth transition */
        }
        .menu a {
          color: #004080; /* Dark blue text color */
          text-decoration: none; /* Remove underline */
        }
        .menu ul li:hover {
          background-color: #e2e8f0; /* Light grey on hover */
        }
        /* Dropdown Menu Styles */
        .dropdown-menu {
          position: absolute;
          background: #0056b3; /* Darker background for dropdown */
          padding: 10px;
          border-radius: 5px;
          display: flex;
          flex-direction: column; /* Stack dropdown items */
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow for dropdown */
          z-index: 10; /* Ensure dropdown is above other content */
        }
        .dropdown-menu li {
          margin: 5px 0; /* Space between dropdown items */
        }
        .dropdown-menu a {
          padding: 8px 15px; /* Padding for dropdown items */
          color: #ffffff; /* White text color */
        }
        .dropdown-menu a:hover {
          background-color: #0062cc; /* Change background on hover */
        }
      `}</style>
    </header>
  );
}
