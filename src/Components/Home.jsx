import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import logo from '../assets/vecteezy_software-engineer-png-graphic-clipart-design_20962986.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-700 overflow-hidden relative">
      {/* Animated background elements using Framer Motion */}
      <motion.div
        className="absolute inset-0 z-0 bg-transparent"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.div
          className="absolute top-10 left-1/2 transform -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"
          animate={{ y: [0, 200, 0], x: [0, 100, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-r from-yellow-700 to-orange-600 rounded-full"
          animate={{ y: [0, -150, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-1/4 w-52 h-52 sm:w-72 sm:h-72 bg-gradient-to-l from-pink-700 to-purple-500 rounded-full"
          animate={{ x: [0, -200, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row relative z-10">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h3 className="text-lg sm:text-4xl font-semibold text-white">
            Hello! I'm Vikrant
          </h3>
          <h4 className="text-sm sm:text-2xl font-semibold text-cyan-500">
            A Software Developer
          </h4>
          <p className="text-white py-1 max-w-md text-sm sm:text-base">
            Hi, I'm a dedicated developer with a strong foundation in front-end and back-end technologies.
            I specialize in creating user-friendly web applications using modern tools and frameworks.
            I am passionate about learning new technologies, solving complex problems, and delivering impactful digital experiences.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transform transition duration-300">
              <Link to="/About">Portfolio</Link>
              <span className="group-hover:rotate-90 duration-300 mt-1">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="mt-8 sm:mt-10">
          <img src={logo} alt="logo" className="z-10 w-40 h-40 sm:w-60 sm:h-60 mx-auto rounded-2xl transform transition-all hover:scale-110 duration-500" />
        </div>
      </div>
    </div>
  );
};

export default Home;
