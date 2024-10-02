"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <header>
      <nav>
        {/* Logo on the Left Side */}
        <div className="logo">
          <Link href="/">
            <img
              src="/33b8eb36-7cee-4fcd-8875-33bdba455ba5.webp"
              alt="Fatima Zehra Logo"
              className="logo-img"
            />
          </Link>
        </div>

        {/* Centered Prayer Image */}
        <div className="center-prayer">
          <img
            src="/bismillah-calligraphy-vector-meaning-gold-600nw-2003130938.webp"
            alt="Bismillah Calligraphy"
            className="prayer-img"
          />
        </div>

        {/* Navigation Links on the Right Side */}
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link href="/">Home</Link>
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
                    <Link href="/solutions/web-development">Web Development</Link>
                  </li>
                  <li>
                    <Link href="/solutions/ui-ux-design">UI/UX Design</Link>
                  </li>
                  <li>
                    <Link href="/solutions/automation">Automation Solutions</Link>
                  </li>
                  <li>
                    <Link href="/solutions/full-stack-development">
                      Full-Stack Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/gpt-expertise">GPT Expertise</Link>
                  </li>
                  <li>
                    <Link href="/solutions/stenography">Stenography</Link>
                  </li>
                  <li>
                    <Link href="/solutions/economics-research">Economics Research</Link>
                  </li>
                  <li>
                    <Link href="/solutions/mda">Malir Development Authority</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <style jsx>{`
        header {
          background-color: #1e3a8a;
          color: white;
          padding: 20px 40px;
          margin: 20px;
          border-radius: 50px; /* Circle-like shape for the navbar */
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          position: sticky;
          top: 0;
          width: calc(100% - 40px); /* Adjust width for margin */
          z-index: 1000;
        }
        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
        }
        .logo {
          flex: 1;
          display: flex;
          justify-content: flex-start;
        }
        .logo-img {
          height: 100px; /* Increased logo height */
          cursor: pointer;
        }
        .center-prayer {
          flex: 1.5; /* Giving more space to the prayer image */
          text-align: center;
        }
        .prayer-img {
          width: 100%; /* Significantly increased the width */
          max-width: 700px; /* Limit the maximum width to keep it under control */
          object-fit: contain;
        }
        .menu {
          display: flex;
          justify-content: flex-end;
          flex: 1;
        }
        .menu ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .menu ul li {
          margin-left: 40px;
          position: relative;
        }
        .menu ul li a {
          color: #f3f4f6;
          text-decoration: none;
          font-size: 1.8em; /* Larger font size for better visibility */
          font-weight: bold;
          padding: 20px 25px; /* Increased padding for a larger clickable area */
          transition: background-color 0.3s ease, color 0.3s ease;
          border-radius: 12px;
        }
        .menu ul li a:hover {
          background-color: #2563eb;
          color: #ffffff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #1f2937;
          list-style: none;
          padding: 10px 0;
          margin: 0;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          border-radius: 12px;
          width: 250px; /* Increased dropdown menu width */
        }
        .dropdown-menu li {
          margin: 0;
        }
        .dropdown-menu li a {
          display: block;
          padding: 15px 25px; /* Increased padding for dropdown items */
          color: #e2e8f0;
          text-decoration: none;
          font-size: 1.4em; /* Larger dropdown text */
          transition: background-color 0.3s ease;
        }
        .dropdown-menu li a:hover {
          background-color: #2563eb;
          color: #ffffff;
          border-radius: 5px;
        }
        .solutions-menu:hover .dropdown-menu {
          display: block;
        }
        .menu-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
        }
        .menu-toggle span {
          background: #e2e8f0;
          border-radius: 2px;
          height: 4px;
          margin: 4px 0;
          width: 30px;
        }
        @media (max-width: 768px) {
          .menu {
            display: ${isOpen ? "flex" : "none"};
            flex-direction: column;
            position: absolute;
            top: 100px;
            right: 0;
            width: 100%;
            background-color: #1e3a8a;
            padding: 20px 0;
            z-index: 999;
          }
          .menu ul {
            flex-direction: column;
            align-items: center;
          }
          .menu ul li {
            margin: 15px 0;
          }
          .menu-toggle {
            display: flex;
          }
          .center-prayer {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
