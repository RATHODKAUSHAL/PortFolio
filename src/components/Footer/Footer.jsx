import React from 'react'
import Logo from '../../assets/Logo.png'
const Footer = () => {
  return (
    <div className='bg-black h-1/2 pb-20'>
      <div className='flex flex-col justify-center items-center'>
      <div>
      <a href="">
            <img className="h-28 transition-transform duration-300 ease-in-out transform hover:scale-110" src={Logo} alt="Logo" />
          </a>
      </div>
          <div className="flex justify-center mt-4 space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin text-white fa-xl transition transform  hover:scale-110"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github text-white fa-xl transition transform hover:scale-110"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter text-white fa-xl transition transform hover:scale-110"></i>
              </a>
            </div>
            <div className='text-xl text-white hover:text-blue-600 text-center pt-4'>
                @ 2024 All rights reserved by Kaushal Rathod
            </div>
      </div>
      
    </div>
  )
}

export default Footer
