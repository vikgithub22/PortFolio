import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaLaptopCode, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: <Link to="/">Home</Link>,
      icon: <FaHome size={20} />
    },
    {
      id: 2,
      link: <Link to="/About">PortFolio</Link>,
      icon: <FaUser size={20} />
    }
  ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 bg-gradient-to-r from-gray-900 to-black text-white fixed shadow-md z-50'>
      <div className='text-3xl font-bold text-cyan-500'>
        Dev<span className='text-gray-300'>Hub</span>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, link, icon }) => (
          <li
            key={id}
            className='flex items-center gap-2 px-6 cursor-pointer capitalize font-medium text-gray-300 hover:text-cyan-500 hover:scale-110 duration-200'
          >
            {icon} {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-300'>
          {links.map(({ id, link, icon }) => (
            <li
              key={id}
              className='flex items-center gap-4 px-4 cursor-pointer capitalize py-6 text-4xl hover:text-cyan-500 duration-200'
            >
              {icon} {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
