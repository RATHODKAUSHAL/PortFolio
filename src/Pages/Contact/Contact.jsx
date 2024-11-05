import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center py-12 px-6">
      {/* Heading */}
      <h1 className="text-center text-gray-100 text-5xl font-bold mb-12 animate__animated animate__fadeIn">
        Contact Me
      </h1>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-4xl">
        
        {/* Contact Information Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full md:w-1/2 text-gray-100">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6 text-gray-300">
            Feel free to reach out via email or phone. I’m always open to discussing new projects or opportunities.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Email:</h3>
              <p className="text-gray-400">
              kaushal.rathod.dev1@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone:</h3>
              <p className="text-gray-400">+91 8401641101</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Location:</h3>
              <p className="text-gray-400">Ahmedabad, india</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full md:w-1/2 text-gray-100">
          <h2 className="text-3xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 bg-gray-700 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 py-2 rounded-md font-semibold text-gray-100"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
