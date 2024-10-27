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
        /* Your existing CSS styles here */
      `}</style>
    </header>
  );
}
