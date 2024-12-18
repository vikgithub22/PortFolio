import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Machine Learning Intern',
      description: 'Developed and optimized machine learning algorithms to improve predictive accuracy. Designed a data preprocessing pipeline to streamline data cleaning and enhance algorithm efficiency for predictive modeling projects.',
      duration: 'June 2022 - July 2022',
    },
    {
      title: 'UI/UX Developer Intern (Angular)',
      description: 'Currently working as a UI Developer, designing and optimizing user interfaces using modern web technologies to improve user experience and application performance.',
      duration: 'Nov 2024 - Curr',
    },
  ];

  return (
    <div className="bg-gray-800 w-full text-white md:h-screen">
      <div className="max-w-6xl mx-auto py-24 px-4">
        <h1 className="text-4xl font-bold mb-8 text-white border-b-2 border-white inline-block">Experience</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold mb-2 text-cyan-400">{experience.title}</h2>
              <p className="text-gray-300 mb-4">{experience.description}</p>
              <p className="text-sm text-gray-400 italic">{experience.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
