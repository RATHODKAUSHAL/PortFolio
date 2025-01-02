import React from 'react'
const Footer = () => {
  return (
    <div className='bg-white h-1/2 pb-20'>
      <div className='flex flex-col justify-center items-center'>
      <div className='p-10'>
      <a href="/">
            <h1 className='font-bold text-5xl text-[#078D84] border-t-2 border-4 border-[#078D84] rounded-full px-4 py-2'>K</h1>
          </a>
      </div>
      <div>
        <pre className='text-xl'>I’m Kaushal Rathod - a FullStack developer.
          Thanks for checking out my site!</pre>
      </div>
          <div className="flex justify-center mt-4 space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin fa-xl transition transform  hover:scale-110"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github fa-xl transition transform hover:scale-110"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter fa-xl transition transform hover:scale-110"></i>
              </a>
            </div>
            <div className='text-xl text-center pt-4'>
                @ 2024 All rights reserved by Kaushal Rathod
            </div>
      </div>
      
    </div>
  )
}

export default Footer
