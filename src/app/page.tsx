"use client";
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
        <h1>Welcome to Fatima Zehra StenoWeb Dynamics</h1>
        <p>Your Partner in Innovative Web Solutions and Automation Services</p>
        <div className="service-grid">
          <div className="service-item">
            <h2>Web Development</h2>
            <p>
              We create responsive, modern websites that help your business grow. From concept to launch, weve got you covered.
            </p>
          </div>
          <div className="service-item">
            <h2>UI/UX Design</h2>
            <p>
              Crafting visually appealing and user-friendly interfaces that deliver a seamless experience to your users.
            </p>
          </div>
          <div className="service-item">
            <h2>Automation Services</h2>
            <p>
              Streamlining your business processes with custom automation solutions using tools like Google Sheets and Zapier.
            </p>
          </div>
        </div>
        <button className="cta-button">Get in Touch</button>
      </main>
      <Statistics />
      <Source />
      <Footer />

      <style jsx>{`
        .home-container {
          position: relative;
          color: #ffffff;
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
          padding: 20px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          border-radius: 20px;
          margin: 20px auto;
          max-width: 1000px;
          z-index: 1;
          position: relative;
        }

        .main-content h1 {
          font-size: 2.5em;
          margin-bottom: 15px;
          color: #0f172a;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          background: linear-gradient(to right, #3b82f6, #1e40af);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .service-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }

        @media (min-width: 768px) {
          .service-grid {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .service-item {
          background-color: #f9fafb;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .service-item h2 {
          font-size: 1.8em;
          margin-bottom: 12px;
          color: #2563eb;
          font-weight: 600;
        }

        .cta-button {
          background-color: #2563eb;
          color: #ffffff;
          padding: 15px 30px;
          font-size: 1.4em;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
          font-weight: 600;
        }

        .cta-button:hover {
          background-color: #1e40af;
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}
