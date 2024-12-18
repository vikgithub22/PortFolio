import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt,FaJava,FaAngular,FaPython,FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiJavascript } from 'react-icons/si';
import Abt from '../assets/sde.webp'
import Projects from './Projects';
import Experience from './Experience';

const About = () => {
  return (
    <div className="w-full h-screen bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-10 py-20 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Information and Skills Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2 mt-16 text-green-500 border-b-2 border-green-500 inline-block">About Me</h1>
          <p className="text-lg leading-relaxed mb-8">
            Hello! I'm Vikrant, a passionate Software Developer with expertise in front-end and back-end technologies. I love creating responsive and user-friendly web applications using modern frameworks like React, JavaScript, and Node.js. With a Bachelor's degree in Information Technology (2024), I thrive on solving complex problems, learning emerging technologies, and delivering exceptional digital experiences.
          </p>

          <h2 className="text-2xl font-bold mb-2 text-yellow-500">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'ReactJs', icon: <FaReact className="text-blue-500 text-xl" /> },
              { name: 'Java', icon: <FaJava className="text-[#f89820] text-xl" /> },
              { name: 'Angular', icon: <FaAngular className="text-[#dd0031] text-xl" /> },
              { name: 'Python', icon: <FaPython className="text-[#306998] text-xl" /> },
              { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500 text-xl" /> },
              { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-xl" /> },
              { name: 'CSS', icon: <FaCss3Alt className="text-blue-400 text-xl" /> },
              { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400 text-xl" /> },
              { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-xl" /> },
              { name: 'Express.js', icon: <SiExpress className="text-gray-400 text-xl" /> },
              { name: 'SQL', icon: <FaDatabase className="text-green-500 text-xl" /> },
              { name: 'Git', icon: <FaGitAlt className="text-red-500 text-xl" /> },
            ].map((skill, index) => (
              <span
                key={index}
                className="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg shadow-md text-sm border border-gray-700 cursor-pointer hover:bg-slate-600 hover:scale-105 transition duration-300"
              >
                {skill.icon}
                #{skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center mt-20">
          <img
            src={Abt}
            alt="Portfolio"
            className="w-96 h-96 object-cover"
          />
        </div>
      </div>
      <Projects/>
      <Experience/>
    </div>
  );
};

export default About;
