"use client";
import HeroSection from './(group)/HeroSection/page';
import Header from './(group)/component/navbar';
import Footer from './(group)/component/footer';

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <main className="main-content">
        <h1>Welcome to Fatima Zehra StenoWeb Dynamics</h1>
        <p>Your Partner in Innovative Web Solutions and Automation Services</p>
        <div className="service-grid">
          <div className="service-item">
            <h2>Web Development</h2>
            <p>
              We create responsive, modern websites that help your business grow. From concept to launch, we've got you covered.
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
        <HeroSection />
      </main>
      <Footer />

      <style jsx>{`
        .home-container {
          background: linear-gradient(to right, #1f2937, #3b82f6);
          color: #ffffff;
          font-family: 'Montserrat', sans-serif;
          padding: 40px 20px;
          min-height: 100vh;
        }
        .main-content {
          text-align: center;
          padding: 60px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          border-radius: 20px;
          margin: 50px auto;
          max-width: 1000px;
        }
        .main-content h1 {
          font-size: 3.5em;
          margin-bottom: 25px;
          color: #0f172a;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          background: linear-gradient(to right, #3b82f6, #1e40af);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .main-content p {
          font-size: 1.6em;
          margin-bottom: 45px;
          color: #374151;
          line-height: 1.5;
        }
        .service-grid {
          display: flex;
          justify-content: space-between;
          margin-bottom: 50px;
        }
        .service-item {
          background-color: #f9fafb;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          width: 30%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-item:hover {
          transform: translateY(-12px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        .service-item h2 {
          font-size: 2em;
          margin-bottom: 18px;
          color: #2563eb;
          font-weight: 600;
        }
        .service-item p {
          font-size: 1.3em;
          color: #4b5563;
        }
        .cta-button {
          background-color: #2563eb;
          color: #ffffff;
          padding: 18px 36px;
          font-size: 1.6em;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
          font-weight: 600;
        }
        .cta-button:hover {
          background-color: #1e40af;
          transform: translateY(-7px);
        }
      `}</style>
    </div>
  );
}
