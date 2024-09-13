"use client";
import React from 'react';
import CountUp from 'react-countup';

export default function Statistics() {
  const stats = [
    { id: 1, title: "Enrolled students", count: 49659 },
    { id: 2, title: "Students Accommodated", count: 17650 },
    { id: 3, title: "Certified students", count: 4105 },
    { id: 4, title: "Internships Provided", count: 663 },
    { id: 5, title: "Success Stories", count: 993 },
  ];

  return (
    <div className="container mx-auto py-16 px-4 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map(stat => (
          <div key={stat.id} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
            <CountUp 
              start={0} 
              end={stat.count} 
              duration={2.5} 
              separator="," 
              className="text-4xl font-bold text-blue-600" 
              useEasing={true}
              decimals={0}
              onEnd={() => console.log('Counting finished!')}
              redraw={true} // Ensures it re-renders when the component is updated
            />
            <span className="text-4xl font-bold text-blue-600">+</span>
            <p className="mt-2 text-lg text-gray-700">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
