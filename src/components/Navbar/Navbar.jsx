import React, { useState } from 'react';
import './Navbar.css';
import resume from '../../../src/assets/kaushal_Rathod_React_Developer.pdf'

function Navbar() {
  const [isSelect, setIsSelect] = useState(null)
  const nav = [
    {
      index: "Home",
      link: "/",
    },
    {
      index: "Portfolio",
      link: "#portfolio"
    },
    {
      index: "About Me",
      link: "#about"
    },
    {
      index: "Resume",
      link: resume // Direct link to the resume PDF
    },
    {
      index: "Skills",
      link: "#skills"
    },
    {
      index: "Contact",
      link: "#contact"
    },
  ];

  return (
    <div className='fixed w-full z-50'>
      <nav className="flex justify-between items-center w-full h-20 bg-gray-100 px-10 shadow-md">
        <div className='flex flex-row gap-10'>
          {/* Left Section - Logo */}
        <div className="animate-fadeInLeft ml-20 flex flex-row gap-3 items-center">
          <a href="/">
            <h1 className='font-bold text-5xl text-[#078D84] border-t-2 border-4 border-[#078D84] rounded-full px-4 py-2'>K</h1>
          </a>
          {/* <a href='mailto:kaushal.rathod.dev1@gmail.com' className='text-sm transition-transform duration-300 ease-in-out hover:text-blue-600 transform hover:scale-110 cursor-pointer'>kaushal.rathod.dev1@gmail.com</a> */}
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex items-center gap-8">
          {
            nav.map((link, index) => (
              <a
              onClick={() => setIsSelect(index)}
                key={index}
                href={link.link}
                className={
                  `relative font-mono  ${isSelect === index ? 'text-[#078D84] underline': "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"}`
                }
                
              >
                {link.index}
              </a>
            ))
          }
        </div>
        </div>

        {/* Right Section - Hire Me Button */}
        <div className="animate-fadeInRight">
          <a href="https://www.linkedin.com/in/kaushal-rathod-/" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#078D84] text-white hover:bg-[#078d84ec] font-mono rounded-md w-24  py-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
              Hire Me!
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
