import React from 'react';
import './Navbar.css'
import Logo from '../../assets/Logo.png'
import resume from '../../../public/kaushal_Rathod_React_Developer.pdf'

function Navbar() {
  return ( 
    <div className='fixed w-full z-50 shadow-2xl'>
      <nav className="flex justify-between items-center w-full h-20 bg-gradient-to-r from-black to-gray-800 px-10 shadow-md">
        {/* Left Section - Logo */}
        <div className="animate-fadeInLeft flex flex-row items-center">
          <a href="">
            <img className="h-24 transition-transform duration-300 ease-in-out transform hover:scale-110" src={Logo} alt="Logo" />
          </a>
          <a href='mailto:kaushal.rathod.dev1@gmail.com' className='text-white text-sm transition-transform duration-300 ease-in-out hover:text-blue-600 transform hover:scale-110 cursor-pointer'>kaushal.rathod.dev1@gmail.com</a>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex items-center gap-8 text-white">
            <a
              key="Home"
              href="/"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
            <a
              key="Work"
              href="#"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Work
            </a>
            <a
              key="Work"
              href=""
              className="about relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              About Me
            </a>
            <a
              key="Work"
              href="#"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Resume
            </a>
            <a
              key="Work"
              href="#"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </a>
            <a
              key="Work"
              href="#"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
        </div>

        {/* Right Section - Hire Me Button */}
        <div className="animate-fadeInRight">
          <a href="https://www.linkedin.com/in/kaushal-rathod-/" target="_blank" rel="noopener noreferrer">
            <a href={resume} target='_blank' className="bg-black text-white hover:bg-gray-800 font-medium rounded-md w-24 px-4 py-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
              Hire Me!
            </a>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
