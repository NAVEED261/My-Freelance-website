import React from 'react';

export default function ImpactStatistics() {
  const statistics = [
    { value: "5,000+", label: "Web Solutions Provided" },
    { value: "2,500+", label: "Businesses Automated" },
    { value: "1,200+", label: "Projects Successfully Completed" },
    { value: "4,500+", label: "Happy Clients" },
    { value: "150+", label: "Workshops and Webinars Conducted" },
    { value: "300+", label: "Trained Freelancers Now Working Worldwide" },
  ];

  return (
    <div className="statistics-container bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="stat-box bg-white text-center p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <h2 className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</h2>
            <p className="text-gray-700 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .stat-box {
          background-color: #ffffff;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .stat-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }
        .statistics-container {
          padding: 50px 0;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
