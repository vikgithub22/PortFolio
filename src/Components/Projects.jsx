import React from 'react';
import webFIt from '../assets/banner.png'
import Crypto from '../assets/blockchain.jpg'
import Rail from '../assets/announce.jpg'

const Projects = () => {
  const projectData = [
    {
      title: 'Web Fitness App',
      description: 'A fitness application built with React, featuring workout plans and progress tracking.',
      image: webFIt, // Replace with actual image URL
      github: 'https://github.com/vikgithub22/RailwayAnnouncement', // Replace with your GitHub link
    },
    {
      title: 'CryptoCurrency App',
      description: 'A cryptocurrency tracker app built with React, providing real-time data and insights.',
      image: Crypto, // Replace with actual image URL
      github: 'https://github.com/vikgithub22/CryptoCurrency', // Replace with your GitHub link
    },
    {
      title: 'Railway Announcement System',
      description: 'A Python-based system for automated railway announcements.',
      image: Rail, // Replace with actual image URL
      github: 'https://github.com/vikgithub22/RailwayAnnouncement', // Replace with your GitHub link
    },
  ];

  return (
    <div className="bg-gray-800 w-full text-white md:h-screen">
      <div className="max-w-6xl mx-auto py-16 px-5">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-8 mt-20 text-white border-b-2 border-white inline-block">
          Projects
        </h2>


        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                <p className="text-gray-300 mb-5">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
