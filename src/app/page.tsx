"use client";
import React from 'react';
import Link from 'next/link';
import HeroSection from './(group)/HeroSection/page';
import Header from './(group)/component/navbar';
import Footer from './(group)/component/footer';
import Statistics from './(group)/statistics/page';
import Source from './(group)/source/page';

export default function Home() {
  return (
    <div className="home-container">
      <Header className="navbar" /> {/* Ensure Header accepts className prop */}

      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop playsInline className="background-video">
          <source src="/119195-716970703_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text visibility */}
        <div className="video-overlay"></div>
      </div>

      <main className="main-content">
        <HeroSection />
        <h1><br/><hr/>
          Welcome to Fatima Zehra StenoWeb Dynamics
        </h1>
        <p className="main-description text-color blue-900">Your Partner in Innovative Web Solutions and Automation Services</p>

        {/* Service Grid */}
        <div className="service-grid">
          {services.map((service, index) => (
            <Link key={service.title} href={service.link} passHref>
              <div className="service-item">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Statistics />
      <Source />
      <Footer />

      <style jsx>{`
        .home-container {
          position: relative;
          color: #0f172a;
          font-family: 'Montserrat', sans-serif;
          min-height: 100vh;
          overflow: hidden;
        }

        /* Video Background Styles */
        .video-background {
          position: fixed; /* Changed to fixed for full coverage */
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          z-index: -1;
        }

        .background-video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          z-index: -1;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1); /* Very light overlay */
          z-index: 0;
        }

        .main-content {
          text-align: center;
          padding: 20px; /* Adjusted padding */
          background: rgba(255, 255, 255, 0.85); /* Made more transparent */
          backdrop-filter: blur(10px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
          border-radius: 30px;
          margin: 60px auto;
          max-width: 1200px;
          z-index: 1;
          position: relative;
        }

        .main-content h1 {
          font-size: 3.5em;
          margin-bottom: 25px;
          background: linear-gradient(45deg, #2563eb, #1e40af);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          letter-spacing: 2px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .main-description {
          font-size: 1.8em;
          color: #334155;
          font-weight: 700;
          margin-bottom: 40px;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px; /* Adjusted gap */
          margin: 20px; /* Adjusted margin */
        }

        .service-item {
          background: rgba(255, 255, 255, 0.9);
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .service-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.95);
        }

        .service-item h2 {
          font-size: 1.8em;
          margin-bottom: 15px;
          color: #1e40af;
          font-weight: 700;
        }

        .service-item p {
          color: #475569;
          line-height: 1.6;
          flex-grow: 1; /* Allows description to take remaining space */
        }

        /* Updated Navbar Styles */
        .navbar {
          width: calc(100% - 10rem); /* Adjusted for outer spacing */
          margin: 2.5rem auto; /* Space from the top */
          padding: 1.5rem 2rem; /* Increased padding for larger size */
          border-radius: 25px; /* Rounded corners */
          background: rgba(255, 255, 255, 0.95); /* Background color */
          backdrop-filter: blur(10px); /* Background blur effect */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Shadow for depth */
          position: sticky; /* Sticks to the top */
          top: 20px; /* Distance from the top */
          z-index: 100; /* Keep above other content */
          transition: all 0.3s ease; /* Smooth transition */
        }

        /* Adjusting the navbar items */
        .navbar ul {
          display: flex; /* Flexbox for horizontal layout */
          justify-content: space-between; /* Evenly space items */
          list-style: none; /* Remove default list style */
          padding: 0; /* Remove padding */
          margin: 0; /* Remove margin */
        }

        /* Increase size and padding of navbar links */
        .navbar a {
          padding: 15px 20px; /* Increased padding */
          font-size: 1.2em; /* Larger font size */
          color: #0f172a; /* Text color */
          text-decoration: none; /* Remove underline */
        }

        /* Hover effect for links */
        .navbar a:hover {
          background-color: rgba(255, 255, 255, 0.8); /* Light background on hover */
          border-radius: 15px; /* Rounded corners on hover */
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .navbar {
            width: calc(100% - 8rem);
            padding: 1.5rem 2rem;
          }

          .main-content h1 {
            font-size: 3em;
          }

          .service-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .navbar {
            width: calc(100% - 5rem);
            border-radius: 25px;
          }

          .main-content {
            margin: 30px auto;
            padding: 30px 20px;
          }

          .service-grid {
            grid-template-columns: 1fr;
            margin: 30px 10px;
          }

          .background-video {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            width: calc(100% - 1rem);
            padding: 0.8rem 1rem;
            margin: 1rem auto;
          }

          .main-content h1 {
            font-size: 2.2em;
          }

          .main-description {
            font-size: 1.4em;
          }

          .service-item {
            padding: 20px;
            height: auto;
            min-height: 200px;
          }
        }
      `}</style>
    </div>
  );
}

const services = [
  {
    title: 'Web Development',
    description: 'We create responsive, modern websites that help your business grow. From concept to launch, we\'ve got you covered.',
    link: '/solutions/web-development',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting visually appealing and user-friendly interfaces that deliver a seamless experience to your users.',
    link: '/solutions/ui-ux-design',
  },
  {
    title: 'Automation Services',
    description: 'Streamlining your business processes with custom automation solutions using tools like Google Sheets and Zapier.',
    link: '/solutions/automation',
  },
  {
    title: 'Full-Stack Development',
    description: 'Comprehensive full-stack solutions using the latest technologies for end-to-end development.',
    link: '/solutions/full-stack-development',
  },
  {
    title: 'GPT Expertise',
    description: 'Leveraging the power of GPT models for creating advanced AI-driven solutions tailored to your business needs.',
    link: '/solutions/gpt-expertise',
  },
  {
    title: 'Stenography',
    description: 'Providing stenography solutions for swift and efficient documentation, tailored to your specific requirements.',
    link: '/solutions/stenography',
  },
  {
    title: 'Economics Research',
    description: 'In-depth economic research and analysis to help businesses make informed decisions. From market trends to policy impact assessments, we\'ve got you covered.',
    link: '/solutions/economics-research',
  },
  {
    title: 'Malir Development Authority (MDA) Documentation',
    description: 'Comprehensive documentation services for all public housing schemes under Malir Development Authority, including allotment, transfer, mutation, and more.',
    link: '/solutions/mda',
  },
];
