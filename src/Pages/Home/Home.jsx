import React from 'react';
import boy_laptop from '../../../src/assets/boy_laptop.jpg';
import About from '../About/About';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Work from '../Work/Work';

const Home = () => {
  return (
    <section className="min-h-screen bg-gray-100  items-center pt-32">
      <div className="flex flex-col md:flex-row items-center md:justify-center p-10">
        
        {/* Left Section - Text */}
        <Fade left>
          <div className="md:w-1/2 mb-6 md:mb-0 flex flex-col text-center md:text-left relative md:left-20">
            <h1 className="text-4xl font-bold text-gray-800">I am Kaushal Rathod 👋</h1>
            <h2 className="text-5xl font-semibold mb-4 text-gray-700 animate-pulse">Full-Stack Developer</h2>
            <p className="text-xl mb-6 text-gray-600">
              From crafting efficient code to building seamless user experiences, I'm dedicated to creating powerful solutions that connect people and enhance their online interactions.
            </p>
            <div>
              <a href="your_resume_link.pdf">
                <button className="bg-black text-white hover:bg-gray-800 font-medium rounded-md w-48 py-2 transition transform hover:scale-105 duration-300">
                  Download Resume <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin text-black fa-xl transition transform hover:text-gray-700 hover:scale-110"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github text-black fa-xl transition transform hover:text-gray-700 hover:scale-110"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter text-black fa-xl transition transform hover:text-gray-700 hover:scale-110"></i>
              </a>
            </div>
          </div>
        </Fade>

        {/* Right Section - Image */}
        <Slide right>
          <div className="md:w-1/2 flex justify-center md:justify-end relative md:right-28">
            <img
              className="h-1/4 w-1/2 -rotate-3 hover:rotate-0 hover:border-gray-900 border-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              src={boy_laptop} 
              alt="Kaushal Rathod working on a laptop"
            />
          </div> 
        </Slide>
      </div>

      {/* "About" Section */}
      <Zoom>
        <About />
      </Zoom>
      <Zoom>
        <Work />
      </Zoom>

    </section>
  );
}

export default Home;
