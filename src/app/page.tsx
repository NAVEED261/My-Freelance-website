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
      <Header />

      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop playsInline className="background-video">
          <source src="/119195-716970703_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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

        /* Video Background */
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1; /* Behind the content */
        }

        .background-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .main-content {
          text-align: center;
          padding: 40px 20px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
          border-radius: 20px;
          margin: 40px auto;
          max-width: 1000px;
          z-index: 1;
          position: relative;
        }

        .main-content h1 {
          font-size: 3em;
          margin-bottom: 20px;
          color: #1e40af;
          font-weight: 700;
          letter-spacing: 1.5px;
          background: linear-gradient(to right, #3b82f6, #1e40af);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .main-description {
          font-size: 1.5em;
          color: #e2e8f0; /* Updated to a lighter color for better visibility */
          font-weight: 600;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 40px;
          margin-bottom: 40px;
          text-align: left;
        }

        .service-item {
          background-color: #f3f4f6;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          height: 220px; /* Set consistent height for all service boxes */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .service-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .service-item h2 {
          font-size: 1.8em;
          margin-bottom: 15px;
          color: #2563eb;
          font-weight: 600;
        }

        .cta-button {
          background-color: #2563eb;
          color: #ffffff;
          padding: 15px 30px;
          font-size: 1.4em;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
          font-weight: 600;
        }

        .cta-button:hover {
          background-color: #1e40af;
          transform: translateY(-5px);
        }

        @media (max-width: 768px) {
          .service-grid {
            grid-template-columns: 1fr;
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
